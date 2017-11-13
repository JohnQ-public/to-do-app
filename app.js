function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoForm = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        
        // get the text
        let title = newToDoText.value;
        
        // create a new li
        let newLi = document.creatElement('input');
        
        // create a new input
        let checkbox = document.createElement('input');
        
        // set the input's type to checkbox
        checkbox.type = 'chekbox';
        
        // set the title
        newLi.textContent = title;
        
        // attach the checkbox to the Li
        newLi.appendChild(checkbox);
        
        // attach the li to the uL
        toDoList.appendChild(newLi);
        
        // empty the input
        newToDoText.value = '';
    });
}

window.onload = function() {
    alert('The window has loaded!');
    onready();
};