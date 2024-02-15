const mongoose = require('mongoose');
const {createId} = require("@paralleldrive/cuid2");

const Schema = mongoose.Schema;

const UserSubscriptionSchema = new Schema({
    _id : {
        type: String,
        required: true,
        unique: true,
        default: () => createId(),
    },
    userId : {
        type: String,
        unique: true,
    },
    stripeCustomerId: {
        type: String,
        unique: true,
        alias: 'stripe_customer_id',
    },
    stripeSubscriptionId: {
        type: String,
        unique: true,
        alias: 'stripe_subscription_id',
    },
    stripePriceId: {
        type: String,
        alias: 'stripe_price_id',
    },
    stripeCurrentPeriodEnd: {
        type: Date,
        alias: 'stripe_current_period_end',
    },
});

const UserSubscription = mongoose.model("UserSubscription", UserSubscriptionSchema);
export default UserSubscription;