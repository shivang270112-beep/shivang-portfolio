import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Eyebrow({children}) { return <div className="eyebrow"><span />{children}</div>; }
export function PageIntro({kicker, title, description}) { return <section className="page-intro"><Eyebrow>{kicker}</Eyebrow><h1>{title}</h1>{description && <p>{description}</p>}</section>; }
export function SectionHeading({eyebrow, title, note}) { return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>{note && <p>{note}</p>}</div>; }
export function Reveal({children, delay=0, className=''}) { return <motion.div className={className} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.15}} transition={{duration:.5,delay,ease:'easeOut'}}>{children}</motion.div>; }
export function ExpandCard({title, category, summary, details, tags=[], planned}) {
  const [expanded,setExpanded] = useState(false);
  return <article className={`project-card ${expanded?'expanded':''}`}>
    <div className="project-topline"><span className="project-category">{category}</span><span className="project-index">PROJECT / {String(title).slice(0,2).toUpperCase()}</span></div>
    <h3>{title}</h3><p>{summary}</p>
    <div className="tag-row">{tags.map(t=><span key={t}>{t}</span>)}</div>
    {expanded && <div className="project-details"><p>{details}</p>{planned && <p className="planned"><strong>Planned extension:</strong> {planned}</p>}</div>}
    <button className="text-action" onClick={()=>setExpanded(!expanded)}>{expanded?'Show less':'Explore project'} <ChevronDown size={15} className={expanded?'rotate':''}/></button>
  </article>;
}
export function StatCard({value,label,detail}) { return <Reveal className="stat-card"><div className="stat-value">{value}</div><h3>{label}</h3><p>{detail}</p></Reveal>; }
export function LinkButton({to,children,secondary=false}) { return <a className={`button ${secondary?'button-secondary':''}`} href={to}>{children}<ArrowUpRight size={16}/></a>; }
