let req = new XMLHttpRequest();
req.open("GET","https://api.github.com/users/robdolares");
req.addEventListener("load", reqListener);
req.send();

function reqListener (){
  let data = JSON.parse(this.responseText);
  let info ='';
  console.log(data);
  document.querySelector(".header").innerHTML = `
    <h1>${data.name}</h1>
  `;
  let container = document.querySelector("main");
  container.innerHTML = `
  <div class="card-container">
    <div class="basics">
      <h2>The Basics</h2>
      <ul>
        <li><span>Name:</span> ${data.name}</li>
        <li><span>GitHub URL:</span> <span class="list-ul">${data.html_url}</span></li>
        <li><span>Email:</span> ${data.email}</li>
        <li><span>Company:</span> ${data.scompany}</li>
        <li><span>Website:</span> <span class="list-ul">${data.blog}</span></li>
      </ul>
    </div>
    <div class="story">
      <h2>The Story</h2>
      <p>${data.bio}</p>
    </div>
    <div class="avatar">
      <img src="${data.avatar_url}">
    </div>
  </div>
    `
}
