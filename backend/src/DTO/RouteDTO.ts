import { Request, Response } from "express";

export enum Methods {
    "POST" = "POST",
    "GET" = "GET",
    "UPDATE" = "UPDATE",
    "DELETE" = "DELETE"
}

export default interface RouteDTO {
    method: Methods,
    path: string,
    action: (req: Request, res: Response) => void
}