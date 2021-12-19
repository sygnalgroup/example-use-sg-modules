export const appModule = 'app';

const actions = {
  setTitle: {
    action: {
      success: ['title'],
    },
  },
};

const app =  {
  actions,
  state: {
    title: 'My App',
  },
}

export default app;
