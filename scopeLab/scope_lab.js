// var globalVar = "I'm global var";
// let globalLet = "I'm global and also scoped with let";
// const globalConst = "I'm global constant";

// {
//     var blockVar = "I'm block-scoped var";
//     let blockLet = "I'm block-scoped let";
//     const blockConst = "I'm block-scoped const";
// }

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
