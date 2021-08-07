// let progress_bar = document.getElementById('progress-bar');
// let info = document.getElementById('info');
// let success = document.getElementById('success');
// let warning = document.getElementById('warning');
// let danger = document.getElementById('danger');
// let progress_container = document.getElementById('progress-container');

// let progress = 0;

// let interval = setInterval(() => {
//   if (progress <= 100) {
//     progress_container.innerHTML = `
//       <progress
//         class="progress is-danger"
//         value="${progress}"
//         max="100">${progress}%</progress>
//     `
//     progress += 1; 
//   } else {
//     clearInterval(interval);
//   }
// }, 10);

// info.onclick = () => {
//   progress_bar.classList.remove('is-link', 'is-success', 'is-warning', 'is-danger')
//   progress_bar.classList.add('is-info')
// };
// success.onclick = () => progress_bar.classList.toggle('is-success');
// warning.onclick = () => progress_bar.classList.toggle('is-warning');
// danger.onclick = () => progress_bar.classList.toggle('is-danger');

let users_container = document.getElementById('users-container');
let user_container = document.getElementById('user-container');
let posts_container = document.getElementById('posts-container');

const fetch_users = async () => {
  try {
    users_container.innerHTML = '';
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    
    data.forEach((user, i) => {
      users_container.innerHTML += `
        <a className="block" href="/bulma/usuario.html?id=${user.id}">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>${user.name}</strong> <small>${user.email}</small>
                    <br>
                    ${user.phone}.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </a>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

const fetch_user = async (id) => {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await res.json();
    user_container.innerHTML = `
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${data.name}</p>
              <p class="subtitle is-6">${data.email}</p>
            </div>
          </div>
      
          <div class="content">
            <p>${data.phone}</p>
            <p>${data.website}</p>
            <a href="/bulma/posts.html?id=${data.id}">Ver posts</a>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    console.log(err);
  }
};

const fetch_posts = async (id) => {
  try {
    posts_container.innerHTML = '';
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    let data = await res.json();
    
    data.forEach((post, i) => {
      posts_container.innerHTML += `
        <a className="block" href="/bulma/post.html?id=${post.id}">
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <h2>${post.title}</h2>
                  <p>
                    ${post.body}.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </a>
      `;
    });

    console.log(window)
  } catch (err) {
    console.log(err);
  }
};

const create_post = async (post) => {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

create_post({ title: 'Título hardcodeado', body: 'Una prueba de creación de post', userId: 2});

if (window.location.href === 'http://localhost:5500/bulma/usuarios.html') {
  fetch_users();
} else if (window.location.href.startsWith('http://localhost:5500/bulma/usuario.html')) {
  fetch_user(window.location.search.slice(4));
} else if (window.location.href.startsWith('http://localhost:5500/bulma/posts.html')) {
  fetch_posts(window.location.search.slice(4));
} else {
  console.log(window.location.search.slice(4));
};
