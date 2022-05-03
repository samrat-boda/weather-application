const express =require('express');
const app = express();
const path = require('path');
const port=process.env.PORT || 3000;

const static_path =path.join(__dirname, '../public');
app.use(express.static(static_path));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views')); 

app.get('/', function(req, res) {
    res.render('index')
});


app.get('/about', function(req, res) {
    res.render('about')
});


app.get('/weather', function(req, res) {
    res.render('weather')
});

app.get('*', function(req, res) {
    res.render('404',{
        errMsg: 'Page Not Found'
    })
});

app.listen(port, function() {
    console.log(`listening to the port ${port}`);
})
