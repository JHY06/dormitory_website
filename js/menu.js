document.addEventListener("DOMContentLoaded", function () {
  // 햄버거 메뉴 버튼이 존재하는지 확인
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  if (hamburgerMenu) {
    // 햄버거 메뉴 클릭 시 gnb 메뉴 토글
    hamburgerMenu.addEventListener("click", function () {
      document.querySelector(".gnb").classList.toggle("active");

      // 메뉴가 열렸을 때 body 스크롤 제한 (모바일 화면에서 더 나은 UX)
      if (document.querySelector(".gnb").classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }

  // 각 네비게이션 항목 클릭 시 메뉴를 닫고 페이지로 이동
  document.querySelectorAll(".gnb ul li a").forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      document.querySelector(".gnb").classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // 현재 페이지 메뉴 항목에 active 클래스 추가
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll(".gnb ul li a");

  menuItems.forEach(function (item) {
    const href = item.getAttribute("href");
    if (href === currentPath || (currentPath.includes(href) && href !== "#")) {
      item.classList.add("active");
    }
  });

  // 화면 클릭 시 모바일 메뉴 닫기 (메뉴 외부 클릭)
  document.addEventListener("click", function (event) {
    const gnb = document.querySelector(".gnb");
    const hamburger = document.querySelector(".hamburger-menu");

    if (
      gnb &&
      gnb.classList.contains("active") &&
      !gnb.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      gnb.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // 창 크기가 변경될 때 모바일 메뉴 상태 관리
  window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
      // 화면이 넓어졌을 때 모바일 메뉴가 열려있다면 닫기
      const gnb = document.querySelector(".gnb");
      if (gnb && gnb.classList.contains("active")) {
        gnb.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
});
