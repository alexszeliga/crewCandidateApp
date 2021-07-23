const input = require('readline-sync');

const menuText = 
`Welcome to the Crew Candidate App, please choose an option:
1. Input test scores
2. List candidates
3. Add candidate
4. Quit

? `;

class CrewCandidateApp {
  constructor(candidates=[]) {
    this.candidates = candidates;
  }

  menuText = menuText;

  menu(){
    let selection = input.question(this.menuText, {limit:/^[1-4]{1}$/});
    if (selection === "1") {
        this.inputTestScores();
    }
    if (selection === "2") {
        this.listCandidates();
    }
    if (selection === "3") {
        this.addCandidate();
    }
    if (selection === "4") {
        return;
    }
  }

  addCandidate() {
    console.clear();
    let newCandidateName = input.question("Please enter the candidate's full name: ");
    let newCandidateMass = parseFloat(input.question("Please enter the candidate's mass in kg: "));
    this.candidates.push(new CrewCandidate(newCandidateName, newCandidateMass));
    this.menu();
  }

  listCandidates() {
    console.log(this.candidates);
    this.menu();
  }

  inputTestScores() {
      this.candidates.forEach(candidate=>{
          let newScore = input.question(`please enter a score for ${candidate.name}: `);
          candidate.addScore(newScore)
      })
      this.menu();
  }
}

class CrewCandidate {
  constructor (name, mass, scores=[]) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(score) {
    this.scores.push(parseInt(score));
  }

}

let defaultCandidates = [
  new CrewCandidate('Bubba Bear', 135, [88,85,90]),
  new CrewCandidate('Merry Maltese', 1.5, [93,88,97]),
  new CrewCandidate('Glad Gator', 225, [75,78,62]),
];

let app = new CrewCandidateApp(defaultCandidates);

app.menu();
