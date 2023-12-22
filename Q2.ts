`Implement a simple shopping cart program using an array. Create functions to add items, remove
 items, and update quantities using the splice method. Print the cart's contents after each 
 operation`;

let cart: string[] = ["Apple", "Orange"];
console.log(cart);
function addItems(item: string) {
  cart.push(item);
  console.log(`Added ${item} to cart Cart contents:`, cart);
}
function removeItems(item: string) {
  let index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1);
  }
  console.log(`Removed ${item} from cart Cart contents:`, cart);
}
function updateQuantity(item: string, quantity: number) {
  let index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1, `${item} ${quantity}`);
  }
  console.log(`Updated ${item} quantity to ${quantity}. Cart contents`, cart);
}
addItems("kiwi");
removeItems("Apple");
updateQuantity("Orange", 2);
