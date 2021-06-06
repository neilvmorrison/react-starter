import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  root: {
    padding: '8px 16px',
    background: 'transparent',
    color: theme.typography.color,
    textDecoration: 'none',
    borderRadius: theme.shape.radius,
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Link = ({
  external,
  color = 'secondaryq',
  href,
  className: customClassName,
  children,
}) => {
  const classes = useStyles();
  return (
    <a
      href={href}
      target={external && '_blank'}
      rel={external && 'noopener noreferrer'}
      className={clsx(classes.root, color && classes[color], customClassName)}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  external: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', null]),
  customClassName: PropTypes.string,
};

export default Link;
