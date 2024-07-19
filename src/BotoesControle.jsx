function BotoesControle({ tocarOuPausar, musicaTocando }) {
  return (
    <div className="caixa-botoes">
      <button>
        <i className="bi bi-skip-start"></i>
      </button>
      <button>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button
        className="play-pause"
        style={{ fontSize: '3rem' }}
        onClick={tocarOuPausar}>
        <i
          className={`bi bi-${
            musicaTocando ? 'pause' : 'play'
          }-circle-fill`}></i>
      </button>
      <button>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button>
        <i className="bi bi-skip-end"></i>
      </button>
    </div>
  );
}

export default BotoesControle;
