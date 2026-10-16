const Joi = require('joi');
module.exports.listingSchema = Joi.object({

    title: Joi.string().required(),

    description: Joi.string().required(),

    location: Joi.string().required(),

    price: Joi.number().min(200).required(),

    country: Joi.string().required(),

    image: Joi.string().allow("", null)

});
//review schema
module.exports.reviewSchema=Joi.object({
   review:Joi.object(
    {
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }
   ).required()
});