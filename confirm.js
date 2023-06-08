$(document).ready(function () {
  //getting item from local storage
  let seller_info = localStorage.getItem("sell-crypto");
  
// assigning variables to  btc wallet adresses
  let {
    bank,
    nigeriaAmount,
    coinAmount,
    accountNumber,
    accountName,
    cryptoCurrency,
  } = JSON.parse(seller_info);
  // using if else statement to make decisions
  if (cryptoCurrency === "btc") {
    // inputing my btc address with backticks
    $("#crypto-wallet").text(`bc1qqvm87rm6m952392ng043ec649achelzp6we6h0`);
  } else if (cryptoCurrency === "eth") {
    //inputing my eth address with backticks
    $("#crypto-wallet").text(`0xADDdB463dD87E5F3a5Ea2EE4CCC79c1735451a70`);
  } else if (cryptoCurrency === "bnb") {
    // inputing my bnb address with backticks
    $("#crypto-wallet").text(`bnb12ha05pjun7p94zazqy7I6pIt7fxLh7aas86dtf`);
  }

  $("#bank").text(`BANK: ${bank}`);
  $("#account_name").text(`ACCOUNT NAME: ${accountName}`);
  $("#account_number").text(`ACCOUNT NUMBER: ${accountNumber}`);
  $("#nigeria-amount").text(`₦${nigeriaAmount.toString()}`);
  $("#crypto-amount").text(`${coinAmount} ${cryptoCurrency}`);
});


