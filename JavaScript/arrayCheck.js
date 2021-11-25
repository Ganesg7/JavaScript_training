let array=[2,3,4,5,6,7,8,9,1,11,12,14,15,16,17,18,10];

let value=12;
var app=0;

for(var x=0;x<array.length;x++){
    if(array[x]==value){
        console.log("Value Find in index"+ x)
        app+=1;
        break;
    }
    
}
if(app>0)
{
console.log(value+" Value IS present in Array");
}
else if(app==0){
    console.log(value+" value is not present");
}