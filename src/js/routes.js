
import HomePage from '../pages/home.f7';
import InputPage from '../pages/create.f7';
import EditPage from '../pages/update.f7';


var routes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/input/',
    component: InputPage,
  },

  {
    path: '/edit/:id/',
    component: EditPage,
  },

];

export default routes;
