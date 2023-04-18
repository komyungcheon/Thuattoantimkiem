function demlanxuathien(number, value) {
    var count = 0;
    number.forEach(function (item) {
        if (value === item)
            count++;
    });
    return count;
}
console.log(demlanxuathien([1, 2, 2, 3, 4, 4, 5, 6, 7, 8], 2));
