import { useState } from 'react';
import catalogo from './assets/catalogo';
import Capa from './Capa';
import './App.css';
import SeletorCapitulos from './SeletorCapitulos';
import ContainerProgresso from './ContainerProgresso';

function App() {
  const [livroSelecionado, setLivroSelecionado] = useState(0);
  const [capituloAtual, setCapituloAtual] = useState(1);

  return (
    <>
      <Capa
        imagemCapa={catalogo[livroSelecionado].capa}
        nomeLivro={catalogo[livroSelecionado].nome}
      />
      <SeletorCapitulos capituloAtual={capituloAtual} />
      <ContainerProgresso />
    </>
  );
}

export default App;
