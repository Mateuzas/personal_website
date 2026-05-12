import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experience = [
  {
    role: "Bachelor Thesis — Static Analysis of IaC",
    org: "University of Twente",
    year: "2026",
    desc: "Extending the GUARD static-analysis tool to detect security smells across multiple IaC languages (Ansible, Terraform, Puppet).",
    details: {
      overview:
        "Conducting research to extend the GUARD static-analysis tool for detecting security smells and code-quality issues across multiple Infrastructure-as-Code languages. The project contributes to improving secure IaC practices in DevOps environments.",
      highlights: [
        "Extending GUARD to support Ansible, Terraform, and Puppet analysis",
        "Developing detection rules for security smells in IaC configurations",
        "Researching common vulnerability patterns across IaC languages",
        "Contributing to open-source tooling for DevSecOps pipelines",
      ],
      tech: ["Python", "GUARD framework", "Ansible", "Terraform", "Puppet"],
    },
  },
  {
    role: "Odoo Module Developer",
    org: "Aardug & Novito",
    year: "2025 – Present",
    desc: "Building a custom Odoo module to automate base-price calculation for construction projects. Python, Odoo ORM, Agile team.",
    details: {
      overview:
        "Developing a custom Odoo ERP module for Novito, a construction firm, to automate their base-price calculation workflow. Collaborating with Aardug, an Odoo specialist partner, on architecture design and seamless module integration into the existing system.",
      highlights: [
        "Designing and building a custom Odoo module from scratch",
        "Automating base-price calculations for construction project bids",
        "Collaborating with Aardug on architecture design and integration",
        "Working in a cross-functional Agile team with regular sprint cycles",
      ],
      tech: ["Python", "Odoo ORM", "XML Views", "PostgreSQL", "Agile/Scrum"],
    },
  },
  {
    role: "DevOps Course — 3-month Intensive",
    org: "Deutsche Telekom",
    year: "2025",
    desc: "Containerised a full-stack Go/React app, deployed across EKS environments with Helm/Helmfile, built multi-stage GitLab CI/CD pipelines, and implemented end-to-end secrets management.",
    details: {
      overview:
        "Completed Deutsche Telekom's intensive 3-month DevOps Academy programme, delivering a production-grade Kubernetes platform on AWS. Built the full DevOps lifecycle from containerisation through multi-environment deployment, CI/CD automation, infrastructure provisioning, secrets management, and observability.",
      highlights: [
        "Containerised a full-stack Go/React application with multi-stage Dockerfiles; built and pushed images via Kaniko on GitLab CI",
        "Deployed across dev and prod Amazon EKS environments using three custom Helm charts published to GitLab Package Registry, orchestrated with Helmfile",
        "Designed a multi-stage GitLab CI/CD pipeline (build → test → dockerization → deploy → smoke-test) with shared configuration across repos",
        "Provisioned a self-hosted GitLab runner on AWS EC2 using Terraform and Ansible, scoped to smoke-test jobs via runner tags",
        "Implemented end-to-end secrets management with SOPS + age encryption, Ansible Vault, and GitLab masked/protected CI variables — zero plaintext secrets in any repository",
        "Integrated with the shared cluster's kube-prometheus-stack via namespace-scoped PrometheusRule resources, working within Kyverno admission policies",
      ],
      tech: [
        "Docker",
        "Kubernetes",
        "Helm / Helmfile",
        "GitLab CI/CD",
        "AWS EKS / EC2",
        "Terraform",
        "Ansible",
        "SOPS + age",
        "Kaniko",
        "Prometheus",
        "Kyverno",
        "Go",
        "React",
        "nginx",
      ],
    },
  },
];

function AboutMeSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="about" className="py-16 sm:py-20 px-4 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 text-lg font-semibold font-['Work_Sans'] uppercase tracking-widest mb-2">
            About Me
          </h2>
          <p className="text-neutral-800 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Work_Sans'] mb-4">
            DevOps Student & Aspiring DevSecOps Engineer
          </p>
          <p className="text-gray-600 text-base lg:text-lg font-normal font-['Work_Sans'] leading-relaxed max-w-3xl">
            IT student at the University of Twente (BSc expected 2026), with
            hands-on experience from Deutsche Telekom's intensive DevOps
            programme. I bring discipline from a professional football
            background, international experience living abroad, and fluency in
            four languages: Lithuanian, English, Russian, Spanish.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-neutral-800 text-xl font-bold font-['Work_Sans'] mb-6">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-100 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  borderColor: "#3b82f6",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.1)",
                }}
                onClick={() => setSelectedExp(exp)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h4 className="text-neutral-800 text-base font-semibold font-['Work_Sans'] group-hover:text-blue-600 transition-colors duration-200">
                    {exp.role}
                  </h4>
                  <span className="text-blue-600 text-sm font-medium font-['Work_Sans'] whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-medium font-['Work_Sans'] mb-1">
                  {exp.org}
                </p>
                <p className="text-gray-600 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                  {exp.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-blue-600 text-xs font-semibold font-['Work_Sans'] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Click for details
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                <div>
                  <h3 className="text-lg font-bold font-['Work_Sans'] text-neutral-800">
                    {selectedExp.role}
                  </h3>
                  <p className="text-sm text-gray-500 font-['Work_Sans']">
                    {selectedExp.org} · {selectedExp.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-5 space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="text-sm font-bold font-['Work_Sans'] text-blue-600 uppercase tracking-wide mb-2">
                    Overview
                  </h4>
                  <p className="text-gray-600 text-sm font-normal font-['Work_Sans'] leading-relaxed">
                    {selectedExp.details.overview}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-bold font-['Work_Sans'] text-blue-600 uppercase tracking-wide mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedExp.details.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 text-sm font-normal font-['Work_Sans'] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold font-['Work_Sans'] text-blue-600 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.details.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 text-neutral-700 text-sm font-medium font-['Work_Sans'] rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutMeSection;