import styled from 'styled-components';

const LiStyled = styled.li`
// font-family:Lucida Sans Unicode, Lucida Grande sans-serif;
font-size:20px;
`
const DivStyled = styled.div`
display:flex;
flex-direction:column;
text-align: left;
// align-items:flex-start;
`;

const TitleStyled = styled.div`
// font-family:Lucida Sans Unicode, Lucida Grande sans-serif;
font-size:30px;
// align-items:flex-start;
`;

function AdditionalInfo() {
  return (
    <DivStyled>
      {/* <p>ide gas</p> */}
      <TitleStyled>Dodatne Informacije</TitleStyled>
      <ul styles={{ "list-style-type": "circle" }}>
        <LiStyled>Rok za predaju domaćeg zadatka je do 13.1.2023. 23:59.</LiStyled>
        <LiStyled>Za prvi i treći zadatak je omogućeno automatsko proveravanje re&scaron;enja zadataka, dok je za drugi zadatak potrebno da re&scaron;enje po&scaron;aljete na <u>mtrajkovic@raf.rs</u> i <u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Kada po&scaron;aljete zadatak na automatsku proveru, ishod ćete dobiti na stranici zadatka, sa desne strane(tu se nalaze sva poslata re&scaron;enja).</LiStyled>
        <LiStyled>Timeout za slanje je 60s.</LiStyled>
        <LiStyled>Od svih poslatih re&scaron;enja gleda se ono koje je donelo najvi&scaron;e poena.</LiStyled>
        <LiStyled>Ukupna vrednost svih zadataka je 10 poena(4-3-3).</LiStyled>
        <LiStyled><strong>Prepisivanje i deljenje kodova je strogo zabranjeno!</strong>&nbsp; Svi studenti koji budu prepisivali ili delili svoj kod drugima će dobiti 0 poena na domaćem zadatku.</LiStyled>
        <LiStyled>Sva eventualna pitanja možete slati na <u>mtrajkovic@raf.rs</u> i&nbsp;<u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Veličina izvornog koda u prvom i trećem zadatku je ograničena na 64KB.</LiStyled>
      </ul>
    </DivStyled>
  )
}

export {
  AdditionalInfo
}