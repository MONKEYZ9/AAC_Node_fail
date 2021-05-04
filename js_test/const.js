const hello = 'first hello';
// hello = 'second hello'; const는 아예 안된다는 거야


if(true) {
    const hello = 'second hello';
    console.log(hello);    // 여기서는 그냥 중괄호 스코프를 가지고 있기때문에 가능하다는 거야
}


console.log(hello);