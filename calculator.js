$(document).ready(function () {
  $("#crypto-currency").change(function () {
    var valueOfUsd = $("#usd-price").val();
    var cryptoCoin = $(this).val();
    const nigeriaValue = (valueOfUsd * 580).tofixed(6) .replace(/\B(? =(\d{3})+(?! \d))/g, ","); // rounding up to two decimal places
    const btcValue = (
      ((valueOfUsd / 21336.11) * 1000000000) /
      1000000000
    ).toFixed(2);
    const ethValue = (
      ((valueOfUsd / 1356.1) * 1000000000000000000) /
      1000000000000000000
    ).toFixed(2);
    const bnbValue = (
      ((valueOfUsd / 232.04) * 1000000000000000000) /
      1000000000000000000
    ).toFixed(2);

    // using the switch statement for each crypto currencies to get results
    switch (cryptoCoin) {
      case "btc":
        var coinValue = btcValue;
        break;
      case "eth":
        var coinValue = ethValue;
        break;
      case "bnb":
        var coinValue = bnbValue;
        break;
    }
    $("#coin-amount").val(coinValue);
    $("#nigeria-amount").val(nigeriaValue);
    //  alert('hello world')
  });
});

// making use of the keyup keyword so that an event will occur when a user handling the application
// handles one key on the keyboard, thereby helping the application to handle the occuring event without
// attaching delegates.
$("#usd-price").keyup(function () {
  var valueOfUsd = $(this).val();
  var cryptoCoin = $("#crypto-currency").val();
  const nigeriaValue = (valueOfUsd * 580).toFixed (6).replace(/\B(? =(\d{3})+(?! \d))/g, ","); // rounding up to two decimal places
  const btcValue = (
    ((valueOfUsd / 21336.11) * 1000000000) /
    1000000000
  ).toFixed(2);
  const ethValue = (
    ((valueOfUsd / 1356.1) * 1000000000000000000) /
    1000000000000000000
  ).toFixed(2);
  const bnbValue = (
    ((valueOfUsd / 232.04) * 1000000000000000000) /
    1000000000000000000
  ).toFixed(2);
  switch (cryptoCoin) {
    case "btc":
      var coinValue = btcValue;
      break;
    case "eth":
      var coinValue = ethValue;
      break;
    case "bnb":
      var coinValue = bnbValue;
      break;
  }
  $("#coin-amount").val(coinValue);
  $("#nigeria-amount").val(nigeriaValue);
});

// disable button
const submitButton = $("#submit-btn");
// console.log(element)
$(".val_check").keyup(function () {
  submitButton.attr("disabled", false); // enabling the disabled button
  $(".val_check").each(function (index, element) {
    if (!element.value.length) {
      submitButton.attr("disabled", true); // disabling the submit button
    }
  });
});

// saving my transactions details to local storage
$("form.ajax").on("submit", function (e) {
  // console.log("hi");
  e.preventDefault();
  let cryptoCurrency = $("#crypto-currency").val().trim();
  let usdPrice = $("#usd-price").val().trim();
  let coinAmount = $("#coin-amount").val().trim();
  let nigeriaAmount = $("#nigeria-amount").val().trim();
  let phone = $("#phone").val().trim();
  let bank = $("#bank").val().trim();
  let accountName = $("#account-name").val().trim();
  let accountNumber = $("#account-number").val().trim();
  let transaction_details = {
    cryptoCurrency,
    usdPrice,
    coinAmount,
    nigeriaAmount,
    phone,
    bank,
    accountName,
    accountNumber,
  };

  let post_data = transaction_details;

  transaction_details = JSON.stringify(transaction_details);

  localStorage.setItem("sell-crypto", transaction_details);
  $.post("./mail.php", post_data).then((response) => {
    console.log(response);
    if (response === "message sent") {
      alert(
        "First step of transaction completed, click okay to confirm your transaction"
      );
      window.location = "confirm.html";
    }
  });
});
