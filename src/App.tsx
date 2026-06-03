import { useState, useMemo } from "react";
import { 
  BookOpen, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  ArrowRight, 
  Filter, 
  RotateCcw, 
  BookOpenCheck,
  Check,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  GRAMMAR_SECTIONS, 
  Rule, 
  Section
} from "./grammarRules";
import { SectionSummary } from "./components/SectionSummary";

export default function App() {
  // Navigation tabs: "all" displays the full scrolled workbook; section IDs filter individual sections; "quiz" invokes the Quiz Prep Arena
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterMode, setFilterMode] = useState<"all" | "core" | "advanced">("all");


  // Filter sections and rules based on searches and mode toggles
  const filteredSections = useMemo(() => {
    return GRAMMAR_SECTIONS.map((section) => {
      // 1. Filter by Section tab
      if (activeTab !== "all" && activeTab !== section.id) {
        return null;
      }

      // 2. Filter rules within section
      const matchedRules = section.rules.filter((rule) => {
        // filter by difficulty mode
        if (filterMode === "core" && rule.isAdvanced) return false;
        if (filterMode === "advanced" && !rule.isAdvanced) return false;

        // search query
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          rule.title.toLowerCase().includes(query) ||
          rule.description.toLowerCase().includes(query) ||
          (rule.wrong && rule.wrong.toLowerCase().includes(query)) ||
          (rule.right && rule.right.toLowerCase().includes(query)) ||
          (rule.formula && rule.formula.toLowerCase().includes(query))
        );
      });

      // Only return section if it has matching rules or matches the queried active tab
      if (matchedRules.length === 0 && searchQuery) {
        return null;
      }

      return {
        ...section,
        rules: matchedRules
      };
    }).filter(Boolean) as Section[];
  }, [activeTab, searchQuery, filterMode]);

  return (
    <div className="min-h-screen py-6 px-4 md:px-8 max-w-5xl mx-auto">
      
      {/* COVER PAGE (Only displayed if viewing 'all' or default, styled strictly after given cover) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="notebook-cover"
        id="app-cover-header"
      >
        <div className="cover-label">Advanced Grammar Notes</div>
        <div className="cover-title">Grammar<br />Mastery<br />Notebook</div>
        <div className="cover-subtitle">Active to Passive Voice &mdash; Direct &amp; Indirect Speech &mdash; Identifying Parts of Speech</div>
        <div className="cover-decoration">G</div>
      </motion.div>

      {/* INTERACTIVE TABLE OF CONTENTS + SEARCH PANEL */}
      <div className="toc-bar" id="app-navigation-bar">
        <div className="toc-label">Navigator / Study Dashboard</div>
        <button 
          onClick={() => { setActiveTab("all"); }} 
          className={`toc-item ${activeTab === "all" ? "active" : ""}`}
        >
          📖 Full Scroll Workbook
        </button>
        <button 
          onClick={() => { setActiveTab("voice"); }} 
          className={`toc-item ${activeTab === "voice" ? "active" : ""}`}
        >
          01 Voice Change
        </button>
        <button 
          onClick={() => { setActiveTab("speech"); }} 
          className={`toc-item ${activeTab === "speech" ? "active" : ""}`}
        >
          02 Direct/Indirect
        </button>
        <button 
          onClick={() => { setActiveTab("parts-of-speech"); }} 
          className={`toc-item ${activeTab === "parts-of-speech" ? "active" : ""}`}
        >
          03 Parts of Speech
        </button>
      </div>

      {/* FILTER & ADVANCED TOOLBAR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#1e1911] border border-[#c8b99a]/30 rounded-lg p-4 mb-8 flex flex-col md:flex-row items-center gap-4 text-[#fff]"
        id="filtering-study-panel"
      >
        <div className="relative w-full md:w-1/2">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#c8b99a]">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search grammar rules, keywords (e.g. subj., lest, wish)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#110d08] border border-[#c8b99a]/50 rounded py-2 pl-10 pr-4 text-xs text-[#f5f0e8] focus:outline-none focus:border-yellow-600 transition"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/2 justify-end">
          <Filter className="h-3.5 w-3.5 text-yellow-500" />
          <span className="text-[11px] uppercase tracking-wider text-[#c8b99a] font-mono">Filter Mode:</span>
          <div className="inline-flex rounded-md p-0.5 bg-[#110d08] border border-[#c8b99a]/30">
            <button
              onClick={() => setFilterMode("all")}
              className={`px-3 py-1 text-[10px] rounded uppercase font-mono tracking-wider transition ${
                filterMode === "all" ? "bg-yellow-600 text-[#000]" : "text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterMode("core")}
              className={`px-3 py-1 text-[10px] rounded uppercase font-mono tracking-wider transition ${
                filterMode === "core" ? "bg-yellow-600 text-[#000]" : "text-gray-400 hover:text-white"
              }`}
            >
              Core Rules
            </button>
            <button
              onClick={() => setFilterMode("advanced")}
              className={`px-3 py-1 text-[10px] rounded uppercase font-mono tracking-wider transition ${
                filterMode === "advanced" ? "bg-yellow-600 text-[#000]" : "text-gray-400 hover:text-white"
              }`}
            >
              Advanced Prep
            </button>
          </div>
        </div>
      </motion.div>

      {/* MASTER CONTENT GRID (Slight fade transition between view states) */}
      <AnimatePresence mode="wait">
        
        {/* REGULAR SCROLLABLE HANDBOOK VIEW */}
        <motion.div 
          key="handbook-sections"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
            {filteredSections.length === 0 ? (
              <div className="page p-12 text-center bg-[#f5f0e8] text-gray-900 border-l-5 border-[#8b7355]">
                <div className="max-w-md mx-auto py-12">
                  <AlertCircle className="h-10 w-10 text-stone-500 mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold mb-2">No Grammar Rules Match Your Query</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    We couldn't locate any rules containing <span className="underline font-bold font-mono">"{searchQuery}"</span> under {filterMode === "all" ? "all modes" : `the ${filterMode} mode`} filter. Try tweaking your query parameters or reset.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(""); setFilterMode("all"); }}
                    className="px-4 py-2 text-xs font-mono rounded bg-yellow-600 hover:bg-yellow-700 text-black transition"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            ) : (
              filteredSections.map((section, secIdx) => (
                <div className="page" id={section.id} key={section.id}>
                  
                  {/* PAGE HEADER */}
                  <div className="page-header">
                    <span className="section-num" style={{ color: `var(--accent${secIdx + 1})` }}>
                      {section.num}
                    </span>
                    <span className={`section-tag ${section.tagClass}`}>
                      {section.tag}
                    </span>
                    <h1 className="section-title">{section.title}</h1>
                  </div>

                  <div className="page-body">

                    {/* TIMELINE DIAGRAMS (Conditionals, SVGs drawn directly based on design templates) */}
                    {section.id === "voice" && (
                      <div className="diagram-wrap">
                        <div className="diagram-title">Active to Passive Swapping Blueprint</div>
                        <svg width="100%" viewBox="0 0 780 200" xmlns="http://www.w3.org/2000/svg">
                          {/* Active Block */}
                          <rect x="40" y="20" width="180" height="40" rx="6" fill="#fdecea" stroke="#c0392b" strokeWidth="1.5" />
                          <text x="130" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c0392b">ACTIVE SUBJECT</text>
                          
                          <rect x="300" y="20" width="180" height="40" rx="6" fill="#fcfaf4" stroke="#e8dece" strokeWidth="1.5" />
                          <text x="390" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7d6608">ACTIVE VERB</text>
                          
                          <rect x="560" y="20" width="180" height="40" rx="6" fill="#eaf3fb" stroke="#1a5276" strokeWidth="1.5" />
                          <text x="650" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a5276">ACTIVE OBJECT</text>

                          {/* Swap Arrows */}
                          <path d="M 650 60 L 130 140" stroke="#8b7355" strokeWidth="2" strokeDasharray="5,3" fill="none" markerEnd="url(#arrow)" />
                          <path d="M 130 60 L 650 140" stroke="#8b7355" strokeWidth="2" strokeDasharray="5,3" fill="none" markerEnd="url(#arrow)" />

                          {/* Passive Block */}
                          <rect x="40" y="140" width="180" height="40" rx="6" fill="#eaf3fb" stroke="#1a5276" strokeWidth="1.5" />
                          <text x="130" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a5276">PASSIVE SUBJECT</text>
                          
                          <rect x="300" y="140" width="180" height="40" rx="6" fill="#eafaf1" stroke="#145a32" strokeWidth="1.5" />
                          <text x="390" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#145a32">BE + V3 (PARTICIPLE)</text>
                          
                          <rect x="560" y="140" width="180" height="40" rx="6" fill="#fdecea" stroke="#c0392b" strokeWidth="1.5" />
                          <text x="650" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c0392b">BY + AGENT</text>

                          {/* Arrow Marker definition if needed */}
                          <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b7355" />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    )}

                    {section.id === "speech" && (
                      <div className="diagram-wrap">
                        <div className="diagram-title">Direct to Indirect Transformation Flow</div>
                        <svg width="100%" viewBox="0 0 780 200" xmlns="http://www.w3.org/2000/svg">
                          {/* Direct Quote Layout */}
                          <rect x="40" y="40" width="325" height="80" rx="6" fill="#fdecea" stroke="#c0392b" strokeWidth="1.5" />
                          <text x="202" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c0392b">DIRECT SPEECH</text>
                          <text x="202" y="85" textAnchor="middle" fontSize="11" fill="#7b241c">He said, "I am writing this now."</text>
                          <text x="202" y="103" textAnchor="middle" fontSize="9" fill="#7b241c">Present Continuous & bull; near deictics (this, now)</text>

                          {/* Transition text and arrows */}
                          <path d="M 370 80 Q 390 60 410 80" stroke="#8b7355" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
                          <text x="390" y="110" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#8b7355">REMOVE QUOTE &amp; BACKSHIFT</text>

                          {/* Indirect Quote Layout */}
                          <rect x="415" y="40" width="325" height="80" rx="6" fill="#eafaf1" stroke="#145a32" strokeWidth="1.5" />
                          <text x="577" y="65" textAnchor="middle" fontSize="12" fontWeight="700" fill="#145a32">INDIRECT SPEECH</text>
                          <text x="577" y="85" textAnchor="middle" fontSize="11" fill="#0b3a20">He said that he was writing that then.</text>
                          <text x="577" y="103" textAnchor="middle" fontSize="9" fill="#0b3a20">Past Continuous & bull; remote deictics (that, then)</text>
                        </svg>
                      </div>
                    )}

                    {section.id === "parts-of-speech" && (
                      <div className="diagram-wrap">
                        <div className="diagram-title">Parts of Speech Contextual Classification</div>
                        <svg width="100%" viewBox="0 0 780 200" xmlns="http://www.w3.org/2000/svg">
                          <rect x="100" y="15" width="580" height="35" rx="4" fill="#110d08" />
                          <text x="390" y="37" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f5f0e8">THE ROLE DICTATES THE CLASS (CONTEXT SHIFT)</text>

                          {/* Scenario 1: Noun adjunct */}
                          <rect x="60" y="75" width="310" height="95" rx="6" fill="#fff" stroke="#c8b99a" strokeWidth="1.5" />
                          <text x="215" y="102" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#303030">"The security gate is locked."</text>
                          <line x1="100" y1="115" x2="330" y2="115" stroke="#ddd" strokeWidth="1" />
                          <text x="215" y="132" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#c0392b">Security = Adjective (Noun Adjunct)</text>
                          <text x="215" y="150" textAnchor="middle" fontSize="9" fill="#7d6608">Position: Determiner + Modifier + Noun</text>

                          {/* Scenario 2: Standalone noun */}
                          <rect x="410" y="75" width="310" height="95" rx="6" fill="#fff" stroke="#c8b99a" strokeWidth="1.5" />
                          <text x="565" y="102" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#303030">"He studied national security."</text>
                          <line x1="450" y1="115" x2="680" y2="115" stroke="#ddd" strokeWidth="1" />
                          <text x="565" y="132" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1a5276">Security = Noun (Core Object)</text>
                          <text x="565" y="150" textAnchor="middle" fontSize="9" fill="#154360">Position: Transitive Verb + Object</text>
                        </svg>
                      </div>
                    )}

                    {/* SECTION TITLE HERO FORMULAS */}
                    {section.summaryFormula && (
                      <div className="formula bg-[#110d08] text-[#c8b99a] border-l-4 border-yellow-600 font-mono text-[11px] p-3 rounded mb-6 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse flex-shrink-0" />
                        <span><strong>Formula Guide:</strong> {section.summaryFormula}</span>
                      </div>
                    )}

                    {/* CORE RULES GROUP */}
                    <div className="rule-group">
                      <span className={`rule-group-title ${section.btnClass}`}>
                        Core Grammar Foundations
                      </span>
                      <ul className="rule-list">
                        {section.rules.filter(r => !r.isAdvanced).map((rule, rIdx) => (
                          <li key={rule.id} className="py-4 border-b border-[#c8b99a]/20">
                            <div className="flex items-start gap-2">
                              <span className="font-mono font-bold text-xs text-stone-500 mt-1">C-{secIdx+1}.{rIdx+1}</span>
                              <div className="flex-1">
                                <h3 className="font-sans font-black text-sm text-gray-950 flex items-center gap-2">
                                  {rule.title}
                                </h3>
                                <p className="text-stone-700 text-xs font-normal leading-relaxed mt-1">
                                  {rule.description}
                                </p>
                                
                                {rule.formula && (
                                  <div className="formula formula-sentence my-2">
                                    <span className="kw">Pattern:</span> <span className="val">{rule.formula}</span>
                                  </div>
                                )}

                                {rule.wrong && rule.right && (
                                  <div className="example-box my-2">
                                    <span className="ex-label">Applied Examples</span>
                                    <div className="ex-row">
                                      <span className="ex-wrong">✗ {rule.wrong}</span>
                                      <span className="ex-arrow">→</span>
                                      <span className="ex-right">✓ {rule.right}</span>
                                    </div>
                                  </div>
                                )}

                                {rule.banglaNote && (
                                  <div className="mt-3 p-3 bg-amber-50/55 border-l-3 border-[#c8b99a] text-xs text-stone-800 rounded font-serif shadow-sm flex items-start gap-2.5">
                                    <BookOpenCheck className="h-4 w-4 text-[#8b7355] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <span className="font-sans font-bold text-[#8b7355] text-[10px] uppercase tracking-wider block mb-0.5">সহজ বাংলা ব্যাখ্যা (Student Note)</span>
                                      <span className="leading-relaxed text-stone-800">{rule.banglaNote}</span>
                                    </div>
                                  </div>
                                )}

                                {rule.proTip && (
                                  <div className="mt-2.5 p-3 bg-emerald-50/45 border border-emerald-500/15 text-xs text-emerald-950 rounded font-sans shadow-sm flex items-start gap-2.5">
                                    <span className="bg-emerald-100 text-emerald-800 font-mono text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider mt-0.5 shrink-0">⚡ SHORTCUT / PRO-TIP</span>
                                    <span className="leading-relaxed font-semibold text-emerald-950">{rule.proTip}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rule-divider"></div>

                    {/* ADVANCED REPERTOIRE GROUP */}
                    <div className="rule-group">
                      <span className="rule-group-title rg-advanced flex items-center gap-1.5">
                        Advanced Prep Rules <span className="adv-badge">+</span>
                      </span>
                      <ul className="rule-list">
                        {section.rules.filter(r => r.isAdvanced).map((rule, rIdx) => (
                          <li key={rule.id} className="py-4 border-b border-[#c8b99a]/20">
                            <div className="flex items-start gap-2">
                              <span className="font-mono font-bold text-xs text-orange-600 mt-1">A-{secIdx+1}.{rIdx+1}</span>
                              <div className="flex-1">
                                <h3 className="font-sans font-black text-sm text-amber-950 flex items-center gap-2">
                                  {rule.title}
                                  <span className="adv-badge">Prep Guide</span>
                                </h3>
                                <p className="text-stone-800 text-xs leading-relaxed mt-1 font-serif">
                                  {rule.description}
                                </p>

                                {rule.formula && (
                                  <div className="formula formula-verb max-w-full my-2 overflow-x-auto">
                                    <span className="kw">Advanced Formula Syntax:</span> <br/>
                                    <span className="val">{rule.formula}</span>
                                  </div>
                                )}

                                {rule.wrong && rule.right && (
                                  <div className="example-box my-2">
                                    <span className="ex-label">High-Yield Exam Scenarios</span>
                                    <div className="ex-row font-serif text-[12.5px]">
                                      <span className="ex-wrong">✗ Incorrect: {rule.wrong}</span>
                                      <br/>
                                      <span className="ex-right font-semibold">✓ Standard Correct: {rule.right}</span>
                                    </div>
                                  </div>
                                )}

                                {rule.banglaNote && (
                                  <div className="mt-3 p-3 bg-amber-50/55 border-l-3 border-[#c8b99a] text-xs text-stone-800 rounded font-serif shadow-sm flex items-start gap-2.5">
                                    <BookOpenCheck className="h-4 w-4 text-[#8b7355] mt-0.5 flex-shrink-0" />
                                    <div>
                                      <span className="font-sans font-bold text-[#8b7355] text-[10px] uppercase tracking-wider block mb-0.5">সহজ বাংলা ব্যাখ্যা (Student Note)</span>
                                      <span className="leading-relaxed text-stone-800">{rule.banglaNote}</span>
                                    </div>
                                  </div>
                                )}

                                {rule.proTip && (
                                  <div className="mt-2.5 p-3 bg-emerald-50/45 border border-emerald-500/15 text-xs text-emerald-950 rounded font-sans shadow-sm flex items-start gap-2.5">
                                    <span className="bg-emerald-100 text-emerald-800 font-mono text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider mt-0.5 shrink-0">⚡ SHORTCUT / PRO-TIP</span>
                                    <span className="leading-relaxed font-semibold text-emerald-950">{rule.proTip}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Consolidated Summary Table & Diagram at the end of the topic */}
                    <SectionSummary id={section.id} />

                  </div>

                  {/* PAGE FOOTER */}
                  <div className="page-footer">
                    <span className="pg-note">{section.title} complete Guide</span>
                    <span className="pg-num">{section.num}</span>
                  </div>

                </div>
              ))
            )}

            {/* INTEGRATED BACK COVER */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-[900px] mx-auto bg-[#0a0a0a] border-l-5 border-yellow-600 rounded-r-xl p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 mt-16"
              id="notebook-back-cover"
            >
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[6px] text-yellow-500 mb-2">
                  Grammar Mastery Notebook
                </div>
                <h3 className="font-serif text-white font-bold text-xl">
                  Preparation Guide Complete
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Revision complete: Active/Passive Voice, Direct/Indirect Speech, &amp; Parts of Speech.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 text-black text-xs font-mono font-bold uppercase tracking-wider rounded-lg shadow-lg active:scale-95 transition-all text-center cursor-pointer"
                >
                  🔝 Scroll back to Top
                </button>
              </div>
            </motion.div>

          </motion.div>
      </AnimatePresence>

    </div>
  );
}
