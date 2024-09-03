// The reduce() method in JavaScript processes an array and reduces it to a single value by applying a function to each element (from left to right)

// Example-
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

// console.log(myTotal);
// Expected Output-
// acc: 0 and curval: 1
// acc: 1 and curval: 2
// acc: 3 and curval: 3
// 6


const myTotal = myNums.reduce( (acc, cur) => acc + cur,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "footwear",
        price:  2000
    },
    {
        itemName: "Bodycon Dress",
        price:  5000
    },
    {
        itemName: "Cocktail Dress",
        price:  10000
    },
    {
        itemName: "Shirt-Pants",
        price:  6000
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay); 23000
