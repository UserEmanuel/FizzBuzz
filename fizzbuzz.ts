interface FizzBuzzVisitorInt {
    function visit(x: FizzBuzzNumber);
}

interface IntFizzBuzzNumber {
    function accept(visitor: FizzBuzzVisitorInt);
}

class FizzBuzzNumber implements IntFizzBuzzNumber {
    value: number;
    output: string;

    constructor(value: number) {
        this.value = value;
        this.output = "";
    }

    function accept(visitor: FizzBuzzVisitorInt) {
        visitor.visit(this);
    }
}

class FizzVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {
        if (num.value % 3 == 0)
            num.output += "Fizz";
    }
}

class BuzzVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {
        if (num.value % 5 == 0)
            num.output += "Buzz";
    }
}

class BangVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {
        if (num.value % 7 == 0)
            num.output += "Buzz";
    }
}

class BongVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {
        if (num.value % 11 == 0)
            num.output = "Bong";
    }
}

class FezzVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {
        if (num.value % 13 != 0)
            return;
        let position: number = num.output.length;
        for (let i = 0; i < num.output.length; ++i) {
            if (num.output.charAt(i).toLowerCase() === "b") {
                position = i;
                break;
            }
        }
        num.output = num.output.slice(0, position) + "Fezz" + num.output.slice(position);
    }
}

class ReverseVisitor implements FizzBuzzVisitorInt {
    function visit(num: FizzBuzzNumber) {

    }
}

function numberToFizzBuzz(x: number): string {
    let output: string = "";
    output = applyFizz(x, output);
    output = applyBuzz(x, output);
    output = applyBang(x, output);
    if (!output.length)
        output = x.toString();
    return output;
}

for (let i = 1; i <= 100; ++i)
    console.log(numberToFizzBuzz(i));
