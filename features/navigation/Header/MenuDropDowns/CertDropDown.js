import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuDropDownWrapper from '../MenuDropDownWrapper';
import { setMenuItem } from '../../navigationSlice';

const CertDropDown = () => {
  const { menuItemOpen, menuItem } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  return (
    <>
      {menuItemOpen && menuItem === 'certs' && (
        <MenuDropDownWrapper>
          <div className='grid grid-cols-3 h-full overflow-hidden gap-10'>
            <div>Cert Menu</div>
            <div>Cert Menu</div>
            <div>Cert Menu</div>
          </div>
        </MenuDropDownWrapper>
      )}
      {menuItemOpen && menuItem === 'certs' && (
        <div
          className='fixed left-0 right-0 top-0 bottom-0 bg-slate-800/80 z-10 backdrop-blur-sm'
          onClick={() => dispatch(setMenuItem())}
        ></div>
      )}
    </>
  );
};

export default CertDropDown;
