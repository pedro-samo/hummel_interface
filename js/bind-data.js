const setMainImage = (src) => {
  const mainImage = document.querySelector("#main-img");
  if (!mainImage) return;

  mainImage.src = src;
};

const setTitleToProductTitle = async () => {
  const title = document.querySelector("#title");
  if (!title) return;

  const mainProductInfo = await getMainProductInfo();
  title.classList.remove("loading");

  if (!mainProductInfo) {
      title.innerText = "Produto não existente";
      title.classList.add("error");
      return;
  }

  title.innerText = mainProductInfo.productName;
  setMainImage(mainProductInfo.items[0].images[0].imageUrl);
};

setTitleToProductTitle();
