const ContainerProgresso = ({ tempoAtualFaixa, tempoTotalFaixa }) => {
  const formatarTempo = (tempoEmSegundos) => {
    const horario = new Date(null);
    horario.setSeconds(tempoEmSegundos);
    return horario.toISOString().slice(14, 19);
  };

  return (
    <section className="container-progresso">
      <div className="progresso-total">
        <div
          className="progresso-atual"
          style={{
            width: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`,
          }}></div>
        <div
          className="marcador-posicao"
          style={{
            left: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`,
          }}></div>
      </div>
      <div className="metricas-tempo">
        <p>{formatarTempo(tempoAtualFaixa)}</p>
        <p>8h 41m restantes</p>
        <p>{formatarTempo(tempoTotalFaixa)}</p>
      </div>
    </section>
  );
};

export default ContainerProgresso;
