import { body, validationResult } from 'express-validator/check';

export default [
body('parcelId').isLength({min:1}).withMessage('parcel id cannot be blank'),
body('userId').isLength({min:1}).isAlpha().withMessage('userid cannot be blank'),
body('location').isLength({min:1}).withMessage('location cannot be blank'),
body('destination').isLength({min:1}).withMessage('destination cannot be blank'),
body('unitWeight').isLength({min:1}).withMessage('unit_weight cannot be blank'),
body('pickupAddress').isLength({min:1}).withMessage('pickup_address cannot be blank'),
body('addressOfReciever').isLength({min:1}).withMessage('address_of_reciever cannot be blank'),
body('phoneNoOfReceiver').isLength({min:1}).withMessage('phone_no_of_receiver cannot be blank'),
body('price').isLength({min:1}).withMessage('price cannot be blank'),
body('status').isLength({min:1}).withMessage('status cannot be blank'),
body('presentLocation').isLength({min:1}).withMessage('presentLocation cannot be blank'),

(req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    } else {
        next();
    }
}


];