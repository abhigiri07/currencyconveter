function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const firstCurrency = document.getElementById("firstCurrency").value;
    const secondCurrency = document.getElementById("secondCurrency").value;
  
    // Replace this with real exchange rate data or API call
    const exchangeRates = {
      INR:{USD:0.012, EUR:0.011, JPY:1.75, GBP:0.0094, KWD:0.0037, CHF:0.011,     AUD:0.019, CNY:0.088 }, 

      USD: {INR:83.16, EUR:0.92, JPY:145.42,GBP:0.79,KWD:0.31,CHF:0.88,AUD:1.57,CNY:7.28},

      EUR: { INR:90.57,USD: 1.09, JPY: 158.37,GBP:0.86, KWD:0.34, CHF:0.96, AUD:1.71, CNY:7.93},

      JPY: { INR:0.57,USD: 0.069, EUR: 0.0063, GBP:0.0054 ,KWD:0.0021, CHF:0.0061, AUD:0.011, CNY:0.050},

       GBP:{INR:105.89,USD:1.27,EUR:1.17,JPY:185.17,KWD:0.39,CHF:1.12,AUD:1.99 ,CHF:9.27},

      KWD:{INR:270.98, USD:3.26, EUR:2.99, JPY:473.85, GBP:2.56, CHF:2.87, AUD:5.11, CNY:23.73 },

      CHF:{INR:94.28, USD:1.13, EUR:1.04, JPY:164.86, GBP: 0.89, KWD:0.35, AUD:1.78, CNY:8.25 },

      AUD:{INR:53.03, USD:0.64, EUR:0.59, JPY:93.24, GBP:0.50, KWD:0.20, CHF:0.56, CNY:4.64 },

      CNY:{INR:0.011, USD:0.012, EUR:0.011, JPY:1.75, GBP:0.0094, KWD:0.0037, CHF:0.12, AUD:0.019 },

    };
  
    const convertedAmount = (amount * exchangeRates[firstCurrency][secondCurrency]).toFixed(4);
    document.getElementById("convertedAmount").value = convertedAmount;
  }
  