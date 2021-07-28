import { createGlobalStyle } from "styled-components";
import { fonts, colorAndGradiant, padding } from "./variables";

export const GlobalStyles = createGlobalStyle`
/*
=============== 
Global Styles
===============
*/

/* toggle  */

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "poppins", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--white);
  font-size: 15px;
}

/* column classes  */
.col-2{
    min-width: 200px;
}
.col-3{
    min-width: 300px;
}
.col-4{
    min-width: 400px;
}


ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  font-size:${fonts.p.desktop};
  text-transform: capitalize;
  font-weight: 500;
  text-transform: capitalize;
  transition: 0.3s ease;
}
a:hover{
    color:${colorAndGradiant.colors.third} !important;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  background: ${colorAndGradiant.colors.secondary};
  color: ${colorAndGradiant.colors.white};
  font-size: ${fonts.p.desktop};
  font-weight: 500;
  padding:10px 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover{
    background:${colorAndGradiant.colors.forth} ;
}

h1,h2,h3,h4{
    text-transform: capitalize;
}


h1{
 font-size: ${fonts.h1.desktop};
}
h2{
    font-size: ${fonts.h2.desktop};
}
h3{
    font-size: ${fonts.h3.desktop};
}
h4{
    font-size: ${fonts.h4.desktop};
}
p{
    font-size: ${fonts.p.desktop};
    font-weight: 400;
}

a{
    font-size: ${fonts.p.desktop};
}


.padding{
    padding:${padding.desktop};
}

.sub-show{
  opacity: 1;
  pointer-events: auto;
}


/* responsive  */

@media screen and (max-width: 1000px) {
h1{
font-size: ${fonts.h1.desktop1000};
}
h2{
    font-size: ${fonts.h2.desktop1000};
}
h3{
    font-size: ${fonts.h3.desktop1000};
}
h4{
    font-size: ${fonts.h4.desktop1000};
}
p{
    font-size: ${fonts.p.desktop1000};
}
a{
    font-size: ${fonts.p.tablet700};
}
button{
    font-size:${fonts.p.tablet700}
}
}

@media screen and (max-width: 700px) {
    h1{
font-size: ${fonts.h1.tablet700};
}
h2{
    font-size: ${fonts.h2.tablet700};
}
h3{
    font-size: ${fonts.h3.tablet700};
}
h4{
    font-size: ${fonts.h4.tablet700};
}
p{
    font-size: ${fonts.p.tablet700};
}
a{
    font-size: ${fonts.p.mobile500};
}
button{
    font-size:${fonts.p.mobile500};
    padding:8px 15px;
}
.padding{
    padding:${padding.tablet};
}

.show{
    display: flex;
}
}
@media screen and (max-width: 500px) {
    h1{
font-size: ${fonts.h1.mobile500};
}
h2{
    font-size: ${fonts.h2.mobile500};
}
h3{
    font-size: ${fonts.h3.mobile500};
}
h4{
    font-size: ${fonts.h4.mobile500};
}
p{
    font-size: ${fonts.p.mobile500};
}
a{
    font-size: ${fonts.p.mobile300};
}
button{
   font-size: ${fonts.p.mobile300}
}
.padding{
    padding:${padding.mobile};
    padding:5px 10px;
}
}
@media screen and (max-width: 300px) {
    h1{
font-size: ${fonts.h1.mobile300};
}
h2{
    font-size: ${fonts.h2.mobile300};
}
h3{
    font-size: ${fonts.h3.mobile300};
}
h4{
    font-size: ${fonts.h4.mobile300};
}
p{
    font-size: ${fonts.p.mobile300};
}
}

`;
