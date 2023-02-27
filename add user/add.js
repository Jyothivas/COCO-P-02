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
}

addItem('sagar1', 'sA@gmail.com', 'M2');
addItem('SAURAV', 'SA@gmail.com', 'M3');
addItem('GAURAV', 'GA@gmail.com', 'M4');
addItem('SUBH', 'SUBH@gmail.com', 'M5');


console.log("-------add-----");
for (i = 0; i < arr.length; i++) {
  console.log("display:" + i + ":" + arr[i]);
}

editItem('sagar1', 'sA@gmail.com', 'M2', 1);
editItem('SAURAV', 'SA@gmail.com', 'M3', 2);
editItem('GAURAV', 'GA@gmail.com', 'M4', 3);
editItem('SUBH', 'SUBH@gmail.com', 'M5', 4);

function editItem(name, email, age, position) {
  let leng = arr.length;
  if (leng > position) {
    arr[position] = [name, email, age];
  }
}

console.log('-----edit---');
for (i = 0; i < arr.length; i++) {
  console.log('display:' + (i + 1) + ':' + arr[i]);
}

changePosition(0, 2);

function changePosition(pos1, pos2) {
  if (pos1 >= 0 && pos2 >= 0 && pos1 < arr.length && pos2 < arr.length) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  }
}

console.log('-----change position----');
for (i = 0; i < arr.length; i++) {
  console.log('display:' + (i + 1) + ':' + arr[i]);
}

deleteItem(1);

function deleteItem(position) {
  if (position >= 0 && position < arr.length) {
    arr.splice(position, 1);
  }
}

console.log('-----delete----');
for (i = 0; i < arr.length; i++) {
  console.log('display:' + (i + 1) + ':' + arr[i]);
}
