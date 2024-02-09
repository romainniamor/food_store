const replaceFrenchCommaWithDot = (price) => {
  if (typeof price === "string") {
    return price.replace(",", ".");
  }
  return price;
};

export function formatPrice(priceToFormat) {
  let price = priceToFormat;

  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(priceToFormat);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price);
  return formattedPrice;
}
