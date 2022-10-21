import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants';
import { BlogContext } from './BlogProvider';
import { PostWrapper, Title } from './Styles';

const Blog = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>
          My Posts <Link to={PATHS.POST.CREATE}>+</Link>
        </h1>
        {posts.map(post => (
          <PostWrapper key={post.id}>
            <Link to={PATHS.POST.VIEW({ id: post.id })}>
              <Title>{post.title}</Title>
            </Link>
          </PostWrapper>
        ))}
      </div>
    </div>
  );
};

export default Blog;
