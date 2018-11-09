import parcelControler from '../controllers/userController';


const parcelRoute = (app) => {

  app.post(
    '/api/v1/parcels',
    parcelControler.createNew,
  );
};


export default parcelRoute;
