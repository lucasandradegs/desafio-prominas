"use client";

import { Header } from "../components/header";
import { Input } from "../components/input";
import { Card } from "../components/card"
import { BackgroundCard } from "../components/cardImg"
import { BlueCard } from "../components/blueCard"
import { PhotoCard } from "../components/photoCard"
import { LiaSearchSolid } from "react-icons/lia";
import { Krona_One, Poppins } from 'next/font/google'

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 4.8rem;

  background: linear-gradient(0.25turn, #36415c, #4a5165);

  padding: 0 2.5rem;

  .navBar {
    display: flex;

    gap: 1.5rem;

    img {
      margin-top: 2rem;
    }

    input {
      margin-top: 1.4rem;
    }
  }

`;

export const Section = styled.div`
  .imageAndTitle {

    display: flex;
    flex-direction: column;
    
  .title {
    display: flex;
    flex-direction: column;

    padding: 0 2.5rem;

    margin-top: 33rem;

    position: absolute;

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin-top: 1.4rem;
      font-size: 2.2rem;
    }
  }
}
`;

export const SecondSection = styled.div`
    position: relative;
    top: -3vh;

    .imageMsg {

      position: absolute;
      
      h2 {
        margin-left: 4.5rem;
        margin-top: 5.8rem;
        
        font-weight: 600;
        font-size: 2rem;
      }
    }

    img {
      width: 100%;
    }

`;

export const ThirdSection = styled.div`
    padding: 0 3.5rem;

    .sectionTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        

        h2 {
          font-size: 2rem;
        }

        p {
          text-align: center;
          margin-top: 2.6rem;
          font-size: 1.5rem;
        }
    }
`;

export const CardSection = styled.div`
    padding: 0 2.4rem;
    margin-top: 4.8rem;

    .cardDisplay {
      :nth-child(2), :nth-child(3) {
        margin-top: 3.6rem;
      }
    }
`;

export const FifthSection = styled.div`
    margin-top: 9rem;
    padding: 0 2.4rem;

    .fifthSectionTitle {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 2rem;
      }

      p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;

        margin-top: 3rem;
      }

      img {
        margin-top: 3.4rem;
      }
    }
`;

export const SixthSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 9.6rem;

  h2 {
    text-align: center;
    font-size: 2rem;
  }

  .cardWithTitle {
    display: flex;
    gap: 2rem;
    margin-top: 3.2rem;
  }

  .cardsDots {
    display: flex;
    justify-content: center;

    margin-top: 1.9rem;
  }
`;

export const SeventhSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 10.3rem;

  h2 {
    font-size: 2rem;

    text-align: center;
  }

  .cardWithTitle {
    margin-top: 5.2rem;

  }
`;

export const EighthSection = styled.div`
  margin-top: 9rem;

  .eighthSectionTitle {

    h2 {
      text-align: center;
      font-size: 2rem;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      margin-top: .3rem;
    }
  }

  .eighthSectionCards {
    display: flex;
    flex-wrap: wrap;

    
  }
`;

export const FeedbackSection = styled.div`

`;

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="navBar">
          <img src="/navbar.svg" alt="" />
          <Input
            icon={LiaSearchSolid}
            placeholder="Pesquise por um curso"
          />
        </div>
      </Content>

      <Section>
        <div className="imageAndTitle">
          <div className="title">
            <h1 className={krona.className}>CONHEÇA A FACULDADE ÚNICA</h1>
            <p className={poppins.className}>Criando hoje o seu amanhã.</p>
          </div>
          <img src="/background.png" alt="" />
        </div>
      </Section>

      <SecondSection>
        <div className="imageMsg">
          <h2 className={poppins.className}>CRIANDO HOJE SEU AMANHÃ!</h2>
        </div>
        <img src="/mensagem.png" alt="" />
      </SecondSection>

      <ThirdSection>
        <div className="sectionTitle">
          <h2 className={krona.className}>Perfeita para você!</h2>
          <p className={poppins.className}>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
        </div>
      </ThirdSection>

      <CardSection>
        <div className="cardDisplay">
          <Card image="/diploma.png" title="+ de 489 mil Alunos certificados" />
          <Card image="/brasil.png" title="+ de 250 Polos em todo Brasil" />
          <Card image="/curso-online.png" title="+ de 900 cursos em diversas modalidades de ensino" />
        </div>
      </CardSection>

      <FifthSection>
        <div className="fifthSectionTitle">
          <h2 className={krona.className}>Construa seu amanhã conosco</h2>
          <p className={poppins.className}>Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
          <img src="/notebook.png" alt="" />
        </div>
      </FifthSection>

      <SixthSection>
        <div className="sixthSectionTitle">
          <h2 className={krona.className}>Abra novas portas para o seu futuro</h2>
          <div className="cardWithTitle">
            <img src="/card1.png" alt="" />
            <BackgroundCard image="/card2.png" title="+ de 2.500 empresas e órgãos públicos conveniados"/>
          </div>
          <div className="cardsDots">
            <img src="/dots.svg" alt="" />
          </div>
        </div>
      </SixthSection>

      <SeventhSection>
        <div className="seventhSectionTitle">
          <h2 className={krona.className}>Mais que educação, uma transformação</h2>
          <div className="cardWithTitle">
            <BlueCard image="/missao.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <BlueCard image="/visao.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <BlueCard image="/valores.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
        </div>
      </SeventhSection>

      <EighthSection>
        <div className="eighthSectionTitle">
          <h2 className={krona.className}>Sua jornada é Única</h2>
          <p className={poppins.className}>Escolha a melhor modalidade para você</p>
          <div className="eighthSectionCards">
              <PhotoCard image="/photo1.png" title="GRADUAÇÃO" />
              <PhotoCard image="/photo2.png" title="PÓS ONLINE" />
              <PhotoCard image="/photo3.png" title="SEGUNDA GRADUAÇÃO" />
              <PhotoCard image="/photo4.png" title="DISCIPLINAS ISOLADAS" />
          </div>
        </div>
      </EighthSection>

      <FeedbackSection>

      </FeedbackSection>

    </Container>
  )
}
