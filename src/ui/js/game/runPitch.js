export const runPitch = (count = [0,0]) => new Promise(resolve => {
  let [strikes, balls] = count;
  const pitchResultTypes = [
    'ball',
    'strike',
    'foul',
    'hit-by-pitch',
    'in-play'
  ];
  const contactThreshhold = 0.333;
  const strikeThreshhold = 0.450;
  const foulThreshhold = 0.750;

  const isStrike = Math.random() < strikeThreshhold ? true : false;
  const contact = Math.random() < contactThreshhold ? true : false;

  if (!isStrike) balls++;

  const isFoul = isStrike && Math.random() < foulThreshhold ? true : false;
  const inPlay = contact && !isFoul;

  if (strikes === 2 && isFoul) return;

  resolve(balls ? 'ball' : 'strike');
});
