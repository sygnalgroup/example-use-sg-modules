// import { routerMiddleware, connectRouter } from 'connected-react-router';
import posts from './posts/index';
import app from './app/index';

const Modules = {
  posts,
  app,
};

// const storeMiddlewares = (history) => [routerMiddleware(history)];

// export {
//   // connectRouter,
//   // storeMiddlewares
// };

export default Modules;
