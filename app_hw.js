function encode(num){
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