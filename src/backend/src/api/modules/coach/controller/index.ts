import { Coach, Endpoint, Swimmer } from "@api/types";
import services from "@services";
import coachModel from "@api/modules/coach/model";
import swimmerModel from "@api/modules/swimmer/model";
import { isValidObjectId } from "mongoose";

const createCoach: Endpoint = async (req, res) => {

    const coachToCreate: Coach = req.body;

    delete coachToCreate.id;

    const coachData: any = await coachModel.create(
        {
            ...coachToCreate,
        },
    )
    const token = services.auth.generateToken(coachToCreate);

    await coachData.save();

    const newCoach: Coach = {
        ...coachData._doc,
        token
    }
    res.json(newCoach)
}


const patchCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const coachNewData: Coach = req.body;

    delete coachNewData.id;

    const isIdValid = isValidObjectId(coachId);

    if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

    const coachExists = await coachModel.findById(coachId);

    if (!coachExists) return res.status(404).json({ message: "coach do not found" });

    const coachUpdatedData = await coachModel.findOneAndUpdate(
        { id: coachId },
        coachNewData,
        { new: true }
    )
    res.json(coachUpdatedData);
}
const deleteCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const isIdValid = isValidObjectId(coachId);

    if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

    const coachExists = await coachModel.findById(coachId);

    if (!coachExists) return res.status(404).json({ message: "coach do not found" });

    await swimmerModel.deleteMany({ coachId })
    await coachModel.deleteOne({ id: coachId });

    res.status(201).json()
}
const getCoachs: Endpoint = async (req, res) => {

    const coachs: Array<Coach> = await coachModel.find();

    return res.json(coachs)
}
const getCoachById: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const isIdValid = isValidObjectId(coachId);

    if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

    const coach: Coach = await coachModel.findById(coachId);

    if (!coach) return res.status(404).json({ message: "coach do not found" })

    return res.json(coach)
}

const findSwimmerByCoachId: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const isIdValid = isValidObjectId(coachId);

    if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

    const coachExists = await coachModel.findById(coachId);

    if (!coachExists) return res.status(404).json({ message: "coach do not found" });

    const swimmers: Array<Swimmer> | null = await swimmerModel.find({ coachId });

    return res.json(swimmers)
}
const createSwimmersForCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const swimmerToCreate: Swimmer = req.body;

    delete swimmerToCreate.id;

    const isIdValid = isValidObjectId(coachId);

    if (!isIdValid) return res.status(400).json({ message: "coachId is not valid" });

    const coachExists = await coachModel.findById(coachId);

    if (!coachExists) return res.status(404).json({ message: "coach do not found" });

    const coachData = await swimmerModel.create(
        {
            ...swimmerToCreate,
            coachId
        },
    )

    res.json(coachData)
}

export default {
    getCoachById,
    deleteCoach,
    patchCoach,
    findSwimmerByCoachId,
    createSwimmersForCoach,
    createCoach,
    getCoachs
}