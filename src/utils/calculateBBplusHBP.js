//Calculates BB + HBP for each batter by subtracting OBP and AVG
const calcWalksPlusHBP = teamData => {
  const { obp, avg } = teamData;
  const walksPlusHBP = [];
  
  for (var i = 0; i < 9; i++) walksPlusHBP[i] = obp[i]-avg[i];
  return walksPlusHBP;
};
