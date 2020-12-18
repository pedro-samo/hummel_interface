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
  const genero = document.querySelector('#productgenero');
  const cor = document.querySelector('#productcolor');
  const caracteristicas = document.querySelector('#productcaract');
  const composicao = document.querySelector('#productcomp');

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

  description.forEach(function(item) {
    item.innerText = mainProductInfo.description;
  });

  genero.innerText = mainProductInfo.Gênero[0];

  cor.innerText = mainProductInfo.Cor[0];

  caracteristicas.innerText = mainProductInfo.Características[0];

  composicao.innerText = mainProductInfo.Composição[0];
};

setProductData();