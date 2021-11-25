let array=[12,14,15,16,17,18,19,22,24,26,27,28,3,5,7,8,12,13];
let mul=1,sum=0,oddMult=1,oddSum=0;
for(var x=0;x<array.length;x++){
    if(array[x]%2!=0){

        sum+=array[x];
        mul*=array[x];
    }
}
for(var y=1;y<array.length;y+=2){
    oddSum+=array[y];
    oddMult*=array[y];
}

console.log("Sum Of All ODD Element "+ sum);
console.log("Product Of ODD Element "+mul);
console.log("Sum of ODD index "+ oddSum);
console.log("Product of ODD index "+oddMult);