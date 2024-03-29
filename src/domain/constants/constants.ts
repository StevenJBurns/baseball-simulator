const IN_PLAY = 'In Play';
const IN_PLAY_OUT = 'In Play Out';
const HIT_BY_PITCH = 'Hit By Pitch';
const STRIKEOUT = 'Strikeout';
const WALK = 'Walk';
const BALK = 'Balk';

export enum PitchOutcome {
  Ball = 'ball',
  StrikeCalled = 'strikeCalled',
  StrikeSwinging= 'strikeSwinging',
  StrikeFoul = 'strikeFoul',
  HitByPitch = 'hit by pitch',
};

export enum AtBatOutcome {
  BALK,
  WALK,
  STRIKEOUT,
  HIT_BY_PITCH,
  IN_PLAY,
};

export enum InPlayOutcome {

};

export default {
  IN_PLAY,
  IN_PLAY_OUT,
  HIT_BY_PITCH,
  STRIKEOUT,
  WALK,
  BALK,
};
