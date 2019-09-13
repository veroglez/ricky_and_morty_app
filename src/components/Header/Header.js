import { string } from 'prop-types';
import React from 'react';
import { Image } from '..';
import scss from './Header.module.scss';

const Header = ({ logo }) => (
  <header className={scss.header}>
    {logo && <Image styles={scss.logo} image={logo} />}
  </header>
);

Header.propTypes = {
  logo: string,
};

Header.defaultProps = {
  logo: undefined,
};

export default Header;