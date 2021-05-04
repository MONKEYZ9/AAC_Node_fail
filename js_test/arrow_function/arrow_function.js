const foo = () => {
    console.log("arrow_function");
};
// function foo() {
//     console.log("asd");
// }
// 위랑 같다는 거야

foo();

const foo2 = (x) => { // 매개변수 x가 있으면 이게 가능하다는 거야
    return x; // x를 다시 받는거야
}; 

// console.log(foo2("arrow"));

foo2("arrow");


const foo3 = (x, y) => x+y; // return을 바로 한 경우, 이렇게 된다.
console.log(foo3(1,5));

const foo4 = (x, y) => {
    return x+y; // 2줄이상이면 이렇게 간다는 거야
}; 
console.log(foo4(1,6));