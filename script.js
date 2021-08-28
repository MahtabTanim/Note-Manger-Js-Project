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
  if (ul.childElementCount == 0) {
    ul.parentElement.removeChild(ul);
  }
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

//Hide Unhide

const HideList = document.querySelector("#hide");
const noteList = document.querySelector(".note-list");
HideList.addEventListener('click', (e) => {
  if (noteList.style.display == "" || noteList.style.display == "block") {
    noteList.style.display = "none";
    HideList.previousElementSibling.textContent = "Show Notes";
  } else {
    noteList.style.display = "block";
    HideList.previousElementSibling.textContent = "Hide Notes";
  }
})

// search

const input = document.querySelector("#search-note input");
input.addEventListener('keyup', (e) => {
  let A = Array.from(ul.children);
  let key = input.value.toLowerCase().toString();

  for (let i = 0; i < A.length; i++) {
    let text = A[i].firstElementChild.textContent.toLowerCase().toString();
    if (text.includes(key) == true) {
      A[i].style.display = "block";
    } else A[i].style.display = "none";
  }
});
