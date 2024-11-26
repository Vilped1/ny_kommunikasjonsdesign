import { Link } from "react-router-dom";

export default function Home({drinkTitle, drinkQuote, tollTitle, tollQuote, robTitle, robQuote, adhdTitle, adhdQuote}){
    return(
        <>

            <main id="Front-page">
                <h1>Siste nytt!</h1>

                    <article id="XL">
                <Link to="/adhd">
                        <h2>To liv, én diagnose: <br /> Hvordan tidspunktet former ADHD-reisen</h2>
                        <img src={"/pictures/ADHD/tuva-tora_1.png"} alt="Bilde av Tuva og Tora"/>
                        <p>{adhdQuote}</p>
                </Link>
                    </article>

                    <article id="S">
                <Link to="rob">
                        <img src={"/pictures/Rob/line-oda.png"} alt="Bilde av Line og Oda"/>
                        <h3>{robTitle}</h3>
                        <p>“Pappa det er noen som truer oss med kniv!”</p>
                </Link>
                    </article>
                
                        <article id="M">
                    <Link to="/toll">
                            <img src={"/pictures/Toll/Bom2.jpeg"} alt="Bilde av bom"/>
                            <h3>Bomringer i hverdagen: <br />Kostnaden for å krysse bygrensene</h3>
                            <p>{tollQuote}</p>
                    </Link>
                        </article>
                    
                        <article id="L">
                    <Link to="/drinking">
                            <img src={"/pictures/Drinking/group-image.jpg"} alt="AI bildet av ran hendelsen"/>
                            <h3>Drikkingens dilemma: <br /> Hvordan former alkohol studentmiljøet?</h3>
                            <p>- Jeg synes det er litt leit at det alltid er alkohol med i bildet når man skal finne på noe med andre studenter, sier Jonas Heggelund (24), student ved Høgskolen i Østfold</p>
                    </Link>
                        </article>
            </main>
        </>
    )
}