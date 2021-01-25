import DBManager from "../DatabaseManager";
import { Request, Response } from "express";

const GetUserAction = (req: Request, res: Response) => {
    const db = DBManager.getInstance();
    const id = String(req.params.id);

    if(id){
        return db.getUserById(id).then(value => {
            res.json(value)
        })
    }else{
        res.json({
            status: "Error",
            message: "ID is undefined"
        })
    }
    
}

export default GetUserAction