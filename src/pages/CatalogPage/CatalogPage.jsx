import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import CarCatalog from "../../components/CarCatalog/CarCatalog";
import css from "./CatalogPage.module.css";

import { selectError, selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars } from '../../redux/cars/operations;'


const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllCars(currentPage));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <CarCatalog />
    </div>
  );
};

export default CatalogPage;