import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity, ArrowDownToLine, ArrowRight, AudioLines, BadgeCheck, BookOpen,
  BrainCircuit, Boxes, Check, ChevronDown, CircleHelp, ClipboardCheck,
  FileCode2, FileSearch, FileText, Gauge, GlobeLock, HardDrive, Home,
  Image, Languages, LockKeyhole, Menu, Mic, Network, PanelTop, Play,
  Plus, Radio, Search, Settings2, Shield, ShieldCheck, Square, Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export type PageKey = "home" | "assistant" | "router" | "reasoning" | "tools" | "knowledge" | "deliverables" | "air-gap" | "operations" | "approvals";

const nav = [
  { key: "home", label: "Overview", to: "/", icon: Home },
  { key: "assistant", label: "AI Assistant", to: "/assistant", icon: BrainCircuit },
  { key: "router", label: "Model Router", to: "/router", icon: Workflow },
  { key: "reasoning", label: "Agent Reasoning", to: "/reasoning", icon: Network },
  { key: "tools", label: "Tool Registry", to: "/tools", icon: Boxes },
  { key: "knowledge", label: "Knowledge Search", to: "/knowledge", icon: FileSearch },
  { key: "deliverables", label: "Deliverables", to: "/deliverables", icon: FileText },
  { key: "air-gap", label: "Air-gap Monitor", to: "/air-gap", icon: Shield },
  { key: "operations", label: "Operations", to: "/operations", icon: Gauge },
  { key: "approvals", label: "Approvals", to: "/approvals", icon: ClipboardCheck },
] as const;

const titleMap: Record<PageKey, { title: string; eyebrow: string; intro: string }> = {
  home: { title: "Sovereign intelligence.\nBuilt for Bharat.", eyebrow: "MRPL · ONGC GROUP · MANGALURU", intro: "A secure, on-premise AI workbench for trusted knowledge work across MRPL." },
  assistant: { title: "AI Assistant", eyebrow: "WORKSPACE / ASSISTANT", intro: "Work with approved local models and your organisation’s knowledge." },
  router: { title: "Model Router", eyebrow: "WORKSPACE / ROUTING", intro: "Review how a task is matched to an on-premise model capability." },
  reasoning: { title: "Agent Reasoning", eyebrow: "WORKSPACE / TRACE", intro: "Inspect the task, action and observation sequence before a final answer." },
  tools: { title: "Tool Registry", eyebrow: "WORKSPACE / CAPABILITIES", intro: "Approved local tools and their operating constraints." },
  knowledge: { title: "Knowledge Search", eyebrow: "WORKSPACE / KNOWLEDGE", intro: "Search your connected internal material with source-grounded results." },
  deliverables: { title: "Deliverables", eyebrow: "WORKSPACE / OUTPUTS", intro: "Files created in this session are listed here when available." },
  "air-gap": { title: "Air-gap Monitor", eyebrow: "SECURITY / NETWORK", intro: "Visibility into external connectivity for this workbench." },
  operations: { title: "Operations", eyebrow: "SYSTEM / MODEL STATUS", intro: "Local model availability and runtime readiness." },
  approvals: { title: "Approvals", eyebrow: "GOVERNANCE / REVIEW QUEUE", intro: "Human review for items requiring approval." },
};

const modules = nav.slice(1);

export function WorkbenchPage({ page }: { page: PageKey }) {
  const current = titleMap[page];
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="app-frame">
    <div className="a11y-bar"><div className="site-width a11y-inner"><span>Government of India · Ministry of Petroleum &amp; Natural Gas</span><div className="a11y-actions"><button aria-label="Language selector"><Languages size={14} /> English <ChevronDown size={12} /></button><button aria-label="Accessibility options"><CircleHelp size={14} /> Accessibility</button><button aria-label="Reduce text size">A−</button><button aria-label="Increase text size">A+</button></div></div></div>
    <div className="tricolor" aria-hidden="true"><i/><i/><i/></div>
    <header className="site-header"><div className="site-width brand-row"><Link to="/" className="brand-lockup"><span className="brand-mark"><BrainCircuit size={26}/></span><span><strong>TarkAI</strong><small>SOVEREIGN AI WORKBENCH</small></span></Link><div className="header-divider"/><div className="org-name"><span className="org-emblem"><span>MRPL</span></span><span><strong>Mangalore Refinery and<br/>Petrochemicals Limited</strong><small>A subsidiary of ONGC · Government of India</small></span></div><div className="secure-chip"><LockKeyhole size={14}/> ON-PREMISE · SECURE</div><Button variant="outline" size="icon" className="mobile-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div></header>
    <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation"><div className="site-width nav-scroll">{nav.map(item => { const Icon = item.icon; return <Link key={item.key} to={item.to} onClick={() => setMenuOpen(false)} activeProps={{ className: "nav-item active" }} className="nav-item"><Icon size={16}/><span>{item.label}</span></Link>; })}</div></nav>
    <main className="site-width page-main">
      <div className="page-heading"><div><div className="eyebrow"><span className="eyebrow-dot"/>{current.eyebrow}</div><h1>{page === "home" ? <>Sovereign intelligence.<br/>Built for Bharat.</> : current.title}</h1><p>{current.intro}</p></div>{page !== "home" && <div className="heading-status"><span className="status-dot"/> Local environment</div>}</div>
      {page === "home" ? <HomePage/> : <ContentPage page={page}/>}
    </main>
    <footer className="site-footer"><div className="site-width footer-inner"><div><strong>TarkAI</strong><span> A sovereign AI workbench for MRPL</span></div><div className="footer-links"><a href="https://www.mrpl.co.in/" target="_blank" rel="noreferrer">MRPL Official Website <ArrowRight size={13}/></a><span>·</span><span>Designed with GIGW accessibility principles</span></div></div></footer>
  </div>;
}

function HomePage() {
  return <>
    <section className="home-hero"><div className="hero-copy"><div className="hero-tag"><ShieldCheck size={14}/> SECURE · SOVEREIGN · ON-PREMISE</div><h2>Intelligence that<br/>stays <em>within.</em></h2><p>A private AI environment for trusted work—designed for MRPL’s people, processes and knowledge.</p><div className="hero-actions"><Button asChild><Link to="/assistant">Open AI Assistant <ArrowRight/></Link></Button><a href="https://www.mrpl.co.in/" target="_blank" rel="noreferrer" className="text-link">About MRPL <ArrowRight size={15}/></a></div><div className="hero-caption">Mangalore Refinery &amp; Petrochemicals Limited · Karnataka, India</div></div><div className="hero-visual" role="img" aria-label="Official MRPL imagery area"><div className="visual-identity"><span>MRPL</span><small>MANGALORE REFINERY<br/>&amp; PETROCHEMICALS LIMITED</small></div><div className="visual-note"><span className="status-dot"/> Official imagery pending source verification</div></div></section>
    <section className="status-grid" aria-label="Workbench status"><StatusCard icon={<ShieldCheck/>} label="Security posture" value="On-premise" detail="External access not configured" tone="green"/><StatusCard icon={<BrainCircuit/>} label="Model availability" value="Not connected" detail="No runtime status supplied"/><StatusCard icon={<ClipboardCheck/>} label="Pending approvals" value="No data" detail="Review queue is empty"/></section>
    <div className="section-header"><div><div className="eyebrow">WORKBENCH</div><h2>Modules</h2></div><span className="section-caption">Choose a workspace</span></div>
    <div className="module-grid">{modules.map((module,index) => { const Icon=module.icon; return <Link to={module.to} className="module-tile" key={module.key}><div className="module-top"><span className="module-icon"><Icon size={19}/></span><span className="module-index">0{index+1}</span></div><strong>{module.label}</strong><p>{moduleDescription(module.key)}</p><ArrowRight className="module-arrow" size={17}/></Link>; })}</div>
  </>;
}

function StatusCard({icon,label,value,detail,tone}:{icon:React.ReactNode;label:string;value:string;detail:string;tone?:string}) { return <div className="status-card"><span className={`status-icon ${tone ?? ""}`}>{icon}</span><div><small>{label}</small><strong>{value}</strong><span>{detail}</span></div></div>; }
function moduleDescription(key:string) { const values:Record<string,string>={assistant:"Ask, analyse and work with internal knowledge.",router:"Route tasks to appropriate local model capabilities.",reasoning:"Review action-by-action execution traces.",tools:"Inspect available tools and limitations.",knowledge:"Find grounded passages in internal documents.",deliverables:"Review session outputs and generated files.","air-gap":"Inspect external connectivity and audit events.",operations:"Check local model and runtime readiness.",approvals:"Review items awaiting human decision."}; return values[key] ?? ""; }

function ContentPage({page}:{page:PageKey}) {
  if(page==="assistant") return <AssistantPage/>;
  if(page==="router") return <RouterPage/>;
  if(page==="reasoning") return <ReasoningPage/>;
  if(page==="tools") return <ToolsPage/>;
  if(page==="knowledge") return <KnowledgePage/>;
  if(page==="deliverables") return <DeliverablesPage/>;
  if(page==="air-gap") return <AirGapPage/>;
  if(page==="operations") return <OperationsPage/>;
  return <ApprovalsPage/>;
}

function SectionTitle({children,aside}:{children:React.ReactNode;aside?:React.ReactNode}) { return <div className="content-title"><h2>{children}</h2>{aside}</div>; }
function AssistantPage() {
  const [task,setTask]=useState(""); const [sessions,setSessions]=useState(["Session 01","Session 02"]); const [active,setActive]=useState(0); const [running,setRunning]=useState(false); const [voiceMsg,setVoiceMsg]=useState("");
  const speak=()=>{const SpeechRecognition=window.SpeechRecognition || (window as Window & {webkitSpeechRecognition?:new()=>SpeechRecognitionLike}).webkitSpeechRecognition;if(!SpeechRecognition){setVoiceMsg("Voice input is not available in this browser.");return;} const recognition=new SpeechRecognition();recognition.lang="en-IN";recognition.onresult=(event)=>setTask(event.results[0]?.[0]?.transcript??"");recognition.onerror=()=>setVoiceMsg("Voice input could not be started.");recognition.start();setVoiceMsg("Listening…");};
  return <div className="assistant-layout"><div className="assistant-main"><section className="panel prompt-panel"><SectionTitle aside={<span className="quiet-chip"><LockKeyhole size={13}/> Local workspace</span>}>New task</SectionTitle><Textarea value={task} onChange={e=>setTask(e.target.value)} placeholder="Describe the task you want help with…" className="task-input" aria-label="Task input"/><div className="prompt-controls"><span className="subtle">Your task stays in this session.</span><div><Button variant="outline" size="icon" aria-label="Use voice input" onClick={speak}><Mic/></Button><Button onClick={()=>setRunning(!running)} disabled={!task.trim()}>{running?<><Square/>Stop</>:<><Play/>Run task</>}</Button></div></div>{voiceMsg&&<div className="inline-note">{voiceMsg}</div>}</section>
    <section className="panel"><SectionTitle aside={<Button variant="outline" size="sm" onClick={()=>{if(sessions.length<3){setSessions([...sessions,`Session 0${sessions.length+1}`]);setActive(sessions.length);}}} disabled={sessions.length>=3}><Plus/> New session</Button>}>Console sessions</SectionTitle><div className="session-tabs">{sessions.map((session,i)=><button className={active===i?"session-tab selected":"session-tab"} onClick={()=>setActive(i)} key={session}><span className="status-dot muted-dot"/>{session}{active===i&&<span className="active-session">ACTIVE</span>}</button>)}</div><div className="console-empty"><AudioLines size={24}/><strong>{running?"Task queued in this session":"Ready for a task"}</strong><span>{running?"No model runtime is connected; no request was sent.":"Run output will appear here when a local model is connected."}</span></div></section>
    <section className="panel"><SectionTitle aside={<span className="quiet-chip">Illustrative · no corpus connected</span>}>Knowledge graph</SectionTitle><KnowledgeGraph/></section></div>
    <aside className="assistant-aside"><section className="panel result-panel"><SectionTitle>Response</SectionTitle><div className="empty-response"><div className="empty-symbol"><FileText/></div><strong>No response yet</strong><span>Start a task to see its summary, sources and citations.</span></div><div className="result-sections"><div><span>SUMMARY</span><p>Waiting for task output.</p></div><div><span>SOURCES</span><p>No documents retrieved.</p></div></div><Button variant="outline" className="download-btn" disabled><ArrowDownToLine/> Download response</Button></section><section className="panel privacy-panel"><div className="privacy-icon"><ShieldCheck/></div><div><strong>Private by design</strong><p>Responses and source material are intended to remain within the approved environment.</p></div></section></aside></div>;
}
type SpeechRecognitionLike={lang:string;onresult:((event:{results:ArrayLike<ArrayLike<{transcript:string}>>})=>void)|null;onerror:(()=>void)|null;start:()=>void};
declare global { interface Window { SpeechRecognition?:new()=>SpeechRecognitionLike } }

function KnowledgeGraph(){return <div className="knowledge-graph"><div className="graph-node query-node"><Search/><span>Query</span><small>Your question</small></div><div className="graph-connector"><i/></div><div className="graph-node doc-node"><FileText/><span>Document</span><small>Retrieved source</small></div><div className="graph-connector"><i/></div><div className="graph-node evidence-node"><BookOpen/><span>Evidence</span><small>Relevant passage</small></div><div className="graph-connector"><i/></div><div className="graph-node cite-node"><BadgeCheck/><span>Citation</span><small>Source reference</small></div></div>}

function RouterPage(){const steps=[{n:"01",title:"Input",icon:<FileText/>,copy:"Task text and optional context"},{n:"02",title:"Classifier",icon:<BrainCircuit/>,copy:"Task type selection"},{n:"03",title:"Config",icon:<Settings2/>,copy:"Policy and model settings"},{n:"04",title:"Dispatch",icon:<Radio/>,copy:"Local model endpoint"}];return <><section className="panel"><SectionTitle aside={<span className="quiet-chip">Illustrative pipeline · not connected</span>}>Routing pipeline</SectionTitle><div className="pipeline">{steps.map((s,i)=><div className="pipeline-wrap" key={s.n}><div className="pipeline-step"><span className="step-num">{s.n}</span><span className="pipeline-icon">{s.icon}</span><strong>{s.title}</strong><small>{s.copy}</small></div>{i<steps.length-1&&<ArrowRight className="pipeline-arrow"/>}</div>)}</div></section><SectionTitle>Capability profiles</SectionTitle><div className="capability-grid">{[{icon:<FileCode2/>,name:"Coding",text:"Code generation, review and explanation",path:"/models/coding"},{icon:<BrainCircuit/>,name:"Reasoning",text:"Analysis, synthesis and structured tasks",path:"/models/reasoning"},{icon:<Image/>,name:"Vision",text:"Image understanding and visual inspection",path:"/models/vision"}].map(item=><div className="panel capability" key={item.name}><span className="cap-icon">{item.icon}</span><div><strong>{item.name}</strong><p>{item.text}</p></div><span className="quiet-chip">Not configured</span><div className="technical-path">{item.path}</div></div>)}</div><p className="note-line"><CircleHelp size={14}/> Model names, endpoint paths and dispatch rules have not been supplied.</p></>}

function ReasoningPage(){return <><section className="panel trace-panel"><SectionTitle aside={<span className="quiet-chip">No execution data</span>}>Execution trace</SectionTitle><div className="trace-empty"><div className="trace-symbol"><Workflow/></div><strong>No agent trace available</strong><p>Trace steps appear here after a connected local agent completes a task.</p></div><div className="trace-legend"><span><i className="legend-thought"/>Thought</span><span><i className="legend-action"/>Action</span><span><i className="legend-observation"/>Observation</span></div></section><section className="panel final-answer"><span className="answer-mark"><Check/></span><div><div className="eyebrow">FINAL ANSWER</div><p>No final answer to display.</p></div></section><p className="note-line"><CircleHelp size={14}/> This page does not fabricate reasoning steps or task output.</p></>}

const tools=[{name:"File I/O",icon:<HardDrive/>,description:"Read and write files in approved workspace locations.",constraint:"Limited to explicitly permitted directories and file types."},{name:"Code Sandbox",icon:<FileCode2/>,description:"Run isolated code for bounded analysis tasks.",constraint:"No network access; execution limits are policy-defined."},{name:"Document Search / RAG",icon:<FileSearch/>,description:"Retrieve passages from a connected internal knowledge collection.",constraint:"Requires an indexed and authorised document corpus."},{name:"OCR",icon:<ScanIcon/>,description:"Extract text from supported scanned documents.",constraint:"Output quality depends on scan clarity and language support."},{name:"Vision",icon:<Image/>,description:"Interpret supported images using a local vision model.",constraint:"Requires an available local vision-capable model."}];
function ScanIcon(){return <FileSearch/>}
function ToolsPage(){return <div className="tool-list">{tools.map((tool,i)=><section className="panel tool-row" key={tool.name}><div className="tool-icon">{tool.icon}</div><div className="tool-number">0{i+1}</div><div className="tool-info"><strong>{tool.name}</strong><p>{tool.description}</p><span><span className="constraint-label">CONSTRAINT</span>{tool.constraint}</span></div><span className="quiet-chip">Not connected</span></section>)}</div>}

function KnowledgePage(){const[query,setQuery]=useState("");return <><section className="panel search-panel"><form onSubmit={e=>{e.preventDefault();}}><Search size={18}/><Input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search connected documents…" aria-label="Search documents"/><Button type="submit" disabled={!query.trim()}>Search</Button></form><div className="search-helper"><LockKeyhole size={13}/> Search only works when an authorised knowledge collection is connected.</div></section><section className="panel results-empty"><div className="empty-symbol"><FileSearch/></div><strong>{query?"No connected sources":"No knowledge collection connected"}</strong><p>Grounded results, excerpts and citations will appear here when internal documents are available.</p><div className="result-schema"><span><FileText/> Source document</span><ArrowRight/><span><BookOpen/> Passage</span><ArrowRight/><span><BadgeCheck/> Citation</span></div></section></>}

function DeliverablesPage(){return <section className="panel table-panel"><SectionTitle aside={<span className="quiet-chip">Session files</span>}>Generated files</SectionTitle><div className="deliverable-head"><span>FILENAME</span><span>FORMAT</span><span>STATUS</span><span>ACTION</span></div><div className="empty-table"><FileText/><strong>No files generated</strong><span>Files created during an assistant session will appear here.</span></div></section>}

function AirGapPage(){return <><section className="panel airgap-banner"><div className="airgap-shield"><ShieldCheck size={36}/></div><div><div className="eyebrow">NETWORK POSTURE</div><h2>External connectivity<br/>not configured</h2><p>This preview has no network telemetry source. No security state is asserted.</p></div><span className="quiet-chip">UNVERIFIED</span></section><div className="status-grid two-col"><StatusCard icon={<GlobeLock/>} label="External calls" value="No telemetry" detail="No network monitor connected"/><StatusCard icon={<Activity/>} label="Audit log" value="No events" detail="No audit source connected"/></div><section className="panel audit-panel"><SectionTitle>Audit events</SectionTitle><div className="empty-response"><div className="empty-symbol"><Shield/></div><strong>No audit data available</strong><span>Connect an approved audit source to review network events.</span></div></section></>}

function OperationsPage(){return <><section className="panel runtime-panel"><div className="runtime-heading"><div className="runtime-icon"><BrainCircuit size={24}/></div><div><div className="eyebrow">LOCAL RUNTIME</div><h2>Model status</h2></div><span className="quiet-chip">STATUS UNAVAILABLE</span></div><div className="runtime-details"><div><small>Model name</small><strong>Not supplied</strong></div><div><small>Load state</small><strong><span className="status-dot muted-dot"/> Unknown</strong></div><div><small>Readiness</small><strong>Not connected</strong></div></div></section><p className="note-line"><LockKeyhole size={14}/> Runtime details will display when an on-premise model connection is configured.</p></>}

function ApprovalsPage(){return <section className="panel approvals-empty"><div className="approval-emblem"><ClipboardCheck size={32}/></div><div className="eyebrow">HUMAN REVIEW</div><h2>Nothing needs your attention</h2><p>Items requiring approval will appear here with their supporting details and decision history.</p><div className="empty-queue"><span className="status-dot muted-dot"/> Review queue empty</div></section>}