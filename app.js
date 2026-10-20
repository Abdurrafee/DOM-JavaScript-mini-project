let price = 250;
let quantity = document.getElementById("quantity");
let Btn = document.getElementById("Btn");

Btn.addEventListener("click", calculate);

function calculate() {
  let qty = Number(quantity.value);

  let error = document.getElementById("error");
  let result = document.getElementById("result");
  let discountText = document.getElementById("discount");

  if (quantity.value === "" || qty <= 0) {
    error.innerHTML = "enter a valid quantity!";
  } else {
    error.innerHTML = "good";

    let total = price * qty;
    let discount = 0;

    if (total >= 1000) {
      discount = (total * 10) / 100;
    }

    let finalBill = total - discount;

    console.log("Product Price " + price);

    console.log("Total Bill " + total);
    console.log("Discount" + discount);
    console.log("Final Bill" + finalBill);
    result.innerHTML = "Final Bill: Rs. " + finalBill;
    discountText.innerHTML = "Discount: Rs. " + discount;
  }
}
