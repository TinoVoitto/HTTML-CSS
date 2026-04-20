let NumOfCandidates = Number(window.prompt(`Enter the number of candidates: `));
let candidates = [];
let NumOfVotes = [];

for (let i = 1; i <= NumOfCandidates; i++) {
  let name = window.prompt(`Enter the name of candidate ${i}:`);
  candidates.push(name);
}

candidates.forEach((name) => {
  console.log(`Candidate: ${name}
Votes Received: 0`);
});

let Voters = Number(window.prompt(`Enter the total number of voters: `));
let spreadVotes = Voters;

for (let i = 0; i < candidates.length; i++) {
  let amount = Math.floor(Math.random() * (spreadVotes + 1));
  NumOfVotes.push(amount);
  spreadVotes -= amount;
}

let emptyVotes = spreadVotes;

let results = candidates.map((name, index) => {
  return { name: name, votes: NumOfVotes[index] };
});

results.sort((a, b) => {
  return b.votes - a.votes;
});

results.forEach((candidate) => {
  console.log(`Candidate: ${candidate.name}
Votes Received: ${candidate.votes}`);
});

let winner = results[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes`);
console.log(`Empty votes: ${emptyVotes}`);
