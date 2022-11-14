import React from 'react';
import RotatingCaret from '../../../../components/RotatingCaret';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuItem, setSelectedNav } from '../../navigationSlice';

const CertNav = () => {
  const dispatch = useDispatch();
  const { menuItemOpen, menuItem } = useSelector((state) => state.nav);

  const menuItemHandler = () => {
    dispatch(setSelectedNav('certs'));
    dispatch(setMenuItem());
  };
  return (
    <div className='h-full'>
      <div
        className='flex gap-0.5 relative h-full items-center'
        onClick={menuItemHandler}
      >
        <div>Certifications</div>
        <RotatingCaret
          styling='h-4 w-4 fill-white'
          open={menuItemOpen && menuItem === 'certs'}
        />
        <div
          className={`${
            menuItemOpen && menuItem === 'certs'
              ? 'border-b-8 border-b-clemson'
              : ''
          } absolute left-0 right-0 bottom-0`}
        ></div>
      </div>
    </div>
  );
};

export default CertNav;
