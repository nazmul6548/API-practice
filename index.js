function amarApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data));
};

function display(data) {
    const ids = document.getElementById('ulClass')
    for (const i of data) {
        // console.log(i.username);
        const li =document.createElement('li');
        li.innerText = i.username;
        ids.appendChild(li);
    }
}

function genjam(data) {
    const ids = document.getElementById('ulClass')
    for (const i of data) {
        // console.log(i.username);
        const li =document.createElement('li');
        li.innerText = i.name;
        ids.appendChild(li);
    }
}
// function beyadob(data) {
//     const data = document.getElementById('ulClass');
//     for (const iterator of data) {
//         const li = document.createElement("li");
//         li.innerText=iterator.street;
//         data.appendChild(li);
//     }
// }