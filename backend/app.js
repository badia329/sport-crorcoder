// import express module
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const axios = require("axios");
// sportDB: DB name
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
// creates express app
const app = express();
//export app
// make app imprtable to other files
app.use(cors());
// send json response to FE
app.use(express.json());
//Get Object from Req
app.use(express.urlencoded({ extended: true }));
app.use("/myShortCut", express.static(path.join("backend/uploads")));
// Session Config...
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const secretKey = "your-secret-key";
app.use(
  session({
    secret: secretKey,
  })
);
// import models
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");
const Stadium = require("./models/stadium");
// business logic: Get All Matches
app.get("/matches", (req, res) => {
  console.log("Business Logic: Get All Matches");
  Match.find().then((data) => {
    console.log("Here is data from collection Matches", data);
    res.json({ tab: data, nbr: data.length });
  });
});
// Business Logic: Get All Teams
app.get("/teams", (req, res) => {
  console.log("Business Logic: Get All Teams");
  Team.find()
    .populate("playerId")
    .then((data) => {
      console.log("Here is data from collection teams", data);
      res.json({ tab: data, nbr: data.length });
    });
});
// Business Logic: Get All Players
app.get("/players", (req, res) => {
  console.log("Business Logic: Get All Players");
  Player.find()
    .populate("teamId")
    .then((data) => {
      console.log("Here is data from collection Players", data);
      res.json({ tab: data, nbr: data.length });
    });
});
// Business Logic: Get All Stadium
app.get("/stadium", (req, res) => {
  console.log("Business Logic: Get All Stadium");
  Stadium.find().then((data) => {
    console.log("Here is data from collection Stadium", data);
    res.json({ tab: data, nbr: data.length });
  });
});
// Business Logic: Get All Users
app.get("/users", (req, res) => {
  console.log("Business Logic: Get All Users");
  User.find().then((data) => {
    res.json({ tab: data, nbr: data.length });
  });
});

// Business Logic: Get Match By Id
app.get("/matches/:id", (req, res) => {
  console.log("Business Logic: Get Match By Id");
  let matchId = req.params.id;
  console.log("Here is Id", matchId);
  Match.findById(matchId).then((data) => {
    console.log("Here is data matches collection", data);
    if (data) {
      res.json({ obj: data });
    } else {
      res.json({ msg: "Match not found" });
    }
  });
});
// Business Logic: Get Player By Id
app.get("/players/:id", (req, res) => {
  console.log("Business Logic: Get Match By Id");
  let playerId = req.params.id;
  console.log("Here is Id", playerId);
  Match.findById(playerId).then((data) => {
    console.log("Here is data Players collection", data);
    if (data) {
      res.json({ obj: data });
    } else {
      res.json({ msg: "player not found" });
    }
  });
});
// Business Logic: Get team By Id
app.get("/teams/:id", (req, res) => {
  console.log("Business Logic: Get Team By Id");
  let teamId = req.params.id;
  console.log("Here is Id", teamId);
  Team.findById(teamId).then((data) => {
    console.log("Here is data matches collection", data);
    if (data) {
      res.json({ obj: data });
    } else {
      res.json({ msg: "Team not found" });
    }
  });
});
// Business Logic: Get Stadium By Id
app.get("/stadium/:id", (req, res) => {
  console.log("Business Logic: Get Stadium By Id");
  let stadiumId = req.params.id;
  console.log("Here is Id", stadiumId);
  Stadium.findById(stadiumId).then((data) => {
    console.log("Here is data Stadiums collection", data);
    if (data) {
      res.json({ obj: data });
    } else {
      res.json({ msg: "Stadium not found" });
    }
  });
});
// Business Logic: Delete Match By Id
app.delete("/matches/:id", (req, res) => {
  console.log("Business Logic: Delete Match By Id", req.params.id);
  Match.deleteOne({ _id: req.params.id }).then((deleteRes) => {
    console.log("Here is response from successfully!", deleteRes);
    if (deleteRes.deletedCount == 1) {
      res.json({ msg: "Match deleted successfully!", isDeleted: true });
    } else {
      res.json({
        msg: `Match N°${req.params.id} not found`,
        isDeleted: false,
      });
    }
  });
});
// Business Logic: Delete Player By Id
app.delete("/players/:id", (req, res) => {
  console.log("Business Logic: Delete Player By Id", req.params.id);
  Player.deleteOne({ _id: req.params.id }).then((deleteRes) => {
    console.log("Here is response from successfully!", deleteRes);
    if (deleteRes.deletedCount == 1) {
      res.json({ msg: "Player deleted successfully!", isDeleted: true });
    } else {
      res.json({
        msg: `Player N°${req.params.id} not found`,
        isDeleted: false,
      });
    }
  });
});
// Business Logic: Delete team By Id
app.delete("/team/:id", (req, res) => {
  console.log("Business Logic: Delete Team by id", req.params.id);
  Team.deleteOne({ _id: req.params.id }).then((deleteRes) => {
    console.log("Here is response from successfully!", deleteRes);
    if (deleteRes.deletedCount == 1) {
      res.json({ msg: "Team deleted successfully", isDeleted: true });
    } else {
      res.json({
        msg: `Team N°${req.params.id} not found`,
        isDeleted: false,
      });
    }
  });
});
// Business Logic: Delete Stadium By Id
app.delete("/stadium/:id", (req, res) => {
  console.log("Business Logic: Delete stadium by id", req.params.id);
  Stadium.deleteOne({ _id: req.params.id }).then((deleteRes) => {
    console.log("Here is response from successfully!", deleteRes);
    if (deleteRes.deletedCount == 1) {
      res.json({ msg: "Stadium deleted successfully", isDeleted: true });
    } else {
      res.json({
        msg: `stadium N°${req.params.id} not found`,
        isDeleted: false,
      });
    }
  });
});
// Business Logic: Add Match
app.post("/matches", (req, res) => {
  console.log("Business Logic: Add Match");
  console.log("Request body:", req.body);
  let matchObj = new Match(req.body);
  matchObj.save();
  res.json({ msg: "Match added successfully" });
});
// Business Logic: Add Player
app.post("/players", (req, res) => {
  // req.body = {name:..., age:..., position: .., teamId: "..."}
  console.log("Business Logic: Add Player", req.body);
  Team.findById(req.body.teamId).then((foundTeam) => {
    console.log("here is found team", foundTeam);
    // model attribute : FE value
    let playerObj = new Player({
      name: req.body.name,
      age: req.body.age,
      nbr: req.body.number,
      position: req.body.position,
      // tId objectId
      // tId: Object(req.body.teamId)
      teamId: foundTeam._id,
    });
    playerObj.save((error, success) => {
      console.log("Here is success", success);
      console.log("Here is error", error);
      if (error) {
        res.json({ msg: "Player Not saved" });
      } else {
        // Affecter palyerId into team (playerId)
        foundTeam.playerId.push(success._id);
        foundTeam.save();
        res.json({ msg: "Player saved with success" });
      }
    });
  });
});
// Business Logic: Add Team
app.post("/teams", (req, res) => {
  console.log("Business Logic: Add Team", req.body);
  Stadium.findById(req.body.stadiumId).then((foundStadium) => {
    console.log("here is found Stadium", foundStadium);
    // let teamObj = new Team({
    //   name: req.body.name,
    //   owner: req.body.owner,
    //   foundation: req.body.foundation,
    //   stadiumId: foundStadium._id
    // })
    let teamObj = new Team({
      ...req.body,
      stadiumId: foundStadium._id,
    });
    teamObj.save((error, success) => {
      console.log("Here is success", success);
      console.log("Here is error", error);
      if (error) {
        res.json({ msg: "Team Not saved" });
      } else {
        foundStadium.teamId.push(success._id);
        foundStadium.save();
        res.json({ msg: "Team saved with success" });
      }
    });
  });
});
// Business Logic: Add Stadium
app.post("/stadium", (req, res) => {
  console.log("Business Logic: Add Stadium");
  console.log("Request body:", req.body);
  let stadiumObj = new Stadium(req.body);
  stadiumObj.save();
  res.json({ msg: "Stadium added successfully" });
});
// Business Logic: Edit Match
app.put("/matches", (req, res) => {
  console.log("Business Logic: Edit Match", req.body);
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((updateRes) => {
    if (updateRes.modifiedCount == 1) {
      res.json({ msg: "Edited with success!" });
    } else {
      res.json({ msg: "Not Edited!" });
    }
  });
});
// Business Logic: Edit Team
app.put("/teams", (req, res) => {
  console.log("Business Logic: Edit Team", req.body);
  let newTeam = req.body;
  Team.updateOne({ _id: newTeam._id }, newTeam).then((updateRes) => {
    if (updateRes.modifiedCount == 1) {
      res.json({ msg: "Edited with success!" });
    } else {
      res.json({ msg: "Not Edited!" });
    }
  });
});
// Business Logic: Edit Player
app.put("/players", (req, res) => {
  console.log("Business Logic: Edit Player", req.body);
  let newPlayer = req.body;
  Player.updateOne({ _id: newPlayer._id }, newPlayer).then((updateRes) => {
    if (updateRes.modifiedCount == 1) {
      res.json({ msg: "Edited with success!" });
    } else {
      res.json({ msg: "Not Edited!" });
    }
  });
});
// Business Logic: Edit Stadium
app.put("/stadium", (req, res) => {
  console.log("Business Logic: Edit Stadium", req.body);
  let newStadium = req.body;
  Stadium.updateOne({ _id: newStadium._id }, newStadium).then((updateRes) => {
    if (updateRes.modifiedCount == 1) {
      res.json({ msg: "Edited with success!" });
    } else {
      res.json({ msg: "Not Edited!" });
    }
  });
});
//business logic: search matches by team
app.post("/matches/searchMatch", (req, res) => {
  console.log("Business Logic: Search Matches By Team Name");
  let teamName = req.body.name;
  console.log("Here is object", teamName);
  let results = [];
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].teamOne == teamName || matches[i].teamTwo == teamName) {
      results.push(matches[i]);
    }
  }
  if (results.length > 0) {
    res.json({ tab: results });
  } else {
    res.json({ msg: "No matches found" });
  }
});
app.get("/matches/searchMatches/:name", (req, res) => {
  console.log("Business Logic: Search Matches By Team name", req.params.name);
  let teamName = req.params.name;
  console.log("here is object", teamName);
  let results = [];
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].teamOne == teamName || matches[i].teamTwo == teamName) {
      results.push(matches[i]);
    }
  }
  if (results.length > 0) {
    res.json({ matches: results });
  } else {
    res.json({ msg: "No matches found" });
  }
});
// Business Logic: Search Player By Name
app.get("/players/searchPlayerByName/:name", (req, res) => {
  console.log("Business Logic: Search Player By Name");
  //search Player
  let foundPlayer;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == req.params.name) {
      foundPlayer = players[i];
      break;
    }
  }
  console.log("here is found player", foundPlayer);
  if (foundPlayer) {
    let foundTeam;
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id == foundPlayer.teamId) {
        foundTeam = teams[i];
        break;
      }
    }
    console.log("Here is found team", foundTeam);
    if (foundTeam) {
      let foundPlayers = [];
      for (let i = 0; i < foundTeam.player.length; i++) {
        let p = searchPlayerById(foundTeam.players[i]);
        foundPlayers.push(p);
      }
      res.json({ team: foundTeam, players: foundPlayers });
    }
  } else {
    res.json({ msg: "player not found" });
  }
});
function searchPlayerById() {
  let player;
  for (let i = 0; i < player.length; i++) {
    if (players[i].id == id) {
      player = player[i];
      break;
    }
    return player;
  }
}
app.get("/teams/searchByName/:name", (req, res) => {
  console.log("Business Logic: Search Team By Name", req.params.name);
  let foundTeam;
  for (let i = 0; i < teams.length; i++) {
    if (teams[i].name == req.params.name) {
      foundTeam = teams[i];
      break;
    }
  }
  console.log("Here is found team", foundTeam);
  if (foundTeam) {
    let foundTeam = [];
    for (let i = 0; i < foundTeam.players; i++) {
      foundPlayer.push(searchPlayerById(foundTeam.players));
      foundPlayer.push(p);
    }
  } else {
    res.json({ msg: "Team not found!" });
  }
});
app.post(
  "/users/signup",
  multer({ storage: storageConfig }).single("photo"),
  (req, res) => {
    console.log("Busines Logic: Signup Add User", req.body);
    let user = req.body;
    // search user by email to check email uniqueness
    User.findOne({ email: user.email }).then(
      // data : null or user object | data == search result
      (data) => {
        console.log("Here is data after search user by email", data);
        if (data) {
          res.json({ msg: "Email already exists", isAdded: false });
        } else {
          bcrypt.hash(req.body.password, 10).then((cryptedPassword) => {
            console.log("Here is crypted password", cryptedPassword);
            req.body.password = cryptedPassword;
            req.body.photo =
              "http://localhost:3000/myShortCut/" + req.file.filename;
            let userObj = new User(req.body);
            userObj.save();
            res.json({ msg: "user added successfully!", isAdded: true });
          });
        }
      }
    );
  }
);
// Business Logic : Login
// 0 => invalid email
// 1 => invalid pwd
// 2 => Welcome
app.post("/users/login", (req, res) => {
  console.log("Business Logic: Login", req.body);
  // Check if user exists by email
  User.findOne({ email: req.body.email }).then(
    // data: DB response (null or object)
    (data) => {
      console.log("Here is found user by email", data);
      if (!data) {
        res.json({ msg: "0" });
      } else {
        //Check PWDS
        bcrypt
          .compare(req.body.password, data.password)
          .then((passwordResult) => {
            console.log("Here is password result", passwordResult);
            if (!passwordResult) {
              res.json({ msg: "1" });
            } else {
              let userToSend = {
                fName: data.firstName,
                lName: data.lastName,
                img: data.photo,
                role: data.role,
              };
              const token = jwt.sign(userToSend, secretKey, {
                expiresIn: "1h",
              });
              console.log("Here is generated token", token);
              res.json({ msg: "2", user: token });
            }
          });
      }
    }
  );
});
app.post("/weather", (req, res) => {
  console.log("Here is weather object", req.body);
  let apiKey = "2bda23c07acd6be553a437b4d4b480c2";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${apiKey}`;
  axios.get(apiURL).then((apiResponse) => {
    console.log("Here is api response", apiResponse.data);
    let weatherObj = {
      temp: apiResponse.data.main.temp,
      pressure: apiResponse.data.main.pressure,
      humidity: apiResponse.data.main.humidity,
      windspeed: apiResponse.data.wind.speed,
    };
    res.json(weatherObj);
  });
});
// export app
// make app imprtable to other filles
module.exports = app;
