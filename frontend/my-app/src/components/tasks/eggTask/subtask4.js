import { TitleStyled, PStyled, Napomena } from '../../../styles/styledTasks';

const body = (
    <>
        <TitleStyled>Četvrti podzadatak</TitleStyled>
        <PStyled>Data je zgrada koja ima <b>beskonačno</b> spratova<br />
            U zgradi postoji sprat X, sa kog kada se baci jaje na zemlju, puca. <br />
            Sa bilo kog sprata ispod X bačeno jaje će ostati netaknuto, a sa bilo kog sprata iznad X će takođe pući.<br />
            Potrebno je da nađete sprat X u što manje bacanja.<br /><br /> 
            Na raspolaganju imate <b>beskonačno jaja</b>.</PStyled>
        <Napomena>Napomena: Kada se jaje baci sa zemlje i ne pukne, može se ponovo koristiti za neko drugo bacanje.</Napomena>
        <Napomena>Napomena: Test primer će biti tačan ako broj bacanja ne pređe određen broj bacanja za test primer.</Napomena>
        <Napomena>Napomena: Brojevi spratova mogu biti veći od brojeva podržanih numeričkim tipovima u jeziku C++.</Napomena>
        <Napomena>Napomena: N nije dato u ovom podzadatku, osim toga ulaz i izlaz funkcionišu isto kao u prethodnim podzadacima</Napomena>


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