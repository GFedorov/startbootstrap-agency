const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
 

app.get('/contacts', (req, res) => res.send('Contatcs page'))

app.use(express.static("public"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 
 
