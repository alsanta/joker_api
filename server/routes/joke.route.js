const JokeController = require("../controllers/joke.controller");

module.exports = app =>{
    app.get("/api",JokeController.hellow);
    app.get("/api/jokes",JokeController.getAllJokes);
    app.post("/api/jokes",JokeController.createNewJoke);
    app.get("/api/jokes/:id",JokeController.getJokeById);
    app.delete("/api/jokes/:id",JokeController.deleteJoke);
    app.put("/api/jokes/:id",JokeController.updateJoke);
}