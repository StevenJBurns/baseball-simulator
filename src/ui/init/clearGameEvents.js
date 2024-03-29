export const clearGameEvents = gameState => {
  try {
    gameState.visitingTeam
  } catch {
    console.error('An error occured when resetting game events');
  };
};
