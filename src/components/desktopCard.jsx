"use client";

import styled from "styled-components";

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] })

export const Container = styled.div`
    width: 38.4rem;
    height: 33.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .6rem;
    background: rgba(166, 139, 255, 0.40);
    box-shadow: 10.71px 10.71px 21.42px 0px rgba(0, 0, 0, 0.20);
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05); 
        box-shadow: 15px 15px 30px 0px rgba(0, 0, 0, 0.3);
    }

    

    .cardTitle  {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3.8rem;

        .videoSVG {
            position: absolute;
            margin-top: 4.5rem;
            z-index: 2;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.1); 
            }
        }

        img:nth-child(2) {
            border-radius: .9rem;
            border: .3rem solid #7500FF;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;

            &:hover {
                transform: scale(1.1); 
            }
        }

        img:nth-child(4) {
            margin-top: 1.5rem;
            width: 17.7rem;
            cursor: pointer;
            transition: opacity 0.3s ease-in-out;

            &:hover {
                opacity: 0.8;
            }
        }

        .nameAndImage {
            display: flex;
            gap: 1rem;
            margin-top: 3.1rem;
            align-items: center;

            img  {
                border-radius: 50%;
                transition: transform 0.3s ease-in-out;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        .rightSide {
            h2 {
                font-size: 1rem;
                font-weight: 600;
                color: #fff;
            }

            p {
                font-size: 0.7rem;
                color: #fff;
            }
        }
    }
`;

export function DesktopCard({ video, image, name, course }) {
    return (
        <Container>
            <div className="cardTitle">
                <img className="videoSVG" src="/play.svg" alt="" />
                <img src={video} alt="Vídeo do aluno" />
                <div className="nameAndImage">
                    <img src={image} alt="Imagem do aluno" />
                    <div className="rightSide">
                        <h2 className={poppins.className}>{name}</h2>
                        <p className={poppins.className}>{course}</p>
                    </div>
                </div>
                    <img src="/google.svg" alt="" />
            </div>
        </Container>
    )
}
