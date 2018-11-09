import bodyParser from 'body-parser';
import express from 'express';
import parcelRoute from './routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  routes
app.get('/', (req, res) => {
  res.status(200).send({
    Status: 'Sucess',
    Messge: 'Welcome to Sendit Home Page',
  });
});

parcelRoute(app);

app.all('/*', (req, res) => {
  res.status(404).send({
    Status: 'Failed',
    Messge: 'Page Not Found',
  });
});

// must be there works with request
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));


export default server;
