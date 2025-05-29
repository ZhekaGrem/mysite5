// Component - minimal changes, responsive padding
import style from './loading.module.css';

const Loading = () => {
  return (
    <div aria-label="Loading..." role="status" className="m-32 flex items-center justify-center space-x-2">
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
