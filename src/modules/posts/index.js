import { api } from '@sygnalgroup/react-sg-modules';

export const postsModule = 'posts';

const loadingStates = {
  start: { loading: true },
  error: { loading: false },
  success: { loading: false },
};

const actions = {
  getPosts: {
    module: postsModule,
    name: 'getPosts',
    api: () => api.get('/posts'),
    params: {
      start: ['params'],
      error: ['error'],
      success: ['data'],
    },
    state: loadingStates,
  },
  addPost: {
    module: postsModule,
    name: 'addPost',
    api: (data) => api.post('/posts', data),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  editPost: {
    module: postsModule,
    name: 'editPost',
    api: (data) => api.put(`/posts/${data.id}`, data),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  removePost: {
    module: postsModule,
    name: 'removePost',
    api: (id) => api.delete(`/posts/${id}`),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
};

const posts = {
  actions,
  state: {
    loadingPosts: false,
    data: [],
  },
}

export default posts;
