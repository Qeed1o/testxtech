import DBManager from "../DatabaseManager";
import { Request, Response } from "express";

const GetUsersAction = (req: Request, res: Response) => {
    const db = DBManager.getInstance();
    const offset = Number(req.query.offset) || 0;
    return db.getUsers(offset).then(value => {
        res.json(value)
    });
}

export default GetUsersAction;