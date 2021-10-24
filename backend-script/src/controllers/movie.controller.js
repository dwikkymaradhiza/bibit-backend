const { ApiLog } = require('../models');
const OmdbService = require('../services/omdb');
const { httpStatus, errorCodes } = require('../configs/constants');
const logger = require('../utils/logger');

const Controller = {};

Controller.searchMovie = async (req, res) => {
  try {
    await ApiLog.create({
      parameters: JSON.stringify(req.query),
      api_url: req.url,
    });

    const result = await OmdbService.searchMovie(req.query.keyword || '', req.query.page || 1);
    if (result.data.Response === 'False') {
      throw new Error(result.data.Error);
    }

    const mappingResult = {
      data: result.data.Search.map((item) => ({
        id: item.imdbID,
        title: item.Title,
        year: item.Year,
        type: item.Type,
        poster: item.Poster,
      })),
      total_rows: result.data.totalResults,
      success: result.data.Response,
    };

    return res.status(httpStatus.ok).json(mappingResult);
  } catch (e) {
    logger.error(e);
    return res.status(httpStatus.internalServerError).json({
      error: e.message,
      code: errorCodes.internalServerError,
    });
  }
};

Controller.getDetailMovie = async (req, res) => {
  try {
    await ApiLog.create({
      parameters: JSON.stringify(req.query),
      api_url: req.url,
    });

    const result = await OmdbService.getDetailMovie(req.params.id);
    if (result.data.Response === 'False') {
      throw new Error(result.data.Error);
    }

    return res.status(httpStatus.ok).json(result.data);
  } catch (e) {
    logger.error(e.message);
    return res.status(httpStatus.internalServerError).json({
      error: e.message,
      code: errorCodes.internalServerError,
    });
  }
};

module.exports = Controller;
