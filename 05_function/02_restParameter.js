//rest parameter
function order1(...price){
  return price;
};

const prices1 = order1(100, 200, 300);
console.log(prices1);

//
function order2(p1, ...price){
  return price;
};

const prices2 = order2(100, 200, 300);
console.log(prices2);