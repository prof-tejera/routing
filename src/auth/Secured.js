import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BlogContext } from '../blog/BlogProvider';
import { PATHS } from '../constants';

const Secured = ({ children, redirect }) => {
  const { user } = useContext(BlogContext);
  const location = useLocation();

  if (!user) {
    if (redirect) {
      return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
    } else {
      return null;
    }
  }

  return children;
};

export default Secured;
