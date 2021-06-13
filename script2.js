
var a1 = prompt('işleminiz (+,-,*,/)');
var a2 = prompt('ilk sayınız');
var a3 = prompt('ikinci sayınız');

if (a1 == '+') {
    console.log(Number(a2)+Number(a3));
} else if (a1 == '-') {
    console.log(Number(a2)-Number(a3));
} else if (a1 == '*') {
    console.log(Number(a2)*Number(a3));
} else if (a1 == '/') {
    console.log(Number(a2)/Number(a3));
}