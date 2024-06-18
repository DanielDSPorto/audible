import { useState } from 'react';
import catalogo from './assets/catalogo';
import Capa from './Capa';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SeletorCapitulos from './SeletorCapitulos';
import ContainerProgresso from './ContainerProgresso';
import BotoesControle from './BotoesControle';

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
      <BotoesControle />
    </>
  );
}

export default App;
