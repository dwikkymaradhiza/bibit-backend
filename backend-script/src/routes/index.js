const express = require('express');

const router = express.Router();

// Controllers
const movie = require('../controllers/movie');

// Middlewares
// const { checkAuthorization } = require('../app/middlewares');

//---------------------------
//        Route List        |
//---------------------------

// Movie Controller
// router.use('/', checkAuthorization());
router.get('/search', movie.searchMovie);
router.get('/detail/:id', movie.getDetailMovie);

module.exports = router;
