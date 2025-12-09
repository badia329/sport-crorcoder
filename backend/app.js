// import express module
const express = require("express");
const cors = require("cors");
// creates express app
const app = express();
//export app
// make app imprtable to other files
app.use(cors());
// send json response to FE
app.use(express.json());
//Get Object from Req
app.use(express.urlencoded({ extended: true }));
// DB Simulation
let matches = [
  {
    id: 1,
    teamOne: "Manchester United",
    teamTwo: "Liverpool",
    scoreOne: 6,
    scoreTwo: 4,
  },
  {
    id: 2,
    teamOne: "Team Liquid",
    teamTwo: "Fnatic",
    scoreOne: 10,
    scoreTwo: 9,
  },
  {
    id: 3,
    teamOne: "Basketball Playoffs",
    teamTwo: "Chelsea",
    scoreOne: 5,
    scoreTwo: 6,
  },
  {
    id: 4,
    teamOne: "Real Madrid",
    teamTwo: "Barcelona",
    scoreOne: 3,
    scoreTwo: 2,
  },
  {
    id: 5,
    teamOne: "PSG",
    teamTwo: "Bayern Munich",
    scoreOne: 1,
    scoreTwo: 3,
  },
];
// Traitement logique des reqs
// business logic: Get All Matches
app.get("/matches", (req, res) => {
  console.log("Business Logic: Get All Matches");
  res.json({ tab: matches, nbr: matches.length });
});
// Business Logic: Get Match By Id
// :id => dynamic parameter
app.get("/matches/:id", (req, res) => {
  console.log("Business Logic: Get Match By Id");
  let matchId = req.params.id;
  let foundMatch;
  console.log("Here is Id", matchId);
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id == matchId) {
      foundMatch = matches[i];
      break;
    }
    if (foundMatch) {
      res.json({ obj: foundMatch });
    } else {
      res.json({ msg: "Match not found!" });
    }
  }
});
// Business Logic: Delete Match By Id
app.delete("/matches/:id", (req, res) => {
  console.log("Business Logic: Delete Match By Id", req.params.id);
  let matchId = req.params.id;
  let isDeleted = false;
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id == matchId) {
      matches.splice(i, 1);
      isDeleted = true;
      break;
    }
  }

  if (isDeleted) {
    res.json({ msg: "Match deleted successfully" });
  } else {
    res.json({ msg: `Match N°${matchId} not found` });
  }
});
// Business Logic: Add Match By Id
app.post("/matches", (req, res) => {
  console.log("Business Logic: Add Match");
  let obj = req.body;
  console.log("Here is object", obj);
  obj.id = generateId(matches);
  matches.push(obj);
  res.json({ msg: "Match added successfully" });
});

function generateId(tab) {
  let maxId;
  if (tab.length == 0) {
    return 1;
  } else {
    maxId = tab[0].id;
    for (let i = 1; i < tab.length; i++) {
      if (tab[i].id > maxId) {
        maxId = tab[i].id;
      }
    }
    return maxId + 1;
  }
}
// Business Logic: Edit Match
app.put("/matches", (req, res) => {
  console.log("Business Logic: Edit Match ");
  let newMatch = req.body;
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id == newMatch) {
      break;
    }
  }
  res.json({ msg: "Edited with succes!" });
});
module.exports = app;
// export app
// make app imprtable to other filles
