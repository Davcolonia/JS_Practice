
function fizzBuzz(num) {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz " + i);
        } else if (i % 3 == 0) {
            console.log("Fizz " + i);
        } else if (i % 5 == 0) {
            console.log("Buzz " + i);
        }
    }
}

fizzBuzz(100);


function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

const testGrades = [-1, 0, 59, 60, 69, 70, 79, 80, 89, 90, 91, 99, 100, 101];

testGrades.forEach(score => {
    //    console.log(`Input: ${score} -> ${getGrade(score)}`)
})

