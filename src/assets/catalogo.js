import capaBrasCubas from './capas/bras_cubas.jpeg';
import faixa1 from './capitulos/memoriaspostumas_01_assis_64kb.mp3';
import faixa2 from './capitulos/memoriaspostumas_02_assis_64kb.mp3';

const catalogo = [
  {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    capitulos: {
      quantidade: 2,
      faixas: [faixa1, faixa2],
    },
    capa: capaBrasCubas,
  },
];

const capitulos = [];

export default catalogo;
