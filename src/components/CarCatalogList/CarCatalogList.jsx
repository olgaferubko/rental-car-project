import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import CarCard from '../CatalogCarItem/CatalogCarItem';
import LoadMore from '../LoadMore/LoadMore';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FilterPanel from '../FilterPanel/FilterPanel';
import s from './CarCatalogList.module.css';

import {
  selectAllCars,
  selectError,
  selectIsLoading
} from '../../redux/cars/selectors';

const CarCatalogList = () => {
    const cars = useSelector(selectAllCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const firstCardRef = useRef(null);

  useEffect(() => {
    if (cars.length > 12 && firstCardRef.current) {
      const { height: cardHeight } = firstCardRef.current.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  }, [cars]);

      if (isLoading) return <Loader />;

  
      if (error) {
          return <ErrorMessage message="Something went wrong while loading cars, please reload the page" />;
      }

      if (cars.length === 0) {
          return <ErrorMessage message="Oops, no cars found" />;
      }

  return (
    <div className={s.wrapper}>
      <FilterPanel />
      <ul className={s.carsList}>
        {cars.map((car, idx) => (
            <CarCard key={`${car.id + idx}`} car={car} ref={idx === 0 ? firstCardRef : null} />
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default CarCatalogList;
