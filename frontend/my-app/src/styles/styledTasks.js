import styled from 'styled-components';
import { COLORS } from './colors';

const PStyled = styled.p`
color: ${COLORS.blue3};
text-align: left;
font-size: 20px;
padding-right: 30px;
padding-bottom: 20px;
`;

const Napomena = styled.p`
color: ${COLORS.blue3};
text-align: left;
font-style: italic;
`;

const Objasnjenje = styled.p`
color: ${COLORS.blue3};
text-align: left;
font-size: 20px;
padding-top:20px;
padding-right: 30px;
padding-bottom: 20px;
`;

const TitleStyled = styled.div`
// font-family:Lucida Sans Unicode, Lucida Grande sans-serif;
font-size:30px;
color: ${COLORS.blue2};
font-weight: 600;
margin-top: 30px;
margin-bottom: 20px;
// align-items:flex-start;
`;

export {
  TitleStyled,
  PStyled,
  Napomena,
  Objasnjenje
}