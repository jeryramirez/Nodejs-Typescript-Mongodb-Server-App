import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
const app = express();

// Settings
app.set('port', process.env.PORT || 8060);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join( app.get( 'views'), 'layouts'),
    partialsDir: path.join( app.get( 'views'), 'partials'),
    helpers: require('./lib/helpers'),
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Routes
app.get('/books', (req, res) => res.send('books'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
// Starting server
app.listen(app.get('port'), () => {
    console.log('Y la abuela teresa ?')
});