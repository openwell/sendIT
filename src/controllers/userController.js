import senditModel from '../model/parcelModel';

const parcelControler = {
   getAll(req, res) {
     const result = senditModel.findAll();
     res.status(200).send({
       status: 'Success',
       message: result,
     });
    
   },

  createNew(req, res) {
    if (!req.body.destination || !req.body.location || !req.body.unit_weight) {
      res.status(400).send({ message: 'All fields are Required' });
    } else {
      senditModel.create(req.body);
      res.status(201).send({ message: 'New Parcel order Created' });
    }
  },

  getOne(req, res) {
    const getone = senditModel.findOne(req.params.parcelid);
    if (getone === undefined) {
      res.status(400).send({
        status: 'Failed',
        message: 'Parcel Order id not found',
      });
    } else {
      res.status(200).send({
        status: 'Success',
        message: getone,
      });
    }
  },

  cancel(req, res) {
    const del = senditModel.cancel(req.params.parcelid);
    if (del === false) {
      res.status(400).send({
        message: 'Parcel Order id not found'
      });
    } else {
      res.status(200).send({
        message: 'Parcel Order Canceled'
      });
    }
  },

    get_user_parcel(req, res) {
      const result = senditModel.findUserparcel(req.params.userid);
      if (result.length === 0) {
        res.status(400).send({
          status: 'Failed',
          message: 'User Parcel not found',
        });
      } else {
        res.status(200).send({
          status: 'Success',
          message: result,
        });
      }
    },


};

export default parcelControler;
