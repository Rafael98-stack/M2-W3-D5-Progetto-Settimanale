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
  <div class="d-flex justify-content-center p-3 col-2">
    <div class="card shadow-sm ">
      <img src="${product.imageUrl}" class="img-fluid card-img-top w-100" alt="${product.title
          }">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text badge rounded-pill bg-dark mb-2">${product.brand}</p>
        
        <div>
            <button class="btn btn-danger" onclick="..."><a href="./detail.html?id=${product._id}">Dettagli</a></button>
         
        </div>
      </div>
    </div>
  </div>
`;
  });
}