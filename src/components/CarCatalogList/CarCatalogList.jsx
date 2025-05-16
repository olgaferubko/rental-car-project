import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import CarCard from './CatalogCarItem/CatalogCarItem';
import LoadMore from '../LoadMore/LoadMore';
import Loader from '../Loader/Loader';
import s from './CarCatalogList.module.css';

import {
  selectAllCars,
  selectError,
  selectIsLoading
} from '../../redux/cars/selectors';


const CarCatalogList = () => {
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const topCardRef = useRef(null);

  useEffect(() => {
    if (cars.length > 12 && topCardRef.current) {
      const cardHeight = topCardRef.current.getBoundingClientRect().height;
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
    }
  }, [cars]);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong while loading cars.');
    }
  }, [error]);

  if (loading) return <Loader />;

  return (
    <div>
      <ul className={s.carsList}>
        {cars.map((car, index) => (
          <CarCard
            key={car.id}
            car={car}
            ref={index === 0 ? topCardRef : null}
          />
        ))}
      </ul>
      <LoadMore />
    </div>
  );
};

export default CarCatalogList;
