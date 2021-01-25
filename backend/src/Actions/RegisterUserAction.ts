import UserDTO from "../DTO/UserDTO"
import { Request, Response } from "express";
import DBManager from "../DatabaseManager";
import User from "../Classes/UserClass";

import {UploadedFile} from "express-fileupload"
import { resizeAndSaveAvatar } from "../utils/files";

const RegisterUserAction = (req: Request, res: Response) => {
    const user: User = new User(req.body as UserDTO);
    const avatar = req.files?.avatar as UploadedFile;

    if (avatar){
        if(!/(jpeg|png|jpg)/.test(avatar.mimetype)){
            res.json({
                status: "Error",
                message: "Avatar mimetype is invalid"
            })
            return;
        }
    }

    if (user.isValid()){
        const db = DBManager.getInstance();
        db.accessDatabase( (database) => {
            database.collection('users').insertOne(user);
        } )
        resizeAndSaveAvatar(avatar);
        user.avatar = avatar.name;
    } else {
        res.json({
            status: "Error",
            message: "User not valid"
        })
        return;
    }
    res.cookie('User', `${user.name}`)
    res.redirect('http://localhost:8080/');
}

export default RegisterUserAction