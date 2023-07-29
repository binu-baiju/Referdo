export const copyToClipboard=(data:string)=>{
    
    // const url = `https://dashboard/user/${userId}`;
    function isLink(str:string) {
      return str.startsWith('http://') || str.startsWith('https://');
    }
  
    navigator.clipboard.writeText(data)
    .then(() => {
      if (data.includes('@')) {
      alert('Email copied to clipboard');
  
      }
      else if(isLink(data)){
      alert('Link copied to clipboard');
  
      }
      else {
        alert('Phonenumber copied to clipboard');
  
      }
    })
    .catch((error) => {
      console.error('Failed to copy URL', error);
    });
  }