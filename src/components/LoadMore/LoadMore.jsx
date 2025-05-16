import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectPage, selectTotalPages } from '../../redux/cars/selectors';
import { incrementPage } from '../../redux/cars/slice';
import s from './LoadMore.module.css';

const LoadMore = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectAllCars);
    const currentPage = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    const loadMore = () => {
        if (currentPage < totalPages) {
            dispatch(incrementPage());
        }
    };

    const isLoadMore = cars.length > 0 && currentPage < totalPages && (cars.length >= 12 || currentPage === 1);

    return (
        <>
            {isLoadMore && (
                <button onClick={loadMore} className={s.loadMoreBtn}>
                    Load more
                </button>
            )}
        </>
    );
};

export default LoadMore;