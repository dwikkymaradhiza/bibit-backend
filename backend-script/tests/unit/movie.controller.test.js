const MovieController = require('../../src/controllers/movie.controller');

describe('Movie Controller', () => {
  let req;
  let res;
  describe('searchMovie', () => {
    beforeEach(() => {
      res = {
        json: jest.fn(),
        status: jest.fn().mockReturnValue({ end: jest.fn() }),
      };
    });

    it('should have searchMovie function', () => {
      expect(typeof MovieController.searchMovie).toBe('function');
    });
  });

  describe('getDetailMovie', () => {
    beforeEach(() => {
      res = {
        json: jest.fn(),
        status: jest.fn().mockReturnValue({ end: jest.fn() }),
      };
    });

    it('should have getDetailMovie function', () => {
      expect(typeof MovieController.getDetailMovie).toBe('function');
    });
  });
});
