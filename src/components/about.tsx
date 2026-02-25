"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-2xl bg-muted shadow-2xl rotate-3 transition-transform hover:rotate-0">
              <Image
                src={portfolioData.personal.profile}
                alt={portfolioData.personal.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Who I Am
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {portfolioData.personal.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
