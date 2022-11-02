let num = 12
let count = 1
for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        count--
    }
}

if (count == 2) {
    console.log("Its a prime number")
}
else {
    console.log("Its not a prime number")
}