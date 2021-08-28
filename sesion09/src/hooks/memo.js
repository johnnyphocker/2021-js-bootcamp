import React, { useState, useMemo } from 'react'

const List = ({ list, log }) => {
  console.log(list, log);
  return (
    <ul>
      {
        list.map((item, i) => <li key={i}>{item}</li>)
      }
    </ul>
  )
};

const Memo = () => {

  const [click, setClick] = useState(0);

  const MemoList = useMemo(() => {
    //regresar el valor que queremos que sea memorizado en esta constante
    return <List list={[1,2,3,4,5,6]} log='memorizado' />
  }, []) // añadir 'click' dentro de la instancia si queremos que actúe
  return (
    <div>
      <button onClick={() => setClick(click + 1)}>Click {click}</button>
      <List log='normal' list={['uva', 'manzana', 'naranja']} />
      { MemoList }
    </div>
  )
}

export default Memo;