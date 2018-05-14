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

async function doSomething() {
  try {
    const resSum = await sum(1, 2)
    console.log("sum:", resSum);
    const resSubtract = await subtract(resSum, 4)
    console.log("subtract:", resSubtract);
  } catch (e) {
    console.log("e:", e);
  }
}

doSomething()
