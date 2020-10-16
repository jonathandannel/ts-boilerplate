import React from 'react';
import { mainStyles } from './styles';
import { User } from '../../Services/types';

interface MainProps {
  progress: number;
  isMobile: boolean;
  loading: boolean;
  user: User | null;
}

const Main: React.FC<MainProps> = ({ progress, isMobile, loading, user }) => {
  const styles = mainStyles();
  return <div className={styles.root}></div>;
};

export default Main;
