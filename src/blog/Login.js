import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlogContext } from './BlogProvider';
import { Button, Input, PostWrapper } from './Styles';

const Login = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const { setUser } = useContext(BlogContext);
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <PostWrapper>
      <Input ref={inputRef} placeholder="Name..." value={name} onChange={e => setName(e.target.value)} />
      <Button
        onClick={() => {
          setUser({
            name,
          });

          navigate(from, { replace: true });
        }}
      >
        Log In
      </Button>
    </PostWrapper>
  );
};

export default Login;
