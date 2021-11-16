import { Endpoint, Swimmer, SwimmerTraining } from "@api/types";
import swimmerModel from "@api/modules/swimmer/model";

const patchSwimmer: Endpoint = (req, res) => {
    const {
        swimmerId
    } = req.params;

    const swimmerNewData: Swimmer = req.body;

    delete swimmerNewData.id;

    // const swimmerUpdatedData = await swimmerModel.findOneAndUpdate(
    //     { id: swimmerId },
    //     swimmerNewData,
    //     { new: true }
    // )
    // res.json(swimmerUpdatedData);
    res.json(swimmerNewData)
}
const deleteSwimmer: Endpoint = (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    // swimmerModel.deleteOne({ id });
    // res.json(coach)

    res.status(201).json()
}
const getTrainingFromSwimmer: Endpoint = (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    // const swimmer = swimmerModel.findOne({ id });
    // res.json(
    //     swimmer.trainings || []
    // )

    res.json(id)
}
const createTrainingForSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    const swimmerTrainingToCreate: SwimmerTraining = req.body;

    // const swimmer = await swimmerModel.findOne(
    //     { id },
    // )
    // const hasTraining = Array.isArray(swimmer.trainings);

    // if (!hasTraining) swimmer.trainings = [];

    // swimmer.trainings.push({
    //     ...swimmerTrainingToCreate,
    //     timestamp: new Date().toISOString()
    // });

    // await swimmerModel.updateOne(
    //     { id },
    //     swimmer,
    // )
    // res.json({
    //     swimmer_id: id,
    //     trainings: swimmer.trainings
    // })
    res.json(swimmerTrainingToCreate);
}

export default {
    patchSwimmer,
    deleteSwimmer,
    getTrainingFromSwimmer,
    createTrainingForSwimmer,
}