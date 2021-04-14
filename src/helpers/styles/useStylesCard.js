import { makeStyles } from '@material-ui/core';

const width = 300;

const useStyles = makeStyles({
  root: {
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    width,
    height: width + 50,
  },
  title: {
    marginTop: '2em',
    borderColor: 'red',
    width: '30ch',
  },
  description: {
    marginTop: '1em',
    height: width - 150,
  },
  buttonGroup: { display: 'flex', justifyContent: 'space-between' },
  button: { marginTop: '2em' },
});

export default useStyles;
