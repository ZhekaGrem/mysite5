import React from 'react';
import style from '../loading.module.css';

const Page = () => {
  return (
    <div aria-label="Loading..." role="status" className="flex items-center justify-center space-x-2 p-80">
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
export default Page;
