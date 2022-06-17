const prices = {
  "landing-page": {
    pm: 700,
    design: 600,
    developer: 1200,
    qa: 500,
  },
  "online-store": {
    pm: 1200,
    design: 900,
    developer: 2500,
    qa: 800,
  },
  "web-application": {
    pm: 2000,
    design: 1100,
    developer: 3000,
    qa: 1000,
  },
  "mobile-application": {
    pm: 3000,
    design: 1500,
    developer: 4000,
    qa: 1300,
  },
};

const formEl = document.querySelector("#project-price-form");
const modalFirst = document.querySelector("#modal-first");
const modalSecond = document.querySelector("#modal-second");
const formBtn = document.querySelector(".project-price-calc-btn");
const offBtns = document.querySelectorAll(".modal-close-icon");
const modalEmailContainer = document.querySelector("#modal-email-container");
const modalContainerBtn = document.querySelector(".modal-container-btn");
const userEmailInput = document.querySelector("#user-email");
const inputContainer = document.querySelector(".email-input-container");
const firstList = document.querySelector(".first-list");
const firstText = document.querySelector(".first-text");
const secondList = document.querySelector(".second-list");
const secondText = document.querySelector(".second-text");
const thirdList = document.querySelector(".third-list");
const thirdText = document.querySelector(".third-text");
const forthList = document.querySelector(".forth-list");
const forthText = document.querySelector(".forth-text");
const workContainer = document.querySelector(".my-project-title");
const projectList = document.querySelector(".my-project");

formEl.addEventListener("change", calculateWork);
formBtn.addEventListener("click", postForm);
modalEmailContainer.addEventListener("submit", onModalSecond);

function getFormValues() {
  const websiteTypeElement = document.querySelector("#project-type");
  const pmEl = document.querySelector("#product-management");
  const desEl = document.querySelector("#design");
  const devEl = document.querySelector("#development");
  const qaEl = document.querySelector("#qa");

  return {
    websiteType: websiteTypeElement.value,
    pm: pmEl.checked,
    design: desEl.checked,
    developer: devEl.checked,
    qa: qaEl.checked,
  };
}

function calculateWork() {
  const values = getFormValues();
  let totalPrice = 0;
  const workTypes = prices[values.websiteType];
  if (values.pm) {
    totalPrice = workTypes.pm;
  }
  if (values.design) {
    totalPrice += workTypes.design;
  }
  if (values.developer) {
    totalPrice += workTypes.developer;
  }
  if (values.qa) {
    totalPrice += workTypes.qa;
  }
  setTimeout(() => {
    const totalPriceEl = document.querySelector("#total-price");
    totalPriceEl.textContent = totalPrice;
  }, 1000);

  console.log(totalPrice);
}

function postForm(e) {
  e.preventDefault();
  modalFirst.classList.add("modal-active");
}

function onModalSecond(e) {
  e.preventDefault();
  if (userEmailInput.value) {
    let formData = new FormData(formEl);
    formData.append("Email", userEmailInput.value);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(function () {
        modalSecond.classList.add("modal-active");
        modalFirst.classList.remove("modal-active");
      })
      .catch(() => alert("Не удалось отправить форму"));
    return;
  }
  inputContainer.classList.add("email-input-container-error");
}

function closedForm(e) {
  modalFirst.classList.remove("modal-active");
  modalSecond.classList.remove("modal-active");
  inputContainer.classList.remove("email-input-container-error");
  userEmailInput.value = "";
}
offBtns.forEach(function (offBtn) {
  offBtn.addEventListener("click", closedForm);
});

// firstList.addEventListener("click", (e) =>
//   firstText.classList.toggle("disabled")
// );
// secondList.addEventListener("click", (e) =>
//   secondText.classList.toggle("disabled")
// );
// thirdList.addEventListener("click", (e) =>
//   thirdText.classList.toggle("disabled")
// );
// forthList.addEventListener("click", (e) =>
//   forthText.classList.toggle("disabled")
// );
workContainer.addEventListener("click", () =>
  projectList.classList.toggle("disabled")
);
firstList.onmouseover = function () {
  firstText.classList.toggle("disabled");
};
secondList.onmouseover = function () {
  secondText.classList.toggle("disabled");
};
thirdList.onmouseover = function () {
  thirdText.classList.toggle("disabled");
};
forthList.onmouseover = function () {
  forthText.classList.toggle("disabled");
};

firstList.onmouseout = function () {
  firstText.classList.toggle("disabled");
};
secondList.onmouseout = function () {
  secondText.classList.toggle("disabled");
};
thirdList.onmouseout = function () {
  thirdText.classList.toggle("disabled");
};
forthList.onmouseout = function () {
  forthText.classList.toggle("disabled");
};
