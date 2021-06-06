import { createUseStyles } from 'react-jss';
import Typography from '../Typography';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    borderBottom: '1px solid #dfdfdf',
    padding: `0px ${theme.spacing(2)}px`,
  },
  link: {
    background: theme.palette.secondary.main,
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#000',
    borderRadius: theme.shape.radius,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography component='h1'>React Starter</Typography>
      <nav>
        <a
          className={classes.link}
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Repo
        </a>
      </nav>
    </header>
  );
};

export default Header;
