const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Temporary storage
const submissions = [];

app.get('/', (req, res) => {
  res.render('form', { error: null });
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Server-side validation
  if (!name || !email || !email.includes('@')) {
    return res.render('form', { error: "Please enter a valid name and email." });
  }

  // Store data
  submissions.push({ name, email });

  res.render('success', { name, email });
});
