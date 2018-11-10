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
    '/api/v1/parcels/:parcelid',
    parcelControler.getOne,
  );

  app.put(
    '/api/v1/parcels/:parcelid/cancel',
    parcelControler.cancel,
  );

    app.get(
      '/api/v1/user/:userid/parcels',
      parcelControler.get_user_parcel,
    );
};


export default parcelRoute;
