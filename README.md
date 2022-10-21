### Routing

If you recall our mini Blog app, the `Blog` component render the selected `Post` if one had been selected (state variable kept in the `BlogContext`) or the list of posts otherwise. This worked well, but has some limitations:

1. we need to keep track of the selected post
2. we have to check the application state to choose what "page" to render
3. we cannot link to a post page

One could say that all of these have solutions. First, keeping track of a selected post is not complicated with a simple state variable. Second, the conditional is just a simple `if` statement. Third, we could add an effect that encodes the application state and stores it in the URL. When starting the application again, if there's state encoded in the URL we can pre-load it into our context and pick up where we left off. 

However, even though it can be done as we have shown in the simple blog app, as the application grows it becomes tedious and error prone. A better approach is to use routing so we will leverage [React Router](https://reactrouter.com/en/main) to do so.

## React Router

The easiest way to learn how to use this is with an example so lets refactor our Blog to user routing. First, we define our routes:

