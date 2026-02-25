function triangle(a, b, c) {
    if (a == b && b == c) {
        console.log("Equilateral");
    } else if (a == b || b == c || a == c) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}

triangle(5, 5, 5);