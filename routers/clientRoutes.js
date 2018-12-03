const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('index', '/');
//routes.add('works', '/works');
routes.add({name: 'about', pattern: '/about/', page: '/admin/index'});
routes.add({name: 'cv', pattern: '/about/cv', page: '/admin/mycv'});
//routes.add('tac', '/works/tac');
routes.add('post');
routes.add('all');
routes.add({name: 'upload_md', pattern: '/admin/upload_md', page: '/admin/upload_md'});
