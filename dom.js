const newlist = document.getElementById('unorderlist');
const items = ["About","Skill","Contact"]
const newitems = items.map((item) => {
// console.log(item);
const li =document.createElement('li');
li.innerText=item;
// newlist.append(li);
return li;
});
newlist.append(...newitems)
// newlist.prepend(...newitems)



let menu = document.getElementById('animals');
let li = document.createElement('li');
li.innerText ='tiger';
menu.insertBefore(li,menu.firstElementChild);