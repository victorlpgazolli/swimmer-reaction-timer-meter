import { NextFunction, Request, Response } from "express";


export type Endpoint = (req: Request, res: Response, next: NextFunction) => any;
export type Middleware = (err: any, req: Request, res: Response, next: NextFunction) => any;
export type Login = { username: string; password: string };
export type LoginResponse = { username: string; token: string; };

export type User = { username: string; };

export type Coach = {
    name: string;
    email: string;
    id: string;
    token: string | undefined;
};
export type Swimmer = {
    name: string;
    id?: string;
    _id?: string;
    coachId: string;
    isCurrent: boolean;
    trainings: SwimmerTraining[] | undefined
};
export type SwimmerTraining = {
    reaction_time_diff_in_milliseconds: number;
    timestamp: string | undefined;
};
