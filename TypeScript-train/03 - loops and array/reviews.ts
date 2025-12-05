let reviews : number[] = [1,2,5.6,7,8,10,15];

let total:number =0
for (let i=0;i<reviews.length;i++){
    console.log(reviews[i])
    total+=reviews[i]
}

console.log(`avg review : ${total/reviews.length}`)