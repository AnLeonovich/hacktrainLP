(function(){  

  let now = new Date();
  let menu = document.querySelector(".responsive_menu");
  let nav = document.querySelector(".nav__global-mobile");

  if (now.getHours() >= 22 || now.getHours() <= 6){
   console.log(document.querySelector("body").classList);
    document.querySelector("body").classList.add("background-night");
    document.querySelector(".moon").classList.add("moon-night");
    document.querySelector(".rocks_1").classList.add("rocks_1-night");
    document.querySelector(".rocks_2").classList.add("rocks_2-night");
    document.querySelector(".rails").classList.add("rails-night");
    document.querySelector(".ground").classList.add("ground-night");
    document.querySelector(".train").classList.add("train-night");
  } else {
    document.querySelector("body").classList.add("background-day");
    document.querySelector(".moon").classList.add("sun");
    document.querySelector(".rocks_1").classList.add("rocks_1-day");
    document.querySelector(".rocks_2").classList.add("rocks_2-day");
    document.querySelector(".rails").classList.add("rails-day");
    document.querySelector(".ground").classList.add("ground-day");
    document.querySelector(".train").classList.add("train-day");
  }

  let question = document.querySelectorAll(".faq__question");
  question.forEach( (el) => {
    el.addEventListener("click", (e) => {
      let wrapper = e.target.nextElementSibling;
      let answer = e.target.nextElementSibling.firstElementChild;
      if (wrapper.style.height === '0px' || wrapper.style.height === ""){
        wrapper.style.height = `${answer.offsetHeight}px`;
      } else {
        wrapper.style.height = `0px`;
      }
    });
  });

  let button = document.getElementById("nav-button");
  button.addEventListener("click", () => {
    if ( menu.style.height === '0px' ||  menu.style.height === ""){
      menu.style.height = `${nav.offsetHeight}px`;
      menu.style.boxShadow = "0 0 15px rgba(0, 0, 0, 1)"; 
    } else {
      menu.style.height = `0px`;
      menu.style.boxShadow = "none"; 
    }
  });

})();
