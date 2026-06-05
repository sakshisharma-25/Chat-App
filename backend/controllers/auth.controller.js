import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 🔴 FIXED: Gender validation string ko safe lowercase bana diya
        const safeGender = gender ? gender.toLowerCase().trim() : "male";

        // PROFILE PIC
        // const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;
        // const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

            const boyProfilePic = `https://api.dicebear.com/9.x/avataaars/svg?seed=boy-${username}`;
            const girlProfilePic = `https://api.dicebear.com/9.x/avataaars/svg?seed=girl-${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender: safeGender,
            profilePic: safeGender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // 🔴 FIXED: Pehle user ko safely database mein save karo, fir cookie and response bhejo
            await newUser.save();
            generateTokenAndSetCookie(newUser._id, res);

            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            return res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                error: "Invalid username or password",
            });
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.log("Error in logout controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};