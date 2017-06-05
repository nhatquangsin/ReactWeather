var numbers = [1, 2, 5, 10];

var addStatement = (numbers) => {
    var sum = 0;
    numbers.forEach((number) => sum += number);
    return sum;
};

console.log(addStatement(numbers));