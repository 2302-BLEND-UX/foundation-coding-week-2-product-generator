// Adding a product to your app
const result = document.getElementById("result");
const imageURL = document.getElementById("productimage");
const productName = document.getElementById("productname");
const submitBtn = document.getElementById("submit-button");

submitBtn.onclick = function () {
  // or statement
  if (imageURL.value === "" || productName.value === "") {
    alert("You're missing data");
  } else {
    result.innerHTML += `
    <div class="product-item">
      <div id="product-name">${productName.value}</div>
      <div id="product-image">
      <img src="${imageURL.value}" alt="${productName.value}">
      </div>
    </div>
  `
    resetInputs();
  }
}

function resetInputs() {
  imageURL.value = "";
  productName.value = "";
}