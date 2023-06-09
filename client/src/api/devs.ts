// async function devsApi(skip : number) {

//     const headers = new Headers();
//     headers.append("x-access-token", localStorage.getItem("token") || "");
//     headers.append("Content-Type", "application/json");
//     try {
//       // const req = await fetch(`http://localhost:5000/api/dashboard/getdevs?skip=${skip}`, {
//       const req = await fetch(`http://localhost:5000/api/dashboard/getdevs`, {

//         headers: headers,
//       });
//       const data = await req.json();
//       console.log(data.devs);
//     }
//     catch(error){
//         throw new Error(error)
//     }