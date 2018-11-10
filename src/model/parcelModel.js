const momentDate = moment().format('MMMM Do YYYY, h:mm:ss a');


class Sendit {
  constructor() {
    this.ds = [];
  }

  create(data) {
    const newParcel = {
      parcel_id: data.parcel_id || '',
      user: data.user || '',
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

  
}


export default new Sendit();
