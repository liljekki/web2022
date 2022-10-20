//navbar

// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-icon").onclick = () => {
//   navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

//adding tea

async function addTea(id, name_b, pages, img) {
  let tea = document.createElement("div");
  tea.className = "box";
  let teaContainer = document.querySelector(".items-container");

  let teadiv = `
        <img src="${img}" alt="" class="i-image">
        <h3 class="i-title">${id}. ${name_b}</h3>
        <div class="content">
            <span>Кількість сторінок:</span>
            <p class="i-type">${pages}</p>
        </div>`;
  tea.innerHTML = teadiv;
  teaContainer.append(tea);
}

async function getTeaData() {
  fetch("http://localhost:3001/books")
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      let teaArray = JSON.parse(text);
      teaArray.forEach((el) => {
        id = `${el.id}`;
        name_b = `${el.name}`;
        page = `${el.pages}`;
        img = `${el.img_link}`;

        addTea(id, name_b, page, img);
      });
    });
}
getTeaData();