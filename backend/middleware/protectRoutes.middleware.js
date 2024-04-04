import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        error: "Unauthorised- no token found",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        error: "Unauthorised- Invalid token",
      });
    }

    const user = await User.findById(decode.userId).select("-password");

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protecctRoutes controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoutes;
