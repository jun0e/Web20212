import mongoose from 'mongoose'

const couponSchema = mongoose.Schema(
    {
        couponName: {
            type: String
        },
        couponOwner: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        bookAmountIncrease: {
            type: Number
        },
        regisPriceDecrease: {
            type: Number
        }
    }
)


const Coupon = mongoose.model('Coupon',couponSchema,'coupon')

export {
    Coupon
}