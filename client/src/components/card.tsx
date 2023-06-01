import React, {useRef} from 'react';

const CardModal: React.FC = ( ) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      // Handle modal close logic here
    }
  };



  return (
    <div>
          <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content" ref={modalRef}>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
        <div className="px-14 py-36  bg-slate-100">
        
        <img
        src="image-url.jpg"  // Replace "image-url.jpg" with the URL of your image
              className="w-full ml-32"
            />

        <div className='flex flex-col space-y-4'>
             <p className='text-[14px]'>
              Alan Santo
             </p> 
        <div className='flex flex-col space-y-3'>
             <p className='text-[15px]'>
              Full Stack Developer
             </p> 

           <div className='flex flex-col space-y-6'> 

           <div >
            <p className='text-[12px]'>A kiddo who uses tailwind css and laravel
             in web development. Currently playing around with
              design via figma</p>
            </div>

          <div className='flex flex-col h-2 w-56 space-y-4 ml-10'>
          <button className='w-48 bg-violet-400'></button> 
          <button className='w-48 bg-violet-400'></button>
          <button className='w-48 bg-violet-400'></button>



          <div className='flex flex-row h-2  space-x-4 ml-0 text-md '>
          <a
                    href="https://twitter.com/your-twitter-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-38'
                  >
                    <span role="img" aria-label="Twitter Symbol">&#128172;</span>
                  </a>
                  <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-48'
                  >
                    <span role="img" aria-label="GitHub Symbol">&#128187;</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-48 '
                  >
                   <span role="img" aria-label="LinkedIn Symbol">&#128100;</span>
                  </a>
            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default CardModal;
