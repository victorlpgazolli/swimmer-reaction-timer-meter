import {
    Schema,
    model
} from 'mongoose'

const CoachSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

export default model('Coach', CoachSchema)