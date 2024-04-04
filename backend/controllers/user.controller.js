import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filterdUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filterdUser);
  } catch (error) {
    console.error("Error in get userforsidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
