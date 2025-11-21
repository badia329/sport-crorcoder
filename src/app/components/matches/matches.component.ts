import { Component } from '@angular/core';
import { ResultComponent } from "../result/result.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-matches',
  imports: [ResultComponent, NgFor],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
 matches = [
  {
    id: 1,
    scoreOne: 3,
    scoreTwo: 1,

    teamOne: "FC Barcelona",
    teamTwo: "Real Madrid",

    playersOne: [
      { name: "Robert Lewandowski", number: 9 },
      { name: "Pedri", number: 8 },
      { name: "Gavi", number: 6 },
      { name: "Ronald Araújo", number: 4 }
    ],

    playersTwo: [
      { name: "Vinícius Júnior", number: 7 },
      { name: "Jude Bellingham", number: 5 },
      { name: "Rodrygo", number: 11 },
      { name: "Toni Kroos", number: 8 }
    ]
  },

  {
    id: 2,
    scoreOne: 2,
    scoreTwo: 2,

    teamOne: "Manchester City",
    teamTwo: "Liverpool",

    playersOne: [
      { name: "Erling Haaland", number: 9 },
      { name: "Kevin De Bruyne", number: 17 },
      { name: "Phil Foden", number: 47 },
      { name: "Rúben Dias", number: 3 }
    ],

    playersTwo: [
      { name: "Mohamed Salah", number: 11 },
      { name: "Darwin Núñez", number: 9 },
      { name: "Virgil van Dijk", number: 4 },
      { name: "Luis Díaz", number: 7 }
    ]
  },
  {
    id: 3,
    scoreOne: 1,
    scoreTwo: 3,

    teamOne: "Paris Saint-Germain",
    teamTwo: "Bayern Munich",

    playersOne: [
      { name: "Ousmane Dembélé", number: 10 },
      { name: "Marquinhos", number: 5 },
      { name: "Achraf Hakimi", number: 2 },
      { name: "Vitinha", number: 17 }
    ],

    playersTwo: [
      { name: "Harry Kane", number: 9 },
      { name: "Jamal Musiala", number: 42 },
      { name: "Thomas Müller", number: 25 },
      { name: "Joshua Kimmich", number: 6 }
    ]
  },

  {
    id: 4,
    scoreOne: 2,
    scoreTwo: 2,

    teamOne: "Arsenal",
    teamTwo: "Chelsea",

    playersOne: [
      { name: "Bukayo Saka", number: 7 },
      { name: "Martin Ødegaard", number: 8 },
      { name: "Declan Rice", number: 41 },
      { name: "William Saliba", number: 2 }
    ],

    playersTwo: [
      { name: "Cole Palmer", number: 20 },
      { name: "Enzo Fernández", number: 8 },
      { name: "Moisés Caicedo", number: 25 },
      { name: "Reece James", number: 24 }
    ]
  }
];


}
