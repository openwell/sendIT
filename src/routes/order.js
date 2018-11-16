import orderControl from '../controllers/parcel';
import Middleware from '../helpers/middleware';
import express from 'express';
const router = express.Router();

  router.get(
    '/parcels',
    orderControl.orders,
  );

  router.post(
    '/parcels', Middleware,
    orderControl.newOrder,
  );

  router.get(
    '/parcels/:parcelId',
    orderControl.order,
  );

  router.put(
    '/parcels/:parcelId/cancel',
    orderControl.cancel,
  );

    router.get(
      '/user/:userId/parcels',
      orderControl.orderById,
    );



export default router;
