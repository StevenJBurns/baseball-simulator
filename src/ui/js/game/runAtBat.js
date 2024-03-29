import { runPitch } from './runPitch.js';

export const runAtBat = async outs => {
  let pitchCount = 0;
  let atBatState = {
    result: undefined,
    count: [0, 0],
    outs: 0,
  };

  // runPitch(atBatState.count);

  while (atBatState.count[0] < 4 && atBatState.count[1] < 3) {
    await runPitch(atBatState.count)
    pitchCount++;
    console.log(atBatState.count);
  };

  const consoleStyleWalk = "color: white; background: blue";
  const consoleStyleStrikeout = "color: white; background: red";
  const consoleStyleInPlay = "color: white; background: darkgreen";  
  
  if (atBatState.count[1] === 3) console.log('%c STRIKE OUT ', consoleStyleStrikeout) 
  if (atBatState.count[0] === 4) console.log('%c WALK ', consoleStyleWalk);

  if (atBatState.count[1] === 3) outs++;
};
