
import './styles.scss';
import favoriteIMG from '../../assets/images/favorite.png'

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

      <div id="container">
        <h1 className="title-carousel">Ver Outros projetos do Proponente</h1>
        <AliceCarousel >
          <section className="carousel">
            <strong className="tag">Area</strong>
            <h4>Nome do Projeto</h4>
            <p className="localization">São Paulo ● SP</p>
            <p className="description">
              O presente projeto intenciona promover o resgate, a difusão
              e o acesso à música de canto coral genuinamente brasileira
              através da manutenção do corpo artístico Coral Laudade
              durante o
            </p>

            <p className="approved-value title-value">
              Aprovado
              <strong className="value">R$ 100.000,00</strong>
            </p>
            <p className="title-value">
              Captado&ensp;
              <strong className="value">R$ 500.000,00</strong>
            </p>

            <div className="icons">
              <button>ADICIONAR</button>
              <img src={favoriteIMG} alt="Favorito" />
            </div>

          </section>

          <section className="carousel">
            <strong className="tag">Area</strong>
            <h4>Nome do Projeto</h4>
            <p className="localization">São Paulo ● SP</p>
            <p className="description">
              O presente projeto intenciona promover o resgate, a difusão
              e o acesso à música de canto coral genuinamente brasileira
              através da manutenção do corpo artístico Coral Laudade
              durante o
            </p>

            <p className="approved-value title-value">
              Aprovado
              <strong className="value">R$ 100.000,00</strong>
            </p>
            <p className="title-value">
              Captado&ensp;
              <strong className="value">R$ 500.000,00</strong>
            </p>

            <div className="icons">
              <button>ADICIONAR</button>
              <img src={favoriteIMG} alt="Favorito" />
            </div>

          </section>

          <section className="carousel">
            <strong className="tag">Area</strong>
            <h4>Nome do Projeto</h4>
            <p className="localization">São Paulo ● SP</p>
            <p className="description">
              O presente projeto intenciona promover o resgate, a difusão
              e o acesso à música de canto coral genuinamente brasileira
              através da manutenção do corpo artístico Coral Laudade
              durante o
            </p>

            <p className="approved-value title-value">
              Aprovado
              <strong className="value">R$ 100.000,00</strong>
            </p>
            <p className="title-value">
              Captado&ensp;
              <strong className="value">R$ 500.000,00</strong>
            </p>

            <div className="icons">
              <button>ADICIONAR</button>
              <img src={favoriteIMG} alt="Favorito" />
            </div>

          </section>

          <section className="carousel">
            <strong className="tag">Area</strong>
            <h4>Nome do Projeto</h4>
            <p className="localization">São Paulo ● SP</p>
            <p className="description">
              O presente projeto intenciona promover o resgate, a difusão
              e o acesso à música de canto coral genuinamente brasileira
              através da manutenção do corpo artístico Coral Laudade
              durante o
            </p>

            <p className="approved-value title-value">
              Aprovado
              <strong className="value">R$ 100.000,00</strong>
            </p>
            <p className="title-value">
              Captado&ensp;
              <strong className="value">R$ 500.000,00</strong>
            </p>

            <div className="icons">
              <button>ADICIONAR</button>
              <img src={favoriteIMG} alt="Favorito" />
            </div>

          </section>
        </AliceCarousel>
      </div>
    </>
  )
}