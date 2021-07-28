import React from "react";
import { fonts, colorAndGradiant, padding } from "../variables";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { BsFillCaretRightFill } from "react-icons/bs";
import phone from "../images/phone.svg";

const HeroSec = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  padding: ${padding.desktop};
  background: ${colorAndGradiant.gradiants.gradiant1.gradiant};
  @media screen and (max-width: 1000px) {
    padding: ${padding.tablet};
  }
  @media screen and (max-width: 500px) {
    padding: ${padding.mobile};
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  height: 100%;
  min-height: 700px;

  .hero-texts {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    text-transform: capitalize;
    h1 {
      color: ${colorAndGradiant.colors.white};
      letter-spacing: 1px;
      font-size: 40px;
      font-weight: 700;
      max-width: 70%;
      text-shadow: 1px 1px 7px #00000017;
    }
    p {
      color: ${colorAndGradiant.colors.white};
    }
    button {
      width: fit-content;
    }
  }
  .mobile-img {
    /* width: 50%; */
    
    img{
      width: 100%;
      max-height: 420px;
      object-position: center;
      object-fit: contain;
      display: block;

    }
  }

  @media screen and (max-width: 1000px) {
    .hero-texts {
      h1 {
        font-size: 35px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .hero-texts {
     
      h1 {
        font-size: 30px;
        max-width: 100%;
      }
    }
    
  }
  @media screen and (max-width: 500px) {
    .hero-texts {
      width: 100%;
      h1 {
        font-size: 25px;
      }
    }
    .mobile-img {
      display: none;
    }
  }
  @media screen and (max-width: 300px) {
    .hero-texts {
      h1 {
        font-size: 20px;
      }
    }
  }

`;

const Hero = () => {
  const {closeSidebar,closeSubmenu}= useGlobalContext();

  return (
    <>
      <HeroSec onClick={closeSidebar} onMouseOver={closeSubmenu}>
        <Container>
          <div className="hero-texts">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of businesses of all sizes—from startups to large
              enterprises—use Stripe’s software and APIs to accept payments,
              send payouts, and manage their businesses online.
            </p>
            <button>
              Start Now <BsFillCaretRightFill />
            </button>
          </div>
          <div className="mobile-img">
            <img src={phone} alt="" />
          </div>
        </Container>
      </HeroSec>
    </>
  );
};

export default Hero;
