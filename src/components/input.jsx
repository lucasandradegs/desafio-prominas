"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })


export const Container = styled.div`

    @media (max-width: 1439px) {
        width: 100%;
    }

    img {
        position: absolute;
        margin-left: 1.2rem;

        width: 1.5rem;
    }


    .inputSVG {
        display: flex;
        flex-direction: row;
        align-items: center;

        > input {
            height: 2.2rem;
            width: 100%; 
            padding-left: 3.2rem;
            padding-top: .2rem;
    
            border: 0;
            border-radius: .2rem;

            font-size: 1rem;
    
            &::placeholder {
                color: #666464;
                font-size: 1rem;
            }
        }
    }

`;

export function Input({ ...rest }) {
    return (
        <Container>
            <div className="inputSVG">
                <img src="lupa.svg" alt="" />
                <input className={poppins.className} {...rest} />
            </div>
        </Container>
    )
}