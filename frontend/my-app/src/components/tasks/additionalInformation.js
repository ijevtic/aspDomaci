import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { TitleStyled } from '../../styles/styledTasks';

const LiStyled = styled.li`
// font-family:Lucida Sans Unicode, Lucida Grande sans-serif;
font-size:18px;
margin-bottom: 10px;
color: ${COLORS.blue4};
`
const DivStyled = styled.div`
display:flex;
flex-direction:column;
text-align: left;
// align-items:flex-start;
`;

function AdditionalInfo() {
  return (
    <DivStyled>
      {/* <p>ide gas</p> */}
      <TitleStyled>Dodatne Informacije</TitleStyled>
      <ul styles={{ "list-style-type": "circle" }}>
        <LiStyled>Rok za predaju domaćeg zadatka je <b>13.1.2023. 23:59.</b></LiStyled>
        <LiStyled>Za prvi i treći zadatak je omogućeno automatsko proveravanje re&scaron;enja zadataka, dok je za drugi zadatak potrebno da re&scaron;enje po&scaron;aljete na <u>mtrajkovic@raf.rs</u> i <u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Kada po&scaron;aljete zadatak na automatsku proveru, ishod ćete dobiti na stranici zadatka, sa desne strane(tu se nalaze sva poslata re&scaron;enja).</LiStyled>
        <LiStyled>Ne postoji limit u broju pokušaja po zadatku, ali je timeout za slanje 60s.</LiStyled>
        <LiStyled>Od svih poslatih re&scaron;enja gleda se ono koje je donelo najvi&scaron;e poena.</LiStyled>
        <LiStyled>Ukupna vrednost svih zadataka je 10 poena(4-3-3).</LiStyled>
        <LiStyled><strong>Prepisivanje i deljenje kodova je strogo zabranjeno!</strong>&nbsp; Svi studenti koji budu prepisivali ili delili svoj kod drugima će dobiti 0 poena na domaćem zadatku.</LiStyled>
        <LiStyled>Sva eventualna pitanja možete slati na <u>mtrajkovic@raf.rs</u> i&nbsp;<u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Veličina izvornog koda u prvom i trećem zadatku je ograničena na 64KB.</LiStyled>
        <LiStyled>U prvom zadatku su tekst drugog i trećeg podzadatka isti - jedina razlika je maksimalan broj 
          bacanja jaja.</LiStyled>
      </ul>
    </DivStyled>
  )
}

export {
  AdditionalInfo
}