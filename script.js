fetch("https://striveschool-api.herokuapp.com/api/product", {
headers: {
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWU1OTI1NGU4ODAwMTgzZjE4ODciLCJpYXQiOjE2OTk2MDYxMDUsImV4cCI6MTcwMDgxNTcwNX0.juXYFskS41SPH5GU6ZS-W7usUndyOnji8VFdINzY0yQ"
}
})
.then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Errore durante la richiesta:", error));
  
  const productContainer = document.querySelector("#productsContainer");

  let productArray = [];
  window.onload = () => {

    loadProduct()
};
  
  const loadProduct= () => {
    fetch("https://striveschool-api.herokuapp.com/api/product", {
      headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWU1OTI1NGU4ODAwMTgzZjE4ODciLCJpYXQiOjE2OTk2MDYxMDUsImV4cCI6MTcwMDgxNTcwNX0.juXYFskS41SPH5GU6ZS-W7usUndyOnji8VFdINzY0yQ"
      }
      })
        .then(resp => resp.json())
        .then(product => {
            showProducts(product);

            productArray = product;
        })
        .catch(err =>
            console.error(err.message)
        )

}
function showProducts(product) {
  productContainer.innerHTML = "";

  product.forEach((product) => {

   

      productContainer.innerHTML += `
  <div class="p-3">
    <div class="card shadow-sm h-100">
      <img src="${product.imgUrl}" class="img-fluid card-img-top" alt="${product.title
          }">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text badge rounded-pill bg-dark mb-2">${product.brand}</p>
        <p class="fs-4">${product.price}€</p>
        <div>
            <button class="btn btn-danger" onclick="addToCart(event, '${product.asin}')">Compra ora</button>
            <button class="btn btn-outline-danger" onclick="skipMe(event)">
              Scarta
            </button>
        </div>
      </div>
    </div>
  </div>
`;
  });
}