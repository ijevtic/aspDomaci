import { TitleStyled, PStyled, Napomena } from '../../../styles/styledTasks';

const body = (
    <>
        <TitleStyled>Treći podzadatak</TitleStyled>
        <PStyled>Data je zgrada koja ima <b>N</b> spratova.
            Postoji sprat u zgradi na visini X, sa kog kada se baci jaje na zemlju, puca. Sa bilo kog sprata ispod X,
            bačeno jaje će ostati netaknuto, a sa bilo kog sprata iznad X će takođe pući. Potrebno je da nađete sprat X u
            što manje bacanja. Na raspolaganju imate <b>dva jaja</b>.</PStyled>
        <Napomena>Napomena: Kada se jaje baci sa zemlje i ne pukne, može se ponovo koristiti za neko drugo bacanje.</Napomena>
        <Napomena>Napomena: Test primer će biti tačan ako broj bacanja ne pređe određen broj bacanja za test primer, 
            i ako se koriste dozvoljeni potezi.
        </Napomena>
        <Napomena>Napomena: Ovo je <b>teža verzija</b> zadatka(Manje je ograničenje u broju bacanja).</Napomena>
    </>
)
const subtask3 = {
    "title": 'Treći podzadatak',
    "body": body,
    "key" : "subtask3",
    "points": 1
}
export {
    subtask3
}