import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Item = () => {

  useEffect(() => {
    return () => {
      console.log('Se va a desmontar el componente');
    }
  }, []);

  return (
    <div>Elemento desmontable</div>
  )
};

const Effect = () => {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [flag, setFlag] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => { //test
    // se actualiza el useEffect cuando
    // se monta el componente - componentDidMount
    console.log('Desde useEffect - componentDidMount')
    // se actualiza el componente - componentDidUpdate
    console.log('Desde useEffect - componentDidUpdate')
    // se va a desmontar el componente - componentWillUnmount
    return () => {
      console.log('Se va a desmontar el componente');
    }
  }, []); // (callback, array de dependencias)

  useEffect(() => { //api
    getNews(); //cuando se monta el componente
  }, []);

  const getNews = () => {
    let config = {
      headers: { "Content-Type": "text/json" },
      mode: "no-cors",
    }
    fetch('https://lineadirectaportal.com/a/plantillas/p/linea-directa/endpoints/noticias.asp', config)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err.message))
  }

  const handleClick1 = () => setCounter1(counter1 + 1);
  const handleClick2 = () => setCounter2(counter2 + 1);
  const handleClick3 = () => setFlag(!flag);

  return (
    <div>
      <p>Counter1 { counter1 }</p>
      <p>Counter2 { counter2 }</p>
      { flag && <Item /> }
      {
        users.map((user, i) => {
          return <p key={i}>{user.name}</p>
        })
      }
      <button onClick={handleClick1}>click 1</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={handleClick3}>click 3</button>
    </div>
  )
}

export default Effect;