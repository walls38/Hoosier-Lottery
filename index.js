function lotteryNumber(){
    let num=(1 + Math.floor(Math.random()* 49))
    return(`${num}`)
};
let getSixNumbers = function () {
    for(let lotteryNumber= 1; lotteryNumber<=5;lotteryNumber++) {
        console.log((1 + Math.floor(Math.random()* 49)))
    }
};
  console.log(lotteryNumber());
  getSixNumbers();
    