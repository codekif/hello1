function add(a,b)
{
    console.log(a+b)

}
add(12,12)
function area(l,b)
{
    var a=l+b
    console.log(a)
}
area(11,15 )

function added(a,b)
{
    return a+b
}
var c=added(12,100)
console.log(c)

//If else
var color="green"
if(color == "red")
{
    console.log("Stop")
}
else if(color == "Yellow")
{
    console.log("Get ready")
}
else if(color == "green"){
    console.log("Go")
}

// student mark 
var score = 98
if(score>=50 && score<80)
{
    console.log("You pass")
}
else if(score>=80 && score<=90)
{
    console.log("you got good mark")
}
else if(score<50)
{
    console.log("You fail")
}
else if(score>90)
{
    console.log("Excellent Work")
}

// for loop
for(count=1;count<=10;count=count+1)
{
    console.log(count+"x2="+1*2 )
}
//'dom' document object model
var p=document.getElementById("one")
console.log(p.textContent="bye")
p.textContent="bye World"
