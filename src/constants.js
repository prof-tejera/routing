export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  POST: {
    CREATE: '/post/create',
    VIEW: ({ id } = { id: ':id' }) => `/post/${id}`,
  },
};
