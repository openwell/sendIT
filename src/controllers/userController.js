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
      res.status(400).send({ message: 'All fields are required' });
    } else {
      senditModel.create(req.body);
      res.status(201).send({ message: 'New order created' });
    }
  },

  getOne(req, res) {
    const getone = senditModel.findOne(req.params.id);
    if (getone === undefined) {
      res.status(400).send({
        status: 'Failed',
        message: 'id not found',
      });
    } else {
      res.status(200).send({
        status: 'Success',
        message: `${getone}`,
      });
    }
  },


};

export default parcelControler;
