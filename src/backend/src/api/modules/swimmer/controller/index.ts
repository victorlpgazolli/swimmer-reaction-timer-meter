import { Endpoint, Swimmer, SwimmerTraining } from "@api/types";
import swimmerModel from "@api/modules/swimmer/model";
import coachModel from "@api/modules/coach/model";
import { isValidObjectId } from "mongoose";

const patchSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId
    } = req.params;

    const swimmerNewData: Swimmer = req.body;

    delete swimmerNewData.id;

    const hasCoachId = !!swimmerNewData.coachId;

    if (hasCoachId) {

        const isIdValid = isValidObjectId(swimmerNewData.coachId);

        if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

        const hasCoach = await coachModel.findById(swimmerNewData.coachId);

        if (!hasCoach) return res.status(404).json({ message: "coachId do not found" });
    }

    const swimmerUpdatedData = await swimmerModel.findOneAndUpdate(
        { id: swimmerId },
        swimmerNewData,
        { new: true }
    )
    res.json(swimmerUpdatedData);
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

    const isIdValid = isValidObjectId(id);

    if (!isIdValid) return res.status(400).json({ message: "swimmerId is not valid" });

    const swimmer: Swimmer | null = await swimmerModel.findById(
        id
    )
    const hasSwimmer = !!swimmer;

    if (!hasSwimmer) return res.status(404).json({ message: "swimmer do not found" });

    res.json({
        swimmer_id: id,
        trainings: swimmer?.trainings || []
    })
}
const getSwimmers: Endpoint = async (req, res) => {

    const swimmers: Swimmer[] = await swimmerModel.find()

    res.json(swimmers || [])
}
const createTrainingForSwimmer: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    const swimmerTrainingToCreate: SwimmerTraining = req.body;

    const isIdValid = isValidObjectId(id);

    if (!isIdValid) return res.status(400).json({ message: "swimmerId is not valid" });

    const swimmer: Swimmer | null = await swimmerModel.findById(
        id
    )
    const hasSwimmer = !!swimmer;

    if (!hasSwimmer) return res.status(404).json({ message: "swimmer do not found" });

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
const getCurrentTrainingSwimmer: Endpoint = async (req, res) => {

    const swimmer: Swimmer[] | null = await swimmerModel.find({ isCurrent: true });

    return res.json(swimmer)
}
const startSwimmerTraining: Endpoint = async (req, res) => {
    const {
        swimmerId: id
    } = req.params;

    const isIdValid = isValidObjectId(id);

    if (!isIdValid) return res.status(400).json({ message: "swimmerId is not valid" });

    const swimmer: Swimmer | null = await swimmerModel.findById(
        id
    )
    const hasSwimmer = !!swimmer;

    if (!hasSwimmer) return res.status(404).json({ message: "swimmer do not found" });

    await swimmerModel.updateMany(
        { isCurrent: true },
        { $set: { isCurrent: false } }
    );

    swimmer.isCurrent = true;

    await swimmerModel.findByIdAndUpdate(
        id,
        swimmer,
    )

    res.status(201).json({ ok: true })
}

export default {
    patchSwimmer,
    deleteSwimmer,
    getTrainingFromSwimmer,
    createTrainingForSwimmer,
    startSwimmerTraining,
    getSwimmers,
    getCurrentTrainingSwimmer,
}
