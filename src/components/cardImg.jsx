"use client";

import styled from "styled-components";

import { Krona_One } from 'next/font/google'

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 152px;
    height: 188px;


    .cardTitle {
        display: flex;

        @media (min-width: 1440px) {
        }


        h2 {
            margin-top: 10rem;
            text-transform: uppercase;
            text-align: center;
            font-size: 1.2rem;
            z-index: 1;

            @media (min-width: 1440px) {
                margin-top: 22.9rem;
                margin-left: 1.3rem;
                margin-right: 1.3rem;

                font-size: 1.8rem;
                font-weight: 400;
            }
        }

        img {
            position: absolute;
            opacity: 50%;
            border-radius: .4rem;
            z-index: 0;
        }
    }

    @media (min-width: 1440px) {
        width: 28.4rem;
        height: 34.9rem;

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
