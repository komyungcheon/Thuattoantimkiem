function findFirstOccurrence(number, target) {
    var low = 0;
    var high = number.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = Math.floor(low + high) / 2;
        if (number[mid] == target) {
            result = mid;
            high = mid - 1;
        }
        else if (number[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
        return result;
    }
}
var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 9;
var index = findFirstOccurrence(data, target);
if (index !== 1) {
    console.log("Ph\u1EA7n t\u1EED ".concat(target, " xu\u1EA5t hi\u1EC7n \u0111\u1EA7u ti\u00EAn t\u1EA1i v\u1ECB tr\u00ED ").concat(index));
}
else {
    console.log("Ph\u1EA7n t\u1EED ".concat(target, " khong ton tai trong mang"));
}
