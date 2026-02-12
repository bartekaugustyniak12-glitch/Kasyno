const lista = document.getElementById("lista");
const input = document.getElementById("produkt");
const przycisk = document.getElementById("dodajBtn");

window.onload = function () {
  lista.innerHTML = localStorage.getItem("zakupy") || "";
  dodajEventy();
};

przycisk.addEventListener("click", dodajProdukt);

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    dodajProdukt();
  }
});

function dodajProdukt() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${input.value}</span>
    <button class="usun">X</button>
  `;

  lista.appendChild(li);
  input.value = "";

  zapisz();
  dodajEventy();
}

function dodajEventy() {
  document.querySelectorAll("li").forEach(li => {
    li.onclick = function(e) {
      if (e.target.classList.contains("usun")) return;
      li.classList.toggle("checked");
      zapisz();
    };
  });

  document.querySelectorAll(".usun").forEach(btn => {
    btn.onclick = function() {
      btn.parentElement.remove();
      zapisz();
    };
  });
}

function zapisz() {
  localStorage.setItem("zakupy", lista.innerHTML);
}
