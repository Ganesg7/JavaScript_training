var salary=28769,bouns,bounsamount;
function Bouns(salary){
if(20000>salary){
    bouns=salary*18/100;
    return bouns;
}
else if(20000<salary)
{
    bouns=salary*19/100;
    return bouns;
}
}
bounsamount=Bouns(salary);
console.log(bounsamount);