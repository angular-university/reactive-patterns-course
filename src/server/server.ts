

import * as express from 'express';
import {Application} from 'express';
import {newsletterRoute} from "./newsletterRoute";
import {loginRoute} from "./loginRoute";
import {courseRoute} from "./courseRoute";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());


console.log('Starting server ...');


app.route('/api/newsletter').post(newsletterRoute);
app.route('/api/login').post(loginRoute);

app.route('/api/courses/:id').get(courseRoute);

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});


