# sendIT aka Zootopia Express

[![Build Status](https://travis-ci.org/openwell/sendIT.svg?branch=develop)](https://travis-ci.org/openwell/sendIT)
[![Coverage Status](https://coveralls.io/repos/github/openwell/SendIT/badge.svg?branch=develop)](https://coveralls.io/github/openwell/sendIT?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/52451433c1bad812c5f7/maintainability)](https://codeclimate.com/github/openwell/sendIT/maintainability)


# Parcel Delivery Service

SendIT is a Parcel Delivery Service app

## Getting Started

Clone the Repo.
-------------
Run npm install to install all necessary packages.

### Prerequisites

The following tools will be needed to run this application successfully:

Node v8.11.3 or above
---
Npm v5.6 or above
---

### ENDPOINTS

- GET **/api/v1/parcels** Fetch all parcel delivery orders
- GET **/api/v1/parcels/:parcelId** Fetch a specific parcel delivery order
- GET **/api/v1/users/:userId/parcels** Fetch all parcel delivery orders by a specific user
- PUT **/api/v1/parcels/:parcelId/cancel** Cancel the specific parcel delivery order
- POST **/api/v1/parcels** Create a parcel delivery order


### Installing

## On your Local Machine
- Pull the [develop](https://github.com/openwell/sendIT) branch off this repository
- Run `npm install` to install all dependencies
- Run npm start to start the app
- App runs on port 3000
- Access endpoints on **localhost:3000**


## Running the tests

Run `npm test` in the terminal for the cloned folder.

### Break down into end to end tests

- It tests the API end-point.
- It tests the REST API functionality


## Built With

* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment

## Authors

* **Ojo Timileyin**

## Acknowledgments
* [Web Developerment Youtuber](htttps://youtube.com)
* [StackOver-Flow](https://stackoverflow.org)
* The Andela Organisation
* [Udemy.com](https://udemy.com)
* Andela 38 Colleagues
