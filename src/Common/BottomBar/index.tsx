import React from 'react';
import { AppBar } from '@material-ui/core';
import { bottomBarStyles } from './styles';

interface BottomBarProps {
  isMobile: boolean;
  progress: number;
  setNavigation: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({
  isMobile,
  progress,
  setNavigation,
}) => {
  const styles = bottomBarStyles();
  return <AppBar position='static' className={styles.root}></AppBar>;
};

export default BottomBar;
