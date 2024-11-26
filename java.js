// Referências aos elementos
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const addTaskButton = document.getElementById('addTaskButton');

// Listas das categorias
const personalTasks = document.getElementById('personalTasks');
const workTasks = document.getElementById('workTasks');
const studyTasks = document.getElementById('studyTasks');

// Adiciona uma nova tarefa
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;

    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    // Cria o item da lista
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Botão de remoção
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Adiciona o botão ao item e o item à categoria correspondente
    listItem.appendChild(removeButton);
    if (category === 'Pessoal') {
        personalTasks.appendChild(listItem);
    } else if (category === 'Trabalho') {
        workTasks.appendChild(listItem);
    } else if (category === 'Estudos') {
        studyTasks.appendChild(listItem);
    }

    // Limpa o campo de entrada
    taskInput.value = '';
});