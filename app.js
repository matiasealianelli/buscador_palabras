window.addEventListener("load", () => {
  let inputText = document.querySelector(".search");
  let button = document.querySelector(".search-button");
  let text = document.querySelector(".text");
  let mensajeError = document.querySelector(".mensaje");

  button.addEventListener("click", () => {
    let search = inputText.value;
    if (search.trim() !== "") {
      let regExp = new RegExp(search, "gi");
      text.innerHTML = text.textContent.replace(
        regExp,
        `<span class="wordSearch">$&</span>`
      );
    } else if (search === "") {
      mensajeError.textContent = "Por favor, ingrese una palabra para buscar";
    }
  });
  inputText.addEventListener("keydown", (e) => {
    let search = inputText.value;
    if (search.trim() !== "" && e.code === "Enter") {
      let regExp = new RegExp(search, "gi");
      text.innerHTML = text.textContent.replace(
        regExp,
        `<span class="wordSearch">$&</span>`
      );
    } else if (search === "" && e.code === "Enter") {
      mensajeError.textContent = "Por favor, ingrese una palabra para buscar";
    }
  });
});