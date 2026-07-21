import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);

        res.status(500).json({
            error: "Internal server error"
        });
    }
};

export const updateProfilePic = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;

        if (!profilePic) {
            return res.status(400).json({ error: "Please select an image" });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: profilePic },
            { new: true }
        );

        res.status(200).json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            username: updatedUser.username,
            profilePic: updatedUser.profilePic,
        });

    } catch (error) {
        console.log("Error in updateProfilePic controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};