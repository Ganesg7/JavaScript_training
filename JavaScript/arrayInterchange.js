let array=[12,13,15,16,17];
let order=[1,0,3,2,4];
let arr=[];
for(var x=0;x<array.length;x++){
    var temp=order[x];
     arr[temp]=array[x];
}

for(var ar of arr){
    console.log(ar);
}