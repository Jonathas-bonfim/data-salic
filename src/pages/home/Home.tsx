
import './styles.scss';

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { api } from '../../services/api';

interface ProjectProps {
  area: string;
  nome: string;
  municipio: string;
  UF: string;
  objetivos: string;
  valor_aprovado: string;
  valor_captado: string;
}

export function Home() {
  const [project, setProject] = useState<ProjectProps[]>([]);

  useEffect(() => {
    api.get(``).then((response) => {
      console.log(response.data._embedded.projetos);
    })
  })

  return (
    <>
      <Header />

      <div>
        <h1>Ver Outros projetos do Proponente</h1>
        <AliceCarousel>

        </AliceCarousel>
      </div>
    </>
  )
}