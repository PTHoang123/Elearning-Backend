import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    const token = req.session.token;
    if(!token){
        return res.status(401).json({message: "Authentication Invalid"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Authentication Invalidd"})
    }
}