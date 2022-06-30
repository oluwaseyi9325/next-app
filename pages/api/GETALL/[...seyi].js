export default function handler(req,res){

    const params = req.query.seyi;
    console.log(params)
    res.status(200).json(params)
}