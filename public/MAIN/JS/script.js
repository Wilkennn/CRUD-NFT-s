(() => {
  filterInKeyUp();
  redirectToEdit()
})();

function redirectToEdit() {
  const buttons = document.querySelectorAll(".edit-link");
  buttons.forEach((item, index) => {
    item.addEventListener("click", () => {
      const route = `/edit/${item.id}`;
      item.setAttribute("href", route);
    });
  });
}

function filterInKeyUp() {
  const section = document.querySelector(".nfts-conteiner");
  const divs = Array.from(document.querySelectorAll(".nft-div"));
  const input = document.querySelector("input");
  input.addEventListener("keyup", () => {
    const result = divs.filter((d) =>
      d.children[2].textContent
        .toLowerCase()
        .startsWith(input.value.toLowerCase())
    );
    render(section, result);
  });
}

function render(section, dataFiltered) {
  section.innerHTML = "";
  if (dataFiltered.length > 0) {
    dataFiltered.map((data) => {
      console.log(data);
      section.innerHTML += data.outerHTML;
    });
  } else {
    section.innerHTML = "<p> Nenhum Resultado </p>";
  }
}
