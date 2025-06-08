import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import NumericFormatInput from '../NumericFormatInput/NumericFormatInput';
import { selectCarsBrands } from '../../redux/cars/selectors';
import { setFilters, resetFilters } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';
import { customStylesBrands } from './customStylesBrands';
import { customStylesPrices } from './customStylesPrices';
import s from './FilterPanel.module.css';

const FilterPanel = () => {
    const dispatch = useDispatch();
    const brands = useSelector(selectCarsBrands);
    const filters = useSelector(selectFilters);

    const { control, handleSubmit, watch, reset } = useForm({
        defaultValues: filters,
    });

    const handleClear = () => {
        reset();
        dispatch(resetFilters());
    };

    const price = watch('price');
    const formValues = watch();
    const isDisabled = !formValues.brand && !formValues.price && !formValues.mileageFrom && !formValues.mileageTo;
    const hasFilters = formValues.brand || formValues.price || formValues.mileageFrom || formValues.mileageTo;

    const brandOptions = brands?.map(brand => ({ label: brand, value: brand })) || [];
    const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100].map(price => ({
        label: price.toString(),
        value: price,
    }));

    const onSubmit = data => {
        dispatch(setFilters(data));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.filtersForm}>
            <div className={s.filterGroup}>
                <label className={s.label}>Car brand</label>
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={brandOptions}
                            placeholder="Choose a brand"
                            styles={customStylesBrands}
                            onChange={selected => field.onChange(selected?.value || null)}
                            value={brandOptions.find(option => option.value === field.value) || null}
                        />
                    )}
                />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Price / 1 hour</label>
                <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={priceOptions}
                            styles={customStylesPrices}
                            isClearable
                            getOptionLabel={option => option.label}
                            formatOptionLabel={option => (price ? `To $${option.value}` : option.label)}
                            value={priceOptions.find(option => option.value === field.value) || ''}
                            placeholder="Choose a price"
                            onChange={selected => field.onChange(selected?.value || '')}
                        />
                    )}
                />
            </div>
            <div className={s.filterGroup}>
                <label className={s.label}>Car mileage / km</label>
                <div className={s.mileageInputs}>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>From</span>
                        <Controller
                            name="mileageFrom"
                            control={control}
                            render={({ field }) => (
                                <NumericFormatInput
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    thousandSeparator
                                    className={s.input}
                                    onValueChange={({ floatValue }) => {
                                        field.onChange(floatValue ?? null);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className={s.mileageInputGroup}>
                        <span className={s.mileageLabel}>To</span>
                        <Controller
                            name="mileageTo"
                            control={control}
                            render={({ field }) => (
                                <NumericFormatInput
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    thousandSeparator
                                    className={s.input}
                                    onValueChange={({ floatValue }) => {
                                        field.onChange(floatValue ?? null);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className={s.btnContainer}>
                <button type="submit" className={s.button} disabled={isDisabled}>
                    Search
                </button>
                {hasFilters && (
                    <button type="button" className={s.button} onClick={handleClear}>
                        Clear
                    </button>
                )}
            </div>
        </form>
    );
};

export default FilterPanel;