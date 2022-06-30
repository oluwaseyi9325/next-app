import { comments } from "DATAAPI/comments"
export default function ApiRoute(req,res){
    if (req.method==="GET") {
        res.status(200).json(comments)
    } else if (req.method==="POST") {
        const myvariable= req.body.typeCom
        const newComment={
            id:Date.now(),
            text:myvariable
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    }
   

 } 