import parcel from '../model/parcel';

class orderControl {
 
   static orders(req, res) {
     const result = parcel.queryDb();
     return res.status(200).json({
       Status: 'Success',
       newOrder: result,
     });
    
   }

   static newOrder(req, res) {
      parcel.newOrder(req.body);
      return  res.status(201).json({ 
        Status: 'Success',
        createdParcel: 'New Parcel order Created',
        Data: req.body
       });

  }

  static order(req, res) {
    const getone = parcel.queryOne(req.params.parcelId);
    if (getone === undefined) {
      return res.status(400).json({
        Status: 'Failed',
        searchedPracel: 'Parcel Order id not found',
      });
    } else {
      return  res.status(200).json({
        Status: 'Success',
        searchedPracel: getone,
      });
    }
  }

  static cancel(req, res) {
    const cancel = parcel.statusCancel(req.params.parcelId);
    if (cancel === false) {
      return res.status(400).json({
        Status: 'Failed',
        cancelRequest: 'Parcel Order Id not foundin Database'
      });
    } else {
      res.status(200).json({
        Status: 'Success',
        cancelRequest: `Parcel Order ${cancel} Canceled`
      });
    }
  }

  static orderById(req, res) {
      const result = parcel.queryByUserId(req.params.userId);
      if (result.length === 0) {
        return res.status(400).json({
          Status: 'Failed',
          userParcel: 'User Parcel not found',
        });
      } else {
        return res.status(200).json({
          Status: 'Success',
          userParcel: result,
        });
      }
    }


};

export default orderControl;
