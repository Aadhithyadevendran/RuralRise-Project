import React from "react";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import TemplateSelector from "./pages/ResumeBuilderPage/TemplateSelector";
import ChallengeMCQPage from "./pages/Daily/ChallengeMCQPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/HomePage/Home";
import Homes from "./pages/upskilling/pages/Homes";
import Blockchain from "./pages/upskilling/pages/domain/Blockchain";
import DSA from "./pages/upskilling/pages/domain/DSA";
import MERN from "./pages/upskilling/pages/domain/MERN";
import SQL from "./pages/upskilling/pages/domain/SQL";
import Cloud from "./pages/upskilling/pages/domain/Cloud";
import CyberSecurity from "./pages/upskilling/pages/domain/CyberSecurity";
import JavaFullstack from "./pages/upskilling/pages/domain/JavaFullstack";
import ML from "./pages/upskilling/pages/domain/ml";
import Python from "./pages/upskilling/pages/domain/Python";
import ResumeForm from "./pages/ResumeBuilderPage/ResumeForm";
import MockInterviewPage from "./pages/PractiseQuizPage/PractiseQuiz";
import ChallengesPage from "./pages/Daily/ChallengesPage";
import MockInterview from "./pages/chatbot/chatbot";

// Layout
import Layout from "./components/Layout";

function App() {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://ruralrise-project.onrender.com/api/v1/auth/user",
          {
            credentials: "include", // Ensure cookies are sent if using sessions
          }
        );
        const data = await res.json();
        if (!res.ok || data.error) {
          throw new Error(data.error || "Something went wrong");
        }
        console.log("authUser is here:", data);
        return data;
      } catch (error) {
        console.error("Error fetching auth user:", error);
        return null;
      }
    },
    retry: false,
  });

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={!authUser ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/home" />}
        />

        {/* Protected Routes */}
        {authUser && (
          <Route element={<Layout />}>
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/home" element={<Home />} />
            <Route path="/daily" element={<ChallengesPage />} />
            <Route
              path="challenge-mcq/:type/:id"
              element={<ChallengeMCQPage />}
            />
            <Route path="/upskilling" element={<Homes />} />
            <Route path="/domain/blockchain" element={<Blockchain />} />
            <Route path="/domain/dsa" element={<DSA />} />
            <Route path="/domain/mern" element={<MERN />} />
            <Route path="/domain/sql" element={<SQL />} />
            <Route path="/domain/cloud" element={<Cloud />} />
            <Route path="/domain/cyber-security" element={<CyberSecurity />} />
            <Route path="/domain/java-fullstack" element={<JavaFullstack />} />
            <Route path="/domain/ml" element={<ML />} />
            <Route path="/domain/python" element={<Python />} />
            <Route path="/resume-builder" element={<TemplateSelector />} />
            <Route path="/resume-form" element={<ResumeForm />} />
            <Route path="/practise-quiz" element={<MockInterviewPage />} />
          </Route>
        )}

        {/* Catch-all fallback for unauthorized access */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
