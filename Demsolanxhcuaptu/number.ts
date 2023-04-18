function demlanxuathien(number: number[], value: number) {
    let count = 0;
    number.forEach(item => {
        if (value === item) count ++;
    })
    return count;
}

console.log(demlanxuathien([1,2,2,3,4,4,5,6,7,8],2));