"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;


  height: 3.5rem;
  width: 100%;
  padding: 0 2.4rem;

  background-color: #0e1220;

  @media (min-width: 1440px) {
    height: 5.9rem;
    padding: 0 12.3rem;
  }



  .topSideMobile {
    display: flex;
    width: 100%;
    justify-content: space-between;

    margin-top: .7rem;
    margin-bottom: .6rem;

    @media (min-width: 1440px) {
      display: none;
    }
  }

  .topSideDesktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    color: #fff;

    img, p {
      cursor: pointer;
    }


    @media (max-width: 1439px) {
      display: none;
    }

    
  }

`;

export function Header() {

    return (
        <Container>
            <div className="topSideMobile">
                <img src="/arrow.svg" alt="" />
                <img src="/logo.svg" alt="" />
                <img src="/darkmode.svg" alt="" />
            </div>
            
            <div className="topSideDesktop">
                <p className={poppins.className}>Graduação</p>
                <p className={poppins.className}>Segunda Graduação</p>
                <p className={poppins.className}>Pós-Graduação</p>
                <p className={poppins.className}>Disciplinas Isoladas</p>
                <p className={poppins.className}>Cursos Grátis</p>
                <p className={poppins.className}>Bolsas de Estudo</p>
                <img src="/darkmode.svg" alt="" />
            </div>
        </Container>
    )
}