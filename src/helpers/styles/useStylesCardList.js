import { makeStyles } from '@material-ui/core/';

const width = 300;
const useStyles = makeStyles({
  root: {
    marginTop: '5em',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: (width * 4) - 100,
  },
  add: {
    width,
    height: width,
    margin: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default useStyles;
