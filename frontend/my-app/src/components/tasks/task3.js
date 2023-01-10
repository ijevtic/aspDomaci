import { TitleStyled, PStyled, Napomena, Objasnjenje } from '../../styles/styledTasks';

const body = (
    <>
        <TitleStyled>Pajine merdevine</TitleStyled>
        <PStyled>
            Paja voli da se penje po zgradama. <br></br>
            On se našao u stambenom bloku koji se može predstaviti kao matrica dimenzija N x N, gde svako polje u matrici predstavlja visinu jedne zgrade. <br></br>
            Paja može da se popne (ili siđe) sa vrha jedne zgrade na neku drugu ako su one susedne u matrici (gore, dole, levo, desno) i ako je razlika njihovih visina manja ili jednaka od dužine Pajinih merdevina. <br></br>
            Pomozite Paji da odredi koliko najmanje treba da budu dugačke njegove merdevine, da bi on mogao da obiđe barem polovinu zgrada.
            Ukoliko je broj zgrada neparan, polovina se zaokružuje na gore.<br />
            Dozvoljeno je da u obilasku više puta stane na istu zgradu, ali se ona računa samo jednom u ukupnom broju zgrada koje je obišao. <br></br><br />
            U prvoj liniji ulaza unosi se prorodan broj N. &nbsp;&nbsp;&nbsp; (<b>N {'<='} 500</b>) <br></br>
            Zatim se u narednih N redova unosi po N nenegativnih brojeva odvojenih razmakom koji predstavljaju visine zgrada. &nbsp;&nbsp;&nbsp;(<b>visina {'<='} 10 000 000</b>) <br></br><br></br>
            Potrebno je ispisati jedan broj, najmanju dužinu merdevina pomoću kojih može da obiđe barem polovinu zgrada.
            </PStyled>

        <Objasnjenje>
            
            <p>primer:</p>
            <code className="my-pre">
            5<br></br>
            0 0 0 3 3<br></br>
            0 0 0 0 3<br></br>
            0 9 9 3 3<br></br>
            9 9 9 3 3<br></br>
            9 9 9 9 3<br></br>
            </code>
            <br></br>
            rešenje: <br></br>
            <code className='my-pre'>
                3
            </code>
        </Objasnjenje>
        
    </>
)
const task3 = {
    "title": 'Pajine merdevine',
    "body": body,
    "checker": true,
    "key": "task3",
    "submitOptions": [{'key': 'task3', 'title': "Treći zadatak"}],
}
export {
    task3
}