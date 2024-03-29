import { runAtBat } from './runAtBat.js';

export const runInning = () => {
  console.clear();
  let outs = 0;

  while (outs < 27) {
    runAtBat(outs);
    outs++;
    console.log('outs', outs);
  };
};
