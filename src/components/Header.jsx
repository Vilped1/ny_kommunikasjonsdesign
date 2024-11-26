import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <Link to="/"><h2><strong id="db"> DB </strong> News</h2></Link>
            <nav>
                <ul>
                    <Link to="/"><li id="home">Home</li></Link>
                </ul>
            </nav>
        </header>
    )
}