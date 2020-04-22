const express = require("express");
const cors = require("cors");

const app = express();

const helpers = require("./helpers");
const Repository = require("./models/Repository");
const { checkIfRepositoryExists } = require("./middleware");
const { repositories } = require("./sessionData");

app.use(express.json());
app.use(cors());

app.get("/repositories", (request, response) => {
  return response.send(repositories);
});

app.post("/repositories", (request, response) => {
  const repository = new Repository(request.body);

  repositories.push(repository);

  return response.status(201).send(repository);
});

app.put("/repositories/:id", checkIfRepositoryExists, (request, response) => {
  const { title, url, techs } = request.body;
  const { repository } = request;

  repository.title = title;
  repository.url = url;
  repository.techs = techs;

  return response.send(repository);
});

app.delete(
  "/repositories/:id",
  checkIfRepositoryExists,
  (request, response) => {
    const { id } = request.params;

    repositories.splice(helpers.getRepositoryIndexByID(repositories, id), 1);

    return response.status(204).send();
  }
);

app.post(
  "/repositories/:id/like",
  checkIfRepositoryExists,
  (request, response) => {
    const { repository } = request;

    repository.likes++;

    return response.send(repository);
  }
);

module.exports = app;
