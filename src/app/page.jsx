"use client";

import { Header } from "../components/header";
import { Input } from "../components/input";
import { Card } from "../components/card"
import { BackgroundCard } from "../components/cardImg"
import { BlueCard } from "../components/blueCard"
import { PhotoCard } from "../components/photoCard"
import { LiaSearchSolid } from "react-icons/lia";
import { Krona_One, Poppins } from 'next/font/google'
import { Footer } from "../components/footer"
import Image from "next/image";

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

import styled from "styled-components";

export const Container = styled.div`
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

export const Content = styled.div`
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

    display: flex;
    align-items: center;
    gap: 2.4rem;

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
    justify-content: space-between;
    height: 9.1rem;

    background: rgba(73, 73, 73, 0.40);

    padding: 0 12.4rem;

    position: absolute;

    .menuOptions {
      display: flex;
      align-items: center;
      gap: 1.9rem;

      p {
        font-size: 1.5rem;
        font-weight: 500;
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
    @media (max-width: 1439px) {
      display: none;
    }
  }

  .desktopSection {
    padding: 0 12.4rem;
    position: absolute;

    h2 {
      margin-top: 45rem;
      font-size: 6rem;
    }

    @media (max-width: 1439px) {
      display: none;
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
        margin-top: 8rem;
        margin-left: 47rem;
        font-weight: 600;
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

export const ThirdSection = styled.div`
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

          @media (min-width: 1440px) {
            font-size: 2.2rem;
            font-weight: 500;
          }
        }
    }

    @media (min-width: 1440px) {
      padding: 0 12.4rem;
      margin-top: 5rem;
    }
`;

export const CardSection = styled.div`
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
          gap: 2rem;
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
        justify-content: space-between;

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

export const SixthSection = styled.div`
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

export const SeventhSection = styled.div`
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
    justify-content: center;
    
    margin-top: 4.1rem;
  }
`;

export const FeedbackSection = styled.div`
    background: linear-gradient(90deg, #7500FF 10.24%, #7500FF 14.24%, #A68BFF 110.24%);

    border-bottom-width: 10.5rem;
    border-bottom-style: solid;
    border-bottom-color: #7500FF;


    img {
      z-index: 0;

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
        border-radius: 10px; 

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
          }

          p {
            margin-top: .9rem;
            font-size: .7rem;
          }

          img {
            border-radius: 50%;
          }
        }
}
`;

export const CoursesSection = styled.div`
    margin-bottom: 6.4rem;

    .sectionTitle {
      padding: 0 2.4rem;

       h4 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 2.1rem;
       }

       .coursesDiv {

        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

         .courseList {
          width: 15.2rem;
          margin-top: 2.7rem;
          list-style-type: none;
         }
  
         .courseList li {
          font-size: 1rem;
          font-weight: 500;
          line-height: 20px;
         }

         .courseList2 {
          width: 15.3rem;
          margin-top: 2.7rem;
          list-style-type: none;
         }

         .courseList2 li {

          font-size: 1rem;
          font-weight: 500;
          line-height: 20px;
         }

         .courseList2:nth-child(4) {
          margin-top: 8.9rem;
         }

         .courseList:nth-child(5) {
          margin-top: 2rem;
         }

       }

       .afterCoursesList {

        h4 {
          font-weight: 700;
          font-size: 1.2rem;
        }

         .iconsSection {
            display: flex;
            align-items: center;
            margin-top: .9rem;
            gap: .7rem;
         }
       }

       .appDownload {
        margin-top: 3rem;

        .storesIcons {
          display: flex;
          margin-top: 0.6rem;
          gap: .5rem;
        }
       }

       .mecSection {
          width: 14.7rem;
          margin-top: 3rem;

          h4 {
            font-size: 1.2rem;
            font-weight: 700;
          }

          img {
            margin-top: 2.4rem;
            margin-bottom: 3.3rem;
          }

       }

        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: white;

    }

    .leanMore {
      padding: 0 2.4rem;
      margin-top: 2.2rem;

      h4 {
        font-size: 1.2rem;
        font-weight: 700;
      }

        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: white;

      .learMoreCourse {
        margin-top: 3rem;

        p {
          font-size: 1rem;
          font-weight: 500;

          margin-top: .6rem;
        }

        p:nth-child(2) {
          margin-bottom: 3rem;
        }
      }
    }

    .itemsList {
      display: flex;
      flex-direction: column;
      margin-top: 1.9rem;
      padding: 0 2.4rem;

      a {
        text-decoration: none;
        color: white;

        font-size: 1rem;
        font-weight: 500;

        margin-top: .6rem;
      }
    }
`;

export default function Home() {
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
          <Card image="/diploma.png" title="+ de 489 mil Alunos certificados" />
          <Card image="/brasil.png" title="+ de 250 Polos em todo Brasil" />
          <Card image="/curso-online.png" title="+ de 900 cursos em diversas modalidades de ensino" />
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
            <BackgroundCard image="/card2.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
          </div>
          <div className="cardWithTitleDesktop">
            <BackgroundCard image="/card1desk.png" title="Cursos com nota máxima na avaliação do MEC" />
            <BackgroundCard image="/card2desk.png" title="+ de 2.500 empresas e órgãos públicos conveniados" />
            <BackgroundCard image="/card3desk.png" title="Estágio remunerado desde os primeiros períodos" />
            <BackgroundCard image="/card4desk.png" title="Professores mestres e doutores" />
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
            <BlueCard image="/missao.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <BlueCard image="/visao.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <BlueCard image="/valores.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
          <div className="cardWithTitleDesktop">
            <BlueCard image="/missaodesk.png" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <BlueCard image="/visaodesk.png" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <BlueCard image="/valoresdesk.png" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
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
        <div className="feedbackSectionTitle">
          <h2 className={krona.className}>Quem faz a escolha certa, não se arrepende</h2>
          <img src="/aluno.png" alt="" />
        </div>
        <img class="leftArrow" src="/leftArrow.svg" alt="" />
        <img class="rightArrow" src="/rightArrow.svg" alt="" />
        <div className="feedbackMessage">
          <div className="messageAndGoogle">
            <p className={poppins.className}>“A minha experiência como aluno da Faculdade Única foi maravilhosa, pois me possibilitou ter outra graduação superior (Licenciatura em Física) além de todo o arcabouço de conhecimento adquirido durante o curso, ajudando-me a estar bem preparado para o mercado de trabalho. Atualmente estou cursando outra segunda graduação (Licenciatura em Educação Física) e não tenho dúvida que será novamente uma experiência incrível. Além disso, a instituição de ensino é nota máxima no MEC e desejo que até o final desse curso ela alcance a etapa de ser Centro Universitário. Então só gratidão a toda a equipe da faculdade”</p>
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
        <img class="retangularView" src="/retangular.svg" alt="" />

      </FeedbackSection>

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
            <h4 className={poppins.className}>Siga nossa faculdade:</h4>
            <div className="iconsSection">
              <img src="/facebook.svg" alt="" />
              <img src="/instagram.svg" alt="" />
              <img src="/youtube.svg" alt="" />
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
          </div>

        </div>
        <div className="leanMore">
          <h4 className={poppins.className}>Saiba mais da Faculdade Única</h4>
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
        <div className="aboutProminas">
          <div className="itemsList">
            <a className={poppins.className} href="#">Teste vocacional</a>
            <a className={poppins.className} href="#">Seja um embaixador</a>
            <a className={poppins.className} href="#">Fale com a gente</a>
            <a className={poppins.className} href="#">Quem somos</a>
            <a className={poppins.className} href="#">Privacidade</a>
            <a className={poppins.className} href="#">Termos de Uso</a>
            <a className={poppins.className} href="#">Trabalhe Conosco</a>
          </div>
        </div>
      </CoursesSection>

      <Footer />

    </Container>
  )
}
