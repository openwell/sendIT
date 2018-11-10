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

  delete(req, res) {
    const del = senditModel.delete(req.params.parcelid);
    if (del === false) {
      res.status(400).send({
        message: 'Parcel Order id not found'
      });
    } else {
      res.status(200).send({
        message: 'Parcel Order deleted'
      });
    }
  },


};

export default parcelControler;
