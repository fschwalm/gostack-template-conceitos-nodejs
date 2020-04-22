const { uuid } = require("uuidv4");

class Repository {
  constructor({ id = uuid(), title = "", url = "", techs = [], likes = 0 }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.techs = techs;
    this.likes = likes;
  }
}

module.exports = Repository;
