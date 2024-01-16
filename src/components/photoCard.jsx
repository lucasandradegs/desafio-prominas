"use client";

import styled from "styled-components";

import { Krona_One } from 'next/font/google'

const krona = Krona_One({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 18.75rem;
    height: 40.2rem;

    .cardTitle {
        display: flex;
        justify-content: center;
        

        .titleAndButton {
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
                margin-top: 27.8rem;
                text-transform: uppercase;
                font-size: 1.6rem;
                z-index: 1;
            }

            button {
                width: 12.7rem;
                height: 2rem;

                margin-top: 3.2rem;
                font-size: 1rem;
                border: 1px solid #FFF;
                border-radius: .3rem;
                background-color: transparent;
                color: #FFF;
            }
    
        }

        img {
            position: absolute;
            opacity: 50%;
            border-radius: .4rem;
            z-index: 0;
        }
    }
`;

export function PhotoCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <div className="titleAndButton">
                    <h2 className={krona.className}>{title}</h2>
                    <button className={krona.className}>SAIBA MAIS</button>
                </div>
            </div>
        </Container>
    )
}
