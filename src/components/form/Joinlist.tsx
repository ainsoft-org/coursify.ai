import React, { useState,useEffect } from 'react';
import Success from './Success';

const Joinlist = ({ setOpenModal }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    pname: '',
    students:'',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    const isFormFilled =
      inputs.name.trim() !== '' &&
      inputs.email.trim() !== '' &&
      inputs.students.trim() !== '' &&
      inputs.pname.trim() !== '';

    setIsButtonDisabled(!isFormFilled);
  }, [inputs]);
  return (
    <div className="fixed inset-0 overflow-y-auto z-30">
      <div className="fixed inset-0 w-full h-full bg-[#1E1E1E] opacity-60"></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div
          className="relative w-full max-w-[750px] p-4 md:py-9 md:px-10 mx-auto bg-[#0D0D0D] rounded-lg border border-solid border-[#242A30]"
          style={{
            boxShadow:
              '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className="rounded-full bg-[#272727] flex items-center justify-center w-6 h-6 absolute top-[10px] right-[10px]"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.58716 3.88906L9.47622 0L10.5872 1.11094L6.69809 5L10.5872 8.88906L9.47622 10L5.58716 6.11094L1.69809 10L0.587158 8.88906L4.47622 5L0.587158 1.11094L1.69809 0L5.58716 3.88906Z"
                fill="#4F4F4F"
              />
            </svg>
          </button>
          <h1 className="font-inter text-base md:text-xl leading-5 md:leading-6 font-semibold text-[#CFCFCF] mb-4">
            Join our waitlist for upcoming beta release
          </h1>
          <form>
            <div className="flex flex-col mb-4">
              <label className="text-xs text-[#4F4F4F] leading-6 font-inter font-normal mb-1">
                Write your name
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="bg-[#0D0D0D] border-[#3A3A3A] border border-solid rounded-lg px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xs text-[#4F4F4F] leading-6 font-inter font-normal mb-1">
                Your Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="bg-[#0D0D0D] border-[#3A3A3A] border border-solid rounded-lg px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xs text-[#4F4F4F] leading-6 font-inter font-normal mb-1">
                Have you tried selling courses on other planforms?
              </label>
              <input
                type="text"
                name='pname'
                placeholder="Specify the platform name"
                className="bg-[#0D0D0D] border-[#3A3A3A] border border-solid rounded-lg px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-xs text-[#4F4F4F] leading-6 font-inter font-normal mb-1">
                How many students you are expected to have?
              </label>
              <input
                type="text"
                name='students'
                placeholder="Number of students"
                className="bg-[#0D0D0D] border-[#3A3A3A] border border-solid rounded-lg px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-9 flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="border-[#4F4F4F] border border-solid rounded-lg bg-[#0D0D0D] text-6 text-[#4F4F4F] font-inter font-medium max-w-[180px] flex items-center justify-center w-full h-[44px]"
              >
                No, cancel
              </button>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className={`${!isButtonDisabled ? '' :'disabled'} ml-4 yes-btn rounded-lg text-6 font-inter font-medium max-w-[180px] flex items-center justify-center w-full h-[44px] text-white`}
                disabled={isButtonDisabled}
              >
                Yes, confirm
              </button>
              {showModal && <Success setOpenModal={setShowModal} />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Joinlist;
