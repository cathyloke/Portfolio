"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Briefcase, Users } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              My Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience & Leadership
            </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="relative border-l border-muted-foreground/30 ml-3 pl-8 py-2 space-y-12">
               {portfolioData.works.map((work, index) => (
                 <div key={index} className="relative">
                   <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                   <div className="flex flex-col gap-2">
                     <h4 className="text-xl font-bold">{work.title}</h4>
                     <div className="text-primary font-medium">{work.company}</div>
                     <div className="text-sm text-muted-foreground">{work.duration}</div>
                     <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 text-sm">
                       {work.jobs.map((job, j) => (
                         <li key={j}>{job}</li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>
            <div className="relative border-l border-muted-foreground/30 ml-3 pl-8 py-2 space-y-12">
               {portfolioData.leadership.map((role, index) => (
                 <div key={index} className="relative">
                   <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-secondary ring-4 ring-background" />
                   <div className="flex flex-col gap-2">
                     <h4 className="text-xl font-bold">{role.title}</h4>
                     <div className="text-secondary font-medium">{role.organization}</div>
                     <div className="text-sm text-muted-foreground">{role.duration}</div>
                     <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 text-sm">
                       {role.description.map((desc, d) => (
                         <li key={d}>{desc}</li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
