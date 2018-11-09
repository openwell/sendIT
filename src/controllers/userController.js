import senditModel from '../model/parcelModel';

const parcelControler = {

  createNew(req, res) {
    if (!req.body.destination || !req.body.location || !req.body.unit_weight) {
      res.status(400).send({ message: 'All fields are required' });
    } else {
      senditModel.create(req.body);
      res.status(201).send({ message: 'New order created' });
    }
  },


};

export default parcelControler;
