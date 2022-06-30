
import { comments } from "../../../DATAAPI/comments"
export default function handler(req, res) {
    if (req.method==='get') {
        res.status(200).json(comments)
    }else{
        const comment =req.body.comInput;
        const newComment={
          
            text:comment
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    }
    // res.status(200).json(comments)
  }
  
