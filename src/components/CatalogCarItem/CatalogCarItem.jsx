import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import s from './CatalogCarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

import { toggleFavourite } from '../../redux/favourites/slice';
import { selectFavourites } from '../../redux/favourites/selectors';


const CarCard = forwardRef(({ car }, ref) => {
    const favourites = useSelector(selectFavourites);
    const dispatch = useDispatch();

    const isFavourite = favourites.some(fav => fav.id === car.id);

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

  const handleFavoriteClick = () => {
    dispatch(toggleFavourite(car));
  };


  const location = address?.split(', ').slice(1).join(' | ');

  return (
    <li className={s.card} ref={ref}>
      <div className={s.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={s.image} />

        <button type="button" className={s.favBtn} onClick={handleFavoriteClick}>
          {isFavourite ? (
            <IoIosHeart className={s.heartIconActive} />
          ) : (
            <IoIosHeartEmpty className={s.heartIcon} />
          )}
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
          <span>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} | </span>
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
