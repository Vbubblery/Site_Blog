const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('index', '/');
//routes.add('works', '/works');
routes.add('about');
//routes.add('tac', '/works/tac');
routes.add('post');
routes.add({name: 'upload_md', pattern: '/admin/upload_md', page: '/admin/upload_md'});
