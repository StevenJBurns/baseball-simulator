// import { Game } from '../domain/Game/Game.js';
// import { Team } from '../domain/Team/Team.js';
import { Venue } from '../domain/Venue/Venue.js';
import { UniqueId } from '../domain/common/index.js';

const venue = Venue.create({
  id: UniqueId('7'),
  title: 'Shea',
  location: {
    city: {
      value: undefined
    },
    subdivision: {
      value: undefined
    },
    country: {
      value: undefined
    }
  }
});

console.log({ ...venue.properties });


// const game = Game.create({
//   start: {
//     scheduled: new Date().toISOString(),
//     actual: new Date().toISOString(),
//   },
//   venue: Venue.create({
//     id: '8bf8502c-362a-48ac-a138-f849effe9c2f',
//     title: 'Shea Stadium',
//     loction: {},
//   }),
//   awayTeam: Team.create({ roster: []}),
//   homeTeam: Team.create({ roster: []}),
// });

// console.log({ game });






// import { initialGameState } from '../infrastructure/state/initialGameState.js';

// import { renderFooter } from './renderFooter.js';
// import { renderModal } from './renderModal.js';

// import { sum } from '../utils/sum.js';

// import { runInning } from './js/game/runInning.js';
// import { runPitch } from './js/game/runPitch.js';

// let gameState = {};
// const NUM_INNINGS = 9;

// //Calculates walks + hit by pitch for each batter by subtracting OBP and AVG
// const calcWalksPlusHBP = (obp, avg) => {
//   const walksPlusHBP = [];
//   for (var i = 0; i < 9; i++) walksPlusHBP[i] = obp[i]-avg[i];
//   return walksPlusHBP;
// };

// // Batting data via baseballreference.com
// // visitor: 2014 Nats - home: 2014 Mets
// const awayTeamData = async () => await fetch('../data/visitor.json')
//   .then(response => response.json())
//   .then(teamObj => {
//     teamObj.walksPlusHBP = calcWalksPlusHBP(teamObj.obp, teamObj.avg);
//     return teamObj;
//   });

// const homeTeamData = async () => await fetch('../data/home.json')
//   .then(response => response.json())
//   .then(teamObj => {
//     teamObj.walksPlusHBP = calcWalksPlusHBP(teamObj.obp, teamObj.avg);
//     return teamObj;
//   });

// // awayTeamData.walksPlusHBP = calcWalksPlusHBP(awayTeamData.obp, awayTeamData.avg);
// // homeTeamData.walksPlusHBP = calcWalksPlusHBP(homeTeamData.obp, homeTeamData.avg);

// //Resets the outcome of the at-bats for each player
// const clearGameEvents = team => {
//   team.playerOutcomes = new Array();
//   // console.log(team.playerOutcomes);
//   for (var i = 0; i < 9; i++) team.playerOutcomes.push([]);
// };

// // onBase is a length 3 array containing 0 or 1 in position i if there is a runner on base i
// // returns the new on base setup and the number of runs scored
// const advanceRunners = (onBase, numBases) => {
//   let i, scoredThisHit = 0;

//   //runners who score
//   for (i = 2; i > (2-numBases); i--) scoredThisHit += onBase[i];
  
//   //runners who advance
//   for (i = 2; i >= numBases; i--) onBase[i] = onBase[i-numBases];
  
//   //this is the batter who just hit
//   onBase[numBases-1] = 1;

//   //fill in empty bases behind trail runner
//   for (i = numBases-2; i >= 0; i--) onBase[i] = 0;
  
//   return [onBase, scoredThisHit];
// }

// const homerun = onBase => {
// 	const scoredThisHit = sum(onBase) + 1;
//   onBase = [0,0,0];
//   return [onBase, scoredThisHit];
// }

// // //Simulates one offensive inning for the indicated team.
// // const runInning = (team, nowBatting, inning) => {
// //  	let currentOuts = 0;
// //  	let scoredThisInning = 0;
// //  	let onBase = [0, 0, 0];
// //   let hitOutcome = [];

// //   while (currentOuts < 3) {
// //     while (team.playerOutcomes[nowBatting].length < inning) {
// //       team.playerOutcomes[nowBatting].push(''); // fill in innings since the player's last at bat with blanks
// //     };

// //   	let atBatOutcome = Math.random();

// //     if (atBatOutcome > team.avg[nowBatting]){
// //   		currentOuts++;
// //       team.playerOutcomes[nowBatting].push('Out');
// //   		// console.log('Out. On base: ' + onBase);
// //   	} else {
// //   		let hitType = Math.random();
// //   		if (hitType < team.pctSingles[nowBatting]){
// //   			hitOutcome = advanceRunners(onBase,1);
// //   			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push('1B');
// //   			// console.log('Single. On base: ' + onBase);
// //   		} else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]) {
// //   			hitOutcome = advanceRunners(onBase,2);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push('2B');
// //   			// console.log('Double. On base: ' + onBase); 					
// //   		} else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]+team.pctTriples[nowBatting]) {
// //   			hitOutcome = advanceRunners(onBase,3);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push('3B');
// //   			// console.log('Triple. On base: ' + onBase); 					
// //   		} else {
// //   			hitOutcome = homer(onBase);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push('HR');
// //   			// console.log('Homer! On base: ' + onBase); 
// //   		}  				
// //   	}
// //   	nowBatting = (nowBatting + 1) % 9;
// //   }
// //   return [scoredThisInning, nowBatting];
// // };

// //formats player outcomes from given team into string of html code that becomes scorebook table
// const renderCompleteLinescore = (team, totalInnings) => {
//   const teamScorebook = [];

//   teamScorebook.push(`<tr><th></th>`);

//   for (var i = 1; i <= totalInnings; i++) {
//     teamScorebook.push(`<th>.concat(i).concat('</th>`);
//   };

//   teamScorebook.push('</tr>');
//   for (var i = 1; i <= 9; i++) {
//     teamScorebook.push('<tr><td>Player '.concat(i).concat('</td>'));
//     for (var j = 1; j <= totalInnings; j++) {
//       teamScorebook.push('<td>.concat(team.playerOutcomes[i-1][j-1]).concat('</td>'));
//     }
//     teamScorebook.push('</tr>');
//   }
//   return teamScorebook.join('');
// };

// //Simulates one game between team1 and team2
// const runGame = () => {
//   gameState = {...initialGameState};

//   clearGameEvents(awayTeamData);
//   clearGameEvents(homeTeamData);

//   let extraInnings = 0;
//   let inningOutcome = [0,0];
//   let team1Score = 0;
//   let team2Score = 0;
//   let nowBatting1 = 0;
//   let nowBatting2 = 0;
//   let visitorLineScore = [];
//   let homeLineScore = [];

//   const inningLineScore = {
//     visitor: [],
//     home: [],
//   }

//   //First 9 innings
//   for (var i = 0; i < NUM_INNINGS; i++){
//     //inning i, team1
//   	inningOutcome = runInning(awayTeamData, nowBatting1,i);
//     visitorLineScore.push(inningOutcome[0]);
//   	nowBatting1 = inningOutcome[1];
//   	// console.log('In inning ' + i + ', the Nats scored ' + inningOutcome[0] + ' and due up is Lineup Spot ' + inningOutcome[1]);
//   	//inning i, team2    
//     inningOutcome = runInning(homeTeamData, nowBatting2, i);
//     homeLineScore.push(inningOutcome[0]);
//     nowBatting2 = inningOutcome[1];
//     // console.log('In inning ' + i + ', the Mets scored ' + inningOutcome[0] + ' and due up is Lineup Spot ' + inningOutcome[1]);
//   }

//   // Extra innings as necessary
//   while (sum(visitorLineScore) === sum(homeLineScore)){
//     extraInnings++;
//   	inningOutcome = runInning(awayTeamData, nowBatting1, NUM_INNINGS+extraInnings);
//     visitorLineScore.push(inningOutcome[0]);
//   	nowBatting1 = inningOutcome[1];
//   	inningOutcome = runInning(homeTeamData, nowBatting2, NUM_INNINGS+extraInnings);
//     homeLineScore.push(inningOutcome[0]);
//   	nowBatting2 = inningOutcome[1];
//   }

//   let totalInnings = extraInnings + 9;
//   team1Score = sum(visitorLineScore);
//   team2Score = sum(homeLineScore);

//   // fill in the rest of each player's inning outcomes with blank if didn't bat
//   for (var i = 0; i < 9; i++) {
//     while (awayTeamData.playerOutcomes[i].length < totalInnings) {
//       awayTeamData.playerOutcomes[i].push('');
//     };
//     while (homeTeamData.playerOutcomes[i].length < totalInnings) {
//       homeTeamData.playerOutcomes[i].push('');
//     };
//   };

//   renderModal(totalInnings, team1Score, team2Score);

//   //format line scores into html table element
//   let lineScoreArray: Array<string> = [];

//   lineScoreArray.push(`
//     <tr>
//       <th>Team Name</th>
//     </tr>
//   `);

//   for (var i = 1; i <= totalInnings; i++) {
//     lineScoreArray.push('<th>'.concat(i).concat('</th>');
//   };

//   lineScoreArray.push('<th>Total</th>');
//   lineScoreArray.push('</tr><tr><td>Nats</td>');

//   for(var i = 1; i <= totalInnings; i++) {
//     lineScoreArray.push('<td>'.concat(visitorLineScore[i-1]).concat('</td>'));
//   };

//   lineScoreArray.push('<td>'.concat(team1Score).concat('</td>'));
//   lineScoreArray.push('</tr><tr><td>Mets</td>');

//   for(var i = 1; i <= totalInnings; i++) {
//     lineScoreArray.push('<td>'.concat(homeLineScore[i-1]).concat('</td>'));
//   };

//   lineScoreArray.push('<td>'.concat(team2Score).concat('</td>'));
//   lineScoreArray.push('/tr>');

//   $('#linescore').html(lineScoreArray.join(''));
//   $('#team1Scorecard').html(renderCompleteLinescore(awayTeamData, totalInnings));
//   $('#team2Scorecard').html(renderCompleteLinescore(homeTeamData, totalInnings));
// }

// $(() => {
//   console.clear();
//   renderFooter();

//   $('#runButton').on('click', runGame);
//   $('#runInning').on('click', runInning);

//   const count = [0, 0];
//   let [balls, strikes] = count;

//   while (balls < 4 && strikes < 3) {
//     runPitch(count).then(pitchResult => console.log(pitchResult));
//   };
// });
