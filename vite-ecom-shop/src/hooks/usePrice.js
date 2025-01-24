/**
 cartItems: [
  { price: 100, quatity: 1, ... },
  { price: 100, quatity: 1, ... },
 ]

 output: 200
*/

export const calculateItemTotal = (item) => {
  const price = Number(item.price);
  const quantity = Number(item.quantity);

  if (isNaN(price) || isNaN(quantity)) {
    console.error("Invalid price or quantity for item:", item);
    return 0;
  }
  return price * quantity;
};

export function totalCost(items = []) {
  const cost = items.reduce(
    (sum, item) => (sum += calculateItemTotal(item)),
    0
  );

  return cost;
}
