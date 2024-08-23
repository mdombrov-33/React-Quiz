import Restart from "./Restart";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.round((points / maxPoints) * 100);

  return (
    <>
      <p className="result">
        <strong>
          You got {points} out of {maxPoints}
          {percentage >= 50 ? "🎉" : "😢"}({percentage}%)
        </strong>
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <Restart dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
