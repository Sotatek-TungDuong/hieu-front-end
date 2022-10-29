function getPhone() {
  fetch("http://localhost:8000/product/phone")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slice(0, 4));
      if (!data.statusCode) {
        var phoneList = document.getElementsByClassName("phonee")[0];
        var phoneListDt = document.getElementsByClassName("phoneee")[0];
      // console.log(document.getElementsByClassName("phonee")[0]);
      data.slice(0, 4).forEach((item) => {
        const para = document.createElement("div");
        para.classList.add("grid_1_of_4");
        para.classList.add("images_1_of_4");
        para.innerHTML = `
            <img class="img-prd" src="${item.linkImg}" alt="img" />
            <h2 class="contenth2">${item.name}</h2>
            <div class="price-details">
                <div class="price-number">
                    <p><span class="rupees">${item.price} VNĐ</span></p>
                </div>
                <div class="add-cart">
                    <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                </div>

            </div>
        `;
        phoneList?.appendChild(para);
      })

      data.forEach((item) => {
        const para = document.createElement("div");
        para.classList.add("grid_1_of_4");
        para.classList.add("images_1_of_4");
        para.innerHTML = `
            <img class="img-prd" src="${item.linkImg}" alt="img" />
            <h2 class="contenth2">${item.name}</h2>
            <div class="price-details">
                <div class="price-number">
                    <p><span class="rupees">${item.price} VNĐ</span></p>
                </div>
                <div class="add-cart">
                    <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                </div>

            </div>
        `;
        phoneListDt?.appendChild(para);
      })
      }
      // Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.parentElement.getElementsByClassName("contenth2")[0].innerText
    var price = product.getElementsByClassName("price-number")[0].innerText
    console.log(title, price, img)
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}
    });
}

getPhone()

function getAccessary() {
  fetch("http://localhost:8000/product/accessary")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data.statusCode) {
        var phoneList = document.getElementsByClassName("accessaryy")[0];
        var phoneListacc = document.getElementsByClassName("accessaryyy")[0];
      // console.log(document.getElementsByClassName("accessaryy")[0]);
      data.slice(0, 4).forEach((item) => {
        const para = document.createElement("div");
        para.classList.add("grid_1_of_4");
        para.classList.add("images_1_of_4");
        para.innerHTML = `
            <img class="img-prd" src="${item.linkImg}" alt="img" />
            <h2 class="contenth2">${item.name}</h2>
            <div class="price-details">
                <div class="price-number">
                    <p><span class="rupees">${item.price} VNĐ</span></p>
                </div>
                <div class="add-cart">
                    <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                </div>
                <div class="clear"></div>
            </div>
        `;
        phoneList?.appendChild(para);
      })

      data.forEach((item) => {
        const para = document.createElement("div");
        para.classList.add("grid_1_of_4");
        para.classList.add("images_1_of_4");
        para.innerHTML = `
            <img class="img-prd" src="${item.linkImg}" alt="img" />
            <h2 class="contenth2">${item.name}</h2>
            <div class="price-details">
                <div class="price-number">
                    <p><span class="rupees">${item.price} VNĐ</span></p>
                </div>
                <div class="add-cart">
                    <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                </div>
                <div class="clear"></div>
            </div>
        `;
        phoneListacc?.appendChild(para);
      })
      }
      // Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.parentElement.getElementsByClassName("contenth2")[0].innerText
    var price = product.getElementsByClassName("price-number")[0].innerText
    console.log(title, price, img)
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}
    });
}

getAccessary()

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert(`Cảm ơn ${localStorage.getItem("userName")} đã thanh toán đơn hàng`)
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
   
  })
  updatecart();
}
// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}
// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  //Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

var auth = document.getElementsByClassName("account_desc")[0].childNodes[1]
if (localStorage.getItem('token')) {
  auth.innerHTML = `<ul>
                        <li>${localStorage.getItem("userName")}</li>
                        <li><button id="" onclick = "javascript:Dangxuat();">Dang xuat</button></li>
                    </ul>`;
}