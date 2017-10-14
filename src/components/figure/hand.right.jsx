import React from 'react';

const RightHand = ({ isMoving }) => (
  <g>
    <circle className='fill-dark' cx='678.7' cy='3134.1' r='134.6' />
    <path className={`fill-light${isMoving ? ' fill-moving' : ''}`} d='M841.8,2978.8l27.1-152l-4.6-2.3c-1.7-0.9-43.1-21.1-126.9-31.1c-83.9-9.9-118.4-2.3-119.8-1.9l-4.5,1l-21.5,133.6c-81.1,34.1-138.2,114.3-138.2,207.6c0,65.5,28.5,127.7,78.3,170.5c1.9,1.6,4.5,2.1,6.8,1.2c2.3-0.8,4-2.9,4.4-5.3l15.8-96.6c0.2-1.5,0-3-0.7-4.4c-10.9-20-16.6-42.6-16.6-65.5c0-75.7,61.6-137.2,137.2-137.2s137.2,61.6,137.2,137.2c0,38.3-15.5,73.9-43.7,100.2c-1.1,1-1.8,2.4-2.1,3.9l-15.9,97c-0.4,2.4,0.5,4.9,2.5,6.4c1.2,1,2.7,1.5,4.3,1.5c0.9,0,1.7-0.2,2.6-0.5c85.2-34.7,140.3-116.6,140.3-208.5C903.8,3073.8,880.2,3019.2,841.8,2978.8z' />
    <path className='fill-light' d='M841.8,2978.8l27.1-152l-4.6-2.3c-1.7-0.9-43.1-21.1-126.9-31.1c-83.9-9.9-118.4-2.3-119.8-1.9l-4.5,1l-21.5,133.6c-81.1,34.1-138.2,114.3-138.2,207.6c0,65.5,28.5,127.7,78.3,170.5c1.9,1.6,4.5,2.1,6.8,1.2c2.3-0.8,4-2.9,4.4-5.3l15.8-96.6c0.2-1.5,0-3-0.7-4.4c-10.9-20-16.6-42.6-16.6-65.5c0-75.7,61.6-137.2,137.2-137.2s137.2,61.6,137.2,137.2c0,38.3-15.5,73.9-43.7,100.2c-1.1,1-1.8,2.4-2.1,3.9l-15.9,97c-0.4,2.4,0.5,4.9,2.5,6.4c1.2,1,2.7,1.5,4.3,1.5c0.9,0,1.7-0.2,2.6-0.5c85.2-34.7,140.3-116.6,140.3-208.5C903.8,3073.8,880.2,3019.2,841.8,2978.8z' />
    <path className={isMoving ? 'fill-yellow' : 'fill-dark'} d='M625.1,2804.1c11.5-1.6,46.1-4.7,110.7,2.9c65.8,7.8,105.1,22.3,117.8,27.7L830,2967.2c-35.8-32.6-80.5-52.5-128.4-57.3c0,0,0,0-0.1,0c-1.7-0.2-3.4-0.3-5.2-0.5c-0.3,0-0.5,0-0.8-0.1c-1.5-0.1-3-0.2-4.5-0.3c-0.4,0-0.8,0-1.2-0.1c-1.4-0.1-2.9-0.1-4.3-0.2c-0.5,0-0.9,0-1.4,0c-1.9,0-3.7-0.1-5.6-0.1c-1.8,0-3.5,0-5.3,0.1c-0.6,0-1.1,0-1.7,0.1c-1.2,0-2.5,0.1-3.7,0.1c-0.6,0-1.2,0.1-1.9,0.1c-1.2,0.1-2.4,0.1-3.6,0.2c-0.6,0-1.2,0.1-1.7,0.1c-1.5,0.1-3.1,0.3-4.6,0.4c-0.3,0-0.6,0.1-0.9,0.1c-1.6,0.2-3.2,0.3-4.8,0.5c-0.7,0.1-1.4,0.2-2.1,0.3c-1,0.1-2,0.3-2.9,0.4c-0.8,0.1-1.7,0.3-2.5,0.4c-0.8,0.1-1.6,0.3-2.5,0.4c-0.9,0.2-1.8,0.3-2.7,0.5c-0.6,0.1-1.2,0.2-1.9,0.4c-3.9,0.8-7.8,1.6-11.7,2.6c-0.1,0-0.3,0.1-0.4,0.1c-1.4,0.3-2.7,0.7-4.1,1.1c-0.1,0-0.3,0.1-0.4,0.1c-4.4,1.2-8.7,2.5-13,4L625.1,2804.1z' />
    <path className={isMoving ? 'fill-yellow' : 'fill-dark'} d='M769.7,3324.7l13.5-82.3c29.9-28.7,46.3-67.2,46.3-108.6c0-83.2-67.7-150.8-150.8-150.8s-150.8,67.7-150.8,150.8c0,24.3,5.9,48.5,17.1,69.9l-13.4,81.9c-41.1-39.8-64.4-94.4-64.4-151.8c0-88.8,55.1-165,132.9-196.3l0.3-0.1c6.2-2.5,12.5-4.7,18.9-6.5c0,0,0.1,0,0.1,0c1.4-0.4,2.9-0.8,4.3-1.2c0.2-0.1,0.5-0.1,0.7-0.2c1.3-0.3,2.6-0.7,3.9-1c0.4-0.1,0.8-0.2,1.2-0.3c1.1-0.3,2.3-0.5,3.5-0.8c0.6-0.1,1.1-0.2,1.7-0.4c1-0.2,2.1-0.4,3.1-0.6c0.7-0.1,1.4-0.3,2.1-0.4c0.9-0.2,1.9-0.3,2.8-0.5c0.8-0.1,1.6-0.3,2.4-0.4c0.9-0.1,1.7-0.3,2.6-0.4c0.9-0.1,1.8-0.3,2.7-0.4c0.8-0.1,1.6-0.2,2.4-0.3c1-0.1,1.9-0.2,2.9-0.3c0.8-0.1,1.5-0.2,2.3-0.2c1-0.1,2-0.2,3-0.3c0.7-0.1,1.4-0.1,2.1-0.2c1.1-0.1,2.1-0.1,3.2-0.2c0.7,0,1.3-0.1,2-0.1c1.2-0.1,2.4-0.1,3.6-0.1c0.6,0,1.1,0,1.7-0.1c1.7,0,3.5-0.1,5.3-0.1c1.8,0,3.6,0,5.4,0.1c0.2,0,0.4,0,0.6,0c113.8,3.2,205.5,96.8,205.5,211.4C890.1,3216,843.3,3289.7,769.7,3324.7z' />
  </g>
);

export default RightHand;