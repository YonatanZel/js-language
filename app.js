/************************Strings */
// const str1 = "abc";
// const str2 = "abc";
// console.log(`srt1 == str2 is ${str1 == str2}`);
// console.log(`srt1 < s is ${str1 < "s"}`);
// console.log(`"123" > 23 is ${"123" > 23}`);
// /*********************************************** */
// console.log(`"123" > 23 is ${"123" > 23}`);
// console.log(`"abc" < 23 is ${"abc" < 23}`);
// console.log(`"abc" != 23 is ${!("abc" == 23)}`);
// /************************************************* */
function stringProcessing(str){
    const strP = "" + str;
    console.log(`"${str}"[4] is ${str[4]}`);
    console.log(`length of "${str}" is ${strP.length}`);
    console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
    console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2,5)}`);
    console.log(`index of substring "ll" in the "${str}" is; last index of substring l in the "${str}" is ${strP.indexOf("ll")}; ${strP.lastIndexOf("ll")}`);

}
stringProcessing("abcd*lmn*ll(oo&&tt");

function encode(num, base) {
    //base from 2 to 10
    let res = "";
    do {
         const digit = Math.trunc(num % base);
         const symb = getSymbol(digit);
         res = symb + res;
         num = Math.trunc(num / base);
    } while(num >= 1);
    return res;
}
function getSymbol(digit){
    console.log(digit);
    return "" + digit; //it will work only for base <=10
}
console.log(encode(10,2));

function encode2(num){
    let res = "";
    do{
        const btoa = Math.random().toString(36).substring(3, 5);
        const digit = Math.trunc(num % 10);
        digit == btoa; 
        res = btoa + res;
        num = Math.trunc(num / 10);
        }while(num>=1);
    return res;
}
console.log(encode2(15879));


