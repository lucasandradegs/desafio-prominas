"use client";

import { Header } from "../components/header";
import { Input } from "../components/input";
import { FirstSectionCard } from "../components/firstSectionCard"
import { SixthSectionCard } from "../components/sixthSectionCard"
import { SeventhSectionCard } from "../components/seventhSectionCard"
import { EigthSectionCard } from "../components/eigthSectionCard"
import { DesktopCard } from "../components/desktopCard";
import { Krona_One, Poppins } from 'next/font/google'
import { Footer } from "../components/footer"
import styled from "styled-components";
import { useEffect, useState } from "react";
import { api } from "../app/services/api"

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

const Container = styled.div`
  width: 100%;
  height: 100%;


  .desktopBackground {
    @media (min-width: 1440px) {
      height: 80.9rem;
  
      img:nth-child(1) {
        position: absolute;
      }

      .bannerMobile {
        display: none;
      }
    }

    @media (max-width: 1439px) {
      img:nth-child(4) {
        display: none;
      }
    }
  }
  
`;

const Content = styled.div`
  width: 100%;
  height: 4.8rem;

  background: linear-gradient(0.25turn, #36415c, #4a5165);

  padding: 0 2.5rem;

  .navBar {
    display: flex;

    gap: 1.5rem;

    img {
      margin-top: 1.4rem;
    }

    input {
      margin-top: 1.4rem;
    }

    @media (min-width: 1440px) {
      display: none;
    }

  }

  .desktopContent {
    img {
      cursor: pointer;
    }

    display: flex;
    align-items: center;
    gap: 2.4rem;

    z-index: 1;

    input {
      width: 35rem;
      height: 4.8rem;
    }


    @media (max-width: 1439px) {
      display: none;
    }

  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    height: 9.1rem;
    justify-content: center;

    background: rgba(73, 73, 73, 0.40);

    padding: 0 12.4rem;

    position: absolute;

    .menuOptions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.9rem;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        color: #fff;
        cursor: pointer;
      }

      button {
        width: 17.8rem;
        height: 3.9rem;
        
        margin-left: 2.1rem;
        font-size: 1.2rem;
        border: 1px solid #FFF;
        border-radius: .3rem;
        background-color: transparent;
        color: #FFF;
      }
    }
  }


`;

const Section = styled.div`
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
      color: #fff;
    }

    p {
      margin-top: 1.4rem;
      font-size: 2.2rem;
      color: #fff;
    }
  }

  @media (min-width: 1040px) {
    display: none;
  }
  }


  .bannerMobile {
    @media (min-width: 1440px) {
      display: none;
    }
  }

  .bannerDesktop {
    width: 100%;
    z-index: 0;

    @media (max-width: 1439px) {
      display: none;
    }
  }

  .desktopSection {
    padding: 0 12.4rem;
    position: absolute;

    h2 {
      margin-top: 50rem;
      font-size: 6rem;
      color: #fff;
    }

    @media (max-width: 1439px) {
      display: none;
    }

    @media (min-width: 1700px) {
            margin-top: 6rem;
            padding: 0 23.5rem;
          }
  }


`;

const SecondSection = styled.div`
    position: relative;
    top: -3vh;

    .imageMsg {

      position: absolute;
      
      h2 {
        margin-left: 4.5rem;
        margin-top: 5.8rem;
        
        font-weight: 600;
        font-size: 2rem;

        color: #fff;

        @media (min-width: 425px) {
          margin-top: 7rem;
          margin-left: 7rem;
        }
      }

      @media (min-width: 1440px) {
        display: none;
      }
    }

    img {
      width: 100%;
    }

    img:nth-child(2) {
      @media (min-width: 1440px) {
        display: none;
      }
    }

    .desktopSection {
      position: absolute;

      h2 {
        font-size: 3.2rem;
        margin-top: 9.2rem;
        margin-left: 47rem;
        font-weight: 600;

        color: #fff;

        @media (min-width: 1500px) {
          margin-left: 71rem;
        }
      }

      @media (max-width: 1439px) {
        display: none;
      }
    }

    .desktopBanner {
      @media (max-width: 1439px) {
        display: none;
      }
    }

`;

const ThirdSection = styled.div`
    padding: 0 3.5rem;

    .sectionTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
        

        h2 {
          font-size: 2rem;

          @media (min-width: 1440px) {
            font-size: 3.2rem;
          }
        }

        p {
          text-align: center;
          margin-top: 2.6rem;
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.95rem;
          
          @media (min-width: 1440px) {
            font-size: 2.2rem;
            font-weight: 500;
            line-height: 2.86rem;
            
          }
          
          @media (min-width: 1700px) {
            padding: 0 15.9rem;
          }
        }
    }

    @media (min-width: 1440px) {
      padding: 0 12.4rem;
      margin-top: 9rem;
    }
`;

const CardSection = styled.div`
    padding: 0 2.4rem;
    margin-top: 4.8rem;

    .cardDisplay {
      @media (max-width: 1439px) {
        :nth-child(2), :nth-child(3) {
          margin-top: 3.6rem;
        }
      }
    }

    @media (min-width: 1440px) {
        padding: 0 12.4rem;
        margin-top: 7.1rem;
        
        .cardDisplay {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
      }
`;

const FifthSection = styled.div`
    margin-top: 9rem;
    padding: 0 2.4rem;

    .fifthSectionTitle {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 2rem;

        @media (min-width: 1440px) {
          text-align: start;
          font-size: 3.2rem;
        }
      }

      p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;

        margin-top: 3rem;

        @media (min-width: 1440px) {
          text-align: start;
          font-size: 2.2rem;
        }
      }

      img {
        margin-top: 3.4rem;
      }

      .desktopTitle {
        @media (min-width: 1440px) {
          display: flex;
          flex-direction: column;

          width: 58.7rem;
        }
      }

      @media (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .mobileNotebook {
          display: none;
        }
      }
    }

    @media (max-width: 1439px) {
      .desktopNotebook {
        display: none;
      }
    }

    @media (min-width: 1440px) {
      padding: 0 12.4rem;
    }
`;

const SixthSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 9.6rem;


  h2 {
    text-align: center;
    font-size: 2rem;

    @media (min-width: 1440px) {
      font-size: 3.2rem;
    }
  }

  .cardWithTitle {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3.2rem;

    @media (min-width: 1440px) {
      display: none;
    }
  }

  .cardsDots {
    display: flex;
    justify-content: center;

    margin-top: 1.9rem;

    .dotsMobile {
      @media (min-width: 1440px) {
        display: none;
      }
    }

    .dotsDesktop {
      margin-top: 3.5rem;

      cursor: pointer;

      @media (max-width: 1439px) {
        display: none;
      }
    }
  }

  .cardWithTitleDesktop {
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    margin-top: 6.5rem;

    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

const SeventhSection = styled.div`
  padding: 0 2.4rem;
  margin-top: 10.3rem;

  h2 {
    font-size: 2rem;

    text-align: center;

    @media (min-width: 1440px) {
      font-size: 3.2rem;
    }
  }

  .cardWithTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5.2rem;


    @media (min-width: 1440px) {
      display: none;
    }
  }

  .cardWithTitleDesktop {
    margin-top: 7rem;
    
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }

    @media (max-width: 1439px) {
      display: none;
    }
  }
  
  @media (min-width: 1440px) {
    padding: 0 12.4rem;
    margin-top: 13rem;
  }
`;

const EighthSection = styled.div`
  margin-top: 9rem;

  .eighthSectionTitle {

    h2 {
      text-align: center;
      font-size: 2rem;

      @media (min-width:1440px) {
        font-size: 3.2rem;
      }
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      margin-top: .3rem;

      @media (min-width: 1440px) {
        font-size: 3rem;
      }
    }
  }

  .eighthSectionCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    margin-top: 4.1rem;
    

    @media (min-width: 1440px) {
      display: none;
    }
  }

  .desktopCardSection {
    display: flex;
    justify-content: center;
    margin-top: 8rem;

    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

const FeedbackSection = styled.div`
    background: linear-gradient(90deg, #7500FF 10.24%, #7500FF 14.24%, #A68BFF 110.24%);

    border-bottom-width: 10.5rem;
    border-bottom-style: solid;
    border-bottom-color: #7500FF;


    img {
      z-index: 0;

    }

    @media (min-width: 1440px) {
      display: none;
    }

    .leftArrow {
      position: absolute;
      margin-top: 30rem;
      margin-left: .5rem;

      @media (min-width: 376px) {
        display: none;
      }
    }

    .rightArrow {
      position: absolute;
      margin-top: 30rem;
      margin-left: 36rem;

      @media (min-width: 376px) {
        display: none;
      }
    }

    .feedbackSectionTitle {
        position: absolute;
        display: flex;
        padding: 0 2.4rem;

        img {
          position: absolute;
          border-radius: 50%;

          margin-top: 8.7rem;
          margin-left: 3.8rem;
          z-index: 1;
        }

        h2 {
          z-index: 1;
          margin-top: 4rem;
          font-size: 2rem;
          text-align: center;
          color: #fff;
        }
    }

    .feedbackMessage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

        width: 90%;
        height: 41rem;
        margin-left: 2.1rem;
        margin-top: 13.5rem;
        position: absolute;
        padding: 3.9rem 5rem;
        border: 1px solid rgba(166, 139, 255, 0.20);
        border-radius: 1rem; 

        background: rgba(166, 139, 255, 0.40);
        filter: drop-shadow(10.71px 10.71px 21.42px rgba(0, 0, 0, 0.20));
        backdrop-filter: blur(16.065000534057617px);

        .messageAndGoogle {
            width: 25.4rem;
            height: 30.7rem;

            p {
              text-align: center;
              font-size: 0.9rem;
              font-weight: 300;
              line-height: 1.35rem;
              color: #fff;
          }

          display: flex;
          flex-direction: column;

          img:nth-child(3) {
            margin-top: 1.2rem;
            margin-left: 1.5rem;
            width: 20.8rem;
          }
        }

        .photoAndName {
          display: flex;

          gap: 1.2rem;

          margin-top: 5rem;

          .textContainer {
            display: flex;
            flex-direction: column;
            margin-top: .6rem;
          }

          h4 {
            font-size: 1rem;
            color: #fff;
          }

          p {
            margin-top: .9rem;
            font-size: .7rem;
            color: #fff;
          }

          img {
            border-radius: 50%;
          }
        }
}
`;

const DesktopFeedback = styled.div`
    height: 61.2rem;
    background: linear-gradient(90deg, #7500FF 10.24%, #7500FF 14.24%, #A68BFF 110.24%);

    padding: 0 12.4rem;

    @media (max-width: 1439px) {
      display: none;
    }


    .feedbackTitle {
      h2 {
        padding-top: 10rem;
        text-align: center;
        font-size: 3.2rem;
        color: #fff;
      }
    }

    .background1 {
      position: absolute;
      right: 0;
      z-index: 0;
      
    }

    .background2 {
      position: absolute;
      right: 0;
      z-index: 0;
    }

    .feedbackCards {
      display: flex;
      justify-content: center;
      gap: 2rem;

      position: relative;

      margin-top: 5rem;

      backdrop-filter: blur(16.065000534057617px);

    }


`;

const DesktopQuestions = styled.div`
    padding: 0 12.4rem;

    @media (max-width: 1439px) {
      display: none;
    }

    .titleAndQuestions {
      padding-top: 8rem;

      h2 {
        text-align: center;
        font-size: 3.2rem;
      }

      .FAQ {
        display: flex;
        flex-direction: column;
        margin-top: 4%;

        
        
        
        .questions {
          
          display: flex;
          justify-content: space-between;
          
          border-bottom-width: .2rem;
          border-bottom-style: solid;
          border-bottom-color: ${(props) => props.theme.body === '#000' ? '#fff' : '#000'};
          
          p {
            cursor: pointer;
            margin-top: 3.6rem;
            margin-bottom: 3rem;
            font-size: 1.8rem;
            font-weight: 500;
          }

          img {
            cursor: pointer;
            fill: red;
          }

          svg {
            fill: red;
          }
        }

      }
    }
`;

const CoursesSection = styled.div`
    margin-bottom: 6.4rem;

    .sectionTitle {
      padding: 0 2.4rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
      }

       h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 2.1rem;

        @media (min-width: 1440px) {
          font-size: 2rem;
          margin-top: 14rem;
        }
       }

       .coursesDiv {

        display: flex;
        flex-wrap: wrap;
        gap: 2rem;


        @media (min-width: 1440px) {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 3.2rem;
          margin-top: 5rem;
        }

         .courseList {
          width: 15.2rem;
          margin-top: 2.7rem;
          list-style-type: none;

          @media (min-width: 1440px) {
            margin-top: 0;
            width: 24.2rem;
          }
         }
  
         .courseList li {
          font-size: 1rem;
          font-weight: 500;
          line-height: 2rem;

          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.2rem;
            line-height: 3.5rem;
          }
         }

         .courseList2 {
          width: 15.3rem;
          margin-top: 2.7rem;
          list-style-type: none;

          @media (min-width: 1440px) {
            margin-top: 0;
            width: 24.2rem;
          }
         }

         .courseList2 li {

          font-size: 1rem;
          font-weight: 500;
          line-height: 2rem;

          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.2rem;
            line-height: 3.5rem;
          }
         }

         .courseList2:nth-child(4) {
          margin-top: 8.9rem;

          @media (min-width: 1440px) {
            margin-top: 0;
          }
         }

         .courseList:nth-child(5) {
          margin-top: 2rem;

          @media (min-width: 1440px) {
            margin-top: 0;
          }
         }

       }

       .afterCoursesList {

        @media (min-width: 1440px) {
          display: flex;
          justify-content: space-between;
          align-items: normal;
          width: 100%;
          margin-bottom: 4.3rem;
        }

        h4 {
          font-weight: 700;
          font-size: 1.2rem;

          @media (min-width: 1440px) {
            font-size: 2rem;
          }
        }

         .iconsSection {
            display: flex;
            align-items: center;
            margin-top: .9rem;
            gap: .7rem;

            cursor: pointer;

            @media (min-width: 1440px) {
              img {
                width: 5rem;
              }
            }
         }
       }

       .appDownload {
        margin-top: 3rem;


        @media (min-width: 1440px) {
          margin-top: 0;
        }

        .storesIcons {
          display: flex;
          margin-top: 0.6rem;
          gap: .5rem;

          cursor: pointer;

          @media (min-width: 1440px) {
              img {
                width: 18rem;
              }
            }
        }
       }

       .mecSectionDesk {
          display: flex;
          gap: 4.5rem;

          h4 {
            width: 25.6rem;
          }

        
        @media (max-width: 1439px) {
          display: none;
        }
       }

       .mecSection {
          width: 14.7rem;
          margin-top: 3rem;

          @media (min-width: 1440px) {
            display: none;
          }

          h4 {
            font-size: 1.2rem;
            font-weight: 700;
          }

          img {
            margin-top: 2.4rem;
            margin-bottom: 3.3rem;
          }

       }

        border-bottom-width: .2rem;
        border-bottom-style: solid;
        border-bottom-color: white;

    }

    .leanMore {
      padding: 0 2.4rem;
      margin-top: 2.2rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
        margin-top: 6rem;
      }

      .learMoreContainer {
        @media (min-width: 1440px) {
          display: flex;
          justify-content: space-between;
        }
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 700;

        @media (min-width: 1440px) {
          font-size: 2rem;
        }
      }

      

        border-bottom-width: .2rem;
        border-bottom-style: solid;
        border-bottom-color: white;

      .learMoreCourse {
        margin-top: 3rem;

        p {
          font-size: 1rem;
          font-weight: 500;

          margin-top: .6rem;
          cursor: pointer;

          @media (min-width: 1440px) {
            font-size: 1.8rem;
          }
        }

        p:nth-child(2) {
          margin-bottom: 3rem;

          @media (min-width: 1440px) {
            margin-bottom: 6rem;
          }
        }
      }
    }

    .lightMode {
        border-bottom-width: .2rem;
        border-bottom-style: solid;
        border-bottom-color: #000;
      }

    .itemsList {
      display: flex;
      flex-direction: column;
      margin-top: 1.9rem;
      padding: 0 2.4rem;

      @media (min-width: 1440px) {
        padding: 0 12.4rem;
        flex-direction: row;
        justify-content: space-between;
      }

      p {

        font-size: 1rem;
        font-weight: 500;

        cursor: pointer;

        margin-top: .6rem;

        @media (min-width: 1440px) {
          font-size: 1.4rem;
        }
      }
    }
`;

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchBrief() {
      const res = await api.get(`/brief/65a91d948d730437bda1a48c`)
      setData(res.data)
      console.log(res.data)
    }
    fetchBrief()
  }, [])

  return (
    <Container>

      <Header />
      <Content>
        <div className="navBar">
          <img src="/navbar.svg" alt="" />
          <Input
            placeholder="Pesquise por um curso"
          />
        </div>

        <div className="desktopContent">

          <img src="/desktopLogo.svg" alt="" />
          <Input
            placeholder="Pesquise por um curso"
          />
          <div className="menuOptions">
            <p className={poppins.className}>Nossas Áreas</p>
            <p className={poppins.className}>Vidas transformadas</p>
            <p className={poppins.className}>Blog</p>
            <p className={poppins.className}>FAQ</p>
            <button className={krona.className}>JÁ SOU ALUNO</button>
          </div>

        </div>
      </Content>

      <Section>
        <div className="imageAndTitle">
          <div className="title">
            <h1 className={krona.className}>CONHEÇA A FACULDADE ÚNICA</h1>
            <p className={poppins.className}>Criando hoje o seu amanhã.</p>
          </div>
          <img className="bannerMobile" src="/background.png" alt="" />
        </div>


        <div className="desktopSection">
          <h2 className={krona.className}>CONHEÇA A <br ></br> FACULDADE ÚNICA</h2>
        </div>
        <img className="bannerDesktop" src="/desktopBanner.png" alt="banner versão desktop" />

      </Section>



      <SecondSection>
        <div className="imageMsg">
          <h2 className={poppins.className}>CRIANDO HOJE SEU AMANHÃ!</h2>
        </div>
        <img className="mobileBanner" src="/mensagem.png" alt="" />

        <div className="desktopSection">
          <h2 className={poppins.className}>CRIANDO HOJE O SEU AMANHÃ!</h2>
        </div>
        <img className="desktopBanner" src="/blackDesktop.png" alt="" />
      </SecondSection>

      <ThirdSection>
        <div className="sectionTitle">
          <h2 className={krona.className}>Perfeita para você!</h2>
          <p className={poppins.className}>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
        </div>
      </ThirdSection>

      <CardSection>
        <div className="cardDisplay">
          <FirstSectionCard image="/diploma.png" title="+ de 489 mil Alunos certificados" />
          <FirstSectionCard image="/brasil.png" title="+ de 250 Polos em todo Brasil" />
          <FirstSectionCard image="/curso-online.png" title="+ de 900 cursos em diversas modalidades de ensino" />
        </div>
      </CardSection>

      <FifthSection>
        <div className="fifthSectionTitle">
          <div className="desktopTitle">
            <h2 className={krona.className}>Construa seu amanhã conosco</h2>
            <p className={poppins.className}>Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
          </div>
          <img className="mobileNotebook" src="/notebook.png" alt="" />
          <img className="desktopNotebook" src="/notebookDkt.png" alt="" />
        </div>
      </FifthSection>

      <SixthSection>
        <div className="sixthSectionTitle">
          <h2 className={krona.className}>Abra novas portas para o seu futuro</h2>
          <div className="cardWithTitle">
            <img src="/card1.png" alt="" />
            <SixthSectionCard image="/card2.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
          </div>
          <div className="cardWithTitleDesktop">
            <SixthSectionCard image="/card1desk.png" title="Cursos com nota máxima na avaliação do MEC" />
            <SixthSectionCard image="/card2desk.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
            <SixthSectionCard image="/card3desk.png" title="Estágio remunerado desde os primeiros períodos" />
            <SixthSectionCard image="/card4desk.png" title="Professores mestres e doutores" />
          </div>
          <div className="cardsDots">
            <img className="dotsMobile" src="/dots.svg" alt="" />
            <img className="dotsDesktop" src="/dotsdesk.svg" alt="" />
          </div>
        </div>
      </SixthSection>

      <SeventhSection>
        <div className="seventhSectionTitle">
          <h2 className={krona.className}>Mais que educação, uma transformação</h2>
          <div className="cardWithTitle">
            <SeventhSectionCard image="/missao.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <SeventhSectionCard image="/visao.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <SeventhSectionCard image="/valores.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
          <div className="cardWithTitleDesktop">
            <SeventhSectionCard image="/missaodesk.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <SeventhSectionCard image="/visaodesk.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <SeventhSectionCard image="/valoresdesk.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
        </div>
      </SeventhSection>

      <EighthSection>
        <div className="eighthSectionTitle">
          <h2 className={krona.className}>Sua jornada é Única</h2>
          <p className={poppins.className}>Escolha a melhor modalidade para você</p>
          <div className="eighthSectionCards">
            <EigthSectionCard image="/photo1.png" title="GRADUAÇÃO" />
            <EigthSectionCard image="/photo2.png" title="PÓS ONLINE" />
            <EigthSectionCard image="/photo3.png" title="SEGUNDA GRADUAÇÃO" />
            <EigthSectionCard image="/photo4.png" title="DISCIPLINAS ISOLADAS" />
          </div>

          <div className="desktopCardSection">
            <EigthSectionCard image="/alunoDesk.png" title="GRADUAÇÃO" />
            <EigthSectionCard image="/aluno2desk.png" title="PÓS ONLINE" />
            <EigthSectionCard image="/aluno3desk.png" title="SEGUNDA GRADUAÇÃO" />
            <EigthSectionCard image="/aluno4desk.png" title="DISCIPLINAS ISOLADAS" />
          </div>
        </div>
      </EighthSection>

      <FeedbackSection>
        <div className="feedbackSectionTitle">
          <h2 className={krona.className}>Quem faz a escolha certa, não se arrepende</h2>
          <img src="/aluno.png" alt="" />
        </div>
        <img className="leftArrow" src="/leftArrow.svg" alt="" />
        <img className="rightArrow" src="/rightArrow.svg" alt="" />
        <div className="feedbackMessage">
          <div className="messageAndGoogle">
            <p className={poppins.className}>{data}</p>
            <div className="photoAndName">
              <img src="/aluno2.png" alt="" />
              <div className="textContainer">
                <h4 className={poppins.className}>TIAGO COSTA DA SILVA</h4>
                <p className={poppins.className}>Segunda Graduação em Física</p>
              </div>
            </div>
            <img src="/google.svg" alt="" />
          </div>
        </div>
        <img className="retangularView" src="/retangular.svg" alt="" />

      </FeedbackSection>

      <DesktopFeedback>
        <div className="feebackSection">
          <div className="background1">
            <img src="/vector.svg" alt="" />
          </div>
          <div className="background2">
            <img src="/vector2.svg" alt="" />
          </div>
          <div className="feedbackTitle">
            <h2 className={krona.className}>Lado a lado com a sua evolução</h2>
          </div>
          <div className="feedbackCards">
            <DesktopCard video="/desktopCard.png" image="/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
            <DesktopCard video="/desktopCard.png" image="/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
            <DesktopCard video="/desktopCard.png" image="/student.png" name="PEDRO ALVARENGA ASSIS" course="Nome do curso" />
          </div>
        </div>
      </DesktopFeedback>


      <DesktopQuestions>
        <div className="titleAndQuestions">
          <h2 className={krona.className}>Perguntas Frequentes</h2>
          <div className="FAQ">
            <div className="questions">
              <p className={poppins.className}>O que é Graduação?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Como funciona a Graduação EaD?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Por que fazer o EaD?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Qual faculdade EaD escolher?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Qual curso EaD fazer?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Quem faz EaD pode fazer mestrado?</p>
              <img src="/x.svg" alt="" />
            </div>
            <div className="questions">
              <p className={poppins.className}>Quem faz faculdade EaD tem formatura?</p>
              <img src="/x.svg" alt="" />
            </div>
          </div>
        </div>
      </DesktopQuestions>

      <CoursesSection>
        <div className="sectionTitle">
          <h4 className={poppins.className}>Graduação</h4>
          <div className="coursesDiv">
            <ul className="courseList">
              <div className={poppins.className}>
                <li>Administração</li>
                <li>Análise e Desenvolvimento de Sistemas</li>
                <li>Artes Visuais</li>
                <li>Arquitetura e Urbanismo</li>
                <li>Biblioteconomia</li>
                <li>Ciência da Computação</li>
                <li>Ciências Biológicas</li>
                <li>Ciências Contábeis</li>
                <li>Ciências Sociais</li>
                <li>Educação Especial</li>
              </div>
            </ul>

            <ul className="courseList2">
              <div className={poppins.className}>
                <li>Bacharelado em Educação Física</li>
                <li>Licenciatura em Educação Física</li>
                <li>Ensino Religioso</li>
                <li>Empreendedorismo</li>
                <li>Engenharia Ambiental e Sanitária</li>
                <li>Engenharia Civil</li>
                <li>Engenharia de Controle e Automação</li>
                <li>Engenharia de Produção</li>
                <li>Engenharia Elétrica</li>
                <li>Engenharia Mecânica</li>
              </div>
            </ul>

            <ul className="courseList">
              <div className={poppins.className}>
                <li>Filosofia</li>
                <li>Física</li>
                <li>Geografia</li>
                <li>Geoprocessamento</li>
                <li>Gestão Ambiental</li>
                <li>Gestão de Cidades Inteligentes</li>
                <li>Gestão de Recursos Humanos</li>
                <li>Gestão Financeira</li>
                <li>Gestão Pública</li>
                <li>História</li>
              </div>
            </ul>

            <ul className="courseList2">
              <div className={poppins.className}>
                <li>Bacharelado em Letras-Libras</li>
                <li>Licenciatura em Letras-Libras</li>
                <li>Letras-Português</li>
                <li>Letras-Português e Espanhol</li>
                <li>Letras-Português e Inglês</li>
                <li>Logística</li>
                <li>Marketing</li>
                <li>Matemática</li>
                <li>Pedagogia</li>
                <li>Processos Gerenciais</li>
              </div>
            </ul>

            <ul className="courseList">
              <div className={poppins.className}>
                <li>Psicopedagogia</li>
                <li>Publicidade e Propaganda</li>
                <li>Química</li>
                <li>Segurança no Trabalho</li>
                <li>Serviço Social</li>
                <li>Serviços Jurídicos e Notariais</li>
                <li>Sistemas de Telecomunicações</li>
                <li>Sistemas para Internet</li>
                <li>Sistemas de Informação</li>
                <li>Teologia</li>
              </div>
            </ul>
          </div>

          <div className="afterCoursesList">
            <div className="followUs">
              <h4 className={poppins.className}>Siga nossa faculdade:</h4>
              <div className="iconsSection">
                <img src="/facebook.svg" alt="" />
                <img src="/instagram.svg" alt="" />
                <img src="/youtube.svg" alt="" />
              </div>
            </div>
            <div className="appDownload">
              <h4 className={poppins.className}>Baixe nosso App:</h4>
              <div className="storesIcons">
                <img src="/playstore.svg" alt="" />
                <img src="/appstore.svg" alt="" />
              </div>
            </div>
            <div className="mecSection">
              <h4 className={poppins.className}>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h4>
              <img src="/mec.png" alt="" />
            </div>
            <div className="mecSectionDesk">
              <h4 className={poppins.className}>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h4>
              <img src="/mecdesk.png" alt="" />
            </div>
          </div>
          <div className="lightMode"></div>
        </div>
        <div className="leanMore">
          <h4 className={poppins.className}>Saiba mais da Faculdade Única</h4>
          <div className="learMoreContainer">
            <div className="learMoreCourse">
              <h4 className={poppins.className}>Pós-Graduação</h4>
              <p className={poppins.className}>Ver nossos cursos</p>
            </div>
            <div className="learMoreCourse">
              <h4 className={poppins.className}>Segunda Graduação</h4>
              <p className={poppins.className}>Ver nossos cursos</p>
            </div>
            <div className="learMoreCourse">
              <h4 className={poppins.className}>Disciplinas Isoladas</h4>
              <p className={poppins.className}>Ver nossos cursos</p>
            </div>
            <div className="learMoreCourse">
              <h4 className={poppins.className}>Cursos Livres</h4>
              <p className={poppins.className}>Ver nossos cursos</p>
            </div>
          </div>
          <div className="lightMode"></div>
        </div>
        <div className="aboutProminas">
          <div className="itemsList">
            <p className={poppins.className}>Teste vocacional</p>
            <p className={poppins.className}>Seja um embaixador</p>
            <p className={poppins.className}>Fale com a gente</p>
            <p className={poppins.className}>Quem somos</p>
            <p className={poppins.className}>Privacidade</p>
            <p className={poppins.className}>Termos de Uso</p>
            <p className={poppins.className}>Trabalhe Conosco</p>
          </div>
        </div>

      </CoursesSection>

      <Footer />

    </Container>
  )
}
