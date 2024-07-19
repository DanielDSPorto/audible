const TocadorFaixas = ({
  faixa,
  referencia,
  setTempoAtualFaixa,
  setTempoTotalFaixa,
}) => {
  return (
    <audio
      ref={referencia}
      src={faixa}
      onLoadedMetadata={() => {
        setTempoTotalFaixa(referencia.current.duration);
      }}
      onTimeUpdate={() =>
        setTempoAtualFaixa(referencia.current.currentTime)
      }></audio>
  );
};

export default TocadorFaixas;
