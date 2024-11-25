import { Link } from "react-router-dom";

export default function Home({drinkTitle, drinkQuote, tollTitle, tollQuote, robTitle, robQuote, adhdTitle, adhdQuote}){
    return(
        <>

            <main id="Front-page">
                <h1>Siste nytt!</h1>

                    <article id="XL">
                <Link to="/adhd">
                        <h2>{adhdTitle}</h2>
                        <img src={"/pictures/ADHD/tuva-tora_1.png"} alt="#"/>
                        <p>{adhdQuote}</p>
                </Link>
                    </article>

                    <article id="S">
                <Link to="rob">
                        <img src={"/pictures/Rob/line-oda.png"} alt="#"/>
                        <h3>{robTitle}</h3>
                        <p>{robQuote}</p>
                </Link>
                    </article>
                
                        <article id="M">
                    <Link to="/toll">
                            <img src={"/pictures/Toll/Bom2.jpeg"} alt="#"/>
                            <h3>{tollTitle}</h3>
                            <p>{tollQuote}</p>
                    </Link>
                        </article>
                    
                        <article id="L">
                    <Link to="/drinking">
                            <img src={"/pictures/Drinking/group-image.jpg"} alt="#"/>
                            <h3>{drinkTitle}</h3>
                            <p>{drinkQuote}</p>
                    </Link>
                        </article>
            </main>
        </>
    )
}