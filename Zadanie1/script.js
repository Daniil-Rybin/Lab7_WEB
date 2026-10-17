function findMax() {
    var n = parseInt(document.getElementById('num').value);
    var a = Math.floor(n / 100);
    var b = Math.floor(n / 10) % 10;
    var c = n % 10;                     

    var max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    document.getElementById('result').textContent = max;
}