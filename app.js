


function handleSubmit(submitEvent) {
  const toDoList = document.getElementById('toDoList');
  const newToDoText = document.getElementById('newToDoText');
  
  submitEvent.preventDefault(); 
  
  alert('handle submit');
  // get the text
  const title = newToDoText.value;

  // create a new li
  const newLi = document.createElement('li');

  // create a new input
  const checkbox = document.createElement('input');

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // set the title
  newLi.textContent = title;

  // attach the checkbox to the li
  newLi.appendChild(checkbox);

  // attach the li to the ul
  toDoList.appendChild(newLi);

  // empty the input
  newToDoText.value = '';
  
  // create a new input for delete button
  const deleteBox = document.createElement('input');
  
  // set the input's type to delete button
  deleteBox.type ='button';
  
  deleteBox.addEventListener('click', function handleDelete(clickEvent) {
    toDoList.removeChild(newLi) 
  });
  
  deleteBox.value = 'DELETE';
   
  // attach the button to the li an ul
  newLi.appendChild(deleteBox);
  
  // what does this do? and can we reverse/undo it?
  toDoList.appendChild(newLi);
;
}

function onReady() {  
  const addToDoForm = document.getElementById('addToDoForm');
  
  alert('attach submit listener');
  
  addToDoForm.addEventListener('submit', handleSubmit);
  
 };


window.onload = function() {
  alert('The window has loaded!');
  onReady();
};

