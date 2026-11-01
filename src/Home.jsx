import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Code2, Lightbulb, Compass, MoveRight } from 'lucide-react';
import { achievements, projects } from '../data';
import { Eyebrow, Reveal, SectionHeading } from '../components/Primitives';

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <Eyebrow>STUDENT &amp; YOUNG INNOVATOR</Eyebrow>
        <p className="hero-pretitle">HELLO, I'M</p>
        <h1>Building ideas.<br/><span>Exploring possibilities.</span><br/>Creating impact<span className="blue-period">.</span></h1>
        <p className="hero-copy">A student, innovator and aspiring civil servant exploring technology, leadership and meaningful change.</p>
        <div className="hero-actions"><Link className="button" to="/projects">Explore My Work <ArrowUpRight size={17}/></Link><Link className="button button-secondary" to="/about">About Me <ArrowUpRight size={17}/></Link></div>
        <div className="hero-meta"><span><i className="pulse-dot"/> OPEN TO LEARNING &amp; COLLABORATION</span><span>BASED IN INDIA</span></div>
      </div>
      <div className="hero-side-note">CURIOSITY<br/>→ IDEAS<br/>→ ACTION</div>
      <a className="scroll-cue" href="#highlights"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
    </section>
    <section id="highlights" className="section-block">
      <SectionHeading eyebrow="A FEW MILESTONES" title="Learning by doing." note="A snapshot of the roles and experiences that continue to shape my journey."/>
      <div className="stats-grid">
        {achievements.slice(0,3).map((a,i)=><Reveal key={a.label} delay={i*.08} className="stat-card"><div className="stat-value">{a.value}</div><h3>{a.label}</h3><p>{a.detail}</p></Reveal>)}
      </div>
    </section>
    <section className="section-block feature-section">
      <SectionHeading eyebrow="WHAT I EXPLORE" title="Ideas take many forms." note="From writing code to building physical models, I enjoy turning questions into practical experiments."/>
      <div className="focus-grid">
        <Reveal className="focus-card"><div className="focus-icon"><Code2/></div><span>01 / TECHNOLOGY</span><h3>Code with purpose.</h3><p>Exploring programming and digital tools to make learning and problem-solving more engaging.</p></Reveal>
        <Reveal delay={.08} className="focus-card"><div className="focus-icon"><Lightbulb/></div><span>02 / INNOVATION</span><h3>Build, test, learn.</h3><p>Learning through robotics, electronics and hands-on projects that turn concepts into working models.</p></Reveal>
        <Reveal delay={.16} className="focus-card"><div className="focus-icon"><Compass/></div><span>03 / LEADERSHIP</span><h3>Contribute meaningfully.</h3><p>Taking responsibility, communicating ideas and working with others towards shared goals.</p></Reveal>
      </div>
    </section>
    <section className="section-block preview-section">
      <div className="preview-head"><div><Eyebrow>SELECTED WORK</Eyebrow><h2>Projects in progress<br/>and practice.</h2></div><Link to="/projects" className="inline-link">All projects <MoveRight size={16}/></Link></div>
      <div className="preview-list">{projects.slice(0,3).map((p,i)=><Link to="/projects" className="preview-row" key={p.id}><span className="preview-num">0{i+1}</span><span className="preview-title">{p.title}</span><span className="preview-type">{p.category}</span><ArrowUpRight size={17}/></Link>)}</div>
    </section>
    <section className="closing-cta"><Eyebrow>THE JOURNEY CONTINUES</Eyebrow><h2>There is always<br/><span>more to explore.</span></h2><p>Take a closer look at my projects, experiences and the ideas I'm working towards.</p><Link to="/about" className="button">Get to know me <ArrowUpRight size={16}/></Link></section>
  </>;
}
