import { should as _should, use, request } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

use(chaiHttp);
const should = _should();

before((done) => {
  const testParcelorder = {
    parcel_id: '009',
    userid: 'tomi',
    location: 'kwara',
    destination: 'kogi',
    unit_weight: '1kg',
    pickup_address: 'Aburu',
    address_of_reciever: 'Obasojo way',
    phone_no_of_receiver: '08484848',
    price: 'N20',
    status: 'Processing',
    presentLocation: 'lagos office',
  };
  request(server)
    .post('/api/v1/parcels')
    .send(testParcelorder)
    .end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.a('object');
      done();
    });
});

describe('/GET /', () => {
  it('should return home page', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});


describe('/GET /api/v1/parcels', () => {
  // 1
  // it('should return parcel db empty', (done) => {
  //     request(server)
  //         .get('/api/v1/parcels')
  //         .end((err, res) => {
  //             res.should.have.status(404);
  //             res.body.should.be.a('object');
  //             done();
  //         })
  // })
  // 2
  it('should return all parcel', (done) => {
    request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});


describe('/GET /api/v1/parcels/:parcelid', () => {
  // 1
  it('should return one parcel empty', (done) => {
    request(server)
      .get('/api/v1/parcels/001')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  // 2
  it('should return one parcel', (done) => {
    request(server)
      .get('/api/v1/parcels/009')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});


describe('/GET /api/v1/user/:userid/parcels', () => {
  // 1
  it('should return all parcels of a user empty', (done) => {
    request(server)
      .get('/api/v1/user/tomi2/parcels')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  // 2
  it('should return all parcels of a user', (done) => {
    request(server)
      .get('/api/v1/user/tomi/parcels')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});


describe('/PUT /api/v1/parcels/:parcelid/cancel', () => {
  // 1
  it('should cancel the order of the id', (done) => {
    request(server)
      .put('/api/v1/parcels/1/cancel')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  // 2
  it('should cancel the order of the id', (done) => {
    request(server)
      .put('/api/v1/parcels/009/cancel')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});


// Without Location
describe('/POST /api/v1/parcels', () => {
  // 1
  it('All fields are required', (done) => {
    const testParcelorder = {
      parcel_id: '012',
      userid: 'jumi',
      destination: 'kogi',
      unit_weight: '1kg',
      pickup_address: 'Aburu',
      address_of_reciever: 'Obasojo way',
      phone_no_of_receiver: '08484848',
      price: 'N20',
      status: 'Processing',
      presentLocation: 'lagos office',
    };

    request(server)
      .post('/api/v1/parcels')
      .send(testParcelorder)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  // 2
  it('should create new parcel order', (done) => {
    const testParcelorder2 = {
      parcel_id: '011',
      userid: 'tola',
      location: 'kwara',
      destination: 'kogi',
      unit_weight: '1kg',
      pickup_address: 'Aburu',
      address_of_reciever: 'Obasojo way',
      phone_no_of_receiver: '08484848',
      price: 'N20',
      status: 'Processing',
      presentLocation: 'lagos office',
    };

    request(server)
      .post('/api/v1/parcels')
      .send(testParcelorder2)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });
});


// Last One
describe('/GET /*', () => {
  it('page not found', (done) => {
    request(server)
      .get('/hi')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });
});
