import { FaRegCalendarAlt, FaCar, FaGasPump, FaCog } from 'react-icons/fa';

import s from '../CarFeaturesList/CarFeaturesList.module.css';

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
    const formatType = type => type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    const specs = [
        { icon: <FaRegCalendarAlt />, label: 'Year', value: year },
        { icon: <FaCar />, label: 'Type', value: formatType(type) },
        { icon: <FaGasPump />, label: 'Fuel Consumption', value: `${fuelConsumption} L/100km` },
        { icon: <FaCog />, label: 'Engine Size', value: `${engineSize}` },
    ];

    return (
        <div className={s.listContainer}>
            <h3 className={s.title}>Car Specifications:</h3>
            <ul className={s.list}>
                {specs.map(({ icon, label, value }) => (
                    <li key={label} className={s.item}>
                        {icon}
                        <p className={s.text}>
                            {label}: {value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarSpecifications;