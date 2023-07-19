const inputItem = document.getElementById("inputItem");
const btnItem = document.getElementById("btnItem");
const listItem = document.getElementById("listItem");

inputItem.focus();

btnItem.addEventListener("click", function () {
  const trElement = document.createElement("tr");
  const tdElementOne = document.createElement("td");
  const tdElementTwo = document.createElement("td");

  const trLength = document.querySelectorAll("tbody tr").length;
  trElement.id = "item_" + trLength;

  tdElementOne.textContent = inputItem.value;

  tdElementTwo.innerHTML =
    '<button data-id="' +
    trLength +
    '" id="deleteItem" "class=btn btn-danger">Eliminar</button>';

  trElement.appendChild(tdElementOne);
  trElement.appendChild(tdElementTwo);
  listItem.appendChild(trElement);

  const btnEliminar = document.querySelector("#deleteItem");

  btnEliminar.addEventListener("click", function () {
    let numberItem = btnEliminar.getAttribute("data-id");
    const trEliminar = document.querySelector("#item_" + numberItem);

    trEliminar.remove();
  });

  inputItem.value = "";
  inputItem.focus();
});
