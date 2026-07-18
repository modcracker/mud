"use client";

import { motion } from "motion/react";
import { ShieldCheck, Award, GraduationCap, Mail, FileCheck2 } from "lucide-react";

interface ExpertProfile {
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  specialties: string[];
  education: string;
}

const EXPERT_REGISTRY: Record<string, ExpertProfile> = {
  "dead-sea-mud": {
    name: "Dr. Elena Rostova",
    title: "Senior Balneochemist & Dermatological Lead",
    affiliation: "Department of Balneological Chemistry, mud.cc Registry",
    bio: "Dr. Rostova has spent over 18 years studying the transdermal transport of inorganic salts within the Jordan Rift Valley. Her research focuses on the molecular mechanics of epidermal magnesium absorption and the cellular mitigation of inflammatory pathways via high-salinity silt curing.",
    specialties: ["Balneotherapy", "Dermal Osmosis", "Crystallography", "Ionic Exchange Kinetics"],
    education: "Ph.D. in Biochemistry, Hebrew University of Jerusalem",
  },
  "mississippi-mud-pie": {
    name: "Dr. Marcus Vance",
    title: "Culinary Historian & Cultural Anthropologist",
    affiliation: "Southern Foodways Archive, mud.cc Registry",
    bio: "Dr. Vance is the leading archivist of Delta Reconstruction-era baking practices. His work explores the sociological and economic history of southern confectionery lore, tracing the adaptation of local alluvial silt metaphors in traditional Mississippi Delta kitchens.",
    specialties: ["Delta Foodways", "Reconstruction-Era Culinary Culture", "Cacao Solid Alkalization"],
    education: "Ph.D. in American Cultural History, Vanderbilt University",
  },
  "mud-run": {
    name: "Dr. Ronald Gallagher",
    title: "Professor of Biokinetics & Human Movement",
    affiliation: "Extreme Terrain Movement Lab, mud.cc Registry",
    bio: "Dr. Gallagher researches human gait mechanics under extreme non-Newtonian drag conditions. He is a primary consultant for obstacle-course safety designs, modeling musculoskeletal strain and stabilizer muscle engagement during saturated clay climbs.",
    specialties: ["Obstacle Biomechanics", "Dynamic Drag Mechanics", "Viscous Resistance Physiology"],
    education: "Ph.D. in Kinesiology, Penn State University",
  },
  "mud-the-game": {
    name: "Prof. Evelyn Vance",
    title: "Chair of Cybernetic Archaeology & Systems History",
    affiliation: "Digital Virtual Worlds Archive, mud.cc Registry",
    bio: "Professor Vance is an early networking pioneer who specializes in the preservation of text-based multiplayer virtual environments. Her research chronicles the database architectures, command parsers, and multi-user telnet protocols of late 20th-century MUDs.",
    specialties: ["Multi-User Dungeons", "Digital Spatial Semantics", "Concurrent Telnet Architectures"],
    education: "Ph.D. in Computer Science, University of Essex",
  },
  "mudslinging": {
    name: "Dr. Arthur Pendelton",
    title: "Senior Rhetoric Analyst & Media Historian",
    affiliation: "Center for Political Communications, mud.cc Registry",
    bio: "Dr. Pendelton studies the cognitive mechanics of adversarial campaigns. His peer-reviewed treatises analyze the psychological retention bias of negative rhetoric and the historical evolution of character defamation from Roman senatorial debate to modern digital channels.",
    specialties: ["Adversarial Political Rhetoric", "Cognitive Bias Analysis", "Slander Retention Metrics"],
    education: "Ph.D. in Political Rhetoric, Georgetown University",
  },
  "clear-as-mud": {
    name: "Dr. Thomas Vance",
    title: "Cognitive Semiotician & Idiomatic Linguist",
    affiliation: "Institute for Applied Semantics, mud.cc Registry",
    bio: "Dr. Vance is a linguistic theorist examining sarcasm, cognitive load, and ambiguity in professional documentation. His work maps how the human brain processes ironic contradictions and idioms to resolve mixed signals in complex instructions.",
    specialties: ["Idiomatic Semantic Shifts", "Sarcastic Irony", "Mixed Signal Processing"],
    education: "Ph.D. in Linguistics, Oxford University",
  },
  "mud-architecture": {
    name: "Prof. Sandra Sterling",
    title: "Principal Architect & Sustainable Materials Director",
    affiliation: "Vernacular Earthen Engineering Institute, mud.cc Registry",
    bio: "Professor Sterling is a world-renowned authority on rammed-earth and adobe structural engineering. She advocates for zero-embodied-carbon constructions, developing contemporary alkaline-silica stabilizers to preserve heritage cob structures in arid climates.",
    specialties: ["Vernacular Adobe", "Rammed-Earth Stabilizers", "Thermal Mass Inertia", "Sustainable Plasters"],
    education: "M.Arch & Ph.D. in Structural Engineering, ETH Zürich",
  },
  "mudlarking": {
    name: "Dr. Helen Croft",
    title: "Lead Foreshore Archaeologist & Estuary Registrar",
    affiliation: "Tidal Foreshore Archaeological Survey, mud.cc Registry",
    bio: "Dr. Croft manages archaeological preservation along the Thames Estuary. Her research demonstrates how anaerobic, oxygen-depleted river silt protects organic materials, providing a pristine, un-oxidized window into working-class material culture from Roman times to the Victorian era.",
    specialties: ["Tidal Foreshore Archaeology", "Anaerobic Preservation", "Stratigraphy", "Artifact Cataloguing"],
    education: "Ph.D. in British Archaeology, University College London",
  },
  "mud-season": {
    name: "Dr. Alan Mercer",
    title: "Senior Hydrological Physicist & Permafrost Geomorphologist",
    affiliation: "Department of Geochemical Soil Sciences, mud.cc Registry",
    bio: "Dr. Mercer studies freezing-thawing cycles and soil shear strength collapse in northern climates. His research focuses on hydrological traps caused by subsoil permafrost barriers, helping municipal logistics teams predict mud season durations.",
    specialties: ["Permafrost Hydrology", "Shear Strength Failure", "Cryosphere Meltwater Pulse"],
    education: "Ph.D. in Geomorphology, University of Alaska Fairbanks",
  },
  "mud-tires": {
    name: "Dr. Kenneth Vance",
    title: "Chief Hydrodynamic & Tire Systems Engineer",
    affiliation: "Earthen Traction Research Group, mud.cc Registry",
    bio: "Dr. Vance is an engineering specialist in off-road mobility dynamics. He models hydrodynamic soil evacuation and centrifugal self-cleaning tread geometry to optimize contact patch traction and mechanical shear on highly saturated clays.",
    specialties: ["Tread Void Hydraulics", "Centrifugal Soil Ejection", "Tire Contact Mechanics"],
    education: "Ph.D. in Mechanical Engineering, University of Michigan",
  }
};

interface ContributorBiographyProps {
  categorySlug: string;
}

export default function ContributorBiography({ categorySlug }: ContributorBiographyProps) {
  const expert = EXPERT_REGISTRY[categorySlug] || {
    name: "Dr. Julian Vance",
    title: "Senior Geomorphologist & Curator",
    affiliation: "Department of Geochemical Studies, mud.cc Registry",
    bio: "Dr. Vance is the chief curator of the mud.cc Digital Archive. He oversees the peer-review process and publishes comprehensive taxonomical analyses mapping the physical, cultural, and industrial interfaces of fine earthen sediments.",
    specialties: ["Soil Geomorphology", "Sedimentology", "Digital Archiving", "Vernacular Materials"],
    education: "Ph.D. in Geological Sciences, Stanford University"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-20 border border-stone-200 bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
      id="contributor-biography-component"
    >
      {/* Visual Accent Layer */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />

      {/* Profile Avatar / Emblem Block */}
      <div className="flex-shrink-0 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center border border-amber-200 text-amber-700 shadow-inner">
          <GraduationCap size={32} />
        </div>
        <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full">
          <ShieldCheck size={11} /> Verified Expert
        </div>
      </div>

      {/* Biography Content */}
      <div className="flex-1 space-y-4">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
            Research Contributor Biography
          </span>
          <h3 className="text-xl font-bold font-display text-stone-900 tracking-tight">
            {expert.name}
          </h3>
          <p className="text-xs font-semibold text-stone-500 leading-none">
            {expert.title}
          </p>
          <p className="text-[11px] text-stone-400 leading-normal">
            {expert.affiliation}
          </p>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed font-sans">
          {expert.bio}
        </p>

        {/* Education & Specialties row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-stone-400 flex items-center gap-1">
              <Award size={10} /> Academic Credentials
            </span>
            <p className="text-xs text-stone-700 font-medium font-sans">
              {expert.education}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-stone-400 flex items-center gap-1">
              <FileCheck2 size={10} /> Research Focus
            </span>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {expert.specialties.map((spec) => (
                <span
                  key={spec}
                  className="inline-block text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/50"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
