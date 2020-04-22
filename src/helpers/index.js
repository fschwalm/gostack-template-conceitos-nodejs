const helpers = {
  getRepositoryByID(repositories, id) {
    const repository = repositories.find((repository) => repository.id === id);
    if (!repository) {
      throw new Error("Repository not found!");
    }
    return repository;
  },
  getRepositoryIndexByID(repositories, id) {
    return repositories.findIndex((repository) => repository.id === id);
  },
};

module.exports = helpers;
