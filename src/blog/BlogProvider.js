import React, { useState } from 'react';
import { usePersistedState } from '../hooks';
import { makeId } from '../util';

export const BlogContext = React.createContext({});

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = usePersistedState('posts', []);
  const [user, setUser] = useState(null);

  return (
    <BlogContext.Provider
      value={{
        user,
        setUser,
        posts,
        createPost: ({ title, body }) => {
          const id = makeId();
          setPosts([...posts, { id, title, body }]);
        },
        retrievePost: ({ postId }) => posts.find(post => `${post.id}` === `${postId}`),
        updatePost: post => {
          const updatedPosts = posts.map(p => (p.id === post.id ? post : p));
          setPosts(updatedPosts);
        },
        deletePost: ({ postId }) => {
          setPosts(posts.filter(p => p.id !== postId));
        },
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
