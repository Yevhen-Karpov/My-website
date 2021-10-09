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
  const totalPriceEl = document.querySelector("#total-price");
  totalPriceEl.textContent = totalPrice;
  console.log(totalPrice);
}

const formEl = document.querySelector("#project-price-form");

formEl.addEventListener("change", calculateWork);
