let search = document.querySelector(".search_box");

document.querySelector("#search_icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu_icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

/* let cart = {
    'name': {
        "name": "viper",
        count: 2,
        price: 200
    },
    'gg': {
        "name": "viper_mini",
        count: 2,
        price: 300
    }
};
document.onclick = event => {
    
} */

$(document).ready(function () {
  update_amounts();
  $(".qty, .price").on("keyup keypress blur change", function (e) {
    update_amounts();
  });
});

function update_amounts() {
  var sum = 0.0;
  $("#cart_table > tbody > tr").each(function () {
    var qty = $(this).find(".qty").val();
    var price = $(this).find(".price").val();
    var amount = qty * price;
    sum += amount;
    $(this)
      .find(".amount")
      .text("" + amount);
  });
  $(".total").text(sum);
}

var incrementQty;
var decrementQty;
var plusBtn = $(".cart_qty_plus");
var minusBtn = $(".cart_qty_minus");
var incrementQty = plusBtn.click(function () {
  var $n = $(this).parent(".btn_container").find(".qty");
  $n.val(Number($n.val()) + 1);
  update_amounts();
});
var decrementQty = minusBtn.click(function () {
  var $n = $(this).parent(".btn_container").find(".qty");
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
    $n.val(QtyVal - 1);
  }
  update_amounts();
});

async function addCustomer(title, body, imgScr) {
  let customer = document.createElement("div");
  let CustomersContainer = document.querySelector(".coments");
  let CustomersContent = `
    <div class="box">
      <div>
        <img src="${imgScr}" alt="">
        <p>${body}</p>
      </div>
    </div>`;
  customer.innerHTML = CustomersContent;
  CustomersContainer.append(customer);
}

let response_posts = fetch("https://dummyjson.com/posts?skip=13&limit=7")
  .then((res) => res.json())
  .then((json) => parse(json.posts));
async function parse(data) {
  for (let element = 0; element < data.length; element++) {
    let body = await data[element].body;
    let title = await data[element].title;
    let imgScr = `./img/img_face/face${element}.jpg`;
    await addCustomer(title, body, imgScr);
  }
}


fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=e69c59f8cb1cb459f0df0479405abcd6')
.then(res => res.json())
.then(function(data){
    document.querySelector('.w_name').textContent = data.name;
    document.querySelector('.w_degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.w_disc').textContent = data.weather[0]['description'];
    document.querySelector('.w_img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function(){ });
