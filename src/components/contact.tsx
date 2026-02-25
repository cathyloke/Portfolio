"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Mail, Send } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate async
    setTimeout(() => {
        window.location.href = `mailto:catloke963@gmail.com?subject=Contact%20From%20Portfolio&body=${encodeURIComponent(values.message)}%0A%0AFrom:%20${values.email}`;
        setIsSubmitting(false)
        setIsSuccess(true)
        form.reset()
        setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
             >
                 <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                  Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
                </p>
                <div className="flex items-center gap-4 text-muted-foreground group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a href="mailto:catloke963@gmail.com" className="text-lg hover:text-primary transition-colors font-medium">catloke963@gmail.com</a>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border shadow-sm p-6 md:p-8"
             >
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <input
                            id="email"
                            placeholder="name@example.com"
                            {...form.register("email")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus-visible:border-primary"
                        />
                        {form.formState.errors.email && (
                            <p className="text-sm font-medium text-destructive text-red-500">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            {...form.register("message")}
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors focus-visible:border-primary resize-y"
                        />
                         {form.formState.errors.message && (
                            <p className="text-sm font-medium text-destructive text-red-500">{form.formState.errors.message.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : isSuccess ? (
                            "Opened Mail Client!"
                        ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                        )}
                    </button>
                 </form>
             </motion.div>
        </div>
      </div>
    </section>
  )
}
