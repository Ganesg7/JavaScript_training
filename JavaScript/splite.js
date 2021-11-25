let input="10,20,30,40,50,60,70,80,90";
let arrays=input.split(",");

for(var x=0;x<arrays.length;x++){
    arrays[x]=parseInt(arrays[x]);
}
for(var ar of arrays){
    console.log(ar);
}
console.log(typeof arrays[1]);