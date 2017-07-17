let req = new XMLHttpRequest();
req.open("GET","https://api.github.com/users/robdolares");
req.addEventListener("load", reqListener);
req.send();

function reqListener (){
  let data = JSON.parse(this.responseText);
  let info ='';
  console.log(data);
  let container = document.querySelector("main");
  container.innerHTML = `
    <div class="basics">
      <h2>The Basics</h2>
      <ul>
        <li><span>Name:</span> ${data.name}</li>
        <li><span>GitHub URL:</span> ${data.html_url}</li>
        <li><span>Email:</span>${email}</li>
        <li><span>Company:</span></li>
        <li><span>Website:</span></li>
      </ul>
    </div>
    <div class="story">
      <h2>The Story</h2>
      <p></p>
    </div>
    `
}
