import { Endpoint, Swimmer, SwimmerTraining } from "@api/types";
import swimmerModel from "@api/modules/swimmer/model";
import { isValidObjectId } from "mongoose";

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
const deleteSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    await swimmerModel.deleteOne({ id });

    res.status(201).json()
}
const getTrainingFromSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    const swimmer: Swimmer | null = await swimmerModel.findOne({ id })

    res.json({
        swimmer_id: id,
        trainings: swimmer?.trainings || []
    })
}
const getSwimmers: Endpoint = async (req, res) => {

    const swimmers: Array<Swimmer> = await swimmerModel.find()

    res.json(swimmers || [])
}
const createTrainingForSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    const swimmerTrainingToCreate: SwimmerTraining = req.body;

    const hasSwimmer = await swimmerModel.exists({ id });

    if (!hasSwimmer) return res.status(404).json({ message: "swimmer do not found" });

    const isIdValid = isValidObjectId(id);

    if (!isIdValid) return res.status(400).json({ message: "swimmerId is not valid" });

    const swimmer: any = await swimmerModel.findById(
        id
    )

    const hasTraining = Array.isArray(swimmer.trainings);

    if (!hasTraining) swimmer.trainings = [];

    swimmer.trainings.push({
        ...swimmerTrainingToCreate,
        timestamp: new Date().toISOString()
    });

    await swimmerModel.findByIdAndUpdate(
        id,
        swimmer,
    )

    res.json({
        swimmer_id: id,
        trainings: swimmer.trainings
    })
}

export default {
    patchSwimmer,
    deleteSwimmer,
    getTrainingFromSwimmer,
    createTrainingForSwimmer,
    getSwimmers
}