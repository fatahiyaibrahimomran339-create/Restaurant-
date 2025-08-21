// Dropdown
function toggleMenu() {
    const dd = document.getElementById("dropdown");
    dd.style.display = dd.style.display === "block" ? "none" : "block";
  }
  
  // فتح صفحة
  function openPage(url, e) {
    if (e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    }
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }
  
  // رجوع
  function goBack() {
    window.history.back();
  }
  
  // Scroll تأثير
  const cards = document.querySelectorAll(".card");
  document.addEventListener("scroll", () => {
    let center = window.innerHeight / 2;
    cards.forEach(card => {
      let rect = card.getBoundingClientRect();
      if (rect.top < center && rect.bottom > center) {
        card.classList.add("active");
        card.classList.remove("inactive");
      } else {
        card.classList.remove("active");
        card.classList.add("inactive");
      }
    });
  });
  
  // Stars Rating
  const stars = document.getElementById("stars");
  if (stars) {
    let selected = 0;
    stars.innerHTML = "★".repeat(5).split("").map((star, i) => `<span data-i="${i}">${star}</span>`).join("");
    stars.addEventListener("click", e => {
      if (e.target.dataset.i !== undefined) {
        selected = +e.target.dataset.i + 1;
        updateStars();
      }
    });
    function updateStars() {
      stars.querySelectorAll("span").forEach((el, i) => {
        el.classList.toggle("filled", i < selected);
      });
    }
  }
  