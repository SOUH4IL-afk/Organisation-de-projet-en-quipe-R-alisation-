const produits = [
  { nom: "Produit 1", prix: 50, image: "https://via.placeholder.com/150" },
  { nom: "Produit 2", prix: 30, image: "https://via.placeholder.com/150" },
  { nom: "Produit 3", prix: 20, image: "https://via.placeholder.com/150" },
  { nom: "Produit 4", prix: 70, image: "https://via.placeholder.com/150" }
];

const catalogue = document.getElementById("catalogue");
const search = document.getElementById("search");


function afficherProduits(list) {
  catalogue.innerHTML = "";
  list.forEach(p => {
    catalogue.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>السعر: ${p.prix} MAD</p>
      </div>
    `;
  });
}


search.addEventListener("input", () => {
  const valeur = search.value.toLowerCase();
  const filtered = produits.filter(p => p.nom.toLowerCase().includes(valeur));
  afficherProduits(filtered);
});


afficherProduits(produits);