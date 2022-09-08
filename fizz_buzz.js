for (let i = 1; i <= 100; i++) {
    let v = ""
    if (i % 3 == 0 && i % 5 == 0) {
        v = "FizzBuzz";
        console.log(v);
    } else if (i % 3 == 0) {
        v = "Fizz";
        console.log(v);
    } else if (i % 5 == 0) {
        v = "Buzz";
        console.log(v);
    }
    else {
        v = i;
        console.log(v)
    }
}