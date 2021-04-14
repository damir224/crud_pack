import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  pos: {
    display: 'flex',
    justifyItems: 'center',
    position: 'static',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default useStyles;
