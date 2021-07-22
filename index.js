const input = require('readline-sync');

const menuText = 
`Welcome to the Crew Candidate App, please choose an option:
1. Give Test
2. Add Candidate

? `;


class CrewCandidateApp {
  constructor(candidates=[]) {
    this.candidates = candidates;
  }
  menuText = menuText;
  bootMenu(){
    let selection = input.question(this.menuText, {limit:/^[1-2]{1}$/});
    if (selection === "1") {
      console.log("1");
    }
    if (selection === "2") {
      console.log("2");
    }
  }
}
class CrewCandidate {
  constructor (name, mass, scores=[]) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
}

let defaultCandidates = [
  new CrewCandidate('Bubba Bear', 135, [88,85,90]),
  new CrewCandidate('Merry Maltese', 1.5, [93,88,97]),
  new CrewCandidate('Glad Gator', 225, [75,78,62]),
];
let app = new CrewCandidateApp(defaultCandidates);
app.bootMenu();