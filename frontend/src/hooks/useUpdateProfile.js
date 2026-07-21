import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"; 
import toast from "react-hot-toast";

const useUpdateProfile = () => {
	const [loading, setLoading] = useState(false);
	const { authUser, setAuthUser } = useAuthContext();

	const updateProfile = async (profilePic) => {
		if (!profilePic) {
			toast.error("Please provide a valid image URL");
			return false;
		}

		setLoading(true);
		try {
			const res = await fetch("/api/users/update-profile", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ profilePic }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			const updatedUser = { ...authUser, profilePic: data.profilePic };
			localStorage.setItem("chat-user", JSON.stringify(updatedUser));
			setAuthUser(updatedUser);
			
			toast.success("Profile picture updated successfully!");
			return true;
		} catch (error) {
			toast.error(error.message);
			return false;
		} finally {
			setLoading(false);
		}
	};

	return { loading, updateProfile };
};

export default useUpdateProfile;