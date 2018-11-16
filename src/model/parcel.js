import moment from 'moment';
import uuid from 'uuid';
const momentDate = moment().format('MMMM Do YYYY, h:mm:ss a');


class Parcel {
  constructor() {
    this.db = [];
  }

  newOrder(data) {
    const newParcel = {
      id: uuid.v4(),
      parcelId: data.parcelId,
      userId: data.userId,
      location: data.location,
      destination: data.destination,
      unitWeight: data.unitWeight,
      pickUpAddress: data.pickupAddress,
      addressOfReciever: data.addressOfReciever,
      phoneNoOfReceiver: data.phoneNoOfReceiver,
      price: data.price,
      status: data.status,
      presentLocation: data.presentLocation,
      createdDate: momentDate,
      modifiedDate: momentDate,
    };

    this.db.push(newParcel);
    return newParcel;
  }

   queryDb() {
   var result;
    return result = this.db.map(({parcelId, userId,location,destination,uinitWeight,price,status, ...rest}) => (
      {parcelId, userId,location,destination,uinitWeight,price,status}));

   }

  queryOne(parcelId) {
    return this.db.find((element) => element.parcelId === parcelId);
  }

  statusCancel(parcelId) {
    const cancel = this.queryOne(parcelId);
    if (cancel === undefined) {
      return false;
    }
    const index = this.db.indexOf(cancel);
    this.db[index].status = 'CANCELED';
    return parcelId;
  }

   queryByUserId(userId) {
     const findId = this.db.filter((element) => element.userId === userId);
     return findId;
   }
}
export default new Parcel();
