import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import interview1 from './images/image.png';
import interview2 from './images/interview2.png';
import interview3 from './images/interview3.png';
import interview4 from './images/inteview4.png';
// import interview5 from './images/interview5.png';

const images = [interview1, interview2, interview3, interview4];


const topics = [
  {
    name: 'Practice Interview',
    path: '/practise-quiz',
    icon: 'https://cdn-icons-png.flaticon.com/512/4226/4226023.png',
    description: 'Prepare for your next job interview with our comprehensive Practice Interview feature. This tool offers a wide range of questions tailored to various job roles, ensuring you’re ready for any challenge. Receive instant AI-driven feedback on your answers to identify strengths and areas for improvement. The platform simulates real interview scenarios, helping you build confidence and reduce anxiety. Whether you’re a fresh graduate or a seasoned professional, our question bank covers technical, behavioral, and situational questions. Track your progress over time, refine your responses, and increase your chances of landing your dream job with personalized insights and tips.',
  },
  {
    name: 'Daily Weekly',
    path: '/daily',
    icon: 'https://cdn-icons-png.flaticon.com/512/3659/3659895.png',
    description: 'Stay on top of your learning goals with our Daily Weekly challenges, designed to keep your skills sharp and consistent. Each day, you’ll receive a new set of tasks that test your knowledge across various domains, from coding to soft skills. Weekly challenges offer deeper, more complex problems to push your limits and encourage growth. This feature is perfect for maintaining a regular learning habit, ensuring you don’t fall behind. Earn points for completing tasks, compete with friends, and track your streak to stay motivated. With diverse topics and adaptive difficulty, Daily Weekly ensures continuous improvement in a fun, engaging way.',
  },
  {
    name: 'Upskilling',
    path: '/upskilling',
    icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062608.png',
    description: 'Elevate your career with our Upskilling section, offering a vast library of resources to learn in-demand skills. From Blockchain to Machine Learning, explore curated courses, tutorials, and certifications tailored to your career goals. Access video content, articles, and hands-on projects to deepen your understanding of complex topics. Our platform connects you with industry experts through webinars and Q&A sessions, ensuring you stay updated on the latest trends. Whether you’re looking to switch careers or advance in your current role, Upskilling provides structured learning paths. Build a portfolio of certifications to showcase your expertise and stand out in the competitive job market.',
  },
  {
    name: 'Resume',
    path: '/resume-builder',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    description: 'Craft a standout resume with our Resume Builder, designed to help you make a lasting impression on employers. Choose from a variety of professionally designed templates, such as Modern Gray or Classic Blue, to match your style and industry. Easily input your details, skills, and experience using our intuitive form, with real-time previews to see your resume take shape. Customize fonts, colors, and layouts to create a unique, polished document. Our AI-powered suggestions ensure your resume is optimized with the right keywords for applicant tracking systems. Download your resume as a PDF and get hired faster with a professional, tailored presentation.',
  },
  {
    name: 'Chatbot',
    path: null,
    icon: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
    description: 'Experience personalized support with our AI-powered Chatbot, your 24/7 learning companion. Whether you’re stuck on a coding problem, need career advice, or want clarification on a concept, the Chatbot provides instant, accurate responses. It understands natural language, making interactions seamless and intuitive. Ask for study tips, get recommendations on courses, or even practice mock interview questions on the go. The Chatbot learns from your interactions to offer tailored guidance, ensuring you get the most relevant help. Perfect for quick queries or in-depth discussions, this tool enhances your learning journey by providing support whenever and wherever you need it.',
  },
];

const logoutButton = async () => {
  try {
    const res = await fetch("/api/v1/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2A44] to-[#1A2A44] flex flex-col items-center font-sans text-white relative">
      {/* Navigation Bar
      <div className="fixed top-0 left-0 right-0 flex justify-end w-full px-40 py-5 bg-[#1A2A44] shadow-md z-20">
        <div className="flex space-x-8">
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white" onClick={() => navigate('/')}>Home</div>
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white" onClick={() => navigate('/practise-quiz')}>Practise Quiz</div>
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white"onClick={() => navigate('/daily')}>Daily Weekly</div>
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white" onClick={() => navigate('/upskilling')}>Upskilling</div>
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white" onClick={() => navigate('/resume-builder')}>Resume Builder</div>
          <div className="text-[#A3BFFA] text-base cursor-pointer hover:text-white">Chat Bot</div>
        </div>
      </div> */}

      {/* Logout Button */}
      <button
        className="fixed top-3 right-10 px-5 py-2 border border-[#A3BFFA] text-[#A3BFFA] rounded-md hover:bg-[#A3BFFA] hover:text-[#1A2A44] transition-all z-20"
        onClick={logoutButton}
      >
        Logout
      </button>

      {/* Main Content */}
      <div className="text-center mt-24 z-10">
        <h1 className="text-5xl font-bold leading-tight mb-5">Hire and upskill for an AI-powered world</h1>
        <p className="text-xl text-[#A3BFFA] mb-10 max-w-2xl mx-auto">
          Evaluate any skill quickly, accurately, and affordably with unlimited technical assessments and interviews.
        </p>

        {/* Carousel */}
        <div className="mb-10 max-w-5xl mx-auto">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={2500}
            showStatus={false}
            className="bg-white rounded-lg shadow-lg"
          >
            {images.map((src, index) => (
              <div key={index}>
                <img
  src={src}
  alt={`Slide ${index + 1}`}
  className="w-full h-[calc(90vh-8rem)] object-contain rounded-lg"
/>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Topics List */}
        <div className="max-w-5xl mx-auto mb-10">
  {topics.map((topic, index) => (
    <div
      key={topic.name}
      className={`flex items-center justify-between p-8 bg-white rounded-lg shadow-md mb-6 transition-all duration-300 min-h-56 ${
        topic.path ? 'cursor-pointer hover:bg-gray-100' : 'cursor-default'
      }`}
      onClick={() => topic.path && navigate(topic.path)}
    >
      {/* Content Section */}
      <div className="flex-1 pr-8">
        <h3 className="text-2xl font-semibold text-[#1A2A44] mb-3">{topic.name}</h3>
        <p className="text-base text-gray-600 text-justify">{topic.description}</p>
      </div>

      {/* Icon Section - moved to right & enlarged */}
      <img
        src={topic.icon}
        alt={`${topic.name} icon`}
        className="w-24 h-24 ml-4 flex-shrink-0"
      />
    </div>
  ))}
</div>

</div>
      {/* Background Dots Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle,#34D399_2px,transparent_2px)] bg-[length:20px_20px] opacity-30 z-0" />

      {/* Hide elements not in the reference design */}
      <div className="hidden">
        <div className="text-3xl font-bold underline text-blue-500 text-center">
          Tailwind is working!
        </div>
        <div className="min-h-screen bg-gray-50">
          {/* Navbar */}
          <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
            <div className="flex items-center">
              <div className="text-xl font-bold text-purple-600">himalayas</div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Companies</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Talent</a>
              <div className="relative group">
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                  Tools
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900">Salary</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Advice</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Updates</a>
            </div>
            <div className="flex space-x-3">
              <button className="text-gray-600 hover:text-gray-900">Log in</button>
              <button className="text-gray-600 hover:text-gray-900">Post a job</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Sign up
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-16 px-4">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">AI Interview Practice</h1>
              <p className="text-gray-600 mb-6">
                Ace your next job interview by practicing with questions tailored to ANY job description.
                Get instant AI feedback, improve your answers, and grow your confidence. Your first mock
                interview is free.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
                Get started for free
              </button>
              <p className="text-gray-500 text-sm mt-2">No credit card required</p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-500 text-sm mb-2">Prepare for your next interview as a <span className="text-purple-600">UX Designer</span></p>
              <p className="text-lg font-semibold text-gray-900">
                Describe the design process from ideation to implementation. How do you incorporate user feedback?
              </p>
              <div className="flex items-center mt-4">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Answer
                </button>
                <button className="ml-2 p-2 text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16" />
                  </svg>
                </button>
                <button className="ml-2 p-2 text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="max-w-6xl mx-auto mt-16 px-4">
            <div className="border-t pt-8">
              <p className="text-purple-600 font-semibold mb-2">AI Interview Prep</p>
              <p className="text-gray-600 mb-4">How it works</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
                Start an interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;