function isFizz(x: number): boolean {
    return x % 3 === 0;
}

function isBuzz(x: number): boolean {
    return x % 5 === 0;
}

function numberToFizzBuzz(x: number): string {
    let output: string = "";
    if (isFizz(x))
        output += "Fizz";
    if (isBuzz(x))
        output += "Buzz";
    if (!output.length)
        output = x.toString();
    return output;
}

for (let i = 1; i <= 100; ++i)
    console.log(numberToFizzBuzz(i));
