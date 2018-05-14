/** @Chaining promises
      Promises allow us to chain asynchronous operations together
      We can specify subsequent operation to start only when previous operation has finished
 */

//Example 1
function sum(a, b) {
  return new Promise(res => {
    var c = a + b
    res(c)
  })
}

function subtract(a, b) {
  return new Promise(res => {
    var c = a - b
    res(c)
  })
}

sum(1, 2).then((x) => {
  console.log("sum:",x)
  return subtract(x,4)
}).then((y)=>{
  console.log("subtract:",y);     //Prints sum: 3
})                                //  subtract: -1




//Example 2
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
}).then((result) => {
  console.log(result)
  return result + 2
}).then((result) => {
  throw new Error("Failed here")
  console.log(result)
  return result + 2
}).then((result) => {
  console.log(result)
  return result + 2
}).catch((e) => {
  console.log("e:", e);
})
