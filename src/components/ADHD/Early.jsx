import { Link } from "react-router-dom";
export default function Early() {
    return (
        <main id="late">
            <section className="header earlyHeader">
                <h1 className="title" id="earlyTitle">Historien til Tuva</h1>
                <p className="photographer">Foto: Jenny Østreng</p>
            </section>

            <section id="content">
                <article id="sent">
                    <p className="topQuote" id="earlyQuote">- Det var utrolig å se hvor stor forskjell det var, forteller hun.</p>

                    <figure>
                        <img src={"/pictures/ADHD/Tuva/tuva3.png"} alt="Bilde av Tuva" />
                        <p className="photo-text">
                        Tuva Cecilie Fjeld (28)
                        </p>
                        <figcaption className="photographer">
                            Foto: Tuva Cecilie Fjeld
                        </figcaption>
                    </figure>

                    <p>Tuva Cecilie Fjeld (28) ble diagnostiert med ADHD da hun var rundt seks år gammel, etter at lærerne på skolen oppdaget tegn og tilkalte <span className="services">PPT <span className="text-box">Står for pedagogisk-psykologisk tjeneste, som hjelper barnehager og skoler med å legge til rette for barn og elever med behov for tilrettelegging. <a href="https://www.udir.no/laring-og-trivsel/spesialpedagogikk/pp-tjenesten/">(Udir)</a></span></span>. For den lille jenta var hverdagen før diagnosen preget av mye stress og frustrasjon, særlig knyttet til lære- og skrivevansker. </p>
                    <figure>
                        <img className="drawing" src={"/pictures/ADHD/Tuva/tuva-prestasjoner.png"} alt="Illustrasjon av Tuva som stryker på en test" />
                        <p className="photo-text">
                        - Jeg hadde store utfordringer med å konsentrere meg, spesielt når det kom til skolen. Jeg slet mye, men i etterkant har jeg forstått hvorfor, forteller Tuva.
                        </p>
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                    <p className="sitat"></p>

                    <h3>En av de første i Norge </h3>
                    <p>
                    Tuva var bare fem-seks år gammel da skolen først begynte å reagere på utfordringene hennes. Lærerne tilkalte <span className="services">PPT<span className="text-box">Står for pedagogisk-psykologisk tjeneste, som hjelper barnehager og skoler med å legge til rette for barn og elever med behov for tilrettelegging. <a href="https://www.udir.no/laring-og-trivsel/spesialpedagogikk/pp-tjenesten/">(Udir)</a></span></span> for å få henne vurdert, og kort tid senere ble hun henvist til <span className="services">BUP<span className="text-box">Barne-og ungdomspsykiatriske tjenester. Samarbeider med andre hjelpeinstanser med utredning og behandling av barn og unge fra 0-18 år med psykiske vansker. <a href="https://www.sykehuset-ostfold.no/avdelinger/klinikk-for-psykisk-helsevern-og-rusbehandling/avdeling-for-barne-og-ungdomspsykiatri-og-barnehabilitering/barne-og-ungdomspsykiatrisk-poliklinikk-halden/">(Sykehuset Østfold)</a></span></span>  for utredning.Hun husker at foreldrene hennes deltok på møter for å finne ut hva som foregikk, spesielt siden broren hennes allerede hadde fått en ADHD-diagnose, noe som gjorde at mistanken raskt rettet seg mot det samme hos Tuva.
                    </p>
                    
                    <p className="sitat">- Skolen tok initiativ fordi jeg slet med å lære noe som helst, falt ut av ting hele tiden og generelt hadde store utfordringer, forteller hun.</p>

                    <p>Utredningsprosessen var tidkrevende, men effektiv.</p>
                    <p className="sitat">- Det tok kanskje et halvt år fra utredningen startet til de fant ut at jeg hadde ADHD, sier Tuva. Selv om det var slitsomt, beskriver hun opplevelsen som overkommelig. Hun ble utsatt for en rekke tester, inkludert et prosjekt der hun faktisk var en av de første i Norge.</p>

                    <p className="sitat">- Jeg måtte ha på meg en hatt full av ledninger som målte hjerneaktiviteten min, forklarer hun.</p>
                    <p>Hun fikk se på en skjerm som viste det samme bildet før og etter hun startet på ADHD-medisiner. Forskjellen lå i resultatene: Før medisinen var tankene og konsentrasjonen hennes kaotiske og "blurry", noe som kom tydelig frem i målingene. Etter at hun begynte på medisiner, viste testene at hun klarte å konsentrere seg bedre, og tankene hennes føltes mye klarere.</p>
                    <p className="sitat">- Det var utrolig å se hvor stor forskjell det var, forteller hun.</p>

                    <h4>Veien videre etter diagnosen</h4>
                    <p>Etter å ha fått ADHD-diagnosen, ble Tuva møtt med både støtte og utfordringer. Som barn fikk hun hjelp gjennom spesialundervisning og støttekontakt, og deltok på samlinger for barn med ADHD.</p>
                    
                    <p>Likevel har veien til å mestre ADHD ikke vært enkel. På barneskolen etter å ha fått diagnosen ADHD, vokste følelser av å føle seg utenfor, og unormal. </p>

                    <figure>
                        <img className="drawing" src={"/pictures/ADHD/Tuva/Tuva-utestengt.png"} alt="Illustrasjon av tuva som blir utestengt" />
                        <p className="photo-text">
                        - Også fikk jeg jo liksom lite informasjon om hva ADHD var, og da blir det på en måte til at du føler deg så utenfor, at du ikke er normal da, selv om man selvfølgelig er normal selv om man har det.
                        </p>
                        <figcaption className="photographer">
                            Illustratør: Anne May Omberg
                        </figcaption>
                    </figure>
                    
                    <h4>Medisiner og mestring</h4>
                    <p>Sentralstimulerende medisiner er den vanligste behandlingen for ADHD, og bruken har vært mye debattert, spesielt for barn. Mange uttrykker bekymring over langvarig bruk, mens andre som bruker medisinen opplever god effekt. Ifølge FHI, hadde omkring 80 % av barn med ADHD-diagnose i <span className="services">NPR<span className="text-box">Spesialhelsetjeneste innen psykisk helsevern for befolkningen over 18 år. <a href="https://www.sykehuset-ostfold.no/avdelinger/klinikk-for-psykisk-helsevern-og-rusbehandling/dps-halden-og-sarpsborg/#les-mer-om-dps-halden-sarpsborg">(Sykehuset Østfold)</a></span></span> hadde fått sentralstimulerende legemidler minst en gang i perioden 2008-2013.</p>

                    <p>Tuva valgte tidlig å slutte med medisiner, i en alder av 16, men har nå valgt å starte på dem igjen, og opplever medisinene som en stor del av hennes mestring av utfordringene knyttet til ADHD.</p>
                    <p className="sitat">- Jeg merker jo sånn som med jobb at jeg ikke er fokusert i det hele tatt, det er tusen tanker oppi hodet, noen ganger så klarer jeg ikke jobbe i det hele tatt, det blir for mye for meg, av at det er for mye som skjer på en gang. Nå har jeg jo begynt på medisiner igjen, og det føles mye bedre, forteller hun.</p>

                    <h4>Tidlig diagnose – en blandet opplevelse</h4>
                    <p>Tuva fikk ADHD-diagnosen i ung alder, noe hun i dag ser på som en fordel.</p>
                    <p className="sitat">- Jeg tror nok det hadde vært kjedeligere for meg å finne det ut senere, var nok en fordel at jeg var såpass ung da diagnosen kom. Men å få den tidligere ville nok ikke gjort stor forskjell, jeg hadde nok ikke husket så mye av det likevel.</p>

                    <p>Diagnosen åpnet også for ulike former for hjelp og støtte. Allerede på ungdomsskolen deltok Tuva på samlinger arrangert av ADHD-foreninger. Et minne hun husker spesielt godt, er en helg på Quality Hotel med badeland, hvor hun og andre med ADHD fra hele landet fikk muligheten til å møte hverandre og delta på aktiviteter. Støttekontakten hun hadde i helgene, spilte også en viktig rolle i å aktivisere henne og hjelpe henne med å få ut energi, samtidig som det ga foreldrene litt avlastning.</p>

                    <p>Samtidig var det ikke uten kostnader å være den eneste i klassen med en ADHD-diagnose. På den tiden var det utfordrende å bli stilt overfor både diagnosen og de sosiale konsekvensene som fulgte.</p>
                    <p className="sitat">- På den tida var det jo veldig kjedelig. Du er seks – syv år og får vite at du har fått en diagnose liksom. Jeg ble mobbet for det, og det var tøft, innrømmer hun.</p>

                    <p>Likevel føler Tuva at fordelene veide tyngre. På den tiden var det utfordrende å bli stilt overfor både diagnosen og de sosiale konsekvensene som fulgte.</p>
                    <p className="sitat">- Det var bedre å få diagnosen tidlig uansett egentlig. Jeg forstår jo nå hvorfor jeg var som jeg var når jeg var mindre. Hvorfor jeg hadde det sånn som jeg hadde det. Jeg forstår også bedre hvorfor jeg er som jeg er nå.</p>

                    <h4>Med åpne armer</h4>
                    <p className="sitat">- Ta imot all hjelpen du får, og alt som blir tilbudt, sier Tuva.</p> 
                    <p>Hun oppfordrer til å ikke bry seg om hva andre måtte mene eller si, særlig negative kommentarer.</p> 
                    <p className="sitat">- Ta imot hjelpen med åpne armer, selv om det kanskje ikke føles som noe du vil akkurat der og da. Bare gjør det, råder hun.</p>

                    <p>Les historien til Tora som fikk diagnosen sent <Link to="/adhd/sent">her</Link></p>
                </article>
            </section>
        </main>
    )
}