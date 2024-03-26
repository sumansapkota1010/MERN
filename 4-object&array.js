let productApiData = {
  products: [
    { name: "watch", price: 1000 },

    { name: "mouse", price: 1000 },

    { name: "cover", price: 100 },
    { name: "mobile", rate: 10000 },
  ],
};

productApiData.products[3].price = productApiData.products[3].rate;
delete productApiData.products[3].rate;

console.log(productApiData);
