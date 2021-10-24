const MovieController = require('../../src/controllers/movie.controller');

describe('Movie Controller', () => {
  describe('searchMovie', () => {
    it('should have searchMovie function', () => {
      expect(typeof MovieController.searchMovie).toBe('function');
    });
  });

  describe('getDetailMovie', () => {
    it('should have getDetailMovie function', () => {
      expect(typeof MovieController.getDetailMovie).toBe('function');
    });
  });
});
