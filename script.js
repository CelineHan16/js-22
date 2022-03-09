const main = document.querySelector('main');
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList(list) {
  main.innerHTML = "";
  list.forEach(item => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = item;
    main.append(ul);
    ul.append(li);
  });
};

displayList(list);


function sortDescending() {
  // list.sort().reverse(); // First method
  list.sort((a, b) => a > b ? -1 : 1);
}
function sortAscending() {
  list.sort((a, b) => a < b ? -1 : 1);
};
function showOdd() {
  return list.filter(item => item % 2 != 0);
}
function showEven() {
  return list.filter(item => item % 2 === 0);
}

displayList(list);

document.querySelector('#sort-descending').addEventListener('click', function () {
  sortDescending();
  displayList(list);
});
document.querySelector('#sort-ascending').addEventListener('click', function () {
  sortAscending();
  displayList(list);
});
document.querySelector('#show-odd').addEventListener('click', function () {
  displayList(showOdd());
});
document.querySelector('#show-even').addEventListener('click', function () {
  displayList(showEven());
});
document.querySelector('#show-all').addEventListener('click', function() {
  displayList(list);
})