const helpers = require("../helpers");
const { repositories } = require("../sessionData");

const middlewares = {
  checkIfRepositoryExists(req, res, next) {
    const { id } = req.params;
    try {
      const repository = helpers.getRepositoryByID(repositories, id);
      req.repository = repository;
      next();
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
};

module.exports = middlewares;
