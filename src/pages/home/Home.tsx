
import './styles.scss';
import favoriteIMG from '../../assets/images/favorite.png'

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';

interface ProjectProps {
  area: string;
  nome: string;
  municipio: string;
  UF: string;
  objetivos: string;
  valor_aprovado: number;
  valor_captado: number;
}

export function Home() {
  const [project, setProject] = useState<ProjectProps[]>([]);

  useEffect(() => {
    api.get(``).then((response) => {
      setProject(response.data._embedded.projetos);
    })
  }, [])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <Header />

      <div id="container">
        <h1 className="title-carousel">Ver Outros projetos do Proponente</h1>
        <AliceCarousel
          responsive={responsive}
          disableButtonsControls={false}
          infinite={true}
          keyboardNavigation={true}
          mouseTracking={true}
          swipeDelta={0}
        >
          {
            project.map(data => (
              <section className="carousel" key={data.nome}>
                <strong className="tag">{data.area}</strong>
                <h4>{data.area}</h4>
                <p className="localization">{data.municipio} ● {data.UF}</p>
                <p className="description">
                  {data.objetivos}
                </p>

                <p className="approved-value title-value">
                  Aprovado
                  <strong className="value">{formatPrice(data.valor_aprovado)}</strong>
                </p>
                <p className="title-value">
                  Captado&ensp;
                  <strong className="value">{formatPrice(data.valor_captado)}</strong>
                </p>

                <div className="icons">
                  <button>ADICIONAR</button>
                  <img src={favoriteIMG} alt="Favorito" />
                </div>

              </section>
            ))
          }
        </AliceCarousel>
        <p className="all-data">+ VER TODOS</p>
      </div>
    </>
  )
}