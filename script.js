const edits = document.querySelectorAll('.fa-pencil-square-o');
const ul = document.querySelector('ul');

// Insertion

const inputNew = document.querySelector("#add-input")
const submit = document.querySelector("#add-btn");
submit.addEventListener('click', function (e) {
  e.preventDefault();
  const text = inputNew.value;
  let x = `
  <li>
  <p>${text}</p>
  <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
  <input class="edit-note" type="text">
</li>
  `;
  if (text != "") {
    ul.innerHTML += x;
  }
  inputNew.value = "";
});

// For Deletion
const Delete = (e) => {
  ul.removeChild(e);
}
// For Edit 
const Edit = (e) => {

  let input = e.target.parentElement.nextElementSibling;
  let parent = e.target.parentElement;
  parent.style.display = "none";
  let Note = e.target.parentElement.previousElementSibling;
  input.style.display = "block";
  input.value = Note.textContent;
  input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
      Note.textContent = input.value;
      input.style.display = "none";
      parent.style.display = "block";
      if (Note.textContent == "") {
        console.log(parent.parentElement);
        Delete(parent.parentElement);
      }

    }
  });
}
// Event Listener for Edit and Remove
ul.addEventListener('click', e => {
  if (e.target.classList[1] == "fa-pencil-square-o") {
    Edit(e);
  }
  if (e.target.classList[1] == "fa-times") {
    const parent = e.target.parentElement.parentElement;
    Delete(parent);
  }
});