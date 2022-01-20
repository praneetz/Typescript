let myName:String="Praneet negi"
console.log(myName)

class myInfo{
    myName():void{
        console.log("Hello my name is Praneet Negi")
    }
}

let obj=new myInfo
// console.log(obj.myName())

var str = '1' 
var str2:number = <number> <any> "2"   //str is now of type number 
// console.log(typeof(str2))
// console.log(typeof(str))

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12";
console.log(num);
