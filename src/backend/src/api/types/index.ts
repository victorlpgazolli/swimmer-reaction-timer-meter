import { NextFunction, Request, Response } from "express";


export type Endpoint = (req: Request, res: Response, next: NextFunction) => any;
export type Middleware = (err: any, req: Request, res: Response, next: NextFunction) => any;
export type Login = { username: string; password: string };
export type LoginResponse = { username: string; token: string; };

export type User = { username: string; };