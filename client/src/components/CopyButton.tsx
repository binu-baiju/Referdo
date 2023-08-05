import React from 'react';
import "./CopyButton.css";
interface CopyButtonProps {
    // key: number;
    link: string;
    handleCopyLinkClick: () => void;
    // copiedStates: boolean[]
  }
const CopyButton: React.FC<CopyButtonProps> = ({ link,handleCopyLinkClick}) => {
    return(
        <>
        
        <button className="btn btn-md bg-white relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out   rounded-lg shadow-md group">
        
            <>
<span tabIndex={0} onClick={handleCopyLinkClick} className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-slate-700 group-hover:translate-y-0 ease ">
Copy
{/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> */}
</span>



<span className="absolute flex items-center justify-center w-full h-full
 text-black transition-all duration-300 transform group-hover:translate-y-full 
 ease" >{link}</span>

</>
 
<span className="relative invisible w-96 lg:w-36"></span>

</button>
        
        </>
    )
}

export default CopyButton