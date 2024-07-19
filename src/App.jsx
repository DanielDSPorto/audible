import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef } from 'react';
import catalogo from './assets/catalogo';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import ContainerProgresso from './ContainerProgresso';
import BotoesControle from './BotoesControle';
import TocadorFaixas from './TocadorFaixas';

function App() {
  const [livroSelecionado, setLivroSelecionado] = useState(0);
  const [capituloAtual, setCapituloAtual] = useState(0);
  const [musicaTocando, setMusicaTocando] = useState(false);
  const [tempoAtualFaixa, setTempoAtualFaixa] = useState(0);
  const [tempoTotalFaixa, setTempoTotalFaixa] = useState(0);
  const elementoAudio = useRef(null);
  const elementoBarraProgresso = useRef(null);

  const tocarFaixa = () => {
    setMusicaTocando(true);
    elementoAudio.current.play();
  };

  const pausarFaixa = () => {
    setMusicaTocando(false);
    elementoAudio.current.pause();
  };

  const tocarOuPausar = () => {
    if (musicaTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  return (
    <>
      <Capa
        imagemCapa={catalogo[livroSelecionado].capa}
        nomeLivro={catalogo[livroSelecionado].nome}
      />
      <SeletorCapitulos capituloAtual={capituloAtual} />
      <ContainerProgresso
        tempoAtualFaixa={tempoAtualFaixa}
        tempoTotalFaixa={tempoTotalFaixa}
        elementoBarraProgresso={elementoBarraProgresso}
      />
      <TocadorFaixas
        faixa={catalogo[livroSelecionado].capitulos.faixas[0]}
        referencia={elementoAudio}
        setTempoAtualFaixa={setTempoAtualFaixa}
        setTempoTotalFaixa={setTempoTotalFaixa}
      />
      <BotoesControle
        musicaTocando={musicaTocando}
        tocarOuPausar={tocarOuPausar}
      />
    </>
  );
}

export default App;
