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
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Steak', spicy: false, quantity: 1 },
        { name: 'Fromage', spicy: false, quantity: 1 },
        { name: 'Salade', spicy: false, quantity: 1 },
        { name: 'Tomate', spicy: false, quantity: 1 },
        { name: 'Sauce spéciale', spicy: false, quantity: 1 }
      ]
    }

  },
  {
    id: 2,
    name: 'Bacon Burger',
    description: 'Savoureux burger avec du bacon croustillant',
    price: 6.0,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Steak', spicy: false, quantity: 1 },
        { name: 'Bacon', spicy: true, quantity: 1 },
        { name: 'Fromage', spicy: false, quantity: 1 },
        { name: 'Oignons', spicy: false, quantity: 1 },
        { name: 'Sauce barbecue', spicy: true, quantity: 1 }
      ]
    }
  },
  {
    id: 3,
    name: 'Vegan Burger',
    description: 'Burger végétalien avec galette de légumes',
    price: 5.0,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Vegan',
      ingredients: [
        { name: 'Galette de légumes', vegan: true, quantity: 1 },
        { name: 'Avocat', vegan: true, quantity: 1 },
        { name: 'Salade', vegan: true, quantity: 1 },
        { name: 'Tomate', vegan: true, quantity: 1 },
        { name: 'Sauce vegan', vegan: true, quantity: 1 }
      ]
    }
  },
  {
    id: 4,
    name: 'Spicy Chicken Burger',
    description: 'Burger de poulet épicé avec sauce piquante',
    price: 6.5,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Poulet épicé', spicy: true, quantity: 1 },
        { name: 'Fromage', spicy: false, quantity: 1 },
        { name: 'Salade', spicy: false, quantity: 1 },
        { name: 'Sauce piquante', spicy: true, quantity: 1 }
      ]
    }
  },
  {
    id: 5,
    name: 'Double Cheeseburger',
    description: 'Double portion de fromage et de viande',
    price: 7.0,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Steak', spicy: false, quantity: 2 },
        { name: 'Fromage', spicy: false, quantity: 2 },
        { name: 'Salade', spicy: false, quantity: 1 },
        { name: 'Tomate', spicy: false, quantity: 1 },
        { name: 'Sauce spéciale', spicy: false, quantity: 1 }
      ]
    }
  },
  {
    id: 6,
    name: 'Mushroom Swiss Burger',
    description: 'Burger avec champignons et fromage suisse',
    price: 6.0,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Steak', spicy: false, quantity: 1 },
        { name: 'Champignons sautés', spicy: false, quantity: 1 },
        { name: 'Fromage suisse', spicy: false, quantity: 1 },
        { name: 'Oignons', spicy: false, quantity: 1 },
        { name: 'Sauce moutarde', spicy: false, quantity: 1 }
      ]
    }
  },
  {
    id: 7,
    name: 'BBQ Pulled Pork Burger',
    description: 'Burger avec porc effiloché et sauce barbecue',
    price: 7.5,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Carn',
      ingredients: [
        { name: 'Porc effiloché', spicy: false, quantity: 1 },
        { name: 'Sauce barbecue', spicy: false, quantity: 1 },
        { name: 'Coleslaw', spicy: false, quantity: 1 },
        { name: 'Oignons', spicy: false, quantity: 1 }
      ]
    }
  },
  {
    id: 8,
    name: 'Fish Burger',
    description: 'Burger de poisson avec sauce tartare',
    price: 6.0,
    image: 'BurgerClassique.png',
    composition: {
      type: 'Fish',
      ingredients: [
        { name: 'Filet de poisson pané', spicy: false, quantity: 1 },
        { name: 'Salade', spicy: false, quantity: 1 },
        { name: 'Tomate', spicy: false, quantity: 1 },
        { name: 'Sauce tartare', spicy: false, quantity: 1 }
      ]
    }
  }
  ])
})

app.post('/commandes', (req, res) => {
  const { name, email, address, items, total } = req.body
  console.log('Nouvelle commande reçue :', { name, email, address, items, total })

  res.status(201).json({ message: 'Commande confirmée !' })
})

// Lancer le serveur
app.listen(3000, () => {
  console.log('API en écoute sur http://localhost:3000')
})
