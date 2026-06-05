const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "text-sky-400" : "text-white"
          }`}
        >
          <span>Male</span>

          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "text-pink-400" : "text-white"
          }`}
        >
          <span>Female</span>

          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;