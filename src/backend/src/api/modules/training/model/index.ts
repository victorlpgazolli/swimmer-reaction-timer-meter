import {
    Schema,
    model
} from 'mongoose'

const TrainingSchema = new Schema({
    reaction_time_diff_in_milliseconds: {
        type: String,
        required: true
    },
    swimmer_id: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

export default model('Training', TrainingSchema)