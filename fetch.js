// const user = {
//     id:4,
//     name: 'John',
//     age: 21
// }
// console.log(user);
// const result = JSON.stringify(user)
// console.log(result);
// const goback = JSON.parse(result);
// console.log(goback);


function pressme() {
    fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(data => caller(data));
}
function caller(data) {
    const ids =document.getElementById('unorderlist');
    for (const dat of data) {
        console.log(dat.title);
        const li = document.createElement('li');
        li.innerText=dat.title;
        ids.appendChild(li);
    }
}