export const appModule = 'app';

const actions = {
  setTitle: {
    module: appModule,
    name: 'setTitle',
    action: {
      success: ['title'],
    },
  },
};

const app = {
  actions,
  state: {
    title: 'My App',
  },
}

export default app;
