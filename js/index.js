function setDiscount(element) {
  disableButtonDiscount();
  element.classList.add("button-active");
}

function disableButtonDiscount() {
  const buttonActive = document.querySelector(".button-active");
  if (buttonActive) {
    buttonActive.classList.remove("button-active");
  }
}

function setInputDiscount(element) {
  disableButtonDiscount();
  element.focus();
}

function removeAlert() {
  const boxInputGrossValue = document.querySelector("#gross-value");
  boxInputGrossValue.classList.remove("warning");
}

function calc(element) {
  const boxInput = document.querySelector("#number-of-people");
  boxInput.classList.remove("warning");
  removeAlert();

  const numberPeople = parseInt(element.value);
  const grossValue = parseFloat(
    document.getElementsByName("gross-value")[0].value
  );

  let discount;

  const buttonActive = document.querySelector(".button-active");
  if (buttonActive) {
    discount = parseFloat(buttonActive.outerText.replace("%", ""));
  } else if (document.querySelector("#input-discount").value !== '') {
    discount = parseFloat(document.querySelector("#input-discount").value);
  } else {
    discount = 0;
  }

  if (numberPeople == 0) {
    boxInput.classList.add("warning");
    return;
  }
  if (isNaN(grossValue) || grossValue == 0) {
    const boxInputGrossValue = document.querySelector("#gross-value");
    boxInputGrossValue.classList.add("warning");
    return;
  }

  const tipPerPerson = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format((grossValue * (discount / 100)) / numberPeople);

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(grossValue / numberPeople);

  document.querySelector("#tip").innerText = tipPerPerson;
  document.querySelector("#total").innerText = total;
}

function reset() {
  const collection = document.getElementsByTagName("INPUT");
  collection[0].value = "";
  collection[1].value = "";
  collection[2].value = "";
  disableButtonDiscount();
  document.querySelector("#tip").innerText = "R$ 0,00";
  document.querySelector("#total").innerText = "R$ 0,00";
}
