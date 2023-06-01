import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import editimage from "../assets/images/ic_round-restaurant-menu.png";
import jwtDecode from "jwt-decode";
type editProfileProps = {
  dashboardVerify:() => void
}
const EditProfile = ({dashboardVerify}:editProfileProps) => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const handlEditProfile = async () => {
    setIsLoading(true);

    try {
      const headers = new Headers();
      headers.append("x-access-token", localStorage.getItem("token") || "");
      headers.append("Content-Type", "application/json");

      const response = await fetch("http://localhost:5000/api/dashboard/editprofile", {
        method: "PUT",
        headers: headers,
        // headers: {headers,
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify({ name, profession }),
      });

      if (response.ok) {
        // Profile updated successfully
        setIsUpdated(true);
        dashboardVerify();
      } else {
        // Error updating profile
        console.error("Error updating profile");
      }
    } catch (error) {
      // Error making the request
      console.error("Error making the request");
    }

    setIsLoading(false);
  };

  // const headers = new Headers();
  //   headers.append("x-access-token", localStorage.getItem("token") || "");

  //   const req = await fetch("http://localhost:5000/api/dashboard/editprofile", {
  //     headers: headers,
  //   });
  //   const data = await req.json();
  //   if(data.status ==='ok'){
  //     // setName(data.name)
  //   }
  //   else {
  //     alert(data.error)
  //   }
  //   console.log(data);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (isUpdated) {
        alert("Profile updated successfully");
        setIsUpdated(false);
      }
      if (!user) {
        localStorage.removeItem("token");
        alert("Cant do edit right now");
      }
    }
  }, [isUpdated]);
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-violet-400">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Profile</h3>
          {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
          {/* onSubmit={registerOrLoginUser} */}
          <form>
            <div className="form-control">
              <div>
                <label htmlFor="photo" className="file-input-label">
                  <input
                    type="file"
                    id="photo"
                    className="file-input visually-hidden"
                    accept="image/*"
                    style={{
                      backgroundImage: `url(${editimage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    placeholder="Add new image"
                  />
                  <div className="file-input-circle">
                    <span className="file-input-icon dark:text-slate-100 bg-primary ">
                      +
                    </span>
                  </div>
                  <div className="file-input-text dark:text-[#284184]">
                    Edit Pic
                  </div>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#284184]">
                    Profession
                  </span>
                </label>
                <select
                  value={profession || "abc"}
                  onChange={(e) => setProfession(e.target.value)}
                  className="select w-full max-w-xs  bg-slate-100 input-sm text-[#284184]"
                >
                  <option value="" disabled selected>
                    Pick your profession
                  </option>
                  <option value="abc">abc</option>
                  <option value="def">def</option>
                  <option value="git">git</option>
                  <option value="htf">htf</option>
                  <option value="wefw">wefw</option>
                </select>
              </div>
              <label className="label">
                <span className="label-text dark:text-[#284184]">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
          
                className="input input-bordered bg-slate-100 input-sm text-[#284184]"
              />
            </div>

            <div className="form-control mt-6">
              {/* <button className="btn btn-primary" type="submit">
                  Sign in
                </button> */}
              <input type="submit" className="btn btn-primary" value="Save" onClick={handlEditProfile} disabled={isLoading} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
