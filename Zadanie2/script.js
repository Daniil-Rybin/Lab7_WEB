function gcd(x, y) {
    while (y != 0) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function check() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    var result;
    if (gcd(a, b) == 1) {
        result = "Числа " + a + " и " + b + " взаимно простые";
    } else {
        result = "Числа " + a + " и " + b + " не взаимно простые";
    }

    document.getElementById('result').textContent = result;
}