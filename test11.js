let input = ["name", "Pesho", "age", "23", "gender", "male"];

function result(name, age, gender) {
    let obj = {
        name: name,
        age: age,
        gender: gender
    };
    return obj;
}

let output = result(input[1], input[3], input[5]);

console.log(output);