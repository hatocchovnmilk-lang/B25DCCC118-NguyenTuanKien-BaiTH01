
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
  menu.classList.toggle("show");
};


var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function () {
  document.body.classList.toggle("dark");
};


var search = document.getElementById("search");
var projects = document.querySelectorAll(".project");

search.oninput = function () {
  var keyword = search.value.toLowerCase();

  for (var i = 0; i < projects.length; i++) {
    var text = projects[i].textContent.toLowerCase();
    if (text.includes(keyword)) {
      projects[i].style.display = "block";
    } else {
      projects[i].style.display = "none";
    }
  }
};


var message = document.getElementById("message");
var count = document.getElementById("count");

message.oninput = function () {
  count.textContent = message.value.length;
};


var form = document.getElementById("form");
var error = document.getElementById("error");

form.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = message.value;

  if (name == "") {
    error.textContent = "Bạn chưa nhập họ tên!";
  } else if (email.includes("@") == false) {
    error.textContent = "Email phải có dấu @";
  } else if (msg.length < 10) {
    error.textContent = "Lời nhắn phải có ít nhất 10 ký tự";
  } else {
    error.textContent = "";
    alert("Gửi thành công!");
    form.reset();
    count.textContent = 0;
  }
};


document.getElementById("year").textContent = new Date().getFullYear();
