const matchedList = [];

autoFill(document.getElementById('myInput'),);

const autoFill = (input) => {
  input.addEventListener('input', (event) => {
    const { value } = this.value;
    if (!value) return false;
    const dropdown = document.createElement('div');
    dropdown.setAttribute('id', 'autofill-list');
    this.parentNode.appendChild(dropdown);
    for (let i = 0; i < matchedList.length; i += 1) {
      if (matchedList[i].substring(0, value.length).toLowerCase() === value.toLowerCase()) {
        const list = document.createElement('div');
        list.innerHTML = `<strong>${matchedList[i]}</strong>`;
        list.innerHTML += `<input type='hidden' value='${matchedList[i]}''>`;
        list.addEventListener('click', (e) => {
          input.value = this.getElementsByTagName('input')[0].value;
          closeAllLists();
        });
      }
    }
  });
};

const closeAllList = () => {
  const list = document.getElementsById('autofill-list');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

document.addEventListener('click', () => {
  closeAllList();
});
