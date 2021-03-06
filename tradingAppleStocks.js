// Write an ef cient function that takes stockPricesYesterday and returns the best
// pro t I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
//    getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

const getMaxProfit = (stocks) => {
  let buy = stocks[0];
  let profit = stocks[1] - stocks[0];
  for (let i = 1; i < stocks.length; i++) {
    buy = Math.min(buy, stocks[i]);
    profit = Math.max(profit, stocks[i] - buy);
  }
  return profit;
}