const express = require('express');
const app = express();

// 1. Be Polite, Greet the User
// Task: Create a route that responds to URLs like /greetings/<username-parameter>.

app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.username}</h1>`);
});

// 2. Rolling the Dice
// Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

app.get('/roll/:number', (req, res) => {

    if (!Number(req.params.number)) {
        return res.send(`<h1>you must specify a number</h1>`);
    }
    const roll = Math.floor(Math.random() * (req.params.number) + 1);
    res.send(`You rolled a ${roll}`)
});

// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.
 
app.get('/collectibles/:index', (req, res) => {

 const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const index = Number(req.params.index);

  if (!collectibles[index]) {
    return res.send(`This item is not yet in stock. Check back soon!`)
  } else {
const item = collectibles[index]

    return res.send(`<h1>So you want the ${item.name}? For ${item.price}, it can be yours!</h1>`)
  }

});

// 4. Filter Shoes by Query Parameters
// Task: Create a route /shoes that filters the list of shoes based on query parameters.

app.get('/shoes', (req, res) => {
      const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
const minPrice = Number(req.query.minPrice);
const maxPrice = Number(req.query.maxPrice);
const type = req.query.type;

let allTheShoes = shoes

if (!isNaN(minPrice)) {
    allTheShoes = allTheShoes.filter(shoe => shoe.price >= minPrice);
}

if (!isNaN(maxPrice)) {
allTheShoes = allTheShoes.filter(shoe => shoe.price <= maxPrice);
}

if (type) {
allTheShoes = allTheShoes.filter(shoe => shoe.type === type);
}
return res.send(allTheShoes)
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});