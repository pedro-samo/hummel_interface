async function getProductInfo(productId) {
  const proxyURI = "https://cors-anywhere.herokuapp.com/";
  const productURI = `https://www.hummelbrasil.com/api/catalog_system/pub/products/search/?fq=productId:${productId}`;

  const res = await fetch(proxyURI + productURI, { headers: { Origin: "null" } });
  const data = await res.json();

  return data;
}

const getProductIdFromURI = () => {
  const { searchParams } = new URL(window.location.href);
  return searchParams.get("productId");
};

const getMainProductInfo = async() => {
  const productId = getProductIdFromURI();

  if (!productId) {
    console.log("No product name query param");
    return;
  }
  const result = await getProductInfo(productId);
  return result[0];
}

getMainProductInfo();
console.log(getMainProductInfo());