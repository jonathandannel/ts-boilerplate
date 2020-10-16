import { makeStyles } from '@material-ui/core';

export const headerStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: { padding: '0.5em' },
  user: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingRight: '0.5em',
  },
  centerVert: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  username: {
    font: '16px Lexend Deca',
  },
}));
