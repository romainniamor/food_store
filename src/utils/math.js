export function formatPrice(priceToFormat) {
  let price = fixePrice(priceToFormat);
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price);
  return formattedPrice;
}

function fixePrice(price) {
  return price.toFixed(2);
}
