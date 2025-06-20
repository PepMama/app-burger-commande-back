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
        { name: 'Steak',   quantity: 1 },
        { name: 'Fromage',   quantity: 1 },
        { name: 'Salade',   quantity: 1 },
        { name: 'Tomate',   quantity: 1 },
        { name: 'Sauce spéciale',   quantity: 1 }
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
        { name: 'Steak',   quantity: 1 },
        { name: 'Bacon', spicy: true, quantity: 1 },
        { name: 'Fromage',   quantity: 1 },
        { name: 'Oignons',   quantity: 1 },
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
        { name: 'Galette de légumes',   quantity: 1 },
        { name: 'Avocat',   quantity: 1 },
        { name: 'Salade',   quantity: 1 },
        { name: 'Tomate',   quantity: 1 },
        { name: 'Sauce vegan',   quantity: 1 }
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
        { name: 'Fromage',   quantity: 1 },
        { name: 'Salade',   quantity: 1 },
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
        { name: 'Steak',   quantity: 2 },
        { name: 'Fromage',   quantity: 2 },
        { name: 'Salade',   quantity: 1 },
        { name: 'Tomate',   quantity: 1 },
        { name: 'Sauce spéciale',   quantity: 1 }
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
        { name: 'Steak',   quantity: 1 },
        { name: 'Champignons sautés',   quantity: 1 },
        { name: 'Fromage suisse',   quantity: 1 },
        { name: 'Oignons',   quantity: 1 },
        { name: 'Sauce moutarde',   quantity: 1 }
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
        { name: 'Porc effiloché',   quantity: 1 },
        { name: 'Sauce barbecue',   quantity: 1 },
        { name: 'Coleslaw',   quantity: 1 },
        { name: 'Oignons',   quantity: 1 }
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
        { name: 'Filet de poisson pané',   quantity: 1 },
        { name: 'Salade',   quantity: 1 },
        { name: 'Tomate',   quantity: 1 },
        { name: 'Sauce tartare',   quantity: 1 }
      ]
    }
  }
  ])
})

let commandes = [
  {
    user: 'alice',
    email: 'alice@example.com',
    address: '123 Rue de Paris',
    items: [
      { id: 1, name: 'Classic Burger', quantity: 2 },
      { id: 2, name: 'Bacon Burger', quantity: 1 }
    ],
    dateTime: '10/10/2023, 12:00:00',
    total: 22.0
  }
]

app.post('/commandes/:user', (req, res) => {
  const { user } = req.params
  const dateTime = new Date().toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris'
  })
  const { email, address, items, total } = req.body
  console.log('Nouvelle commande reçue :', { user, email, address, items, total, dateTime })

  commandes.push({ user, email, address, items, total, dateTime })
  res.status(201).json({ message: 'Commande confirmée !' })
})

//get user commandes

app.get('/commandes/:user', (req, res) => {
  const { user } = req.params
  const userCommandes = commandes.filter(c => c.user === user)
  res.json(userCommandes)
})

// Login

let login = {
  alice: '1234',
  bob: '5678',
  charlie: 'password'
}

app.get('/login/:id/:password', (req, res) => {
  const { id, password } = req.params

  if (login[id] && login[id] === password) {
    res.json({ success: true })
  } else {
    res.json({ success: false })
  }
})

//register

app.post('/register', (req, res) => {
  const { id, password } = req.body

  if (login[id]) {
    res.status(400).json({ message: 'Identifiant déjà pris' })
  } else {
    login[id] = password
    console.log('login', login)
    res.status(201).json({ message: 'Inscription réussie' })
  }

})

// Lancer le serveur
app.listen(3000, () => {
  console.log('API en écoute sur http://localhost:3000')
})
