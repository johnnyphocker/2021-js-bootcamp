// let wrapper = document.querySelector('#wrapper')
// let btn = document.querySelector('#btn')
// let alert = document.querySelector('[data-alert="primary"]')

// alert.style.display = 'none';

// btn.addEventListener('click', () => {
//   alert.style.display = 'block';
//   setTimeout(() => {
//     alert.style.display = 'none';
//   }, 2000);
// });

// btn.onclick = () => {
//   console.log('Presionado usando evento onclick');
// };

feather.replace();


let card_wrapper = document.querySelector('#card-wrapper');
let total = document.querySelector('#total');

let name = document.querySelector('#name');
let price = document.querySelector('#price');
let url = document.querySelector('#url');
let category = document.querySelector('#category');

let validation = document.querySelector('#validation');
let submit = document.querySelector('#submit');

let products = [];
let total_value = 0;

class Product {
  constructor(name, price, url, category) {
    this.name = name;
    this.price = price;
    this.url = url;
    this.category = category;
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();

  // Hacer validaciones sobre los campos
  if(!name.value.length || !price.value.length || !url.value.length || !category.value.length) {
    validation.style.display = 'block';
    return;
  };

  // products.push('hola mundo');
  products = [...products, new Product(name.value, parseFloat(price.value), url.value, category.value)];
  name.value = '', price.value = '', url.value = '', category.value = '';
  generateProducts();
  total.innerText = total_value;
});

const generateProducts = () => {
  card_wrapper.innerHTML = '';
  products.forEach((product) => {
    total_value += product.price
    card_wrapper.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card mt-4">
          <div class="h-12 overflow-hidden d-flex justify-content-center align-items-center rounded-top position-relativa">
            <span class="badge bg-danger position-absolute top-15 left-15">${product.category}</span>
            <img src="${product.url}" class="card-img-top" alt="...">
          </div>
          <div class="card-body d-grid">
            <p class="card-text">${product.name}</p>
            <h5 class="card-title fw-bold">${product.price}</h5>
          </div>
        </div>
      </div>
    `
  });
};

// const product = document.querySelector('[name="product"]').value;
// const cost = document.querySelector('[name="cost"]').value;
// const url = document.querySelector('[name="url"]').value;
// const category = document.querySelector('[name="category"]').value;
// const hasValue = [product, cost, url, category].every(value => value);
// if (hasValue) {
//   addProducts({ product, cost, url, category });
// }