
class Sendit {
  constructor() {
    this.ds = [];
  }

  create(data) {
    const newParcel = {
      parcel_id: data.parcel_id || '',
      userid: data.userid || '',
      location: data.location || '',
      destination: data.destination || '',
      unit_weight: data.unit_weight || '',
      pickup_address: data.pickup_address || '',
      address_of_reciever: data.address_of_reciever || '',
      phone_no_of_receiver: data.phone_no_of_receiver || '',
      price: data.price || '',
      status: data.status || '',
      presentLocation: data.presentLocation || '',
    };

    this.ds.push(newParcel);
    return newParcel;
  }

   findAll() {
     return this.ds;
   }

  findOne(parcelid) {
    return this.ds.find((todo, index) => todo.parcel_id === parcelid);
  }

  cancel(parcelid) {
    const del = this.findOne(parcelid);
    if (del === undefined) {
      return false;
    }
    const index = this.ds.indexOf(del);
    this.ds.splice(index);
    return true;
  }

   findUserparcel(userid) {
     const findId = this.ds.filter((todo, index) => todo.userid === userid);
     return findId;
   }

  
}


export default new Sendit();
