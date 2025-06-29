import Lottie from 'lottie-react';
import spinner from '../../assets/lottis/spinner.json'

const Spinner = () => {
  return (
    <div className='mt-20 md:mt-30'>
      <Lottie animationData={spinner} className="w-full h-[180px] md:h-[220px]" />
    </div>
  );
};

export default Spinner;