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

    transition: transform 0.3s ease-in-out, background-color 0.5s ease-in-out;

    &:hover {
        transform: scale(1.05); 
        background-color: #052d79; 
    }

    .cardStyle {
        position: absolute;

        @media (max-width: 1439px) {
            .desktopV {
                display: none;
            }
        }

        @media (min-width: 1440px) {
            .mobileV {
                display: none;
            }
        }
    }

    .cardStyle2 {
        position: absolute;

        @media (max-width: 1439px) {
            .desktopU {
                display: none;
            }
        }

        @media (min-width: 1440px) {
            .mobileU {
                display: none;
            }
        }
    }

    .cardTitle {
        
        h2 {
            font-weight: 700;
            margin-top: 9.6rem;

            font-size: 2.5rem;

            color: #fff;

            @media (min-width: 1440px) {
                font-size: 3rem;
            }
        }

        p {
            text-align: center;
            margin-top: 1.2rem;
            line-height: 26px;
            font-size: 2rem;

            color: #fff;

            @media (min-width: 1440px) {
                font-size: 2.2rem;
                line-height: 28.6px;
            }
        }

        .titleAndImage {
            padding: 0 1.9rem;
        }

        img:nth-child(3) {
            border-radius: 0 0 0 10rem;
        }
    }

    @media (min-width: 1440px) {
        width: 38.4rem;
        height: 63rem;
    }
`;

export function SeventhSectionCard({ image, title, subtitle }) {
    return (
        <Container>
            <div className="cardTitle">
                <div className="cardStyle">
                    <img className="mobileV" src="/v.svg" alt="" />
                    <img className="desktopV" src="/vdesk.svg" alt="" />
                </div>
                <div className="cardStyle2">
                    <img className="mobileU" src="/u.svg" alt="" />
                    <img className="desktopU" src="/udesk.svg" alt="" />
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
