export const Paths = {
  ROOT: '/',
  HOME: '/',
  POSTS: '/posts',
  DETAIL: '/',
  POST: (id: any = null) => `/post/${id || ':id'}`,
  LISTS: '/lists',
  LIST: (id: any = null) => `/list/${id || ':id'}`,
  WRITE: '/write'
}
