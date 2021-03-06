function onReady() {

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    //id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const deleteLi = document.createElement('button');
      deleteLi.innerText = 'Delete';
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteLi);

      deleteLi.addEventListener('click', () => {
        // const selectLi = toDos.filter(select => toDo.id === newLi.id)
        // toDos.splice(selectLi, 1);
        toDos = remove(toDo.id);
        renderTheUI();
      })
    });
  }

  function remove(id){
    return toDos.filter(toDo => toDo.id !== id);
  }

  addToDoForm.addEventListener('submit', event => {
    console.log(event)
    event.preventDefault();
    createNewToDo();
    //rendertheUI();
  });

  renderTheUI();

 }


window.onload = function() {
  console.log('The window has loaded!');
  onReady();
};
