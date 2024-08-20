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
  width: 80%; /* Define a largura do contêiner do carrossel */
  //max-width: 1200px; /* Define um máximo para a largura */
  margin: 0 auto; /* Centraliza o contêiner */
`;

const H1 = styled.h1`
  font-size:30px;  
  color: white;
  font-family: "Old English Text MT";
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

  .slick-dots li button:before {
    font-size: 12px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

const P = styled.h2`
  color: white;
  line-height: 1.5;
  text-align: justify;
  margin: 0;
  font-size: 20px;
`;


const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Garante que a imagem mantenha sua proporção */
  border: 5px solid black;
  box-sizing: border-box;
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: start;

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
          <H1>Processo <b>Free Hand</b></H1>
          <H1>Preto e Cinza</H1>
          <H1>Cobertura <b>Detalhista</b></H1>
          <H1>Pela <b>Negra</b></H1>          
        <CardsFit>
          <StyledSlider {...settings}>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 1" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 2" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 4" />
            </div>
          </StyledSlider>

          <Quote>
              <P>"O objetivo da arte não é representar a 
              aparência exterior das coisas,<b>mas seu significado interior</b>"</P>
              <P><b>Aristóteles</b></P>
              <H1>Fechamentos</H1>   
              <P>"Os proessos de fechamentos são baseados em imagens exclusicas, planejadas
                e sob medida para um resultado perfeito, além disso, meus trabalhos se destacam
                por sua identidade única de profundidade e iluminação com impacto visual."</P>
          </Quote>

          <StyledSlider {...settings}>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 1" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 2" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 3" />
            </div>
            <div>
              <Image src="glauber2.jpg" alt="Imagem 4" />
            </div>
          </StyledSlider>
        </CardsFit>
      </DivMain> 
    </a>
  );
}

export default Skills;
