import { comments } from "DATAAPI/comments";
import { details } from "DATAAPI/details";

export default function Handler(req,res) {

    res.status(200).json(details)
    
}