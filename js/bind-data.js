function setMainImage(src) {
  const mainImage = document.querySelector("#main-img");
  if (!mainImage) return;

  mainImage.src = src;
};

async function setProductData() {
  const title = document.querySelector("#title");
  //const bestprie = document.querySelector('#bestprice');
  const sku = document.querySelector('#productid');
  const description = document.querySelectorAll('#productdescription');

  if (!title) return;

  const mainProductInfo = await getMainProductInfo();
  title.classList.remove("loading");

  if (!mainProductInfo) {
    title.innerText = "Produto não existente";
    showError('Produto com ID inválido');
    return;
  }

  title.innerText = mainProductInfo.productName;
  setMainImage(mainProductInfo.items[0].images[0].imageUrl);
  //bestPrice.innerText = mainProductInfo.
  sku.innerText = mainProductInfo.productReference;
  description.innerText = mainProductInfo.description;

};

setProductData();