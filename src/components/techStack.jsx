import { motion } from "framer-motion"
import { Code2, Database, Layout, Server } from "lucide-react"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      techs: ["Node.js", "Javascript", "Python", "Flask (Framework)"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: ["MySQL", "MongoDB"],
    },
    {
      category: "Development Tools",
      icon: <Code2 className="w-6 h-6" />,
      techs: ["Github (Git)", "IntelliJ IDEA", "VS Code", "Eclipse" , "Jupyter Notebook", "PyCharm"],
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index + 1}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold">{tech.category}</h3>
              </div>
              <ul className="space-y-2">
                {tech.techs.map((item) => (
                  <li key={item} className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

