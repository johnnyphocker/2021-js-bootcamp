let table = document.querySelector('#table');
let name = document.querySelector('#name');
let birthday = document.querySelector('#birthday');
let reason = document.querySelector('#reason');
let date = document.querySelector('#date');
let submit = document.querySelector('#submit');


let appointments = [];

class Appointment {
  constructor(name, birthday,reason, date) {
    this.name = name;
    this.birthday = birthday;
    this.reason = reason;
    this.date = date;
  }
};


submit.onclick = (event) => {
  // event.preventDefault();
  appointments = [
    ...appointments,
    new Appointment(name.value, birthday.value, reason.value, date.value)
  ];
  localStorage.setItem('appointments', JSON.stringify(appointments));
  render_table();
};

const render_table = () => {
  let rows = '';
  table.innerHTML = '';
  appointments = JSON.parse(localStorage.getItem('appointments'));
  appointments.forEach((row, i) => {
    rows += `
      <tr>
        <td>${row.name}</td>
        <td>${row.birthday}</td>
        <td>${row.reason}</td>
        <td>${row.date}</td>
      </tr>
    `;
  });
  table.innerHTML = `
    <table class="u-full-width">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de nacimiento</th>
          <th>Motivo</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

render_table();