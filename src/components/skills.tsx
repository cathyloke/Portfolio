"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical Proficiency
          </h2>
        </motion.div>

        <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {portfolioData.skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
