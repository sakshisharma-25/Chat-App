import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { authUser } = useAuthContext();
  const [profilePic, setProfilePic] = useState(authUser?.profilePic || "");
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const { loading, updateProfile } = useUpdateProfile();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateProfile(profilePic);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto h-full'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
          Update <span className='text-sky-500'>Profile Picture</span>
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
          <div className='avatar mt-2'>
            <div className='w-28 h-28 rounded-full ring ring-sky-400 ring-offset-base-100 ring-offset-2 overflow-hidden flex items-center justify-center bg-slate-800 shadow-lg'>
              <img 
                src={profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
                alt='user profile preview' 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImageChange}
            className='hidden'
          />

          <div className='w-full flex flex-col items-center gap-2 mt-2'>
            <button
              type='button'
              onClick={handleButtonClick}
              className='btn w-full bg-slate-800 hover:bg-slate-700 text-sky-400 border border-sky-500/30 rounded-lg text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2'
            >
              📷 Choose Image
            </button>
            
            {selectedFileName && (
              <span className='text-xs text-gray-300 italic truncate max-w-[250px]'>
                Selected: {selectedFileName}
              </span>
            )}
          </div>

          <div className='flex gap-4 w-full mt-4'>
            <button 
              type='button' 
              disabled={loading}
              onClick={() => navigate("/")} 
              className='btn btn-sm bg-gray-700 hover:bg-gray-800 text-gray-200 border border-gray-600 flex-1 h-10 rounded-lg font-medium transition-colors'
            >
              Back
            </button>
            
            <button 
              type='submit' 
              disabled={loading}
              className='btn btn-sm bg-sky-500 hover:bg-sky-600 text-white flex-1 h-10 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center'
            >
              {loading ? <span className="loading loading-spinner"></span> : "Save DP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;