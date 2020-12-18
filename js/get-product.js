async function getProductInfo(productId) {
  const proxyURI = "https://cors-anywhere.herokuapp.com/";
  const productURI = `https://www.hummelbrasil.com/api/catalog_system/pub/products/search/?fq=productId:${productId}`;

  const res = await fetch(proxyURI + productURI, { headers: { Origin: "null" } });
  const data = await res.json();

  console.log(data)

  return data;

}

function getProductIdFromURI() {
  const { searchParams } = new URL(window.location.href);
  return searchParams.get("productId");
};

async function getMainProductInfo() {
  const productId = getProductIdFromURI();

  if (!productId) {
    return;
  }
  const result = await getProductInfo(productId);
  return result[0];
}