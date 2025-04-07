"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "LLM Data Science Intern (Co-op)",
    company: "Stylebot",
    period: "August 2024 - Present",
    description: [
      "Developed a scalable ML pipeline and integrated AI-driven text editor plugins, optimizing text processing to handle 200+ concurrent users with a 95% latency reduction compared to regex matching.",
      "Implemented POS tagging for user inputs, and an LLM-based grammar corrector using Gramformer (HuggingFace), leveraging multi-threading and parallel processing for faster execution.",
      "Enhanced AI-based style guide enforcement, fine-tuning Llama3, Mistral, GPT-2, achieving a 30% performance improvement through optimized vector embeddings in Pinecone & ChromaDB.",
    ],
    skills: [
      "Generative AI",
      "LLM Models",
      "Vector Embeddings",
      "FastAPI",
      "MongoDB",
      "NLP",
      "Hugging Face",
      "Pinecone",
      "ChromaDB",
    ],
  },
  {
    title: "Public Policy and Data Science Intern",
    company: "Briza",
    period: "June 2024 - August 2024",
    description: [
      "Engineered a production-grade policy recommendation system using LangChain and LangGraph, achieving 85% accurate results through custom embeddings and hallucination detection.",
      "Created chunking embeddings from scraped text and stored them in ChromaDb. Implemented local training and fine-tuning of Llama3 and Mistral models leveraging Ollama, reducing GPU cost instances by 30%.",
      "Integrated Tavily for real-time AI-powered web searches for non-relevant questions, ensuring accurate responses. Engineered prompts to check for and remove hallucinations, boosting the reliability of the chatbot.",
    ],
    skills: ["NLP", "LLM", "LangChain", "Prompt Engineering"],
  },
  {
    title: "Data Science Intern",
    company: "BookMyShow",
    period: "July 2022 - June 2023",
    description: [
      "Collaborated with a cross-functional team of data scientists on five key product and business initiatives, enhancing customer engagement by 30% through targeted metrics; accurately predicted the potential customer base for events like Lollapalooza with an 80% success rate using transactional and click-stream data and predictive analytics techniques.",
      "Revamped recommendation models by proposing generic affinity models, reducing model inference time by 30%. Leveraged Confluence for technical documentation and supported ad-hoc analyses.",
      "Utilized statistical analysis to minimize on-call support needs by 60% and achieve a cost saving of 40%, Developed a proof-of-concept (POC) for generating AI-based personalized movie posters for users.",
    ],
    skills: ["Predictive Analytics", "Recommendation Systems", "SQL"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in machine learning and data science across various industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="overflow-hidden hover:border-primary/50 transition-all">
                    <CardHeader className="bg-card border-b border-border">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-muted-foreground">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3 list-disc pl-5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

