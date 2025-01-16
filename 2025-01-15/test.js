let arr =[1,2,3]

let s = arr.reduce(function(acc,num){
  return acc + num
},0)

console.log(s)