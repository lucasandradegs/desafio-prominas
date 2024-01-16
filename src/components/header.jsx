"use client";

import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;

  height: 3.5rem;
  width: 100%;
  padding: 0 2.4rem;


  background-color: #0e1220;

  .topSide {
    display: flex;
    width: 100%;
    justify-content: space-between;

    margin-top: .7rem;
    margin-bottom: .6rem;
  }

`;

export function Header({ children }) {
    return (
        <Container>
            <div className="topSide">
                <img src="/arrow.svg" alt="" />
                <img src="/logo.svg" alt="" />
                <img src="/darkmode.svg" alt="" />
            </div>
        </Container>
    )
}