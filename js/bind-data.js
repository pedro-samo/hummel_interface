function setMainImage(src) {
  const mainImage = document.querySelector("#main-img");
  if (!mainImage) return;
  mainImage.src = src;
};

function setSecondImage(src) {
  const secondImage = document.querySelector("#second-img");
  if (!secondImage) return;
  secondImage.src = src;
};

function thumbImage1(src) {
  const thumb1 = document.querySelector('#thumb1');
  if (!thumb1) return;
  thumb1.src = src;
};

function thumbImage2(src) {
  const thumb2 = document.querySelector('#thumb2');
  if (!thumb2) return;
  thumb2.src = src;
};

function thumbImage3(src) {
  const thumb3 = document.querySelector('#thumb3');
  if (!thumb3) return;
  thumb3.src = src;
};

async function setProductData() {
  const title = document.querySelector("#title");
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
  setSecondImage(mainProductInfo.items[0].images[1].imageUrl);
  thumbImage1(mainProductInfo.items[1].images[0].imageUrl);
  thumbImage2(mainProductInfo.items[2].images[0].imageUrl);
  thumbImage3(mainProductInfo.items[3].images[0].imageUrl);

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