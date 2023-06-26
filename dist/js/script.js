// Burger
const Burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-menu");

Burger.addEventListener("click", function () {
  Burger.classList.toggle("burger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Skills

const skills = [
  {
    title: "HTML",
    percent: "80",
  },
  {
    title: "CSS",
    percent: "60",
  },
  {
    title: "Tailwind CSS",
    percent: "70",
  },
  {
    title: "JavaScript",
    percent: "40",
  },
  {
    title: "PHP",
    percent: "70",
  },  
  {
    title: "MYSQL",
    percent: "70",
  },
  {
    title: "Laravel",
    percent: "80",
  },  
  
  {
    title: "GitHub",
    percent: "75",
  },  
  
  {
    title: "Notion",
    percent: "80",
  },  
  
  {
    title: "Trello",
    percent: "60",
  },

];

const skillButtonsContainer = document.getElementById("skill-buttons");
const skillPercentElement = document.getElementById("skill-percent");

// Render skill buttons
skills.forEach((skill) => {
  const button = document.createElement("button");
  button.textContent = skill.title;
  button.className =
    "px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700";
  button.addEventListener("click", () => {
    setCurrentSkill(skill);
  });

  skillButtonsContainer.appendChild(button);
});

let currentSkill = skills[0];

function setCurrentSkill(skill) {
  currentSkill = skill;
  updateSkillCircle();
}

function updateSkillCircle() {
  const circumference = 2 * Math.PI * 120;
  const dashOffset =
    circumference - (currentSkill.percent / 100) * circumference;

  const skillCircle = document.querySelector(".text-blue-500");
  skillCircle.setAttribute("stroke-dasharray", circumference);
  skillCircle.setAttribute("stroke-dashoffset", dashOffset);

  skillPercentElement.textContent = `${currentSkill.percent}%`;
}

// Initial update
updateSkillCircle();
