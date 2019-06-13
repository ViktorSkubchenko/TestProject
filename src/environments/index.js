import dev from './environment.dev';
import prod from './environment.prod';

export default process.env.NODE_ENV === 'development' ? dev : prod;
