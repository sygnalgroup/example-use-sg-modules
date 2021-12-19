import { api } from '@sygnalgroup/react-sg-modules';

export const postsModule = 'posts';

const loadingStates = {
  start: { loading: true },
  error: { loading: false },
  success: { loading: false },
};

const actions = {
  getPosts: {
    api: () => api.get('/posts'),
    action: {
      error: ['error'],
      success: ['data'],
    },
    state: loadingStates,
  },
  addPost: {
    api: (data) => api.post('/posts', data),
    action: {
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  editPost: {
    api: (data) => api.put(`/posts/${data.id}`, data),
    action: {
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  removePost: {
    api: (id) => api.delete(`/posts/${id}`),
    action: {
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
};

const posts =  {
  actions,
  state: {
    loadingPosts: false,
    data: [],
  },
}

export default posts;
