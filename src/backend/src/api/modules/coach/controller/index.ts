import { Coach, Endpoint, LoginResponse, Swimmer } from "@api/types";

import services from "@services";
import coachModel from "@api/modules/coach/model";
import swimmerModel from "@api/modules/swimmer/model";

const loginUser: Endpoint = (req, res) => {


    const userData = {
        username: "teste",
        password: "12321"
    };

    const token = services.auth.generateToken({
        username: userData.username
    });

    const response = {
        username: userData.username,
        token
    }

    res.json(response as LoginResponse)

}


const patchCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const coachNewData: Coach = req.body;

    delete coachNewData.id;

    // const coachUpdatedData = await coachModel.findOneAndUpdate(
    //     { id: coachId },
    //     coachNewData,
    //     { new: true }
    // )
    // res.json(coachUpdatedData);
    res.json(coachNewData)
}
const deleteCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    // coachModel.deleteOne({ id: coachId });
    // res.json(coach)

    res.status(201).json()
}
const getCoachData: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;


    // const coach:  = coachModel.findOne({ id: coachId });
    // res.json(coach)

    res.json(coachId)
}

const getSwimmersFromCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    // const swimmers = swimmerModel.find({ coachId });
    // res.json(swimmers)

    res.json(coachId)
}
const createSwimmersForCoach: Endpoint = async (req, res) => {
    const {
        coachId
    } = req.params;

    const swimmerToCreate: Swimmer = req.body;

    delete swimmerToCreate.id;

    // const coachData = await swimmerModel.create(
    //     {
    //         ...swimmerToCreate,
    //         coachId
    //     },
    // )
    // res.json(coachData);
    res.json(swimmerToCreate)
}

export default {
    getCoachData,
    deleteCoach,
    patchCoach,
    getSwimmersFromCoach,
    createSwimmersForCoach,
    loginUser
}