function Restart({ dispatch }) {
  return (
    <>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Start again
      </button>
    </>
  );
}

export default Restart;
