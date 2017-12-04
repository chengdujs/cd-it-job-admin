import { asyncComponent } from 'react-async-component';

function dynamic(compPromise) {
  return asyncComponent({ resolve: () => compPromise });
}

const Login = dynamic(import(/* webpackChunkName: "main" */'./login/Login'));
const MainLayout = dynamic(import(/* webpackChunkName: "main" */'./layout/MainLayout'));
const NotFound = dynamic(import(/* webpackChunkName: "main" */'./notfound/NotFound'));
const Home = dynamic(import(/* webpackChunkName: "pages" */'./home/Home'));
const Settings = dynamic(import(/* webpackChunkName: "pages" */'./settings/Settings'));

export {
  Login,
  MainLayout,
  Home,
  NotFound,
  Settings
};
