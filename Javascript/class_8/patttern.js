
//chack number even or odd
let i=13;
if(i%2==0)
{
          console.log("number is even");
}
else{
          console.log("odd number");
}

//divisble by 5 and 11
let num=55;
if(num%5===0 && num%11===0){
          console.log(num+ "is divisible by both 5 and 11");
}
else {
          console.log(num+ "is not divisible by 5 and 11");
}

//posotive nagative zero 
let val=-3;
if(val>0){
          console.log(val+ "is positive");
}
else if(val<0){
          console.log(val+ "is nagative");
}
else{
          console.log("number is zero");
}

 //divisible by 2,3,5
 let numm=30;
 if(numm%2===0 && numm%3===0 && numm%5===0)
 {
          console.log(numm +=" is divisible by 2,3,5");
 }
 else {
          console.log(numm +=" divisible by all three");
 }

  //reverse number
 let numbr = 1234;
 let rev=0;
 let original=numbr;
 while(numbr>0){
          let digit = numbr % 10;
          rev=rev * 10 + digit;
          numbr=Math.floor(numbr / 10);
 }
 console.log("reversed=",rev);

 //palimdrome  let nu=121
 let temp=nu;
 let revr=0;
 while(temp>0){
          let digit = temp%10;
          revr=revr*10 + digit;
          temp=Math.floor(temp/10);
 }
 if(revr===nu)
 {
          console.log(nu+ " is palimdrome");
 }
 else{
          console.log(nu + "is not palimdrome")
 }
//hcf two number
function findHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(findHCF(12, 18));
//lcm of two number
function findHCd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function findLCM(a,b){
          return(a*b)/findHCF(a,b);
}
console.log(findLCM(12,18));
//two no are co prime
function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function isCoprime(a, b) {
    return gcd(a, b) === 1;
}

console.log(isCoprime(14, 25));
 //sum of first & last digit equal
let value=4564;
let start=numm;
let last=numm%10;
while(numm>=10){
          numm=Math.floor(numm/10);

}
let first=numm;
if(first===last)
{
          console.log("first and last digit are equal");
}
else{
          console.log("first and last digit are not eqal");
}

//count number of digitss
let numvber=987654;
let count=0;
while(numvber>0){
          numvber= Math.floor(numvber/10);
          count++;
}
console.log("total digits=",count);

//reverse number is divisible by 3
let nuum=123;
let tempp=nuum;
let revv=0;
while(tempp>0){
          let digit = temp%10;
          revv=revv*10+digit;
          tempp=Math.floor(tempp/10);
}
if(revv%3===0)
{
          console.log("reversed is divisible by 3")
}
else{
          console.log("reversed is not divisible")
}

//sum of digit
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1234));

//product of digit
function productOfDigits(num) {
    let product = 1;
    while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}

console.log(productOfDigits(1234));

//largest digit
function largestDigit(num) {
    let max = 0;
    while (num > 0) {
        max = Math.max(max, num % 10);
        num = Math.floor(num / 10);
    }
    return max;
}

console.log(largestDigit(59324));

//smallest digit
function smallestDigit(num) {
    let min = 9;
    while (num > 0) {
        min = Math.min(min, num % 10);
        num = Math.floor(num / 10);
    }
    return min;
}

console.log(smallestDigit(59324));

//frequency of each digit
function digitFrequency(num) {
    let freq = Array(10).fill(0);

    while (num > 0) {
        freq[num % 10]++;
        num = Math.floor(num / 10);
    }
    return freq;
}

console.log(digitFrequency(1123451));

//stricitly increasing digits
function isIncreasing(num) {
    let prev = 10;
    while (num > 0) {
        let d = num % 10;
        if (d >= prev) return false;
        prev = d;
        num = Math.floor(num / 10);
    }
    return true;
}

console.log(isIncreasing(1234));
console.log(isIncreasing(1243));

//factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    return fact;
}

console.log(factorial(5));

//chack strong number
function isStrong(num) {
    let temp = num, sum = 0;

    function fact(n) {
        let f = 1;
        for (let i = 1; i <= n; i++) f *= i;
        return f;
    }

    while (temp > 0) {
        sum += fact(temp % 10);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

console.log(isStrong(145));
console.log(isStrong(123));

//sum of factorial
function sumFactorialDigits(num) {
    function fact(n){
        let f = 1;
        for(let i=1;i<=n;i++) f*=i;
        return f;
    }

    let sum = 0;
    while (num > 0) {
        sum += fact(num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumFactorialDigits(145));

//strong number in a range
function strongInRange(start, end) {
    let res = [];

    function fact(n){
        let f = 1;
        for(let i=1;i<=n;i++) f*=i;
        return f;
    }

    function isStrong(num){
        let temp=num, sum=0;
        while(temp>0){
            sum += fact(temp%10);
            temp = Math.floor(temp/10);
        }
        return sum===num;
    }

    for(let i=start; i<=end; i++){
        if(isStrong(i)) res.push(i);
    }
    return res;
}

console.log(strongInRange(1, 500));

//prime & composite
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i*i <= n; i++)
        if (n % i === 0) return false;
    return true;
}

console.log(isPrime(17));
console.log(isPrime(20));
//print premes in a range

function primeRange(start, end) {
    let primes = [];
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++)
            if (n % i === 0) return false;
        return true;
    }

    for (let i = start; i <= end; i++)
        if (isPrime(i)) primes.push(i);

    return primes;
}

console.log(primeRange(10, 30));

//prime digits(2,3,5,7)
function countPrimeDigits(num) {
    let count = 0;
    while (num > 0) {
        let d = num % 10;
        if ([2,3,5,7].includes(d)) count++;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(countPrimeDigits(23571));

//circular prime
function isCircularPrime(num) {
    if (num < 10 || num > 99) return false;

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++)
            if (n % i === 0) return false;
        return true;
    }

    let rev = Number(String(num).split("").reverse().join(""));

    return isPrime(num) && isPrime(rev);
}

console.log(isCircularPrime(13));
console.log(isCircularPrime(23));
console.log(isCircularPrime(12));
//perfect number
function isPerfect(num) {
    let sum = 0;

    // Find proper divisors
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    // Check perfect number
    if (sum === num) {
        console.log(num + " is a Perfect Number");
    } else {
        console.log(num + " is NOT a Perfect Number");
    }
}

isPerfect(6);
isPerfect(28);
isPerfect(12)
//gcd three number
function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function gcdThree(a, b, c) {
    return gcd(gcd(a, b), c);
}

console.log(gcdThree(12, 18, 24));
//fibonacci series
function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) console.log(b);

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacci(7);
//number belong to fibbonacci series
function isFibonacci(num) {
    let a = 0, b = 1;

    if (num === 0 || num === 1) return true;

    let c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

console.log(isFibonacci(13));
//sum of n odd number
function sumOdd(n) {
    return n * n;
}

console.log(sumOdd(5));
