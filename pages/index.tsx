import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react';
import Joinlist from '@/components/Joinlist';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="bg-[#0D0D0D] fixed w-full z-20 top-0 left-0 h-[100px]">
        <div className="max-w-[1352px] flex flex-wrap items-center justify-between mx-auto p-4 py-7 h-full">
          <a href="#" className="flex items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={167}
              height={30}
              className='w-[130px] md:w-[167px]'
            />
          </a>
          <div className="flex lg:order-2">
            <button type="button" className="join-waitlist-btn text-white font-unbounded font-normal lg:text-xl text-base px-3 py-2 text-center mr-3 lg:mr-0"  onClick={() => {
                    setShowModal(true);
                }}>Join Waitlist</button>
            <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={handleClick}>
                <span className="sr-only">Open main menu</span>
                {isActive ? (
                  <svg fill="#fff" className="w-6 h-6" viewBox="-0.18 -0.18 0.72 0.72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                    <path d="m0.219 0.177 0.106 -0.106A0.03 0.03 0 1 0 0.283 0.028L0.177 0.135 0.071 0.028A0.03 0.03 0 1 0 0.028 0.071l0.106 0.106L0.028 0.283a0.03 0.03 0 1 0 0.042 0.042l0.106 -0.106 0.106 0.106a0.03 0.03 0 1 0 0.042 -0.042L0.219 0.177z" />
                  </svg>
                  ) : (
                  <svg className="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                )}
            </button>
          </div>
          <div className={`h-screen lg:h-auto bg-[#0D0D0D] items-center justify-between w-full lg:flex lg:w-auto lg:order-1 absolute z-[1] top-[100px] lg:z-auto lg:static left-0 transition-all ease-in duration-300 opacity-0 ${isActive ? 'opacity-100' : 'opacity-0 '} lg:opacity-100` }>
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-xl lg:flex-row lg:space-x-6 lg:mt-0">
              <li>
                <Link href="#" className="navar-item block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:p-0 font-sora font-normal active" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal">Features</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal">Blog</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal">Testimonials</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 pl-3 pr-4 lg:p-0 text-white font-sora font-normal">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className='w-full hero-section lg:py-[226px] py-[150px] pb-[50px] relative bg-[#0D0D0D] overflow-hidden text-center lg:text-left'>
        <div className='max-w-[1352px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 relative z-[1]'>
          <div className='lg:pr-7 pr-0 max-w-[612px]'>
            <h1 className='lg:text-[56px] text-[46px] leading-[59px] lg:leading-[69px] text-white font-unbounded font-semibold'>Effortless AI-Powered <span className='gradient-text'>Course Building</span></h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white my-6 font-inter font-normal'>Empowering Educators, Revolutionizing Learning: The Future of Course Creation</p>
            <button type="button" className='join-waitlist-btn font-unbounded font-normal text-white font-medium lg:text-[28px] text-[22px] px-6 py-3 text-center mr-3 md:mr-0' onClick={() => {
                    setShowModal(true);
                }}>Join Waitlist Now</button>
          </div>
          <div className='lg:pl-7 pl-0 lg:max-w-[589px] max-w-[489px] lg:mb-0 mb-3 w-full lg:max-h-[424px] max-h-[350px] h-full rounded-[64px] overflow-hidden relative flex items-center justify-center'>
            <Image
              src="/assets/images/video.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/assets/images/video-play.png"
              alt="logo"
              width={80}
              height={80}
              className='absolute cursor-pointer'
            />
          </div>
        </div>
      </section>

      <section className='w-full lg:py-24 py-20 relative bg-[#101010]'>
        <div className='max-w-[1352px] mx-auto px-4'>
          <div className='mb-14 max-w-[538px]'>
            <h1 className='text-white lg:text-[57px] text-[46px] leading-[59px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold'>🚀 Features</h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal'>Smart <span className='gradient-text font-inter font-bold'>Course Design</span>, <span className='gradient-text font-inter font-bold'>Personalized Learning</span>, Infinite Possibilities</p>
          </div>
          <div className='flex justify-between md:space-x-4 space-x-0 space-y-4 md:space-y-0 md:flex-row flex-col'>
            <div className="md:max-w-sm max-w-full w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/adaptive-content-generation.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Adaptive Content Generation</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] font-inter font-normal text-[#D6D6D6]">Cutting-Edge AI: Generate tailored, engaging content that meets learner needs and goals for an enhanced educational experience.</p>
            </div>
            <div className="md:max-w-sm max-w-full w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/seamless-integration.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Seamless Integration</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] font-inter font-normal text-[#D6D6D6]">Coursify.AI: Simplify course creation with seamless LMS integration and streamlined workflows, saving time and effort.</p>
            </div>
            <div className="md:max-w-sm max-w-full w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/powerful-analytics-insights.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Powerful Analytics & Insights</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] font-inter font-normal text-[#D6D6D6]">Boost courses with data-driven insights, optimizing content for greater retention and success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='benefits-section w-full lg:py-[73px] py-20 relative bg-[#101010]'>
        <div className='max-w-[1352px] mx-auto px-4'>
          <div className='mb-14 max-w-[538px]'>
            <h1 className='text-white lg:text-[57px] text-[46px] leading-[59px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold'>😉 Benefits</h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal'>Elevate Learning Experiences, <span className='gradient-text font-inter font-bold'>Maximize Engagement</span>, and Achieve <span className='gradient-text font-inter font-bold' style={{background: 'linear-gradient(130.03deg, #2F76FF 7.3%, #7270FF 53.65%, #FF2FF7 96.62%)'}}>Unparalleled Success</span></p>
          </div>
          <div className='flex justify-between md:space-x-4 space-x-0 space-y-4 md:space-y-0 md:flex-row flex-col'>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] benefit-card">
              <Image
                src="/assets/images/enhanced-learner-engagement.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Enhanced Learner Engagement</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6] font-inter font-normal">Captivate your audience with AI-generated content that adapts to their needs, ensuring a personalized and immersive learning journey.</p>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] benefit-card">
              <Image
                src="/assets/images/improved-learning-outcomes.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Improved Learning Outcomes</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6] font-inter font-normal">Harness the power of AI to create effective courses that lead to increased knowledge retention, skill development, and learner success.</p>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] benefit-card">
              <Image
                src="/assets/images/streamlined-course-creation.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl tracking-tight text-white my-4 font-unbounded font-semibold">Streamlined Course Creation</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6] font-inter font-normal">Save valuable time and resources with our user-friendly platform, enabling you to focus on delivering the highest quality educational experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full lg:py-24 py-20 relative bg-[#101010] reviews-section'>
        <div className='max-w-[1352px] mx-auto px-4'>
          <div className='mb-14 max-w-[538px]'>
            <h1 className='text-white lg:text-[57px] text-[46px] leading-[59px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold'>👨🏻‍💻 Reviews</h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal'><span className='gradient-text font-inter font-bold'>Empowering Educators</span>, <span className='gradient-text font-inter font-bold' style={{background: 'linear-gradient(130.03deg, #2F76FF 7.3%, #7270FF 53.65%, #FF2FF7 96.62%)'}}>Transforming Courses: </span>See What Our Users Have to Say</p>
          </div>
          <div className='flex justify-between md:space-x-4 space-x-0 space-y-4 md:space-y-0 md:flex-row flex-col'>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/reviews-img-1.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <Image
                src="/assets/images/reviews-stars.png"
                alt="logo"
                width={120}
                height={25}
                className='mt-4'
              />
              <h5 className="lg:text-2xl text-[18px] font-inter font-bold tracking-tight text-white my-4">Sarah K. University Professor</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6] font-inter font-normal">Coursify.AI has completely revolutionized the way I design my courses. The AI-generated content adapts to my students' needs, making learning more engaging and enjoyable. I've seen a noticeable improvement in knowledge retention and overall success.</p>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/reviews-img-2.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <Image
                src="/assets/images/reviews-stars.png"
                alt="logo"
                width={120}
                height={25}
                className='mt-4'
              />
              <h5 className="lg:text-2xl text-[18px] font-inter font-bold tracking-tight text-white my-4">David L. Instructional Designer</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6]  font-inter font-normal">As an instructional designer, Coursify.AI has been a game-changer for me. The seamless integration with our LMS and the time-saving features have made course creation a breeze. I can now focus on creating more impactful learning experiences for my clients.</p>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px]" style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
              <Image
                src="/assets/images/reviews-img-3.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <Image
                src="/assets/images/reviews-stars.png"
                alt="logo"
                width={120}
                height={25}
                className='mt-4'
              />
              <h5 className="lg:text-2xl text-[18px] font-inter font-bold tracking-tight text-white my-4">Jessica R. E-Learning Specialist</h5>
              <p className="lg:text-2xl text-[18px] leading-[29px] text-[#D6D6D6]  font-inter font-normal">I've tried multiple course creation platforms, but Coursify.AI stands out for its powerful analytics and insights. The data-driven approach has enabled me to optimize my courses and achieve better learning outcomes for my students. I highly recommend it!</p>
            </div>
          </div>
        </div>
      </section>

      <section className='pricing-section w-full lg:py-24 py-20 relative bg-[#101010]'>
        <div className='max-w-[1352px] mx-auto px-4'>
          <div className='mb-14 max-w-[538px]'>
            <h1 className='text-white lg:text-[57px] text-[46px] leading-[59px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold'>😉 Pricing</h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal'>Introducing <span className='gradient-text font-inter font-bold'>Flexible Pricing Plans </span>to Suit Your Needs</p>
          </div>
          <div className='flex justify-between md:space-x-4 space-x-0 space-y-4 md:space-y-0 md:flex-row flex-col'>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] pricing-card">
              <Image
                src="/assets/images/pricing-img-1.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl text-[#D6D6D6] capitalize font-unbounded font-semibold tracking-tight my-4">Starter Plan</h5>
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl text-[#D6D6D6] capitalize font-unbounded font-semibold tracking-tight my-4">$29/month</h5>
              <ul className='mb-4 list-disc lg:pl-9 pl-6'>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Access to core AI-powered course generation features</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">1 user account</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Up to 5 active courses</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Standard analytics and insights</li>
              </ul>
              <button type="button" className="join-waitlist-btn text-white font-unbounded font-normal text-xl px-4 py-2 text-center mr-3 md:mr-0">Try now</button>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] pricing-card">
              <Image
                src="/assets/images/pricing-img-2.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl text-[#D6D6D6] capitalize font-unbounded font-semibold tracking-tight my-4">Pro Plan</h5>
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl text-[#D6D6D6] capitalize font-unbounded font-semibold tracking-tight my-4">$69/month</h5>
              <ul className='mb-4 list-disc lg:pl-9 pl-6'>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Advanced AI-generated content capabilities</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">3 user accounts</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Up to 20 active courses</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Enhanced analytics and insights</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Priority customer support</li>
              </ul>
              <button type="button" className="join-waitlist-btn text-white font-unbounded font-normal text-xl px-4 py-2 text-center mr-3 md:mr-0">Get Started</button>
            </div>
            <div className="md:max-w-sm max-w-full py-[42px] px-6 bg-[#0D0D0D] rounded-[12px] pricing-card">
              <Image
                src="/assets/images/pricing-img-3.svg"
                alt="logo"
                width={96}
                height={96}
              />
              <h5 className="lg:text-[32px] lg:leading-[40px] text-xl text-[#D6D6D6] capitalize font-unbounded font-semibold tracking-tight my-4">Enterprise</h5>
              <ul className='mb-4 list-disc lg:pl-9 pl-6'>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Tailored to your organization's needs</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Unlimited user accounts</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Unlimited active courses</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Advanced analytics and custom integrations</li>
                <li className="lg:text-2xl text-[18px] font-inter font-normal text-[#D6D6D6]">Dedicated account manager and priority support</li>
              </ul>
              <button type="button" className="join-waitlist-btn text-white font-unbounded font-normal text-xl px-4 py-2 text-center mr-3 md:mr-0">Contact Sales</button>
            </div>
          </div>
          <p className='text-white lg:text-2xl text-xl leading-[29px] text-center mt-14 font-inter font-normal'>All plans include a 14-day free trial. Discover the power of Coursify.AI and elevate your course creation today!</p>
        </div>
      </section>

      <section className='w-full lg:py-24 py-20 relative bg-[#101010]'>
        <div className='max-w-[1352px] mx-auto px-4'>
          <div className='max-w-[538px]'>
            <h1 className='text-white lg:text-[57px] text-[42px] leading-[56px] Lg:leading-[71px] capitalize mb-6 font-unbounded font-semibold'>🚀 Contact us</h1>
            <p className='lg:text-2xl text-xl leading-[29px] text-white font-inter font-normal'>Tailor your plan to your specific business needs with our enterprise offering.</p>
            <p className='text-white lg:text-2xl text-xl leading-[29px] font-inter font-semibold'>+1 (509) 903 6943</p>
            <p className='text-white lg:text-2xl text-xl leading-[29px] mb-[40px] font-inter font-semibold'>info@writersbrain.ai</p>
            <p className='text-[#D6D6D6] lg:text-2xl text-xl leading-[29px] mb-2 font-inter font-normal'>At Coursify.AI we are committed to protecting the privacy of our costumers.</p>
            <ul className="flex mt-4 text-xl md:space-x-3 space-x-2 md:mt-0 mb-6">
              <li>
                <Link href="#" className="block md:p-0 text-[#6462FF] lg:text-2xl text-xl font-inter font-semibold">Privacy policy</Link>
              </li>
              <li>
                <Link href="#" className="block md:p-0 text-[#6462FF] lg:text-2xl text-xl font-inter font-semibold">Tems & Conditions</Link>
              </li>
            </ul>
            <div className='flex items-center'>
              <Image
                src="/assets/images/github.svg"
                alt="logo"
                width={32}
                height={32}
                className='mr-3 cursor-pointer'
              />
              <Image
                src="/assets/images/twitter.svg"
                alt="logo"
                width={32}
                height={32}
                className='mr-3 cursor-pointer'
              />
              <Image
                src="/assets/images/instagram.svg"
                alt="logo"
                width={32}
                height={32}
                className='mr-3 cursor-pointer'
              />
              <Image
                src="/assets/images/linkdin.svg"
                alt="logo"
                width={32}
                height={32}
                className='mr-3 cursor-pointer'
              />
            </div>
          </div>
        </div>
      </section>
      {showModal && <Joinlist setOpenModal={setShowModal} />}
    </main>
    {/* <div className='login-container w-full h-screen relative flex items-center justify-center p-4'>
      <div className='bg-[#151515] md:py-14 py-4 md:px-[42px] px-4 max-w-[536px] w-full text-center' style={{ boxShadow: '0px 0px 10px rgba(76, 72, 255, 0.04)' }}>
        <h1 className='md:text-[42px] md:leading-[52px] leading-[42px] text-3xl text-white font-unbounded font-semibold md:mb-6 mb-3'>Login</h1>
        <p className='md:text-2xl text-xl md:leading-[30px] leading-6 text-white md:mb-6 mb-3 font-sora font-normal'>Login using one of your social accounts</p>
        <button type='button' className='btn active font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/google-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Google
        </button>
        <button type='button' className='btn font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/apple-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using Apple
        </button>
        <button type='button' className='btn font-unbounded font-bold relative w-full flex items-center justify-center md:py-5 py-3 md:px-6 px-3 bg-[#111111] text-white md:text-xl text-base mb-3'>
          <Image
            src="/assets/images/github-icon.svg"
            alt="logo"
            width={24}
            height={24}
            className='mr-2 absolute left-5'
          />
          Log in using GitHub
        </button>
        <p className='md:mt-6 mt-3 text-white md:text-xl text-base font-sora font-normal'>Powered by <span className='font-sora font-bold'>ainsoft™️</span></p>
      </div>
    </div> */}
    </>
  )
}
