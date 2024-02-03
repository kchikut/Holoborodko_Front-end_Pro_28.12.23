document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('list');
    addButton.addEventListener('click', function () {
        const textValue = textInput.value.trim();
        if (textValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = textValue;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
            listItem.appendChild(deleteButton);
            list.appendChild(listItem);
            textInput.value = '';
        }
    });
    list.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'BUTTON' && target.textContent === 'Видалити') {
            target.parentNode.remove();
        }
    });
});
