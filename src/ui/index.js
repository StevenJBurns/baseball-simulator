"use strict";

import { Game } from '../domain/Game/Game.ts';
import { Team } from '../domain/Team/Team.ts';
import { Venue } from '../domain/Venue/Venue.ts';

console.clear();

const game = Game.create({
  start: {
    scheduled: new Date().toISOString(),
    actual: new Date().toISOString(),
  },
  venue: Venue.create({ name: 'Shea Stadium' }),
  awayTeam: Team.create({ roster: []}),
  homeTeam: Team.create({ roster: []}),
});

console.log(game.properties);

// var __assign = (this && this.__assign) || function () {
//     __assign = Object.assign || function(t) {
//         for (var s, i = 1, n = arguments.length; i < n; i++) {
//             s = arguments[i];
//             for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
//                 t[p] = s[p];
//         }
//         return t;
//     };
//     return __assign.apply(this, arguments);
// };
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// var __generator = (this && this.__generator) || function (thisArg, body) {
//     var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
//     return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
//     function verb(n) { return function (v) { return step([n, v]); }; }
//     function step(op) {
//         if (f) throw new TypeError("Generator is already executing.");
//         while (_) try {
//             if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
//             if (y = 0, t) op = [op[0] & 2, t.value];
//             switch (op[0]) {
//                 case 0: case 1: t = op; break;
//                 case 4: _.label++; return { value: op[1], done: false };
//                 case 5: _.label++; y = op[1]; op = [0]; continue;
//                 case 7: op = _.ops.pop(); _.trys.pop(); continue;
//                 default:
//                     if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
//                     if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
//                     if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
//                     if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
//                     if (t[2]) _.ops.pop();
//                     _.trys.pop(); continue;
//             }
//             op = body.call(thisArg, _);
//         } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
//         if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
//     }
// };

// // exports.__esModule = true;

// var renderFooter_js_1 = require("./renderFooter.js");
// var renderModal_js_1 = require("./renderModal.js");
// var sum_js_1 = require("../utils/sum.js");
// var runInning_js_1 = require("./js/game/runInning.js");
// var runPitch_js_1 = require("./js/game/runPitch.js");

// var initialGameState = {
//     teamData: {
//         visitor: {},
//         home: {}
//     },
//     gameEvents: {
//         visitor: [],
//         home: []
//     },
//     lineScore: {
//         visitor: [],
//         home: []
//     },
//     currentInning: 1
// };
// var gameState = {};
// var NUM_INNINGS = 9;

// //Calculates walks + hit by pitch for each batter by subtracting OBP and AVG
// var calcWalksPlusHBP = function (obp, avg) {
//     var walksPlusHBP = [];
//     for (var i = 0; i < 9; i++)
//         walksPlusHBP[i] = obp[i] - avg[i];
//     return walksPlusHBP;
// };

// // Batting data via baseballreference.com
// // visitor: 2014 Nats - home: 2014 Mets
// var visitorData = function () {
//     return __awaiter(void 0, void 0, void 0, function () {
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0: return [4 /*yield*/, fetch('../data/visitor.json')
//                     .then(function (response) { return response.json(); })
//                     .then(function (teamObj) {
//                     teamObj.walksPlusHBP = calcWalksPlusHBP(teamObj.obp, teamObj.avg);
//                     return teamObj;
//                 })];
//             case 1: return [2 /*return*/, _a.sent()];
//         }
//     });
// });
// };

// var homeData = function () { return __awaiter(void 0, void 0, void 0, function () {
//     return __generator(this, function (_a) {
//         switch (_a.label) {
//             case 0: return [4 /*yield*/, fetch('../data/home.json')
//                     .then(function (response) { return response.json(); })
//                     .then(function (teamObj) {
//                     teamObj.walksPlusHBP = calcWalksPlusHBP(teamObj.obp, teamObj.avg);
//                     return teamObj;
//                 })];
//             case 1: return [2 /*return*/, _a.sent()];
//         }
//     });
// }); };

// // visitorData.walksPlusHBP = calcWalksPlusHBP(visitorData.obp, visitorData.avg);
// // homeData.walksPlusHBP = calcWalksPlusHBP(homeData.obp, homeData.avg);

// //Resets the outcome of the at-bats for each player
// var clearGameEvents = function (team) {
//     team.playerOutcomes = new Array();
//     // console.log(team.playerOutcomes);
//     for (var i = 0; i < 9; i++)
//         team.playerOutcomes.push([]);
// };

// // onBase is a length 3 array containing 0 or 1 in position i if there is a runner on base i
// // returns the new on base setup and the number of runs scored
// var advanceRunners = function(onBase, numBases) {
//     var i, scoredThisHit = 0;
//     //runners who score
//     for (i = 2; i > (2 - numBases); i--)
//         scoredThisHit += onBase[i];
//     //runners who advance
//     for (i = 2; i >= numBases; i--)
//         onBase[i] = onBase[i - numBases];
//     //this is the batter who just hit
//     onBase[numBases - 1] = 1;
//     //fill in empty bases behind trail runner
//     for (i = numBases - 2; i >= 0; i--)
//         onBase[i] = 0;
//     return [onBase, scoredThisHit];
// };

// var homer = function(onBase) {
//   var scoredThisHit = (0, sum_js_1.sum)(onBase) + 1;
//   onBase = [0, 0, 0];
//   return [onBase, scoredThisHit];
// };

// // //Simulates one offensive inning for the indicated team.
// // const runInning = (team, nowBatting, inning) => {
// //  	let currentOuts = 0;
// //  	let scoredThisInning = 0;
// //  	let onBase = [0, 0, 0];
// //   let hitOutcome = [];
// //   while (currentOuts < 3) {
// //     while (team.playerOutcomes[nowBatting].length < inning) {
// //       team.playerOutcomes[nowBatting].push(""); // fill in innings since the player's last at bat with blanks
// //     };
// //   	let atBatOutcome = Math.random();
// //     if (atBatOutcome > team.avg[nowBatting]){
// //   		currentOuts++;
// //       team.playerOutcomes[nowBatting].push("Out");
// //   		// console.log("Out. On base: " + onBase);
// //   	} else {
// //   		let hitType = Math.random();
// //   		if (hitType < team.pctSingles[nowBatting]){
// //   			hitOutcome = advanceRunners(onBase,1);
// //   			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push("1B");
// //   			// console.log("Single. On base: " + onBase);
// //   		} else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]) {
// //   			hitOutcome = advanceRunners(onBase,2);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push("2B");
// //   			// console.log("Double. On base: " + onBase); 					
// //   		} else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]+team.pctTriples[nowBatting]) {
// //   			hitOutcome = advanceRunners(onBase,3);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push("3B");
// //   			// console.log("Triple. On base: " + onBase); 					
// //   		} else {
// //   			hitOutcome = homer(onBase);
// //    			onBase = hitOutcome[0];
// //   			scoredThisInning += hitOutcome[1];
// //         team.playerOutcomes[nowBatting].push("HR");
// //   			// console.log("Homer! On base: " + onBase); 
// //   		}  				
// //   	}
// //   	nowBatting = (nowBatting + 1) % 9;
// //   }
// //   return [scoredThisInning, nowBatting];
// // };
// //formats player outcomes from given team into string of html code that becomes scorebook table
// var renderCompleteLinescore = function (team, totalInnings) {
//     var teamScorebook = [];
//     teamScorebook.push("<tr><th></th>");
//     for (var i = 1; i <= totalInnings; i++) {
//         teamScorebook.push("<th>".concat(i).concat("</th>"));
//     }
//     teamScorebook.push("</tr>");
//     for (var i = 1; i <= 9; i++) {
//         teamScorebook.push("<tr><td>Player ".concat(i).concat("</td>"));
//         for (var j = 1; j <= totalInnings; j++) {
//             teamScorebook.push("<td>".concat(team.playerOutcomes[i - 1][j - 1]).concat("</td>"));
//         }
//         teamScorebook.push("</tr>");
//     }
//     return teamScorebook.join('');
// };
// //Simulates one game between team1 and team2
// var runGame = function () {
//     gameState = __assign({}, initialGameState);
//     clearGameEvents(visitorData);
//     clearGameEvents(homeData);
//     var extraInnings = 0;
//     var inningOutcome = [0, 0];
//     var team1Score = 0;
//     var team2Score = 0;
//     var nowBatting1 = 0;
//     var nowBatting2 = 0;
//     var visitorLineScore = [];
//     var homeLineScore = [];
//     var inningLineScore = {
//         visitor: [],
//         home: []
//     };
//     //First 9 innings
//     for (var i = 0; i < NUM_INNINGS; i++) {
//         //inning i, team1
//         inningOutcome = (0, runInning_js_1.runInning)(visitorData, nowBatting1, i);
//         visitorLineScore.push(inningOutcome[0]);
//         nowBatting1 = inningOutcome[1];
//         // console.log("In inning " + i + ", the Nats scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
//         //inning i, team2    
//         inningOutcome = (0, runInning_js_1.runInning)(homeData, nowBatting2, i);
//         homeLineScore.push(inningOutcome[0]);
//         nowBatting2 = inningOutcome[1];
//         // console.log("In inning " + i + ", the Mets scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
//     }
//     // Extra innings as necessary
//     while ((0, sum_js_1.sum)(visitorLineScore) === (0, sum_js_1.sum)(homeLineScore)) {
//         extraInnings++;
//         inningOutcome = (0, runInning_js_1.runInning)(visitorData, nowBatting1, NUM_INNINGS + extraInnings);
//         visitorLineScore.push(inningOutcome[0]);
//         nowBatting1 = inningOutcome[1];
//         inningOutcome = (0, runInning_js_1.runInning)(homeData, nowBatting2, NUM_INNINGS + extraInnings);
//         homeLineScore.push(inningOutcome[0]);
//         nowBatting2 = inningOutcome[1];
//     }
//     var totalInnings = extraInnings + 9;
//     team1Score = (0, sum_js_1.sum)(visitorLineScore);
//     team2Score = (0, sum_js_1.sum)(homeLineScore);
//     // fill in the rest of each player's inning outcomes with blank if didn't bat
//     for (var i = 0; i < 9; i++) {
//         while (visitorData.playerOutcomes[i].length < totalInnings) {
//             visitorData.playerOutcomes[i].push("");
//         }
//         ;
//         while (homeData.playerOutcomes[i].length < totalInnings) {
//             homeData.playerOutcomes[i].push("");
//         }
//         ;
//     }
//     ;
//     (0, renderModal_js_1.renderModal)(totalInnings, team1Score, team2Score);
//     //format line scores into html table element
//     var lineScoreArray = [];
//     lineScoreArray.push("<tr><th>Team Name</th>");
//     for (var i = 1; i <= totalInnings; i++) {
//         lineScoreArray.push("<th>".concat(i).concat("</th>"));
//     }
//     lineScoreArray.push("<th>Total</th>");
//     lineScoreArray.push("</tr><tr><td>Nats</td>");
//     for (var i = 1; i <= totalInnings; i++) {
//         lineScoreArray.push("<td>".concat(visitorLineScore[i - 1]).concat("</td>"));
//     }
//     lineScoreArray.push("<td>".concat(team1Score).concat("</td>"));
//     lineScoreArray.push("</tr><tr><td>Mets</td>");
//     for (var i = 1; i <= totalInnings; i++) {
//         lineScoreArray.push("<td>".concat(homeLineScore[i - 1]).concat("</td>"));
//     }
//     lineScoreArray.push("<td>".concat(team2Score).concat("</td>"));
//     lineScoreArray.push("/tr>");
//     $('#linescore').html(lineScoreArray.join(''));
//     $('#team1Scorecard').html(renderCompleteLinescore(visitorData, totalInnings));
//     $('#team2Scorecard').html(renderCompleteLinescore(homeData, totalInnings));
// };

// $(function () {
//     console.clear();
//     (0, renderFooter_js_1.renderFooter)();
//     $('#runButton').on('click', runGame);
//     $('#runInning').on('click', runInning_js_1.runInning);
//     var count = [0, 0];
//     var balls = count[0], strikes = count[1];
//     while (balls < 4 && strikes < 3) {
//         (0, runPitch_js_1.runPitch)(count).then(function (pitchResult) { return console.log(pitchResult); });
//     }
//     ;
// });
