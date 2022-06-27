// dependencies
const express = require ('express');
const exphbs = require('express-handlebars');
const sequelize = require ('./config/connection');
const path = require ('path');
// const routes = require('./controllers');
const hbs = exphbs.create({});

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up sessions with cookies
const sess = {
  secret: 'Super secret',
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));




// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(routes);

// starts the connection to the db and set the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
})});
