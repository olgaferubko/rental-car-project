import { forwardRef } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import s from './CatalogCarItem.module.css';

const CarCard = forwardRef(({ car }, ref) => {
  const {
    id,
    brand,
    model,
    year,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    address
  } = car;

  const location = address?.split(', ').slice(1).join(' | ');

  return (
    <li className={s.card} ref={ref}>
      <div>
        <img src={img} alt={`${brand} ${model}`} className={s.image} />
        <button type="button" className={s.favBtn}>
          <IoIosHeartEmpty className={s.disabled} />
        </button>
      </div>

      <div className={s.header}>
        <h3 className={s.name}>
          {brand} <span className={s.spanModel}>{model}</span>, {year}
        </h3>
        <h3 className={s.name}>${rentalPrice}</h3>
      </div>

      <div className={s.details}>
        <span>{location} | </span>
        <span>{rentalCompany} | </span>
        <div className={s.typeMileage}>
          <span >{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} | </span>
          <span>{mileage.toLocaleString('uk-UA')} km</span>
        </div>
      </div>

      <Link className={s.readMore} to={`/catalog/${id}`}>
        Read more
      </Link>
    </li>
  );
});

export default CarCard;
