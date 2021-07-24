// ES6

// let, const
// arrow function

const sum = (a, b) => a + b; 

let esta_es_la_suma = sum(3, 4);
// console.log(esta_es_la_suma);


// spread operator (...)

let arr1 = ['jp', 'edwin', 'adry'];
let arr2 = ['beto', 'lalo', 'jimena'];

// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1, ...arr2];


let obj1 = {
  name: 'jp'
};
let obj2 = {
  nationality: 'Mexicano'
};

// let obj3 = Object.assign({}, obj1, obj2);
let obj3 = { ...obj1, ...obj2 };

// console.log(obj3)


// destructuring

let user = {
  name_of_the_user: 'jp',
  id: 1,
  nationality: 'Mexicano',
  age: 23,
  vip: false
};

// let { name_of_the_user: name, id, nationality, age, hola = 'Por si acaso' } = user;
let h1 = document.getElementById('title');



let insterests = ['play', ['read', 'code']];

// rest

// let [value1, ...rest] = insterests;
// let { name_of_the_user: name, ...rest } = user;


let users = []

users.push({
  username: 'Lalo',
  gender: 'M'
});
users.push({
  username: 'jp',
  gender: 'M',
  address: {
    zip: 80000,
    street: 'main',
    numbers: {
      int: 1,
      ext: 123
    }
  }
});
users.push({
  username: 'Adry',
  gender: 'F'
});
users.push({
  username: 'Jimena',
  gender: 'F'
});

let [, { username, gender, address: { numbers: { int, ext } } }] = users;
h1.innerText = name;


// forEach

let nums = [1,2,3,4,5,6,7,8];

// for (let num of nums) { console.log(num) };

// let empty_arr = [];

// nums.forEach((item, i) => {
//   nums[i] = item * 2;
// })


// map

let map_arr_times_2 = nums.map((item, i) => item * 2)


// ternary
let { vip } = user;
let ternary = vip ? 'puedes entrar al club' : 'No puedes entrar al club';


// filter

let filter_arr = users.filter((user, i) => user.gender === 'F');
console.log(filter_arr);


// find

let find_arr = users.find((user) => user.gender === 'F');
console.log(find_arr);

