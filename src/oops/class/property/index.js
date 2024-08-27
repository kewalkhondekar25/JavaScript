class printProduct {
  
  product = "iphone";
  price = "79000";
  stock = true;
  shipped = ["pune", "nagpur"];
  ratings = {rate: 5, count: 100}
};

let mobile = new printProduct;
console.log(`product: ${mobile.product}, price: ${mobile.price}, stock: ${mobile.stock}, shipped: ${mobile.shipped[0]}, rate: ${mobile.ratings.rate}, count: ${mobile.ratings.count}`);