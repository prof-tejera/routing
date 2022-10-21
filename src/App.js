import { useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Secured from './auth/Secured';

import Blog from './blog/Blog';
import BlogProvider, { BlogContext } from './blog/BlogProvider';
import Login from './blog/Login';
import NewPost from './blog/NewPost';
import Post from './blog/Post';
import { BlogStyle, Button } from './blog/Styles';
import { PATHS } from './constants';

const Logout = () => {
  const { user, setUser } = useContext(BlogContext);
  const navigate = useNavigate();

  return (
    <Secured>
      <div style={{ position: 'absolute', top: 0, right: 20 }}>
        Hi {user?.name}
        <Button
          style={{ marginLeft: 10 }}
          onClick={() => {
            setUser(null);
            navigate(PATHS.HOME);
          }}
        >
          Log Out
        </Button>
      </div>
    </Secured>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <BlogProvider>
        <BlogStyle />
        <Logout />
        <Routes>
          <Route path={PATHS.HOME} element={<Blog />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route
            path={PATHS.POST.CREATE}
            element={
              <Secured redirect>
                <NewPost />
              </Secured>
            }
          />
          <Route
            path={PATHS.POST.VIEW()}
            element={
              <Secured redirect>
                <Post />
              </Secured>
            }
          />
        </Routes>
      </BlogProvider>
    </BrowserRouter>
  );
};

export default App;

// TODO
// Authentication
// - standard
// - AWS Cognito
// - auth0
