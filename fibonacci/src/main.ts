
function fibonacci(number:number):number {
    let sum = 0;
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < number; i++) {
        c = a + b;
        a = b;
        b = c;
        sum += c;
    }
    return sum;
}