import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { About, Achievements, Projects, Leadership, Events, Skills, Aspirations, Contact } from './pages/Pages';

export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="achievements" element={<Achievements/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="leadership" element={<Leadership/>}/>
    <Route path="events" element={<Events/>}/>
    <Route path="skills" element={<Skills/>}/>
    <Route path="aspirations" element={<Aspirations/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<main className="not-found"><h1>Page not found.</h1><a href="/">Return home ↗</a></main>}/>
  </Route></Routes>;
}
