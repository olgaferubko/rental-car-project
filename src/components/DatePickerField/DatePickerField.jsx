import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import s from '../BookingForm/BookingForm.module.css';
import css from './DatePickerField.module.css';

import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
registerLocale('en', enGB);


const DatePickerField = forwardRef(({ selected, onChange }, ref) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            className={s.input}
            locale="en"
            shouldCloseOnSelect={true}
            wrapperClassName={css.datePickerWrapper}
            minDate={new Date()}
            formatWeekDay={day => day.toUpperCase().slice(0, 3)}
            dateFormat="d MMMM, yyyy"
            placeholderText="Booking date*"
            ref={ref}
        />
    );
});

export default DatePickerField;
