function BotoesControle() {
  return (
    <div className="caixa-botoes">
      <button>
        <i className="bi bi-skip-start"></i>
      </button>
      <button>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button className="play-pause" style={{ fontSize: '3rem' }}>
        <i className="bi bi-pause-circle-fill"></i>
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
