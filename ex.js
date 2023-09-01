// we can pass function as a value in javascript

let a=function(val)
{
    console.log(val*val);
}
function capitalize (str)
{
    let str1=str.slice(0,1);
    let str2=str1.toUpperCase()+str.slice(1);
    return str2;
}
let day={
    1:"Mon", 2:"tue",3:"Wed",4:"thrus",5:"Fri",6:"Sat",7:"Sunday"
}
function returnDay (s)
{
   
    if(num>='1' && num<='7')
    {
        return day[num];
    }
    else
        return 'null'
}



let c;
function gigi()
{
     c={
        Name:"Ankit",
        Roll_No:25
    }
    for(let i in c)
    {
        console.log(c[i])
    }
}
let s=function fun(arg)
{
   gigi()
   gigi()
}
s(gigi)

// // returning function-in this only one function return to r
// function quiz(min,max)
// {
//    return r=function(num)
//    {
//     if(num>min && num<max)
//         return true
//     else    
//         return false
//    }
// }

// factory function-in this we can make many function as many we want
// we can store ranges at different variables
// function quiz(min,max)
// {
//    return function(num)
//    {
//     if(num>min && num<max)
//         return true
//     else    
//         return false
//    }
// }


// function and method are two differnet things
// method is called by having object name.method
// function do not reqire object name
// all method are function but all function are not method
// let Youtube={
//     Name : "Ankit",
//     Likes:300,
//     View:100000,
//     Subscribers:"20K",
//     Comment:function()
//     {
//         return "I like you";
//     }
//     // Shortcut
//     // Comment()
//     // {
//     //     return "I like you"
//     // }
// }


// this-the value of these depends on invocation context it is used in
// here it refer to youtube object
const Youtube={
    Name : "Noob",
    Likes:300,
    View:100000,
    Subscribers:"20K",
    Comment(){
        console.log(this)
       console.log(`${this.Name} likes you` )
    }
}

// here this refer to window object 
let com=Youtube.Comment


let i=0;
let hen={
    name:"helen",
    eggcount:0,
    layegg()
    {
       this.eggcount+=1;
        return "EGG";
    }
}

const old=[
    {
        firstname:"harry",
        lastname:"potter"
    },
    {
        firstname:"Ankit",
        lastname:"Sharma"
    },
    {
        firstname:"Ravan",
        lastname:"potter"
    },
    {
        firstname:"harry",
        lastname:"Bhai"
    }
]
// Implicit return - automatically return the function and arrow function
// map-create a new with the result of calling a array for every element
const new_array= old.map((first_name)=>(
     first_name.firstname
))

// filter-creates a new array with all element that passes test implemented using function
// helps in filter something like good movie, bad rated movie
const new1=old.filter((first_name)=>{
   return first_name.firstname==='harry'
})

// console.log("hello wait")
// // we have to pass function as 1st argument and 2nd-delay time in ms
// let id=setTimeout(()=>{
//     console.log("...wait?")
// },3000)
// let id1=setTimeout(()=>{
//     console.log("goodbye")
// },6000)


// run unti we stop using id and clear interval
// let id3=setInterval(()=>{
//     Math.floor(Math.random()*6)+1
// },3000)

// return true or false depend on condition
// let score=[80,90,76,75,78]
// let bool=score.every((num)=>
// {
//     return num>=70
// })
// let bool= score.every((num)=>
// {
//     return num>=80
// })
// let bool=score.some((num)=>
// {
//     return num>=80
// })

// let score=[80,90,76,75,78]
// we can give second parameter i.e where to start
// const new4=score.reduce(function(a,b){
//     return a+b;
// },100)

// to find min and max
const new5=score.reduce(function(min,num){
    if(min>num)
        return num;
    return min;
})
// this keyword in arrow function points to its scope only

// spread operator-syntax-... -used to spred the object array string
// 1. spread in function-all the characater in function passed as seperate argument
let nums=[1,3,4,6,5,9,77,4,6,5,4,2]

Math.max(4,4,55,5,5,5,5,6,4,8,9,7,7,777,4,5,66,4)
// it gives result - 777
Math.max(nums)
// NaN-Not a Number
Math.max(...nums)
// 77
console.log(nums)
// print array-[1,3,4,6,5,9,77,4,6,5,4,2]
console.log(...nums)
// 1 3 4 6 5 9 77 4 6 5 4 2 -passes as seperate argument
console.log("hello")
// hello
console.log(..."hello")
// h e l l o


// spread in array-it allows iterable in array
const pet=["pi","jk","dnf","jd","djfk"]
const pet1=["ksdj","jsd","k"]
// spread makes a copy of pet,pet1 and we can add more data in our new array 
// let allpets=[4,"eej",...pet,...pet1,"djkd",1,11,4,5]



