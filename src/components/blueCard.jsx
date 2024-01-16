"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 32.6rem;
    height: 56.8rem;

    margin-bottom: 4rem;

    background-color: #0059FF;

    border-radius: .8rem;

    .cardStyle {
        position: absolute;
    }

    .cardStyle2 {
        position: absolute;
    }

    .cardTitle {
        
        h2 {
            font-weight: 700;
            margin-top: 9.6rem;

            font-size: 2.5rem;
        }

        p {
            text-align: center;
            margin-top: 1.2rem;
            line-height: 26px;
            font-size: 2rem;
        }

        .titleAndImage {
            padding: 0 1.9rem;
        }

        img:nth-child(3) {
            border-radius: 0 0 0 10rem;
        }
    }
`;

export function BlueCard({ image, title, subtitle }) {
    return (
        <Container>
            <div className="cardTitle">
                <div className="cardStyle">
                    <img src="/v.svg" alt="" />
                </div>
                <div className="cardStyle2">
                    <img src="/u.svg" alt="" />
                </div>
                    <img src={image} alt="Imagem do card" />
                <div className="titleAndImage">
                    <h2 className={poppins.className}>{title}</h2>
                    <p className={poppins.className}>{subtitle}</p>
                </div>
            </div>
        </Container>
    )
}
