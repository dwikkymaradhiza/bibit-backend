const express = require('express');

const router = express.Router();

// Controllers
const movieController = require('../controllers/movie.controller');

// Middlewares
// const { checkAuthorization } = require('../app/middlewares');

//---------------------------
//        Route List        |
//---------------------------

// Movie Controller
// router.use('/', checkAuthorization());
router.get('/search', movieController.searchMovie);
router.get('/detail/:id', movieController.getDetailMovie);

module.exports = router;
