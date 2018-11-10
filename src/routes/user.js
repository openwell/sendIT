import parcelControler from '../controllers/userController';


const parcelRoute = (app) => {
  app.get(
    '/api/v1/parcels',
    parcelControler.getAll,
  );

  app.post(
    '/api/v1/parcels',
    parcelControler.createNew,
  );

  app.get(
    '/api/v1/parcels/:id',
    parcelControler.getOne,
  );
};


export default parcelRoute;
