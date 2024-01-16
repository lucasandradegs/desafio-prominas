"use client";

import styled from "styled-components";

import { Krona_One } from 'next/font/google'

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 152px;
    height: 188px;


    .cardTitle {
        display: flex;


        h2 {
            margin-top: 10rem;
            text-transform: uppercase;
            text-align: center;
            font-size: 1.2rem;
            z-index: 1;
        }

        img {
            position: absolute;
            opacity: 50%;
            border-radius: .4rem;
            z-index: 0;
        }
    }
`;

export function BackgroundCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <h2 className={krona.className}>{title}</h2>
            </div>
        </Container>
    )
}
