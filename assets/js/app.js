const toggle = document.querySelector(".header-bar");
const menu = document.querySelector(".header-menu-mobile");
const activeClass = "is-show";

// Thêm class 'is-show' khi nhấn vào header-bar
toggle.addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
  menu.classList.add(activeClass);
});

// Đóng menu khi nhấp ra ngoài màn hình
window.addEventListener("click", function (e) {
  // Kiểm tra xem click có phải là bên ngoài menu không
  if (!menu.contains(e.target) && !e.target.matches(".header-bar")) {
    menu.classList.remove(activeClass);
  }
});
