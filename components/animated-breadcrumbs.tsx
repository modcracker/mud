"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AnimatedBreadcrumbsProps {
  items: BreadcrumbItem[];
  backLink: {
    label: string;
    href: string;
  };
}

export default function AnimatedBreadcrumbs({ items, backLink }: AnimatedBreadcrumbsProps) {
  return (
    <motion.header
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} // smooth, high-end deceleration ease
      className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-4 border-b border-stone-200/60 mb-12"
      id="animated-breadcrumbs-container"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-400">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-stone-800 transition-colors uppercase tracking-wider font-semibold"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-600 font-bold uppercase tracking-wider">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="text-stone-300">/</span>}
          </div>
        ))}
      </div>

      <Link
        href={backLink.href}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors group"
      >
        <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
        <span>{backLink.label}</span>
      </Link>
    </motion.header>
  );
}
