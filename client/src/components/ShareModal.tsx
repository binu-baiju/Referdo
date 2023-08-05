import { useRef, useState } from "react";
import { copyToClipboard } from "../utils/copyToClipboard"

const ShowModal = () => {
    
    const inputRef = useRef<HTMLInputElement | null>(null);
if(inputRef.current) {
    var defaultValue = inputRef.current.defaultValue;

}

return (
    <>
    <input type="checkbox" id="my-modal-share" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-share" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Share</h3>
    <p className="py-4">
        <div className="bg-black rounded-md p-3 flex justify-between items-center">
            <div className="flex">
            <label className="text-sm  text-center h-4 mb-1">Referrals Link : </label>
        <input  ref={inputRef} className="bg-black text-sm text-center flex justify-center items-center" value="www.referdo.com"/>
            </div>
 
        <button className="bg-blue-900 text-sm btn-sm flex items-center " onClick={()=>copyToClipboard(defaultValue)}>Copy</button>

        </div>
   
        
    </p>
  </div>
</div>
    </>
)
}

export default ShowModal