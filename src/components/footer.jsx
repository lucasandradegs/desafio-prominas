"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
  grid-area: footer;

  height: 5.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #7500FF;

  p {
    font-size: .8rem;

    @media (min-width: 1440px) {
      font-size: 1.8rem;
    }
  }

`;

export function Footer() {
    return (
        <Container>
            <p className={poppins.className}>Copyright © 2023 – Desenvolvido por Grupo Prominas</p>
        </Container>
    )
}