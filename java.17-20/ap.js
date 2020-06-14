// chapter 17-20 //

//task 1 //
var cities = [
    []
]

//task 2//
var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write(arr[0] + "</br>" + arr[1] + "</br>" + arr[2]);

//task 3 //
for (var i = 0; i <= 10; i++) {
    document.write(i + "</br>");
}

//task 4 //
var data_1 = prompt("Enter the number to show its multiplication table: ");
var data_2 = prompt("Enter the length of table: ");
var num = parseInt(data_1);
var len = parseInt(data_2);
for (var i = 0; i <= len; i++) {
    var result = num * i;
    document.write(num + "x" + i + "=" + result + "</br>");
}

//task 5 //
//counting
for (var i = 0; i <= 15; i++) {
    document.write(i + " ");
}

//reverse-counting
for (var i = 10; i >= 1; i--) {
    document.write(i + " ");
}

//even
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + " ")
}

//odd
for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ");
    }
}
//series
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k" + " ");
    }
}
// task 6 //
var items = [24, 53, 78, 91, 12];
var num = 0;
document.write("Array items: ")
for (i = 0; i <= items.length; i++) {
    document.write(items[i] + " ");
    if (items[i] > num) {
        num = items[i];
    }
}
document.write("</br>" + "The largest item is: " + num);

//task 7 //
var items = [24, 53, 78, 91, 12];
var num = 100000000;
document.write("Array items: ")
for (i = 0; i <= items.length; i++) {
    document.write(items[i] + " ");
    if (items[i] < num) {
        num = items[i];
    }
}
document.write("</br>" + "The smalles item is: " + num);