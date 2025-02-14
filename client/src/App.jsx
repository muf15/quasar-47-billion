import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

// Import Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./components/LoginSCreens/Login";
import RegisterScreen from "./components/LoginSCreens/RegisterScreen";
import HeroSection from "./components/HomePage/HeroSection";
import VideoWithPlayButton from "./components/HomePage/VideoWithPlayButton";
import BenefitsSection from "./components/HomePage/BenefitsSection";
import CourseSection from "./components/HomePage/CourseSection";
import Testimonials from "./components/HomePage/Testimonials";
import FAQ from "./components/HomePage/FAQ";
import Video from "./components/SCreen3/Video";
import ChillGuy from "./components/SCreen3/ChillGuy";
import PracticeQuiz from "./components/QuizSCreen/PracticeQuiz";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Achievements from "./components/WhoWeAre/Acievements";
import Goals from "./components/WhoWeAre/Goals";
import AiHeader from "./components/Ai/AIHeader";
import ContactUs from "./components/Contact/Contactus";
import Course from "./components/CoursePage/Course";
import Header from "./components/JobPage/Header";
import CourseHeader from "./components/CoursePage/CourseHeader";
import JobApplyPage from "./components/JobPage/JobApplyPage";
import RecommendedJobs from "./components/JobPage/RecommendedJobs";
import JobHeader from "./components/Jobposting/JobHeader";
import JobPostingForm from "./components/Jobposting/JobPostingForm";
import VideoCallHeader from "./components/Videocall/VideoCallHeader";
import MentorCard from "./components/Videocall/MentorCard";
import QuoteSection from "./components/Videocall/QuoteSection";
import BankingDashboard from "./components/Dashboard/BankingDashboard";
import MCQ from "./components/ModuleQuiz/MCQ";
import ContactHeader from "./components/Contact/ContactHeader";
import Chat from "./components/Ai/Chat";
import TeamSection from "./components/Contact/TeamSection";
import ResumeBuilder from "./components/Resume/Resumebuilder";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <QuoteSection/>
              <VideoWithPlayButton />
              <BenefitsSection />
              <CourseSection />
              <Testimonials />
              <QuoteSection/>
            
              <FAQ />
            </div>
          }
        />

        {/* Course section */}
         <Route
            path="/Courses"
            element={
              <div>
                <CourseHeader/>
                <Course /> 
                <QuoteSection/>
              </div>
            }
          />

        {/* Login/Register Page */}
        <Route
          path="/login"
          element={
            <div>
              <LoginScreen />
           
             
            </div>
          }
        />
        <Route
          path="/Jobposting"
          element={
            <div>
              <JobHeader />
              <JobPostingForm />
           
             
            </div>
          }
        />
        <Route
          path="/video-call"
          element={
            <div>
              <VideoCallHeader />
              <MentorCard />
              <QuoteSection />
           
             
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              
              <BankingDashboard />
           
             
            </div>
          }
        />
        <Route
          path="/kani"
          element={
            <div>
              
              <MCQ />
           
             
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
      <RegisterScreen />
           
             
            </div>
          }
        />

        {/* Who We Are Page */}
        <Route
          path="/who-we-are"
          element={
            <div>
              <WhoWeAre />
              <QuoteSection/>
              <Achievements />
              <Goals />
            </div>
          }
        />

        {/* Screen 3 Page */}
        <Route
          path="/screen3"
          element={
            <div>
              <Video />
              <ChillGuy />
            </div>
          }
        />

        {/* Quiz Page */}
        <Route
          path="/quiz"
          element={
            <div>
              <PracticeQuiz />
            </div>
          }
        />

        {/* New Page 1 */}
        
        
       
        
        <Route
          path="/contact"
          element={
            <div>
              <ContactHeader/>
              <TeamSection/>
              <ContactUs/>
            
            </div>
          }
        />
        <Route
          path="/job"
          element={
            <div>
              <Header/>
              
              <JobApplyPage/>
              <RecommendedJobs/>
            </div>
          }
        />
        <Route
          path="/ai"
          element={
            <div>
              <AiHeader/>
              <Chat/>
            </div>
          }
        />

        {/* New Page 2 */}
        <Route
          path="/resume"
          element={
            <div>
              <ResumeBuilder/>
              <p>This is the content of the second new page.</p>
            </div>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
    </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
