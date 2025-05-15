import { CiCircleCheck } from "react-icons/ci";
import s from './CarFeaturesList.module.css';

const CarFeaturesList = ({ title, items }) => {
    return (
        <div className={s.listContainer}>
            <h3 className={s.subtitle}>{title}</h3>
            <ul className={s.list}>
                {items.map((text, index) => (
                    <li className={s.item} key={index}>
                        <CiCircleCheck />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarFeaturesList;
