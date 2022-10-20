//navbar

// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-icon").onclick = () => {
//   navbar.classList.toggle("active");
// };

// window.onscroll = () => {
//   navbar.classList.remove("active");
// };

//adding

async function add(id, name_b, pages, img) {
  let gg = document.createElement("div");
  gg.className = "box";
  let Container = document.querySelector(".items-container");

  let div_n = `
        <img src="${img}" alt="" class="img">
        <h3 class="name_text">${id}. ${name_b}</h3>
        <div class="content">
            <span>Кількість сторінок:</span>
            <p class="i-type">${pages}</p>
        </div>`;
  gg.innerHTML = div_n;
  Container.append(gg);
}

async function get() {
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

        add(id, name_b, page, img);
      });
    });
}
get();