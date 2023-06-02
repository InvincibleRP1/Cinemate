import '../userProfile/user.css';

export const FormData = ({tabSelected, formMode, formData, setFormData, handleClick}) => {

  const handleDummyInputs = () => {
    setFormData((formData) => ({
    ...formData,
    name: "Will Jacks",
    phone: 87878787,
    pincode: 847637,
    addressDetails: "5/U, Sing Street",
    city: "Dublin",
    stateOfAddress: "Dublin",
    })
    )
  }

    return (
        <div>
            {tabSelected && formMode && (
            <div className="form-add">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your phone number"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Pincode"
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                value={formData.pincode}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your City"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                value={formData.city}
              />

              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="Enter your address"
                onChange={(e) =>
                  setFormData({ ...formData, addressDetails: e.target.value })
                }
                value={formData.addressDetails}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your state"
                onChange={(e) =>
                  setFormData({ ...formData, stateOfAddress: e.target.value })
                }
                value={formData.stateOfAddress}
              />

              <button
                className="address-action-btns form-btns"
                onClick={formMode === "add" ? handleClick : () => handleClick(formData._id)}
              >
                {formMode === "add" ? "Add" : "Update"}
              </button>

              {formMode === "add" && <button className="address-action-btns form-btns"
              onClick={handleDummyInputs}
              >
              Dummy Inputs
              </button>}
            </div>
          )}
        </div>
    )
}