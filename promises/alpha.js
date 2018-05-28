/* @Need for promises?
    Promises just like callbacks allow us to wait for certain code to finish
    execution prior to running the next bit of code.

    e.g, to wait for API data before processing it

  @What is promise?
    Eventual result of an asynchronous operation

  @States of a promise :
    pending, fulfilled, rejected
      */

//Example 1
function sum(a, b) {
  return new Promise(res => {
    var c = a + b
    res(c)
  })
}

sum(1, 2).then((x) => {
  console.log(x)
})    //Prints 3


//Example 2
function wait(period) {
  return new Promise((resolve) => {
    return setTimeout(resolve, period);
  })
}

wait(2000).then(() => console.log("Hello"));  // Prints 'Hello' after 2s
