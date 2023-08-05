import React, { useEffect, useState } from "react";
import "../pages/form.css";
import Header1 from "../components/Header1";

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [description, setDescription] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [twitterurl, setTwitterUrl] = useState('');
  const [githuburl, setGithubUrl] = useState('');
  const [linkedinurl, setLinkedinUrl] = useState('');

  const [userId, setUserId] = useState('');
  const [linkName, setLinkName] = useState('');


  useEffect(() => {
    // Get the current URL
    const url = window.location.href;
   
    console.log();
    

    // Extract the userId from the URL
    const parts = url.split('/');
    const userIdFromURL = parts[5];
    const linkName1 = parts[7];
    setLinkName(linkName1);



// console.log(userIdFromURL);
// console.log(parts);
console.log(linkName);



    setUserId(userIdFromURL);
console.log(userId);


  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !description || !profession || !phonenumber || !resume || !image || !twitterurl || !githuburl || !linkedinurl) {
      // Display an error message or handle the validation failure in an appropriate way
      console.error('Please fill in all required fields');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('profession', profession);
    formData.append('phonenumber', phonenumber);
    formData.append('description', description);
    formData.append('twitterurl', twitterurl);
    formData.append('githuburl', githuburl);
    formData.append('linkedinurl', linkedinurl);
    // formData.append('linkName', linkName);
  
    if (resume && image ) {
      
        formData.append('resume', resume);
        formData.append('image', image);

  
        // Send the form data to the backend
        submitFormData(formData);
      
      
    } else {
      // Resume file is not selected
      formData.append('resume', '');
      formData.append('image', '');

  
      // Send the form data to the backend
      submitFormData(formData);
    }
  };
  
  const submitFormData = async (formData: FormData) => {
    try {
      // const headers = new Headers();
      // Remove the 'Content-Type' header since FormData sets it automatically
      // headers.append("Content-Type", "application/json");
  
      // Send POST request to the API endpoint
      // 647799c70e8c40ca7540f990
      const response = await fetch(`http://localhost:5000/api/form/user/${userId}/dev/${linkName}`, {
        method: 'POST',
        // Don't set the 'Content-Type' header explicitly, let FormData handle it
        // headers: headers,
        body: formData
      });
  console.log(response)
      if (response.ok) {
        // Dev added successfully
        alert('Dev added successfully');
        // Reset form fields
        // setName('');
        setEmail('');
        // setProfession('');
        // setDescription('');
        // setPhonenumber('');
        // setResume(null);
        // setTwitterUrl('');
        // setGithubUrl('');
        // setLinkedinUrl('');
      } else {
        // Error adding dev
        console.error('Error adding dev');
      }
    } catch (error) {
      // Error making the request
      console.error('Error making the request');
    }
  };
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('email', email);
  //   formData.append('profession', profession);
  //   formData.append('phoneNumber', phonenumber);

  //   formData.append('description', description);
  //   formData.append('twitterUrl', twitterurl);
  //   formData.append('githubUrl', githuburl);
  //   formData.append('linkedinUrl', linkedinurl);

  //   if (resume) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(resume);
  //     reader.onload = () => {
  //       formData.append('resume', reader.result as string);
  
  //       // Send the form data to the backend
  //       submitFormData(formData);
  //     };
  //     reader.onerror = (error) => {
  //       console.error('Error converting resume to Base64:', error);
  //     };
  //   } else {
  //     // Resume file is not selected
  //     formData.append('resume', '');
  
  //     // Send the form data to the backend
  //     submitFormData(formData);
  //   }
  // };

 
  
  //   const submitFormData = async (formData: FormData) => {
  //   try {
  //     const headers = new Headers();
  //     headers.append("Content-Type", "application/json");
  //     // Send POST request to the API endpoint
  //     const response = await fetch('http://localhost:5000/api/form/user/647799c70e8c40ca7540f990/dev', {
  //       method: 'POST',
  //       headers: headers,
  //       body: formData
  //     });

  //     if (response.ok) {
  //       // Dev added successfully
  //       alert('Dev added successfully');
  //       // Reset form fields
  //       setName('');
  //       setEmail('');
  //       setProfession('');
  //       setDescription('')
  //       setPhonenumber('');
  //       setResume(null);
  //       setTwitterUrl('');
  //       setGithubUrl('');
  //       setLinkedinUrl('');






  //     } else {
  //       // Error adding dev
  //       console.error('Error adding dev');
  //     }
  //   } catch (error) {
  //     // Error making the request
  //     console.error('Error making the request');
  //   }
  // }};
  return (
    <>
      <Header1 />
      {/* <div className="font-poppins"> */}
      {/* <div className="flex items-center justify-center h-screen w-full max-w-screen-lg px-4 sm:w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
      <div className=" font-poppins">
        <div className=" fixed w-full z-20  left-0 border-b border-gray-200 dark:border-gray-600 top-16 mt-1.5  flex h-screen overflow-auto">
          <div className="w-full bg-violet-400 flex flex-col items-center  gap-2 mb-12 overflow-auto">
            <div className=" w-4/5">
              <div>
                <h2 className="text-xl font-semibold  my-10">
                  Fill the details
                </h2>
              </div>
              <div className="form-div mb-8 ">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="name">
                          <span className="label-text" >Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                          id="name"
                            type="text"
                            placeholder="Add Name"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                            value={name} onChange={(e) => setName(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="profession">
                          <span className="label-text">Profession</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                          id="profession"
                            type="text"
                            placeholder="add Profession"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                            value={profession} onChange={(e) => setProfession(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="description">
                          <span className="label-text">Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <textarea
                            id="description"
                            placeholder="add description"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1 h-16"
                            style={{ borderRadius: "0" }}
                            value={description} onChange={(e) => setDescription(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="email">
                          <span className="label-text" >Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                          id="email"
                            type="email"
                            placeholder="Add Email"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                            value={email} onChange={(e) => setEmail(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 ">
                          <span className="label-text">Phone Number</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                            type="number"
                            placeholder="123456789"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                            value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="resume">
                          <span className="label-text">Resume</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                          id="resume"
                          
                            type="file"
                            placeholder="Add file"
                            accept=".pdf,.doc,.docx"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                               onChange={(e) => {
                              if (e.target.files && e.target.files.length > 0) {
                                setResume(e.target.files[0]);
                              }
                            }}
                          
                          />
                          {/* onChange={(e) => setResume(e.target.value)} */}
                        </label>
                      </div>
                    </div>
                    </div>

                    <div>
                    <div className="bg-white flex items-center justify-left rounded-lg">
                      <div className="form-control p-6 w-96 ">
                        <label className="label bg-gray-200 mb-2 " htmlFor="resume">
                          <span className="label-text">Image</span>
                        </label>
                        <label className="input-group input-group-vertical">
                          {/* <span>Email</span> */}
                          <input
                          id="image"
                          
                            type="file"
                            placeholder="Add file"
                            accept="image/*"
                            className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                            style={{ borderRadius: "0" }}
                               onChange={(e) => {
                              if (e.target.files && e.target.files.length > 0) {
                                setImage(e.target.files[0]);
                              }
                            }}
                          
                          />
                          {/* onChange={(e) => setResume(e.target.value)} */}
                        </label>
                      </div>
                    </div>
                    </div> 

                    <div>
                      <div className="bg-white flex items-center justify-left rounded-lg">
                        <div className="form-control p-6 w-96 ">
                          <label className="label bg-gray-200 mb-2 ">
                            <span className="label-text">GitHub</span>
                          </label>
                          <label className="input-group input-group-vertical">
                            {/* <span>Email</span> */}
                            <input
                              type="url"
                              placeholder="Enter your GitHub account link "
                              className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                              style={{ borderRadius: "0" }}
                              value={githuburl} onChange={(e) => setGithubUrl(e.target.value)}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white flex items-center justify-left rounded-lg">
                        <div className="form-control p-6 w-96 ">
                          <label className="label bg-gray-200 mb-2 ">
                            <span className="label-text">LinkedIn</span>
                          </label>
                          <label className="input-group input-group-vertical">
                            {/* <span>Email</span> */}
                            <input
                              type="url"
                              placeholder="Enter your LinkedIn profile link "
                              className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                              style={{ borderRadius: "0" }}
                              value={linkedinurl} onChange={(e) => setLinkedinUrl(e.target.value)}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    

                    <div>
                      <div className="bg-white flex items-center justify-left rounded-lg">
                        <div className="form-control p-6 w-96 ">
                          <label className="label bg-gray-200 mb-2 ">
                            <span className="label-text">Twitter</span>
                          </label>
                          <label className="input-group input-group-vertical">
                            {/* <span>Email</span> */}
                            <input
                              type="url"
                              placeholder="Enter your Twitter profile link "
                              className="border-b rounded-b-none rounded-none focus:border-gray-500 focus:outline-none text-black bg-white placeholder:pl-1"
                              style={{ borderRadius: "0" }}
                              value={twitterurl} onChange={(e) => setTwitterUrl(e.target.value)}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className=" h-16 flex justify-end items-center">
                      <button className="bg-yellow-400 text-white h-1/2 flex items-center  " type="submit">
                        <h3>Submit</h3>
                      </button>
                    </div>
                  
                </form>
              </div>
              <div className="mb-16"></div> {/* Add empty div for spacing */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Form;

