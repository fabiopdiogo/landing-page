import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; 
  padding-bottom: 40px;

  background-image: url('/fundo.jpg'); /* Adicione a imagem de fundo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Fixa o fundo na posição */
`; 

const CardsFit = styled.div`
  width: 30%; /* Define a largura do contêiner do carrossel */
  margin: 0 auto; /* Centraliza o contêiner */
  align-items: center;

  @media (max-width: 1200px) {
    width: 50%; /* Ajusta a largura para telas médias */
  }

  @media (max-width: 900px) {
    width: 80%; /* Reduz a largura em telas menores */
  }

  @media (max-width: 600px) {
    width: 80%; /* Para telas muito pequenas, ocupa 100% da largura */
  }
`;

const H1 = styled.h1`
  font-size: 0px;
  color: white;
  font-family: "Bebas Neue", sans-serif;

  @media (min-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 676px) {
    font-size: 45px;  
  }

  @media (max-width: 480px) {
    font-size: 25px;  
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center; /* Centraliza as imagens dentro do slide */
    align-items: center; /* Centraliza verticalmente */
  }

  .slick-dots {
    display: flex; /* Flexbox para alinhar os dots em linha */
    justify-content: center; /* Centraliza os dots */
    flex-wrap: nowrap; /* Impede que os dots quebrem linha */
  }

  .slick-dots li {
    margin: 0 5px; /* Espaçamento entre os dots */
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  @media (max-width: 676px) {
    .slick-dots {
      justify-content: space-around; /* Distribui os dots de forma mais espaçada em telas pequenas */
    }

    .slick-dots li {
      margin: 0 3px; /* Reduz o espaçamento entre os dots em telas menores */
    }

    .slick-dots li button:before {
      font-size: 10px; /* Reduz o tamanho dos dots em telas pequenas */
    }
  }

  @media (max-width: 480px) {
    .slick-dots {
      justify-content: space-between; /* Garante que os dots ocupem todo o espaço horizontal */
    }

    .slick-dots li {
      margin: 0 2px; /* Ainda menor espaçamento para muito pequenas */
    }

    .slick-dots li button:before {
      font-size: 8px; /* Tamanho menor dos dots para telas muito pequenas */
    }
  }

  @media (max-width: 271px) {
    .slick-dots {
      justify-content: space-between; /* Garante que os dots ocupem todo o espaço horizontal */
    }

    .slick-dots li {
      margin: 0 0px; /* Ainda menor espaçamento para muito pequenas */
    }

    .slick-dots li button:before {
      font-size: 4px; /* Tamanho menor dos dots para telas muito pequenas */
    }
  }
`;

const P = styled.p`
  color: white;
  line-height: 1.5;
  text-align: justify;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  font-style: normal;
  margin: 0;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;


const Image = styled.img`
  width: 100%; /* Garante que todas as imagens tenham a mesma largura */
  height: 100%; /* Garante que todas as imagens tenham a mesma altura */
  object-fit: cover; /* Garante que a imagem ocupe todo o espaço, cortando se necessário */
  border: 5px solid black;
  box-sizing: border-box;

  @media (max-width: 345px) {
    max-height: 400px; /* Limita a altura máxima em telas pequenas */
  }
`;


const Quote = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    padding: 60px;
  }

  @media (max-width: 480px) {
    padding: 40px;
  }
`;

interface Props {
  id: string
}

function Skills({ id }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <a id={id}>
      <DivMain>
          <H1>Trabalhos</H1>
              
        <CardsFit>
          <StyledSlider {...settings}>
            <div>
              <Image src="t2.jpeg" alt="Imagem 2" />              
            </div>
            <div>
              <Image src="t1.jpeg" alt="Imagem 1" />
            </div>
            <div>
              <Image src="t3.jpeg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="t5.jpeg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="t6.jpeg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="t7.jpeg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="t8.jpeg" alt="Imagem 3" />
            </div>
          </StyledSlider>
        </CardsFit>

        <Quote>
            <P>"Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."</P>
            <P><b>Colossenses 3-23</b></P>
            <br/>
            <H1>Fechamentos</H1>   
            <P>"Os processos de fechamentos são baseados em imagens exclusivas, planejadas
              dentro da anatomia do seu corpo para um resultado perfeito, além disso, meus trabalhos se destacam
              por sua identidade única de profundidade e iluminação com impacto visual."</P>
        </Quote>

        <CardsFit>
          <StyledSlider {...settings}>
            <div>
              <Image src="f1.jpeg" alt="Imagem 1" />
            </div>
            <div>
              <Image src="f2.jpeg" alt="Imagem 2" />
            </div>
            <div>
              <Image src="f3.jpeg" alt="Imagem 3" /> 
            </div>
            <div>
              <Image src="f4.jpeg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="f9.jpeg" alt="Imagem 3" />
            </div>
          </StyledSlider>
        </CardsFit>
      </DivMain> 
    </a>
  );
}

export default Skills;
