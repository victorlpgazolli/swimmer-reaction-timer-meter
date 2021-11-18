import {
    Schema,
    model
} from 'mongoose'

const SwimmerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coachId: {
        type: String,
        required: true
    },
    trainings: [
        {
            reaction_time_diff_in_milliseconds: {
                type: String
            },
            timestamp: {
                type: String
            },
        }
    ]
}, {
    timestamps: true,
});

export default model('Swimmer', SwimmerSchema)