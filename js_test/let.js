let hello = 'first hello';

console.log(hello);

// let은 함수를 다시 재정의 할 수 있다는 거야
// 하지만 다시 let으로 지정하는 건 안된다는 거야

if(true) {
    let hello = 'second hello';
    console.log(hello); // 이러면 let 안에서만 되는거야
}
console.log(hello); // 여기서는 first hello가 뜨게 되어있어