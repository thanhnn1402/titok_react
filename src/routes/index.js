import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', compomnent: Home },
    { path: '/following', compomnent: Following },
    { path: '/upload', compomnent: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
