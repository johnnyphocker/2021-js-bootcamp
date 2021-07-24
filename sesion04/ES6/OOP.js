// Programación Orientada a Objetos

// classes son objetos

// let card = { // no es una class
//   id: 1,
//   money: 5,
//   charge: () => {
    
//   }
// }

class Card { // PascalCase
  constructor (money = 0) {
    this.id = Date.now() + Math.random();
    this.money = money;
    this.type = 'Metrobus';
  }
  recharge = (money = 0) => {
    this.money += money;
  }
  validate = (type, money) => {
    if (type === this.type && this.money >= money) {
      this.money -= money;
      console.log('Puedes entrar');
    } else {
      console.log('Acceso denegado');
    }
  }
};

let cards = [];
// card es una instancia de la clase Card
// una instancia es una copia de un clase

let btn_card = document.getElementById('button');
let container = document.getElementById('container');

btn_card.addEventListener('click', () => {
  cards.push(new Card(16));
  drawCards();
  console.log(cards)
});

const drawCards = () => {
  container.innerHTML = '';
  cards.forEach(item => {
    container.innerHTML += `
      <div style='background: red; display: flex; justify-content: center; align-items: center; color: white; height: 50px; margin-right: 10px; padding: 8px'>
        ${item.id}
      </div>
    `;
  });
};

class Interests {
  constructor (hobbies) {
    this.hobbies = hobbies;
  }
};

// Herencia -> classes pueden agarrar propiedades y métodos
// de otras classes
class User extends Interests {
  constructor (name, age, hobbies) {
    super();
    this.name = name;
    this.age = age;
    this.hobbies = hobbies
  }
};


let user1 = new User('JP', 23, ['code', 'play', 'read']);