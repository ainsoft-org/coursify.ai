import React, { useState, useEffect, FormEvent } from 'react';
import Success from './Success';

const Joinlist = ({ setOpenModal }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    pname: '',
    students: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
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
    <div className="fixed inset-0 z-30 overflow-y-auto">
      <div className="fixed inset-0 h-full w-full bg-[#1E1E1E] opacity-60"></div>
      <div className="flex min-h-screen items-center px-4 py-8">
        <div
          className="relative mx-auto w-full max-w-[750px] rounded-lg border border-solid border-[#242A30] bg-[#0D0D0D] p-4 md:px-10 md:py-9"
          style={{
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <button
            onClick={() => setOpenModal(false)}
            type="button"
            className="absolute right-[10px] top-[10px] flex h-6 w-6 items-center justify-center rounded-full bg-[#272727]"
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
          <h1 className="mb-4 font-inter text-base font-semibold leading-5 text-[#CFCFCF] md:text-xl md:leading-6">
            Join our waitlist for upcoming beta release
          </h1>
          <form>
            <div className="mb-4 flex flex-col">
              <label className="mb-1 font-inter text-xs font-normal leading-6 text-[#4F4F4F]">
                Write your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-lg border border-solid border-[#3A3A3A] bg-[#0D0D0D] px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-1 font-inter text-xs font-normal leading-6 text-[#4F4F4F]">
                Your Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="rounded-lg border border-solid border-[#3A3A3A] bg-[#0D0D0D] px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-1 font-inter text-xs font-normal leading-6 text-[#4F4F4F]">
                Have you tried selling courses on other planforms?
              </label>
              <input
                type="text"
                name="pname"
                placeholder="Specify the platform name"
                className="rounded-lg border border-solid border-[#3A3A3A] bg-[#0D0D0D] px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-1 font-inter text-xs font-normal leading-6 text-[#4F4F4F]">
                How many students you are expected to have?
              </label>
              <input
                type="text"
                name="students"
                placeholder="Number of students"
                className="rounded-lg border border-solid border-[#3A3A3A] bg-[#0D0D0D] px-4 py-[13.5px] text-[#ACACAC]"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-9 flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="text-6 flex h-[44px] w-full max-w-[180px] items-center justify-center rounded-lg border border-solid border-[#4F4F4F] bg-[#0D0D0D] font-inter font-medium text-[#4F4F4F]"
              >
                No, cancel
              </button>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className={`${
                  !isButtonDisabled ? '' : 'disabled'
                } yes-btn text-6 ml-4 flex h-[44px] w-full max-w-[180px] items-center justify-center rounded-lg font-inter font-medium text-white`}
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
