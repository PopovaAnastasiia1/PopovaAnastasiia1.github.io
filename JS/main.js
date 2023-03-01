servicesTitle = document.querySelector(".services-titles");
servicesTitle.addEventListener("click", function (event) {
  const data = event.target.dataset.tab;
  document.querySelector(".service-active").classList.remove("service-active");
  document
    .querySelector(".services-tab-active")
    .classList.remove("services-tab-active");
  document
    .querySelector(`[data-content = ${data}]`)
    .classList.add("services-tab-active");
  event.target.classList.add("service-active");
});

const GALLERY = [
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design1.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design2.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design3.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design4.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design5.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design6.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design7.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design8.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design9.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design10.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design11.jpg",
  },
  {
    category: "Graphic Design",
    src: "./images/section_work/graphic-design/graphic-design12.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design1.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design2.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design3.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design4.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design5.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design6.jpg",
  },
  {
    category: "Web Design",
    src: "./images/section_work/web-design/web-design7.jpg",
  },
  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page1.jpg",
  },
  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page2.jpg",
  },
  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page3.jpg",
  },
  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page4.jpg",
  },

  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page5.jpg",
  },
  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page6.jpg",
  },

  {
    category: "Landing Pages",
    src: "./images/section_work/landing-page/landing-page7.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress1.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress2.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress3.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress4.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress5.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress6.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress7.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress8.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress9.jpg",
  },
  {
    category: "Wordpress",
    src: "./images/section_work/wordpress/wordpress10.jpg",
  },
];

workSection = document.querySelector(".work-section");
const loadButton = document.querySelector(".work-btn");

const drawToHtml = function () {
  GALLERY.sort(() => Math.random() - 0.5).forEach((item) => {
    workSection.insertAdjacentHTML(
      "beforeend",
      `
      <div class="work-content ${item.category.split(" ").join("")}">
        <img src="${item.src}" class="work-img"></img>
        <div class="work-content-hover">
          <img src="./images/section_work/icon.svg" alt="">
          <div class="hover-item">
            <h5 class="hover-item-title">Creative Design</h5>
            <span class="hover-item-text">${item.category}</span>
          </div>
        </div>
      </div>
      `
    );
  });
};
drawToHtml();

let workContentItems;
const findItems = () =>
  (workContentItems = document.querySelectorAll(".work-img"));
findItems();

const loading = (collection, limit) => {
  [...collection].slice(0, limit).forEach((item) => {
    item.parentNode.classList.add("show");
  });
};
loading(workContentItems, 12);

workCategoriesTitles = document.querySelector(".work-categories-titles");
filterBox = document.querySelectorAll(".work-content");

loadingAnimate = document.querySelector(".loading-animate");
let dots = document.querySelector(".dots");
let countClick = 0;

function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 500);
}

loadButton.addEventListener("click", () => {
  animate(dots, "dots--animate");
  loadingAnimate.classList.remove("hide");
  loadingAnimate.classList.add("show");
  setTimeout(() => {
  if (countClick === 0) {
    loading(filteredArray, 24);
    countClick++;
  } else {
    loading(filteredArray, 36);
    countClick = 0;
    loadButton.classList.add("hide");
  }
  loadingAnimate.classList.remove("show");
  loadingAnimate.classList.add("hide");
  }, 3000);
  
});

workCategoriesTitles.addEventListener("click", function (event) {
  const data = event.target.dataset.tab;
  document
    .querySelector(".categories-active")
    .classList.remove("categories-active");
  event.target.classList.add("categories-active");

  filterBox.forEach((element) => {
    element.classList.remove("hide");
    if (!element.classList.contains(data) && data !== "all") {
      element.classList.add("hide");
    }
  });
});

const firstCheckButton = (array, button) => {
  if (array.length < 12) {
    button.classList.add("hide");
  } else {
    button.classList.remove("hide");
  }
};

let filteredArray = workContentItems;
const createFilteredArray = (array, filter) => {
  filteredArray = [];
  array.forEach((el) => {
    el.parentNode.classList.remove("show");
    if (el.classList.contains(filter)) {
      filteredArray.push(el);
    } else if (filter === "All") {
      el.parentNode.classList.remove("show");
      filteredArray = [...workContentItems];
      loading(filteredArray, 12);
    } else {
      el.classList.remove("show");
    }
  });

  firstCheckButton(filteredArray, loadButton);
  loading(filteredArray, 12);
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slides-block");
const content = document.querySelectorAll(".about-slide");
const demo = document.getElementsByClassName("demo");

let counter = 0;
const stepSize = content[0].clientWidth;

slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
next.addEventListener("click", () => {
  for (i = 0; i < demo.length; i++) {
    demo[i].classList.remove("demo-active");
  }
  if (counter >= content.length - 1) counter = -1;
  slider.classList.add("transfom-animate");
  counter++;
  demo[counter].classList.add("demo-active");
  slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
});

prev.addEventListener("click", () => {
  for (i = 0; i < demo.length; i++) {
    demo[i].classList.remove("demo-active");
  }
  if (counter <= 0) counter = content.length;
  slider.classList.add("transfom-animate");
  counter--;
  demo[counter].classList.add("demo-active");
  slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
});

let arr = Array.from(demo);
for (var j = 0; j < arr.length; j++) {
  arr[j].addEventListener("click", bindClick(j));
}
function bindClick(j) {
  return function () {
    counter = j;
    for (i = 0; i < demo.length; i++) {
      demo[i].classList.remove("demo-active");
    }
    demo[j].classList.add("demo-active");
    slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
  };
}

const elem = document.querySelector(".grid");

const msnry = new Masonry(elem, {
  // options
  itemSelector: ".grid-item",
  //columnWidth: 20,
  gutter: 20,
});
