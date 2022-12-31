import { TitleStyled, PStyled, Napomena } from '../../../styles/styledTasks';

const body = (
    <>
        <TitleStyled>Četvrti podzadatak</TitleStyled>
        <PStyled>Data je zgrada koja ima <b>beskonačno</b> spratova.
            Postoji sprat u zgradi na visini X, sa kog kada se baci jaje na zemlju, puca. Sa bilo kog sprata ispod X,
            bačeno jaje će ostati netaknuto, a sa bilo kog sprata iznad X će takođe pući. Potrebno je da nađete sprat X u
            što manje bacanja. Na raspolaganju imate <b>beskonačno jaja</b>.</PStyled>
        <Napomena>Napomena: Kada se jaje baci sa zemlje i ne pukne, može se ponovo koristiti za neko drugo bacanje.</Napomena>
        <Napomena>Napomena: Test primer će biti tačan ako broj bacanja ne pređe određen broj bacanja za test primer.
        </Napomena>
    </>
)

const subtask4 = {
    "title": 'Četvrti podzadatak',
    "body": body,
    "key" : "subtask4",
    "points": 1
}
export {
    subtask4
}