//Adding Digits of a number
var a=4567899235,sum=0,mod;
while(a)
{
mod=a%10;
sum=sum+mod;
a= Math.floor(a/10);  //Math.floor rounds of your answer to its nearest integer
}
console.log("The Sum of digit is :",sum);