import { Link } from "react-router-dom"; 
import s from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={s.homeWrapper}>
            <title>Home</title>
            <h1>Find your perfect rental car</h1>
            <p>Reliable and budget-friendly rentals for any journey</p>
            <Link to="/catalog">
                <button>View Catalog</button>
            </Link>
        </div>
    );
}