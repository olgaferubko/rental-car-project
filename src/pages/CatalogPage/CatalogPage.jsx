import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import Header from "../../components/Header/Header";
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import CarCatalogList from "../../components/CarCatalogList/CarCatalogList";

import { selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars, getCarsBrands } from '../../redux/cars/operations';
import { selectFilters } from '../../redux/filters/selectors';
import { resetPage } from '../../redux/cars/slice';
import s from "./CatalogPage.module.css";


const CatalogPage = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);
    const filters = useSelector(selectFilters);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(
            getAllCars({
                brand: filters.brand || undefined,
                rentalPrice: filters.price || undefined,
                minMileage: filters.mileageFrom || undefined,
                maxMileage: filters.mileageTo || undefined,
                page: currentPage,
            })
        );
    }, [dispatch, filters, currentPage]);

    useEffect(() => {
        dispatch(resetPage());
    }, [dispatch, filters]);

    useEffect(() => {
        dispatch(getCarsBrands());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

  return (
    <div>
      <Header />
      <FilterPanel />
      <div className={s.wrapper}>
      <CarCatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;