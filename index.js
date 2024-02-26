function amarApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data));
};

function display(data) {
    for (const i of data) {
        console.log(i.username);
    }
}