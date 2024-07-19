import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SeletorCapitulos = ({ quantidadeCapitulos, capituloAtual }) => {
  return (
    <button className="seletor">
      <FontAwesomeIcon icon={faBars} />
      <p>{`Capítulo ${capituloAtual + 1}`}</p>
    </button>
  );
};

export default SeletorCapitulos;
