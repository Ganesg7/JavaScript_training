const array=[12,2,11,55,23,35,56,67,221,34,34,67,78,24,887,23,1,35];

for(var x=0;x<array.length;x++){
    for(var y=x+1;y<array.length;y++){

        if(array[x]>array[y]){
            var temp=array[x];
            array[x]=array[y];
            array[y]=temp;
        }
    }
}
console.log("Length Of the array "+array.length);
for(var arr of array){
console.log(arr);
}
console.log("Min Value In The Array is "+array[0]);
console.log(typeof array[0]);