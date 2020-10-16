import React from 'react';
import { IconButton } from '@material-ui/core';
import { headerStyles } from './styles';
import { User } from '../../Services/types';

const Logo = require('../../resources/images/companyName@2x.png');
const UserIcon = require('../../resources/images/userIcon@2x.png');

interface HeaderProps {
  user: User | null;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, isMobile }) => {
  const styles = headerStyles();
  return (
    <div className={styles.root}>
      <img className={styles.logo} src={Logo} />
      <div className={styles.user}>
        <IconButton>
          <img src={UserIcon} />
        </IconButton>
        <div className={styles.centerVert}>
          <p className={styles.username}>Hyeji</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
