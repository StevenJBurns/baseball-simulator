var calcWalksPlusHBP = function(obp, avg){
  		walksPlusHBP = [];
  		for (var i = 0; i < 9; i++){
  			walksPlusHBP[i] = obp[i]-avg[i];
  		}
  		return walksPlusHBP;
  	}

  	var team1 = new Object();
  		team1.avg = [.295, .274, .277, .251, .276, .255, .248, .241, .137];
  		team1.obp = [.347, .344, .373, .342, .341, .313, .303, .299, .195];
  		team1.walksPlusHBP = calcWalksPlusHBP(team1.obp, team1.avg);
  		team1.slg = [.415, .427, .438, .410, .444, .415, .411, .349, .194];
  		team1.pctSingles = [0.706, 0.659, 0.657, 0.686, 0.647, 0.694, 0.662, 0.730, 0.753];
  		team1.pctDoubles = [0.216, 0.218, 0.221, 0.150, 0.220, 0.140, 0.166, 0.170, 0.164];
  		team1.pctTriples = [0.044, 0.028, 0.006, 0.007, 0.012, 0.013, 0.026, 0.021, 0.000];
  		team1.pctHomers = [0.034, 0.095, 0.116, 0.157, 0.121, 0.153, 0.146, 0.078, 0.082];

  	var team2 = new Object();
  		team2.avg = [.235, .277, .250, .238, .279, .258, .235, .219, .136];
  		team2.obp = [.308, .333, .305, .340, .339, .335, .290, .304, .197];
  		team2.walksPlusHBP = calcWalksPlusHBP(team2.obp, team2.avg);
  		team2.slg = [.333, .384, .354, .413, .456, .446, .365, .321, .182];
  		team2.pctSingles = [0.707, 0.724, 0.713, 0.622, 0.636, 0.560, 0.691, 0.730, 0.778];
  		team2.pctDoubles = [0.217, 0.211, 0.213, 0.196, 0.225, 0.287, 0.180, 0.164, 0.167];
  		team2.pctTriples = [0.025, 0.016, 0.018, 0.007, 0.006, 0.020, 0.014, 0.016, 0.000];
  		team2.pctHomers = [0.051, 0.049, 0.055, 0.175, 0.133, 0.133, 0.115, 0.090, 0.056];

  	var numInnings = 9;
  	var team1Score = 0;
  	var team2Score = 0;
  	var nowBatting1 = 0;
  	var nowBatting2 = 0;
  	var extraInnings = 0;

  	var single = function(onBase){
  		var scoredThisHit = 0;
  		if (onBase[2] === 1){
  			onBase[2] = 0;
  			scoredThisHit++;
  		}
  		if (onBase[1] === 1){
  			onBase[1] = 0;
  			onBase[2] = 1;
  		}
  		if (onBase[0] === 1){
  			onBase[0] = 0;
  			onBase[1] = 1;
  			}
  		onBase[0] = 1;
  		return [onBase, scoredThisHit];
  	}

  	var doubles = function(onBase){
  		var scoredThisHit = 0;
  		if (onBase[2] === 1){
  			onBase[2] = 0;
  			scoredThisHit++;
  		}
  		if (onBase[1] === 1){
  			onBase[1] = 0;
  			scoredThisHit++;
  		}
  		if (onBase[0] === 1){
  			onBase[0] = 0;
  			onBase[2] = 1;
  			}
  		onBase[1] = 1;
  		return [onBase, scoredThisHit];
  	}

  	var triple = function(onBase){
  		var scoredThisHit = 0;
  		if (onBase[2] === 1){
  			onBase[2] = 0;
  			scoredThisHit++;
  		}
  		if (onBase[1] === 1){
  			onBase[1] = 0;
  			scoredThisHit++;
  		}
  		if (onBase[0] === 1){
  			onBase[0] = 0;
  			scoredThisHit++;
  		}
  		onBase[2] = 1;
  		return [onBase, scoredThisHit];
  	}

  	var homer = function(onBase){
  		var scoredThisHit = 0;
  		for (var i = 0; i < 3; i++){
  			if (onBase[i] === 1){
  				scoredThisHit++;
  			}
  		}
  		scoredThisHit++;
  		onBase = [0,0,0];
  		return [onBase, scoredThisHit];
  	}

  	var offensiveInning = function(team, nowBatting){
  		var numOuts = 0;
  		var scoredThisInning = 0;
 		var onBase = [0,0,0];
  		var hitOutcome = [];
  		while (numOuts < 3){
  			var atBatOutcome = Math.random();
  			if (atBatOutcome > team.avg[nowBatting]){
  				numOuts++;
  				console.log("Out. On base: " + onBase);
  			}
  			else {
  				var hitType = Math.random();
  				if (hitType < team.pctSingles[nowBatting]){
  					hitOutcome = single(onBase);
  					onBase = hitOutcome[0];
  					scoredThisInning += hitOutcome[1];
  					console.log("Single. On base: " + onBase);
  				}
  				else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]){
  					hitOutcome = doubles(onBase);
   					onBase = hitOutcome[0];
  					scoredThisInning += hitOutcome[1];
  					console.log("Double. On base: " + onBase); 					
  				}
  				else if (hitType < team.pctSingles[nowBatting]+team.pctDoubles[nowBatting]+team.pctTriples[nowBatting]){
  					hitOutcome = triple(onBase);
   					onBase = hitOutcome[0];
  					scoredThisInning += hitOutcome[1];
  					console.log("Triple. On base: " + onBase); 					
  				}
  				else {
  					hitOutcome = homer(onBase);
   					onBase = hitOutcome[0];
  					scoredThisInning += hitOutcome[1];
  					console.log("Homer! On base: " + onBase); 
  				}  				
  			}
  			nowBatting = (nowBatting + 1) % 9;
  		}
  		return [scoredThisInning, nowBatting];
  	};

  	var game = function() {
  		var inningOutcome = [0,0];
  		for (var i = 0; i < numInnings; i++){
  			inningOutcome = offensiveInning(team1,nowBatting1);
  			team1Score += inningOutcome[0];
  			nowBatting1 = inningOutcome[1];
  			console.log("In inning " + i + ", the Nats scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
  		}
  		for (var i = 0; i < numInnings; i++){
  			inningOutcome = offensiveInning(team2,nowBatting2);
  			team2Score += inningOutcome[0];
  			nowBatting2 = inningOutcome[1];
  			console.log("In inning " + i + ", the Mets scored " + inningOutcome[0] + " and due up is Lineup Spot " + inningOutcome[1]);
  		}

  		while (team1Score === team2Score){
  			inningOutcome = offensiveInning(team1, nowBatting1);
  			team1Score += inningOutcome[0];
  			nowBatting1 = inningOutcome[1];
  			inningOutcome = offensiveInning(team2, nowBatting2);
  			team2Score += inningOutcome[0];
  			nowBatting2 = inningOutcome[1];
  			extraInnings++;
  		}

  		var totalInnings = extraInnings + 9;

  		if (team1Score > team2Score){
  			alert("Nats win! Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  		}
  		else if (team2Score > team1Score){
  			alert("Mets win! Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  		}
  		else {
  			alert("Tie game. Nats: " + team1Score + " Mets: " + team2Score + ", " + totalInnings + " innings");
  		}

  	}

  	game();
  	// document.write("Hello <br>");
  	// document.write("Hi");
  	var node = document.getElementById('node-id');
	var newNode = document.createElement('p');
	newNode.appendChild(document.createTextNode('some dynamic html'));
	//node.appendChild(newNode);
	var newNode = document.createElement('p');
	newNode.appendChild(document.createTextNode('more text'));
	//node.appendChild(newNode);