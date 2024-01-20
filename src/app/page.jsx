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
import { CardSection, Container, Content, CoursesSection, DesktopFeedback, DesktopQuestions, EighthSection, FifthSection, MobileFeedbackSection, SecondSection, Section, SeventhSection, SixthSection, ThirdSection } from "../styles/pageStyle"

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })
const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchBrief() {
      const res = await api.get(`/brief`)
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

          <img className="logoDesk" src="/desktopLogo.svg" alt="" />
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
          <img className="bannerMobile" src="/background.webp" alt="" />
        </div>


        <div className="desktopSection">
          <h2 className={krona.className}>CONHEÇA A <br ></br> FACULDADE ÚNICA</h2>
        </div>
        <img className="bannerDesktop" src="/desktopBanner.webp" alt="banner versão desktop" />

      </Section>



      <SecondSection>
        <div className="imageMsg">
          <h2 className={poppins.className}>CRIANDO HOJE SEU AMANHÃ!</h2>
        </div>
        <img className="mobileBanner" src="/mensagem.webp" alt="" />

        <div className="desktopSection">
          <h2 className={poppins.className}>CRIANDO HOJE O SEU AMANHÃ!</h2>
        </div>
        <img className="desktopBanner" src="/blackDesktop.webp" alt="" />
      </SecondSection>

      <ThirdSection>
        <div className="sectionTitle">
          <h2 className={krona.className}>Perfeita para você!</h2>
          <p className={poppins.className}>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
        </div>
      </ThirdSection>

      <CardSection>
        <div className="cardDisplay">
          <FirstSectionCard image="/diploma.webp" title="+ de 489 mil Alunos certificados" />
          <FirstSectionCard image="/brasil.webp" title="+ de 250 Polos em todo Brasil" />
          <FirstSectionCard image="/curso-online.webp" title="+ de 900 cursos em diversas modalidades de ensino" />
        </div>
      </CardSection>

      <FifthSection>
        <div className="fifthSectionTitle">
          <div className="desktopTitle">
            <h2 className={krona.className}>Construa seu amanhã conosco</h2>
            <p className={poppins.className}>Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
          </div>
          <div className="playerSVG">
            <img className="mobileNotebook" src="/notebook.webp" alt="" />
            <img className="svgplayer" src="/play.svg" alt="" />
          </div>
          <div className="playerSVG">
            <img className="desktopNotebook" src="/notebookDkt.webp" alt="" />
            <img className="svgplayerDesk" src="/play.svg" alt="" />
          </div>
        </div>
      </FifthSection>

      <SixthSection>
        <div className="sixthSectionTitle">
          <h2 className={krona.className}>Abra novas portas para o seu futuro</h2>
          <div className="cardWithTitle">
            <img className="fixedCard" src="/card1.webp" alt="" />
            <SixthSectionCard image="/card2.webp" title="+ de 2.500 empresas e órgãos públicos conveniados" />
          </div>
          <div className="cardWithTitleDesktop">
            <SixthSectionCard image="/card1desk.webp" title="Cursos com nota máxima na avaliação do MEC" />
            <SixthSectionCard image="/card2desk.webp" title="+ de 2.500 empresas e órgãos públicos conveniados" />
            <SixthSectionCard image="/card3desk.webp" title="Estágio remunerado desde os primeiros períodos" />
            <SixthSectionCard image="/card4desk.webp" title="Professores mestres e doutores" />
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
            <SeventhSectionCard image="/missao.webp" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <SeventhSectionCard image="/visao.webp" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <SeventhSectionCard image="/valores.webp" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
          <div className="cardWithTitleDesktop">
            <SeventhSectionCard image="/missaodesk.webp" title="Missão" subtitle="Promover a transformação humana, desenvolvendo competências e habilidades por meio de educação com propósito e tecnologia." />
            <SeventhSectionCard image="/visaodesk.webp" title="Visão" subtitle="Ser uma instituição educacional de referência no Brasil, reconhecida pela excelência de seus cursos, alunos e profissionais." />
            <SeventhSectionCard image="/valoresdesk.webp" title="Valores" subtitle="Excelência e qualidade, ética e honestidade, transformação social, autonomia responsável." />
          </div>
        </div>
      </SeventhSection>

      <EighthSection>
        <div className="eighthSectionTitle">
          <h2 className={krona.className}>Sua jornada é Única</h2>
          <p className={poppins.className}>Escolha a melhor modalidade para você</p>
          <div className="eighthSectionCards">
            <EigthSectionCard image="/photo1.webp" title="GRADUAÇÃO" />
            <EigthSectionCard image="/photo2.webp" title="PÓS ONLINE" />
            <EigthSectionCard image="/photo3.webp" title="SEGUNDA GRADUAÇÃO" />
            <EigthSectionCard image="/photo4.webp" title="DISCIPLINAS ISOLADAS" />
          </div>

          <div className="desktopCardSection">
            <EigthSectionCard image="/alunoDesk.webp" title="GRADUAÇÃO" />
            <EigthSectionCard image="/aluno2desk.webp" title="PÓS ONLINE" />
            <EigthSectionCard image="/aluno3desk.webp" title="SEGUNDA GRADUAÇÃO" />
            <EigthSectionCard image="/aluno4desk.webp" title="DISCIPLINAS ISOLADAS" />
          </div>
        </div>
      </EighthSection>

      <MobileFeedbackSection>
        <div className="mobileFeedbackSection">
          <div className="feedbackTitle">
            <h2 className={krona.className}>Quem faz a escolha certa, não se arrepende</h2>
            <img src="/aluno.webp" alt="" />
          </div>
          <div className="background1">
            <img src="/retangular.svg" alt="" />
          </div>
          <div className="feedbackMessage">
            <div className="messageAndGoogle">
              {data && (
                <p className={poppins.className}>{data.brief && data.brief[0] && data.brief[0].feedback}</p>
              )}
              <div className="photoAndName">
                <img src="/aluno2.webp" alt="" />
                <div className="textContainer">
                  {data && data.brief && data.brief[0] && (
                    <>
                      <h4 className={poppins.className}>{data.brief[0].title}</h4>
                      <p className={poppins.className}>{data.brief[0].course}</p>
                    </>
                  )}
                </div>
              </div>
              <img src="/google.svg" alt="" />
            </div>
          </div>
          <div className="background2">
            <img src="/mobileF.svg" alt="" />
          </div>
        </div>
      </MobileFeedbackSection>

      <DesktopFeedback>
        <div className="feebackSection">
          <div className="feedbackTitle">
            <h2 className={krona.className}>Lado a lado com a sua evolução</h2>
          </div>
          <div className="background1">
            <img src="/vector.svg" alt="" />
          </div>
          <div className="background2">
            <img src="/vector2.svg" alt="" />
          </div>
          <div className="feedbackCards">
            <DesktopCard video="/desktopCard.webp" image="/student.webp" />
            <DesktopCard video="/desktopCard.webp" image="/student.webp" />
            <DesktopCard video="/desktopCard.webp" image="/student.webp" />
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
              <img src="/mec.webp" alt="" />
            </div>
            <div className="mecSectionDesk">
              <h4 className={poppins.className}>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h4>
              <img src="/mecdesk.webp" alt="" />
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
