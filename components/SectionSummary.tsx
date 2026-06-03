import { Sparkles, BookOpen, Clock, Lightbulb } from "lucide-react";
import { GRAMMAR_SECTIONS } from "../grammarRules";

interface SectionSummaryProps {
  id: string;
}

export function SectionSummary({ id }: SectionSummaryProps) {
  const section = GRAMMAR_SECTIONS.find((s) => s.id === id);
  if (!section) return null;

  // Theming and styling based on section ID
  let badgeColor = "bg-red-50 text-red-700 border-red-200";
  let labelText = "01 Voice Change";

  if (id === "speech") {
    badgeColor = "bg-blue-50 text-blue-700 border-blue-200";
    labelText = "02 Direct/Indirect";
  } else if (id === "parts-of-speech") {
    badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200";
    labelText = "03 Parts of Speech";
  }

  return (
    <div className="mt-14 pt-10 border-t-2 border-stone-300">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-widest uppercase border ${badgeColor} flex items-center gap-1.5`}>
            <Sparkles className="h-3 w-3" /> {labelText} Revision Compendium
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 hidden sm:inline">
            100% Comprehensive Rulebook
          </span>
        </div>
        <div className="text-[10px] font-mono text-stone-500 flex items-center gap-1 bg-[#f5f0e8] px-2 py-1 rounded border border-[#c8b99a]/30">
          <Clock className="h-3 w-3 text-amber-700" /> Dynamic Exam Reference
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-serif text-xl font-bold text-[#0c0c0c] flex items-center gap-2">
          Detailed Synthesis & Revision Database
        </h2>
        <p className="text-xs text-stone-600 mt-1 font-serif leading-relaxed">
          The following reference database aggregates every guideline discussed in the <strong>{section.title}</strong> syllabus. Cross-reference formulas, common pitfalls to avoid during tests, and perfect solutions.
        </p>
      </div>

      {/* RENDER CONSOLIDATED SUMMARY TABLE */}
      <div className="overflow-x-auto rounded-lg border border-[#c8b99a]/50 shadow-sm">
        <table className="w-full text-left border-collapse bg-[#fff]">
          <thead>
            <tr className="bg-[#110d08] text-[#f5f0e8] uppercase font-mono tracking-wider text-[10px] border-b border-black">
              <th className="py-3 px-4 w-[20%] font-semibold border-r border-[#c8b99a]/20">Rule & Focus</th>
              <th className="py-3 px-3 w-[12%] text-center font-semibold border-r border-[#c8b99a]/20">Difficulty Level</th>
              <th className="py-3 px-4 w-[38%] font-semibold border-r border-[#c8b99a]/20">Syllabus Pattern & Key Formula</th>
              <th className="py-3 px-4 w-[15%] font-semibold text-rose-300 border-r border-[#c8b99a]/20">✗ Common Pitfall</th>
              <th className="py-3 px-4 w-[15%] font-semibold text-emerald-300">✓ Accurate Form</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#c8b99a]/30">
            {section.rules.map((rule) => {
              const ruleLevelText = rule.isAdvanced ? "Advanced Prep" : "Core Rule";
              const levelBadgeStyle = rule.isAdvanced
                ? "bg-amber-50 text-amber-800 border-amber-200"
                : "bg-stone-50 text-stone-700 border-stone-200";

              return (
                <tr key={rule.id} className="hover:bg-[#fcfaf5] transition-colors leading-relaxed">
                  {/* Column 1: Rule & Focus */}
                  <td className="py-3.5 px-4 text-xs font-bold font-sans text-stone-900 border-r border-[#c8b99a]/20">
                    <div className="flex items-start gap-1.5">
                      <div className="mt-0.5">
                        <BookOpen className="h-3 w-3 text-stone-500 shrink-0" />
                      </div>
                      <div>
                        <div className="font-sans font-bold text-stone-900">{rule.title}</div>
                        <div className="text-[10px] text-stone-500 font-mono mt-0.5 uppercase tracking-wider">{rule.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Column 2: Difficulty Level */}
                  <td className="py-3.5 px-3 text-center border-r border-[#c8b99a]/20 align-middle">
                    <span className={`inline-block px-2 py-0.5 text-[9px] font-mono font-semibold tracking-wider rounded border ${levelBadgeStyle}`}>
                      {ruleLevelText}
                    </span>
                  </td>

                  {/* Column 3: Syllabus Pattern & Key Formula */}
                  <td className="py-3.5 px-4 text-xs border-r border-[#c8b99a]/20">
                    <div className="space-y-1.5">
                      <p className="font-serif text-stone-700 leading-relaxed text-[12.5px]">
                        {rule.description}
                      </p>
                      {rule.formula && (
                        <div className="bg-[#fcfaf4] p-2 rounded border border-[#e8dece] flex items-start gap-1.5">
                          <Lightbulb className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <code className="text-[11px] font-mono text-amber-950 break-words select-all font-semibold">
                            {rule.formula}
                          </code>
                        </div>
                      )}
                      {rule.banglaNote && (
                        <div className="bg-amber-50/40 px-2.5 py-1.5 rounded border-l-2 border-[#8b7355] text-[11px] text-stone-800 font-sans leading-relaxed mt-1">
                          <span className="font-bold text-[#8b7355]">ব্যাখ্যা:</span> {rule.banglaNote}
                        </div>
                      )}
                      {rule.proTip && (
                        <div className="bg-emerald-50/35 px-2.5 py-1.5 rounded border border-emerald-500/15 text-[11px] text-emerald-950 font-sans leading-relaxed mt-1 flex items-start gap-1.5">
                          <span className="bg-emerald-100 text-emerald-800 font-mono text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 mt-0.5">
                            ⚡ PRO-TIP
                          </span>
                          <span className="font-sans font-medium text-emerald-900">{rule.proTip}</span>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Column 4: ✗ Common Pitfall */}
                  <td className="py-3.5 px-4 text-[11.5px] text-rose-850 font-normal border-r border-[#c8b99a]/20 font-sans line-through bg-rose-50/25 italic">
                    {rule.wrong || "—"}
                  </td>

                  {/* Column 5: ✓ Accurate Form */}
                  <td className="py-3.5 px-4 text-[11.5px] text-emerald-900 font-semibold font-sans bg-emerald-50/15">
                    {rule.right || "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
