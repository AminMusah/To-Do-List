const createTodo = document.querySelector('.create-todo');
const createSubTodo = document.querySelector('.create-sub-todo');
const addTodo = document.querySelector('.add-todo');
const addSubTodo = document.querySelector('.add-sub-todo');
const inputText = document.querySelector('.input-text');
const inputSubText = document.querySelector('.input-sub-text');
const createList = document.querySelector('.create-list');
const createSubList = document.querySelector('.create-sub-list');
const title = document.querySelector('.task');
const deleteSubTodo = document.querySelector('.delete-sub-todo');

// create to do list

addTodo.addEventListener('click', function (e) {

    e.preventDefault();

    let text = inputText.value;
    inputText.value = '';

    const list = document.createElement('li');
    const listItem = document.createElement('span');
    const listDelete = document.createElement('button');

    createList.appendChild(list);
    list.appendChild(listItem);
    list.appendChild(listDelete);
    listDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    listDelete.style.color = '#fff'
    listDelete.classList.add('list-style');
    listItem.textContent = text;
    listItem.style.cursor = 'pointer';
    listItem.style.fontSize = '20px';
    listItem.style.margin = '10px'

    listDelete.addEventListener('click', function () {
        list.remove();
        createSubTodo.remove(); 
    })

    listItem.addEventListener('click', function () {
        createSubTodo.classList.add('pop-up'); 
        title.textContent = text; 
    })
    
    deleteSubTodo.addEventListener('click', function () {
        createSubTodo.remove();
    })

    inputText.focus();
})

// create sub to do

addSubTodo.addEventListener('click', function (e) {

    e.preventDefault();

    let subText = inputSubText.value;
    inputSubText.value = '';

    const subList = document.createElement('li');
    const subListItem = document.createElement('span');
    const subListDelete = document.createElement('button');

    createSubList.appendChild(subList);
    subList.appendChild(subListItem);
    subList.appendChild(subListDelete);
    subListDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    subListDelete.classList.add('list-style');
    subListDelete.style.border = 'none';
    subListDelete.style.background = 'none';
    subListItem.textContent = subText;
    subListItem.style.fontSize = '20px';
    subListItem.style.margin = '10px';

    subListDelete.addEventListener('click', function () {
        subList.remove();        
    })

    inputSubText.focus();
})






















