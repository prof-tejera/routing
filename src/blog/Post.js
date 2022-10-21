import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../constants';
import { BlogContext } from './BlogProvider';
import { Body, Input, PostWrapper, Title, TextArea, Button } from './Styles';

const InnerPost = ({ post }) => {
  const { updatePost, deletePost } = useContext(BlogContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: post.title,
    body: post.body,
  });

  useEffect(() => {
    updatePost({
      ...post,
      ...values,
    });
  }, [values]);

  return (
    <PostWrapper>
      <Link to={PATHS.HOME}>All Posts</Link>
      <Title>
        <Input
          value={values.title}
          onChange={e => {
            setValues(v => ({ ...v, title: e.target.value }));
          }}
        />
      </Title>
      <Body>
        <TextArea
          value={values.body}
          onChange={e => {
            setValues(v => ({ ...v, body: e.target.value }));
          }}
        />
      </Body>
      <Button
        danger
        onClick={() => {
          if (window.confirm('Are you sure?')) {
            deletePost({ postId: post.id });
            navigate(PATHS.HOME);
          }
        }}
      >
        Delete
      </Button>
    </PostWrapper>
  );
};

const Post = () => {
  const { id } = useParams();
  const { retrievePost } = useContext(BlogContext);
  const post = retrievePost({ postId: id });

  if (!post) return <div>Not Found</div>;

  return <InnerPost post={post} />;
};

export default Post;
