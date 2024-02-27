// function amarApi() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => display(data));
// };

// function display(data) {
//     const ids = document.getElementById('ulClass')
//     for (const i of data) {
//         // console.log(i.username);
//         const li =document.createElement('li');
//         li.innerText = i.username;
//         ids.appendChild(li);
//     }
// }

// function genjam(data) {
//     const ids = document.getElementById('ulClass')
//     for (const i of data) {
//         // console.log(i.username);
//         const li =document.createElement('li');
//         li.innerText = i.name;
//         ids.appendChild(li);
//     }
// }
// function beyadob(data) {
//     const data = document.getElementById('ulClass');
//     for (const iterator of data) {
//         const li = document.createElement("li");
//         li.innerText=iterator.street;
//         data.appendChild(li);
//     }
// }

function myFunc() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => amaardesh(data))

}
function amaardesh(data) {
    const connect = document.getElementById('major')
    for (const dat of data) {
        // dat.style.backgroundColor ="red";
        console.log(dat);
        const div = document.createElement('div');
        div.classList.add('color');
        div.innerHTML=`
        <h4> data: ${dat.title}</h4>
        <h5> bodys: ${dat.body}</h5>
        <h6> id: ${dat.id}
        `
        connect.appendChild(div)
    }
}
myFunc()