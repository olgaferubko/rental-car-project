import { FaRegCircleCheck } from "react-icons/fa6";
import s from './CarFeaturesList.module.css';

const CarFeaturesList = ({ title, items }) => {
    return (
        <div className={s.listContainer}>
            <h3 className={s.title}>{title}</h3>
            <ul className={s.list}>
                {items.map((text, index) => (
                    <li className={s.item} key={index}>
                        <FaRegCircleCheck />
                        <p className={s.text}>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarFeaturesList;
