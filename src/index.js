import logger from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
import parcelRoute from './routes/order';

const app = express();
app.use(logger('common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1',parcelRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    Status: 'Success',
    Message: 'Welcome to Sendit Home Page',
  });
});


app.all('/*', (req, res) => {
  res.status(404).json({
    Status: 'Failed',
    Messge: 'Page Not Found',
  });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));


export default server;
