import { TitleStyled, PStyled, Napomena, Objasnjenje } from '../../../styles/styledTasks';

const code_example = `
int n;
cin>>n;
int res = 0;
for(int i=1;i<n;i++)
{
    cout<<"? "<<i<<endl;
    cin>>res;
    if(res==1)
    {
        cout<<"! "<<i<<endl;
    }
}
cout<<"! "<<n<<endl;
`
const body = (
    <>
        <TitleStyled>Prvi podzadatak</TitleStyled>
        <PStyled>Data je zgrada koja ima <b>N</b> spratova, označenih brojevima od 1 do N.<br />
            U zgradi postoji sprat X, sa kog kada se baci jaje na zemlju, puca. <br />
            Sa bilo kog sprata ispod X bačeno jaje će ostati netaknuto, a sa bilo kog sprata iznad X će takođe pući.<br />
            Potrebno je da nađete sprat X u što manje bacanja.<br /><br /> 
            Na raspolaganju imate <b>beskonačno jaja</b>.</PStyled>
        <Napomena>Napomena: Kada se jaje baci sa zemlje i ne pukne, može se ponovo koristiti za neko drugo bacanje.</Napomena>
        <Napomena>Napomena: Test primer će biti tačan ako broj bacanja ne pređe određen broj bacanja za test primer.</Napomena>
        <Objasnjenje>
            Ovaj zadatak je interaktivan, odnosno ulaz u vaš program će zavisiti od njegovog ispisa. <br />
            Prva linija ulaza je uvek ista i to je N, broj spratova u datom test primeru. <br />
            Nakon toga se očekuje da vaš program ispiše komandu oblika <code className="my-code">? x</code>, gde je x broj sprata sa koga se baca jaje.<br />
            Za svaku komandu ovog tipa dobićete odgovor na ulazu koji može biti 0 (jaje nije puklo) ili 1 (jaje je puklo).<br />
            Kada ste sigurni da ste odredili sprat X, ispisujete komandu oblika <code className="my-code">! x</code>, gde je x broj sprata X iz postavke zadatka.<br />
            <br />
            Primer koda za brute force algoritam:
            <code className="my-pre">
            {code_example}
            </code>
        </Objasnjenje>
        
    </>
)
const subtask1 = {
    "title": 'Prvi podzadatak',
    "body": body,
    "key": "subtask1",
    "points": 1
}
export {
    subtask1
}