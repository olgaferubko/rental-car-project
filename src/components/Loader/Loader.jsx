import { InfinitySpin } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.spinnerContainer}>
        <InfinitySpin 
          width="200"
          color="#3470FF"
        />
      </div>
    </div>
  );
};

export default Loader;
