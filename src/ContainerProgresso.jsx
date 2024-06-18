const ContainerProgresso = () => {
  return (
    <section className="container-progresso">
      <div className="progresso-total">
        <div className="progresso-atual"></div>
        <div className="marcador-posicao"></div>
      </div>
      <div className="metricas-tempo">
        <p>00:00</p>
        <p>8h 41m restantes</p>
        <p>02:37</p>
      </div>
    </section>
  );
};

export default ContainerProgresso;
