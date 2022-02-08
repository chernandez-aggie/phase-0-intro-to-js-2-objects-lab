// Write your solution in this file!
const employee = {
    name: "Consuelo Buentello",
    streetAddress: "123 Manzana Calle",
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = {...object};
    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;

    return object;
}

function deleteFromEmployeeByKey(object, key){
    const newObj = {...object};
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];

    return object;
}

console.log("Hello world");