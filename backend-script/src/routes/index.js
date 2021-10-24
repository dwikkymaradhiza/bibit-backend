const express = require('express');

const router = express.Router();

// Controllers
const movieController = require('../controllers/movie.controller');

//---------------------------
//        Route List        |
//---------------------------

// Movie Controller
router.get('/search', movieController.searchMovie);
router.get('/detail/:id', movieController.getDetailMovie);

module.exports = router;
