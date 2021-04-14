import { makeStyles } from '@material-ui/core/';

const width = 300;
const useStyles = makeStyles({
  root: {
    width,
    height: width,
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
