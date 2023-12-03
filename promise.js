const myPromise = new Promise(function(resolve, reject) {
  const num = Math.random();
  setTimeout(function() {
    if(num > 0.5) {
      resolve(num);
    } else {
      reject(num)
    }
  }, 1000);
})

myPromise.then(function(result) {
  console.log(`Success: ${result}`)
}).catch(function(result) {
  console.log(`Failure: ${result}`)
})













// let myPromise = new Promise((resolve, reject) {
//   setTimeout(() => {
//     let randomNumber = Math.random();
//     if(randomNumber > 0.5) {
//       resolve(randomNumber)
//     } else {
//       reject(randomNumber)
//     }
    
//   }, 1000);
// });




















// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

