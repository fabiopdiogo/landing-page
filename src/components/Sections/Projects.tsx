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

`; 

const CardsFit = styled.div`
  width: 80%; /* Define a largura do contêiner do carrossel */
  //max-width: 1200px; /* Define um máximo para a largura */
  margin: 0 auto; /* Centraliza o contêiner */
`;

const H1 = styled.h1`
  font-size: 85px;  
  color: white;

  @media (max-width: 676px) {
    font-size: 45px;  
  }
  @media (max-width: 480px) {
    font-size: 35px;  
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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Garante que a imagem mantenha sua proporção */
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
        <H1>Alguns trabalhos</H1>          
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
        </CardsFit>
      </DivMain> 
    </a>
  );
}

export default Skills;
