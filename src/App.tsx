import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, setLoading } from './Ducks/ducksApp';
import { appRootStyles } from './styles';

import Header from './Common/Header';
import BottomBar from './Common/BottomBar';
import Main from './Scenes/Main';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user, isMobile, loading } = useSelector(appSelector);
  const styles = appRootStyles();

  // Test that sagas are properly working
  useEffect(() => {
    dispatch(setLoading(true));
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Header user={(!!user && user) || null} isMobile={isMobile} />
      <Main
        user={(!!user && user) || null}
        isMobile={isMobile}
        loading={loading}
        progress={0}
      />
      <BottomBar setNavigation={() => null} isMobile={isMobile} progress={0} />
    </div>
  );
};
export default App;
