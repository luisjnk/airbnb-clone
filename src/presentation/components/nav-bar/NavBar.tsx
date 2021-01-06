import React from 'react';

import AirbnbLogo from './Logo/Logo';

import Styles from './NavBar.scss';



function NavBar() {
  return (
    <div className={Styles.header}>
      <div className={Styles.menuWrapper}>
        <div className={Styles.menuLogo}>
          <AirbnbLogo />
        </div>

        <div className="pre-search-container">
        </div>
      </div>
    </div>
  );
}

export default NavBar;
