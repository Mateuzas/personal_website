import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Helmfile", "Kaniko", "nginx"],
  },
  {
    title: "CI/CD",
    skills: ["GitLab CI/CD", "Multi-stage Dockerfiles", "Cross-project pipelines", "Smoke-test gating"],
  },
  {
    title: "Cloud & IaC",
    skills: ["AWS (EKS, EC2, IAM)", "Terraform", "Ansible"],
  },
  {
    title: "Security & Secrets",
    skills: ["SOPS + age", "Ansible Vault", "Kyverno", "OWASP Top 10", "Burp Suite", "Wireshark"],
  },
  {
    title: "Observability",
    skills: ["Prometheus", "kube-prometheus-stack", "OpenLens"],
  },
  {
    title: "Programming & Tools",
    skills: ["Python", "Go", "JavaScript / React", "SQL", "Bash", "Linux", "PostgreSQL", "Git"],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 text-lg font-semibold font-['Work_Sans'] uppercase tracking-widest mb-2">
            Skills
          </h2>
          <p className="text-neutral-800 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Work_Sans']">
            Technologies I Work With
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + catIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className="text-blue-600 text-sm font-bold font-['Work_Sans'] uppercase tracking-wide mb-3">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-neutral-700 text-sm font-medium font-['Work_Sans'] rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;