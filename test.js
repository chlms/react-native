<<<<<<< HEAD
const $btnAdd = document.getElementById('btnAdd');
$btnAdd.addEventListener('click',()=>{
    console.log('클릭');
});

const $btnDel = document.getElementById('btnDel');
$btnDel.addEventListener('click',()=>{
    console.log('삭제');
});

const $btnUpdate = document.getElementById('btnUpdate');
$btnUpdate.addEventListener('click',()=>{
    console.log('수정');
});
=======
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { a: 5, f: 6 };

const x = Object.assign({}, obj1, obj2, obj3); //es5
console.log(x);

const y = { ...obj1, ...obj2, ...obj3 }; //es6
console.log(y);
>>>>>>> dd297a2 (릭트테스트)
