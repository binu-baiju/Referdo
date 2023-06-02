import React, { useState } from 'react';

const Sampleform: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [twitterurl, setTwitterUrl] = useState('');
  const [githuburl, setGithubUrl] = useState('');
  const [linkedinurl, setLinkedinUrl] = useState('');



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const headers = new Headers();
       headers.append("x-access-token", localStorage.getItem("token") || "");
      headers.append("Content-Type", "application/json");
      // Send POST request to the API endpoint
      const response = await fetch('http://localhost:5000/api/dashboard/adddevs', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ name, email,profession,phonenumber,twitterurl,githuburl,linkedinurl }),
      });

      if (response.ok) {
        // Dev added successfully
        alert('Dev added successfully');
        // Reset form fields
        setName('');
        setEmail('');
        setProfession('');
        setPhonenumber('');
        setTwitterUrl('');
        setGithubUrl('');
        setLinkedinUrl('');





      } else {
        // Error adding dev
        console.error('Error adding dev');
      }
    } catch (error) {
      // Error making the request
      console.error('Error making the request');
    }
  };

 return (
  <form onSubmit={handleSubmit}>
  <div>
    <label className='text-base-300'>Name:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Email:</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Profession:</label>
    <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Phonenumber:</label>
    <input type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Twitter link:</label>
    <input type="url" value={twitterurl} onChange={(e) => setTwitterUrl(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Githublink link:</label>
    <input type="url" value={githuburl} onChange={(e) => setGithubUrl(e.target.value)} />
  </div>
  <div>
    <label className='text-base-300'>Linkindin link:</label>
    <input type="url" value={linkedinurl} onChange={(e) => setLinkedinUrl(e.target.value)} />
  </div>
  <button type="submit">Add Dev</button>
</form>
 )

 };
export default Sampleform;
