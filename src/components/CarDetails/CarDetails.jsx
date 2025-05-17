import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import CarAbout from '../CarAbout/CarAbout';
import BookingForm from '../BookingForm/BookingForm';
import CarFeaturesList from '../CarFeaturesList/CarFeaturesList';
import CarSpecifications from '../CarSpecifications/CarSpecifications';
import { selectCarDetails, selectIsLoading } from '../../redux/cars/selectors';
import { getCarsDetails } from '../../redux/cars/operations';
import s from './CarDetails.module.css';

const CarDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector(selectCarDetails);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getCarsDetails(id));
    }, [dispatch, id]);

    if (isLoading || !car) {
        return <Loader />;
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperImgForm}>
                <img className={s.image} src={car.img} alt={car.model} />
                <BookingForm />
            </div>
            <div>
                <CarAbout car={car} />
                <div className={s.infoWrapper}>
                    <CarFeaturesList title="Rental Conditions:" items={car.rentalConditions} />
                    <CarSpecifications {...car} />
                    <CarFeaturesList title="Accessories and Functionalities:" items={[...car.accessories, ...car.functionalities]} />
                </div>
            </div>
        </div>
    );
};

export default CarDetails;