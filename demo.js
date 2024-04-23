/*function add(a,b)
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
console.log(p.textContent)


function change()
{
    p.textContent="Bye World"
}
//addition
var box1=document.getElementById("num1")
var box2=document.getElementById("num2")
var result=document.getElementById("result")



function addd()
{
    var box1value=Number(box1.value)
var box2value=Number(box2.value)
var total=box1value+box2value 
    result.textContent=total
}
//math random number
var gameresult=document.getElementById("gameresult")
var score=document.getElementById("score")
var totalscore=10
var guessnumber=document.getElementById("guessnumber")
var randomnumber=Math.floor(Math.random()*10)+1


function check()
{
    var enternumber=guessnumber.value
    if(randomnumber==enternumber)
    {
        
        console.log("You are Right")
        gameresult.textContent="Right"
        alert("You Won.....")
    }
    else{
        totalscore=totalscore-1
        score.textContent="score : "+totalscore
        gameresult.textContent="Wrong"
    }
    
}

var box=document.getElementById("box")

function change()
{
    box.setAttribute("class","withdmax")
    
}

var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")

function print()
{
    result.textContent=inputbox.value
    
}
*/

var result=document.getElementById("result")

function update()
{
    var listitem=document.createElement("h1")
    listitem.textContent="Hello"
    result.append(listitem)
    
}