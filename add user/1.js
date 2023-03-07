var arr = [];
arr[0] = ['sagar', 's@gmail.com', 'M'];
console.log('1:' + arr);

function addItem(name, email, age) {
  let leng = arr.length;

  if (leng > 0) {
    arr[leng] = [name, email, age];
  } else {
    arr[0] = [name, email, age];
  }
  displayList();
}

function editItem(name, email, age, position) {
  let leng = arr.length;
  if (leng > position) {
    arr[position] = [name, email, age];
  }
  displayList();
}

function changePosition(p1, p2) {
  if (p1 >= 0 && p2 >= 0 && p1 < arr.length && p2 < arr.length) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
  }
  displayList();
}

function deleteItem(position) {
  if (position >= 0 && position < arr.length) {
    arr.splice(position, 1);
  }
  displayList();
}

function displayList() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    var item = document.createElement("li");
    item.innerText = arr[i].join(", ");
    list.appendChild(item);
  }
}

displayList();
