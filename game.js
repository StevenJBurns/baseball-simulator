const NUM_INNINGS = 9;

//Calculates walks + hit by pitch for each batter by subtracting OBP and AVG
var calcWalksPlusHBP = function(obp, avg){
  walksPlusHBP = [];
  for (var i = 0; i < 9; i++){
  	walksPlusHBP[i] = obp[i]-avg[i];
  }
  return walksPlusHBP;
}

//Batting data for each team using baseballreference.com

//2014 Nats
var team1 = new Object();
  team1.avg = [.295, .274, .277, .251, .276, .255, .248, .241, .137];
  team1.obp = [.347, .344, .373, .342, .341, .313, .303, .299, .195];
  team1.walksPlusHBP = calcWalksPlusHBP(team1.obp, team1.avg);
  team1.slg = [.415, .427, .438, .410, .444, .415, .411, .349, .194];
  team1.pctSingles = [0.706, 0.659, 0.657, 0.686, 0.647, 0.694, 0.662, 0.730, 0.753];
  team1.pctDoubles = [0.216, 0.218, 0.221, 0.150, 0.220, 0.140, 0.166, 0.170, 0.164];
  team1.pctTriples = [0.044, 0.028, 0.006, 0.007, 0.012, 0.013, 0.026, 0.021, 0.000];
  team1.pctHomers = [0.034, 0.095, 0.116, 0.157, 0.121, 0.153, 0.146, 0.078, 0.082];
  team1.playerOutcomes = new Array();

//2014 Mets
var team2 = new Object();
  team2.avg = [.235, .277, .250, .238, .279, .258, .235, .219, .136];
  team2.obp = [.308, .333, .305, .340, .339, .335, .290, .304, .197];
  team2.walksPlusHBP = calcWalksPlusHBP(team2.obp, team2.avg);
  team2.slg = [.333, .384, .354, .413, .456, .446, .365, .321, .182];
  team2.pctSingles = [0.707, 0.724, 0.713, 0.622, 0.636, 0.560, 0.691, 0.730, 0.778];
  team2.pctDoubles = [0.217, 0.211, 0.213, 0.196, 0.225, 0.287, 0.180, 0.164, 0.167];
  team2.pctTriples = [0.025, 0.016, 0.018, 0.007, 0.006, 0.020, 0.014, 0.016, 0.000];
  team2.pctHomers = [0.051, 0.049, 0.055, 0.175, 0.133, 0.133, 0.115, 0.090, 0.056];
  team2.playerOutcomes = new Array();


//Resets the outcome of the at-bats for each player
var clearPlayerOutcomes = function(team) {
  team.playerOutcomes = new Array();
  for (var i = 0; i < 9; i++) {
    team.playerOutcomes.push([]);
  }
}

//onBase is a length 3 array containing 0 or 1 in position i if there is a runner on base i
//returns the new on base setup and the number of runs scored
var advanceRunners = function(onBase, numBases) {
  var scoredThisHit = 0;
  var i;
  //runners who score
  for (i = 2; i > (2-numBases); i--) {
    scoredThisHit += onBase[i];
  }
  //runners who advance
  for (i = 2; i >= numBases; i--) {
    onBase[i] = onBase[i-numBases];
  }
  onBase[numBases-1] = 1; //this is the batter who just hit
  //fill in empty bases behind trail runner
  for (i = numBases-2; i >= 0; i--) {
    onBase[i] = 0;
  }
  return [onBase, scoredThisHit];
}

var homer = function(onBase){
	var scoredThisHit = sum(onBase) + 1;
  onBase = [0,0,0];
  return [onBase, scoredThisHit];
}

//Simulates one offensive inning for the indicated team.
var offensiveInning = function(team, nowBatting, inning){
 	var numOuts = 0;
 	var scoredThisInning = 0;
 	var onBase = [0,0,0];
  var hitOutcome = [];
  while (numOuts < 3){
    while (team.playerOutcomes[nowBatting].length < inning) {
      team.playerOutcomes[nowBatting].push(""); //fill in innings since the player's last at bat with blanks
    }
  	var atBatOutcome = Math.random();
  	if (atBatOutcome > team.avg[nowBatting]){
  		numOuts++;
      team.playerOutcomes[nowBatting].push("Out");
  		console.log("Out. On base: " + onBase);
  	}
  	else {
  		var hitType = Math.random();
  		if (hitType < team.pctSingles[nowBatting]){
  			hitOutcome = advanceRunners(onBase,1);
  			onBase = hitOutcome[0];
  			scoredThisInning += hitOutcome[1];
        team.playerOutcomes[nowBatting].push("1B");
  			console.log("Single. On base: " + onBase);
  		}
  		else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]){
  			hitOutcome = advanceRunners(onBase,2);
   			onBase = hitOutcome[0];
  			scoredThisInning += hitOutcome[1];
        team.playerOutcomes[nowBatting].push("2B");
  			console.log("Double. On base: " + onBase); 					
  		}
  		else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]+team.pctTriples[nowBatting]){
  			hitOutcome = advanceRunners(onBase,3);
   			onBase = hitOutcome[0];
  			scoredThisInning += hitOutcome[1];
        team.playerOutcomes[nowBatting].push("3B");
  			console.log("Triple. On base: " + onBase); 					
  		}
  		else {
  			hitOutcome = homer(onBase);
   			onBase = hitOutcome[0];
  			scoredThisInning += hitOutcome[1];
        team.playerOutcomes[nowBatting].push("HR");
  			console.log("Homer! On base: " + onBase); 
  		}  				
  	}
  	nowBatting = (nowBatting + 1) % 9;
  }
  return [scoredThisInning, nowBatting];
};

//Simulates one game between team1 and team2
var game = function() {
  clearPlayerOutcomes(team1);
  clearPlayerOutcomes(team2);
  var extraInnings = 0;
  var inningOutcome = [0,0];
  var team1Score = 0;
  var team2Score = 0;
  var nowBatting1 = 0;
  var nowBatting2 = 0;
  var team1lineScore = [];
  var team2lineScore = [];
  //First 9 innings
  for (var i = 0; i < NUM_INNINGS; i++){
    //inning i, team1
  	inningOutcome = offensiveInning(team1,nowBatting1,i);
    team1lineScore.push(inningOutcome[0]);
  	nowBatting1 = inningOutcome[1];
  	console.log("In inning " + i + ", the Nats scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
  	//inning i, team2    
    inningOutcome = offensiveInning(team2,nowBatting2,i);
    team2lineScore.push(inningOutcome[0]);
    nowBatting2 = inningOutcome[1];
    console.log("In inning " + i + ", the Mets scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
  }

  //Extra innings as necessary
  while (sum(team1lineScore) === sum(team2lineScore)){
    extraInnings++;
  	inningOutcome = offensiveInning(team1, nowBatting1, NUM_INNINGS+extraInnings);
    team1lineScore.push(inningOutcome[0]);
  	nowBatting1 = inningOutcome[1];
  	inningOutcome = offensiveInning(team2, nowBatting2, NUM_INNINGS+extraInnings);
    team2lineScore.push(inningOutcome[0]);
  	nowBatting2 = inningOutcome[1];
  }

  var totalInnings = extraInnings + 9;
  team1Score = sum(team1lineScore);
  team2Score = sum(team2lineScore);

  //fill in the rest of each player's inning outcomes with blank if didn't bat
  for (var i = 0; i < 9; i++){
    while (team1.playerOutcomes[i].length < totalInnings) {
      team1.playerOutcomes[i].push("");
    }
    while (team2.playerOutcomes[i].length < totalInnings) {
      team2.playerOutcomes[i].push("");
    }
  }

  if (team1Score > team2Score){
  	alert("Nats win! Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  }
  else if (team2Score > team1Score){
  	alert("Mets win! Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  }
  else {
  	alert("Tie game. Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  }

  console.log(team1.playerOutcomes);

  //format line scores into html table element
  var lineScoreArray =[];
  lineScoreArray.push("<tr><th>Team Name</th>");
  for (var i = 1; i <= totalInnings; i++) {
    lineScoreArray.push("<th>".concat(i).concat("</th>"));
  }
  lineScoreArray.push("<th>Total</th>");
  lineScoreArray.push("</tr><tr><td>Nats</td>");
  for(var i = 1; i <= totalInnings; i++) {
    lineScoreArray.push("<td>".concat(team1lineScore[i-1]).concat("</td>"));
  }
  lineScoreArray.push("<td>".concat(team1Score).concat("</td>"));
  lineScoreArray.push("</tr><tr><td>Mets</td>");
  for(var i = 1; i <= totalInnings; i++) {
    lineScoreArray.push("<td>".concat(team2lineScore[i-1]).concat("</td>"));
  }
  lineScoreArray.push("<td>".concat(team2Score).concat("</td>"));
  lineScoreArray.push("/tr>");
  $('#linescore').html(lineScoreArray.join(''));
  $('#team1Scorecard').html(formatOutcome(team1, totalInnings));
  $('#team2Scorecard').html(formatOutcome(team2, totalInnings));

}

//Run game on click of runButton
$(document).ready(function() {
  $('#runButton').click(game);
});

//returns sum of values of a numeric array
var sum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//formats player outcomes from given team into string of html code that becomes scorebook table
var formatOutcome = function(team, totalInnings) {
  var teamScorebook = [];
  teamScorebook.push("<tr><th></th>");
  for (var i = 1; i <= totalInnings; i++) {
    teamScorebook.push("<th>".concat(i).concat("</th>"));
  }
  teamScorebook.push("</tr>");
  for (var i = 1; i <= 9; i++) {
    teamScorebook.push("<tr><td>Player ".concat(i).concat("</td>"));
    for (var j = 1; j <= totalInnings; j++) {
      teamScorebook.push("<td>".concat(team.playerOutcomes[i-1][j-1]).concat("</td>"));
    }
    teamScorebook.push("</tr>");
  }
  return teamScorebook.join('');
}
