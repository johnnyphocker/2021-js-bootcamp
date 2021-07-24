let img = document.getElementById('img');
let pokename = document.getElementById('pokename');
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let info = document.getElementById('info');

const getPokemon = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      img.src = data.sprites.front_default;
      pokename.innerText = data.name;
      info.innerHTML = `
        <h2>Info</h2>
        <p>Este pokemon se encuentra en.....</p>
      `;
    })
    .catch(err => console.error(err.message))
};

btn.addEventListener('click', () => {
  if (input.value.length) {
    getPokemon(input.value);
  };
});
