"use client";

import { useState } from "react";
import { Check, Copy, KeyRound, HelpCircle, RefreshCw, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 12) + 3);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 8) + 2);
  const [userAnswer, setUserAnswer] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Generate a random math puzzle
  const generatePuzzle = () => {
    const n1 = Math.floor(Math.random() * 12) + 3; // 3 to 14
    const n2 = Math.floor(Math.random() * 8) + 2;  // 2 to 9
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setError("");
  };

  const handleSubmitChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(userAnswer.trim(), 10);
    
    if (isNaN(parsed)) {
      setError("Please enter a valid numeric answer.");
      return;
    }

    if (parsed === num1 + num2) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError(`Incorrect answer. Try again!`);
      setTimeout(() => {
        generatePuzzle();
      }, 800);
    }
  };

  const handleCopyEmail = () => {
    const decryptedEmail = "info" + "@" + "mud" + "." + "com";
    navigator.clipboard.writeText(decryptedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rawMungedParts = {
    user: "info",
    domain: "mud",
    tld: "com"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
      id="contact-card-container"
    >
      {/* Subtle background embellishment */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />

      <div className="space-y-6 text-center max-w-md mx-auto">
        {/* Header section */}
        <div className="space-y-3">
          <span className="inline-flex p-3.5 bg-amber-50 rounded-2xl text-amber-600 mb-2">
            <KeyRound size={26} className="animate-pulse" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-stone-900">
            Registry Contact
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed font-sans">
            To protect our domain administrative registry from automated scrapers, please complete the quick human validation query below.
          </p>
        </div>

        {/* Puzzle State */}
        {!isUnlocked ? (
          <motion.form
            key="puzzle-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmitChallenge}
            className="space-y-5 bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100 mt-4 text-left"
            id="math-puzzle-form"
          >
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <HelpCircle size={14} /> Verification challenge
              </span>
              <button
                type="button"
                onClick={generatePuzzle}
                className="p-1 text-stone-400 hover:text-stone-700 transition-colors rounded hover:bg-stone-200/50"
                title="Generate new puzzle"
              >
                <RefreshCw size={13} />
              </button>
            </div>

            <div className="space-y-4">
              <label htmlFor="math-answer-input" className="block text-sm font-semibold text-stone-700">
                What is the sum of <span className="font-bold text-amber-600 text-base">{num1}</span> and <span className="font-bold text-amber-600 text-base">{num2}</span>?
              </label>
              
              <div className="flex gap-3">
                <input
                  id="math-answer-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Your answer"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="flex-grow bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono text-center text-lg shadow-inner"
                  autoFocus
                  required
                />
                <button
                  id="puzzle-submit-btn"
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm tracking-tight transition-all shadow-md active:scale-98 shrink-0"
                >
                  Verify
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-semibold text-red-600 mt-1"
              >
                {error}
              </motion.p>
            )}
          </motion.form>
        ) : (
          /* Success / Revealed Munged Email State */
          <motion.div
            key="revealed-email"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-5 bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-500/20 text-left mt-4"
            id="email-unlocked-container"
          >
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Verification Successful</span>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                Thank you for proving your humanity. You can copy the registry administrator email below, or use the direct mail helper.
              </p>

              <div className="space-y-2 mt-4">
                {/* Copyable codeblock view of munged email */}
                <div className="flex items-center justify-between bg-zinc-950 text-zinc-100 rounded-xl p-4 font-mono text-sm border border-zinc-800 shadow-md">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-sans">Email Address</span>
                    <span className="text-base font-medium tracking-wide">
                      {rawMungedParts.user}@{rawMungedParts.domain}.{rawMungedParts.tld}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-95 flex items-center justify-center"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={`mailto:${rawMungedParts.user}@${rawMungedParts.domain}.${rawMungedParts.tld}?subject=Inquiry%20regarding%20mud.cc`}
                    className="flex-grow inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold px-5 py-3 rounded-xl text-xs transition-colors"
                  >
                    <Mail size={14} /> Send Direct Email
                  </a>
                </div>
              </div>
            </div>

            {copied && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[11px] font-sans text-emerald-600 text-center font-semibold"
              >
                Email address copied to clipboard securely!
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Additional info footer */}
        <div className="pt-4 border-t border-stone-100 text-xs text-stone-400 space-y-1">
          <p>Escrow and secure asset swaps are executed via leading administrative networks.</p>
          <p>For instant domains purchasing options, please use the links provided in the banner.</p>
        </div>
      </div>
    </motion.div>
  );
}
