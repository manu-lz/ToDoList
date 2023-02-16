var idCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

var addTask = ()=>{
    idCounter++

    var newValue = input.value;
    list.innerHTML += `
    <div  id ="${idCounter}" class="task-container">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="./imgs/been.jpg" class="closeBtn">
    </div>
    `
    input.value = '';
    updateStats();
};
list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }
});
    var updateStats = ()=>{
        var element = list.querySelectorAll('div');
        var checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
        stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas:${checkbox.length} </p>`


    };

    var deleteTask = (id)=>{
        var taskToDelete = document.getElementById(id);
        list.removeChild(taskToDelete);
        updateStats();
    }
