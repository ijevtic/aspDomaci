import styled from 'styled-components';
import { COLORS } from './colors';

const PStyled = styled.p`
color: ${COLORS.blue3};
text-align: left;
font-size: 18px;
`;

const Napomena = styled.p`
color: ${COLORS.blue3};
text-align: left;
font-style: italic;
`;

const TitleStyled = styled.div`
// font-family:Lucida Sans Unicode, Lucida Grande sans-serif;
font-size:30px;
color: ${COLORS.blue2};
// align-items:flex-start;
`;

export {
  TitleStyled,
  PStyled,
  Napomena
}