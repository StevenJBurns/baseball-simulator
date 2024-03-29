export const checkForWinner = (inning, visitorScore, homeScore) => {
  if (inning < 9 || visitorScore === homeScore) return null;

  return (visitorScore > homeScore) ? 'visitor' : 'home';
};
