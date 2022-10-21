import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../constants';
import { BlogContext } from './BlogProvider';
import { Button, Input, PostWrapper, TextArea, Title } from './Styles';

const NewPost = () => {
  const { createPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  return (
    <PostWrapper>
      <Link to={PATHS.HOME}>All Posts</Link>
      <Title>
        <Input placeholder="Title..." value={title} onChange={e => setTitle(e.target.value)} />
      </Title>
      <TextArea value={body} onChange={e => setBody(e.target.value)} />
      <Button
        onClick={() => {
          createPost({ title, body });
          setTitle('');
          setBody('');
          navigate(PATHS.HOME);
        }}
      >
        Submit
      </Button>
    </PostWrapper>
  );
};

export default NewPost;
