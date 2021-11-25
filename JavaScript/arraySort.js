let input="1,3,5,7,9,2,4,6,8,10,100,1000,1111";
let stringArray=input.split(",");

for(var x=0;x<stringArray.length;x++){
    for(var y=x+1;y<stringArray.length;y++){
        if(stringArray[x]>stringArray[y]){
            var temp=stringArray[x];
            stringArray[x]=stringArray[y];
            stringArray[y]=temp;
        }
    }
}
console.log("-------------STRING--------------------");
for(var arr of stringArray){
    console.log(arr);
}
console.log("---------------REVERSE STRING------------------");

stringArray.reverse();
for(var arr1 of stringArray){
    console.log(arr1);
}
console.log("----------------INTEGER-----------------");
for(var x=0;x<stringArray.length;x++){
    stringArray[x]=parseInt(stringArray[x]);
}

for(var x=0;x<stringArray.length;x++){
    for(var y=x+1;y<stringArray.length;y++){
        if(stringArray[x]>stringArray[y]){
            var temp=stringArray[x];
            stringArray[x]=stringArray[y];
            stringArray[y]=temp;
        }
    }
}
for(var arr2 of stringArray){
    console.log(arr2);
}

console.log("----------------REVERSE INTERGER-----------------");
for(var x=0;x<stringArray.length;x++){
    for(var y=x+1;y<stringArray.length;y++){
        if(stringArray[x]<stringArray[y]){
            var temp=stringArray[x];
            stringArray[x]=stringArray[y];
            stringArray[y]=temp;
        }
    }
}
for(var arr2 of stringArray){
    console.log(arr2);
}
