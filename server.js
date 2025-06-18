const express = require('express')
const cors = require('cors')

const app = express()

// 👉 Autorise toutes les origines (pratique en dev)
app.use(cors())

// Pour parser le JSON si besoin
app.use(express.json())

// Exemple d’endpoint
app.get('/burgers', (req, res) => {
  res.json([
    {
    id: 1,
    name: 'Cheeseburger',
    description: 'Délicieux cheeseburger classique',
    price: 5.5,
    image: 'BurgerClassique.png',
    composition: 'Steak, fromage, salade, tomate, sauce spéciale'
  },
  {
    id: 2,
    name: 'Bacon Burger',
    description: 'Savoureux burger avec du bacon croustillant',
    price: 6.0,
    image: 'BurgerClassique.png',
    composition: 'Steak, bacon, fromage, oignons, sauce barbecue'
  },
  {
    id: 3,
    name: 'Vegan Burger',
    description: 'Burger végétalien avec galette de légumes',
    price: 5.0,
    image: 'BurgerClassique.png',
    composition: 'Galette de légumes, avocat, salade, tomate, sauce vegan'
  },
  {
    id: 4,
    name: 'Spicy Chicken Burger',
    description: 'Burger de poulet épicé avec sauce piquante',
    price: 6.5,
    image: 'BurgerClassique.png',
    composition: 'Poulet épicé, fromage, salade, sauce piquante'
  },
  {
    id: 5,
    name: 'Double Cheeseburger',
    description: 'Double portion de fromage et de viande',
    price: 7.0,
    image: 'BurgerClassique.png',
    composition: 'Deux steaks, double fromage, salade, tomate, sauce spéciale'
  },
  {
    id: 6,
    name: 'Mushroom Swiss Burger',
    description: 'Burger avec champignons et fromage suisse',
    price: 6.0,
    image: 'BurgerClassique.png',
    composition: 'Steak, champignons sautés, fromage suisse, oignons, sauce moutarde'
  },
    {
        id: 7,
        name: 'BBQ Pulled Pork Burger',
        description: 'Burger avec porc effiloché et sauce barbecue',
        price: 7.5,
        image: 'BurgerClassique.png',
        composition: 'Porc effiloché, sauce barbecue, coleslaw, oignons'
    },
    {
        id: 8,
        name: 'Fish Burger',
        description: 'Burger de poisson avec sauce tartare',
        price: 6.0,
        image: 'BurgerClassique.png',
        composition: 'Filet de poisson pané, salade, tomate, sauce tartare'
    }
  ])
})

// Lancer le serveur
app.listen(3000, () => {
  console.log('API en écoute sur http://localhost:3000')
})
