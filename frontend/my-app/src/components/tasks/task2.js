import { TitleStyled, PStyled, Napomena } from '../../styles/styledTasks';

const body = (
    <>
        <TitleStyled>Grafički prikaz rotacija AVL stabla</TitleStyled>
        <PStyled>Potrebno je napraviti program za komandnu liniju u jeziku po izboru u 
            kom treba da omogućite prikaz AVL stabla nakon dodavanja/brisanja čvorova. <br /> 
            Izgled AVL stabla potrebno je prikazati nakon svake rotacije (LL,LR,RL,RR).  <br /> Potrebno je da se čvorovi i veze
            jasno vide u konzoli nakon svakog ispisa.  <br /> Način prikaza se ostavlja studentima.
        </PStyled>
        <Napomena>Napomena: Ovaj zadatak se šalje mejlom.</Napomena>
        <Napomena>Napomena: 3 poena nosi ceo zadatak. 2 poena se dobija za jednu implementiranu operaciju(brisanje/dodavanje).
        </Napomena>
    </>
)

const task2 = {
    "title": 'AVL',
    "body": body,
    "checker": false,
    "key": "task2"
}
export {
    task2
}