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
        <LiStyled>Rok za predaju <b>prvog i drugog</b> domaćeg zadatka je <b> petak 13.1.2023. 23:59.</b></LiStyled>
        <LiStyled>Rok za predaju <b>trećeg</b> domaćeg zadatka je <b> ponedeljak 16.1.2023. 23:59.</b></LiStyled>
        <LiStyled>Za prvi i treći zadatak je omogućeno automatsko proveravanje re&scaron;enja zadataka, dok je za drugi zadatak potrebno da re&scaron;enje po&scaron;aljete na <u>mtrajkovic@raf.rs</u> i <u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Prvi i treći zadatak potrebno je iskucati u programskom jeziku <b>C++</b>, drugi zadatak je moguće raditi u jeziku po izboru.</LiStyled>
        <LiStyled>Kada po&scaron;aljete zadatak na automatsku proveru, ishod ćete dobiti na stranici zadatka, sa desne strane (tu se nalaze sva poslata re&scaron;enja).</LiStyled>
        <LiStyled>Ne postoji limit u broju pokušaja po zadatku, ali je između dva slanja koda na testiranje potrebno da prođe bar 60s.</LiStyled>
        <LiStyled>Od svih poslatih re&scaron;enja gleda se ono koje je donelo najvi&scaron;e poena.</LiStyled>
        <LiStyled>Ukupna vrednost svih zadataka je 10 poena (4-3-3).</LiStyled>
        {/* <LiStyled>Token posle logovanje ističe za ~1h. Kada istekne token, moguće je da će vas sistem preusmeriti
          da se ponovo prijavite, ili će vas automatski prijaviti ponovo.</LiStyled> */}
        <LiStyled><strong>Prepisivanje i deljenje kodova je zabranjeno.</strong>&nbsp; Svi studenti koji budu prepisivali ili delili svoj kod drugima će dobiti 0 poena na domaćem zadatku.</LiStyled>
        <LiStyled>Sva eventualna pitanja možete slati na <u>mtrajkovic@raf.rs</u> i&nbsp;<u>ijevtic@raf.rs</u>.</LiStyled>
        <LiStyled>Veličina izvornog koda u prvom i trećem zadatku je ograničena na 64KB.</LiStyled>
        <LiStyled>U prvom zadatku su tekst drugog i trećeg podzadatka isti - jedina razlika je maksimalan broj 
          bacanja jaja.</LiStyled>
        <LiStyled>Status kod poslatog rešenja može biti OK, WA ili TLE. 
          <br />OK označava da je rešenje tačno, WA da sprat nije pogođen ili je upotrebljen veći broj poteza od očekivanog, TLE znači da se kod izvršava duže nego što je dozvoljeno.
          <br />Ograničenje za izvršavanje koda je 2s za prva tri podzadatka, a 3s za četvrti.</LiStyled>

      </ul>
    </DivStyled>
  )
}

export {
  AdditionalInfo
}