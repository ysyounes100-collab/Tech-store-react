🛒 ProdStore est une application web e-commerce développée avec React (Vite) et Redux Toolkit.

📌 Ce projet permet de :
Afficher une liste de produits informatiques
Rechercher un produit par son nom
Consulter les détails d’un produit
Ajouter un produit au panier
Supprimer un produit du panier
Voir le nombre total d’articles dans le panier
Voir le prix total du panier

Les données sont récupérées via une API simulée à partir d’un fichier products.json en utilisant fetch().

🛠️ Technologies utilisées
React (avec Vite)
Redux Toolkit
React Redux
React Router DOM
JavaScript (ES6)
CSS
JSON (simulation d’API locale)

📂 Structure du projet
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── cartSlice.js
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Search.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   └── Cart.jsx
│
├── App.jsx
├── main.jsx
└── index.css

Fichier API :

public/products.json
⚙️ Installation et exécution
1️⃣ Cloner le projet
git clone <url-du-repository>
2️⃣ Installer les dépendances
npm install
3️⃣ Lancer le projet
npm run dev

Puis ouvrir le lien affiché dans le terminal (généralement http://localhost:5173
).

🔎 Fonctionnalités principales
🏠 Page d’accueil (Home)

Récupération des produits via fetch()
Affichage sous forme de cartes
Filtrage dynamique avec la barre de recherche

📄 Page Détails Produit
Route dynamique : /product/:id
Utilisation de useParams()
Affichage des informations complètes du produit

🛒 Panier (Redux Toolkit)

Le panier est géré avec Redux :

Actions principales :
addToCart
removeFromCart

État du panier :

{
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}

Le nombre total de produits est affiché dans la Navbar :

Cart (3)
🔍 Fonction Recherche
Implémentée avec useState
Filtrage avec :
product.title.toLowerCase().includes(search.toLowerCase())

Si aucun produit n’est trouvé, un message est affiché :

Aucun produit trouvé.
🎨 Interface utilisateur
Navbar fixe en haut
Cartes produits modernes
Affichage dynamique du rating avec étoiles
Design adapté à un store informatique

🎯 Objectifs pédagogiques
Ce projet permet de maîtriser :
La structure d’une application React
La gestion d’état globale avec Redux
La navigation avec React Router
L’utilisation de fetch() pour récupérer des données
La création d’une logique e-commerce simple
L’organisation professionnelle d’un projet frontend


👨‍💻 Réalisé par:

Badr Hafidi et Younes Alhiane.