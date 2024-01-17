"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '700', subsets: ['latin'] })

export const Container = styled.div`
    width: 32.7rem;
    padding: 3.4rem;

    position: relative;

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid;
        border-image: linear-gradient(to right, #A68BFF, #000000);
        border-image-slice: 1;
        border-radius: .8rem;
        z-index: -1;
        transition: border 0.5s ease-in-out;
    }

    h2 {
        font-size: 2.2rem;
        margin-top: 4.9rem;
        transition: color 0.5s ease-in-out;
    }

    &:hover::before {
        border-image: linear-gradient(to right, #6511c5, #0bceb1);
        border-image-slice: 1;
    }

    &:hover h2 {
        color: #7500FF;
    }

    img {
        padding: .7rem;
        background-color: #7500FF;
    }

    @media (min-width: 1440px) {
        width: 38.4rem;
        height: 27.3rem;
    }
`;

export function FirstSectionCard({ image, title }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
                <h2 className={poppins.className}>{title}</h2>
            </div>
        </Container>
    )
}
