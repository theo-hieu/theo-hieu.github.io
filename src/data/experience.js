// src/data/experience.js
export const experiences = [
  {
    id: "daikin-cloud-intern",
    role: "Software Engineering Intern (Cloud)",
    company: "Daikin Applied Americas",
    location: "Plymouth, MN",
    start: "May 2025",
    end: "Present",
    startDate: "2025-05-01",
    endDate: null, // null = Present
    description:
      "Worked on cloud services and internal developer tooling to improve reuse, reliability, and integration across teams.",
    bullets: [
      "Developed and published NuGet packages for shared components, reducing new project setup time by ~15–20% and standardizing internal code reuse.",
      "Designed and implemented RESTful APIs in C# with SQL using an API-first workflow (Swagger), improving cross-team collaboration and reducing integration issues; used Postman for integration testing.",
      "Built and executed automated xUnit test suites to increase test coverage and improve reliability of core cloud services.",
    ],
    tags: ["C#", "REST APIs", "SQL", "Swagger", "Postman", "xUnit", "NuGet"],
  },
  {
    id: "bracco-swe-intern",
    role: "Software Engineering Intern",
    company: "Bracco Medical Technologies",
    location: "Eden Prairie, MN",
    start: "May 2024",
    end: "Aug 2024",
    startDate: "2024-05-01",
    endDate: "2024-08-31",
    description:
      "Built a client-facing analytics UI and deployed it to edge devices using Azure IoT, with automated quality checks in CI/CD.",
    bullets: [
      "Designed and developed a client-facing UI using Angular and React to display cardiovascular injector data as KPIs, leveraging Redash and PostgreSQL.",
      "Integrated REST API calls using the FHIR specification and generated synthetic data with a Python script to support real-time analytics workflows.",
      "Deployed the web application and FHIR server as Azure IoT Edge modules to enable containerized deployment to downstream devices.",
      "Updated Azure Pipelines to include automated unit testing and linting, reducing deployment time by ~40%.",
    ],
    tags: [
      "Angular",
      "React",
      "PostgreSQL",
      "FHIR",
      "Python",
      "Azure IoT Edge",
      "Docker",
      "Azure Pipelines",
    ],
  },
  {
    id: "bakken-3d-specialist",
    role: "3D Printing and Segmentation Specialist",
    company: "Earl E. Bakken Medical Devices Center",
    location: "Minneapolis, MN",
    start: "Jun 2023",
    end: "Present",
    startDate: "2023-06-01",
    endDate: null,
    description:
      "Created anatomical models and VR visualizations to support clinicians and medical device prototyping.",
    bullets: [
      "Created and uploaded 3D models to VR using Unity so clinicians can view and interact with anatomical models.",
      "Collaborated with 50+ doctors and students to design and prototype medical inventions and anatomical models.",
      "Generated patient-specific anatomy models from CT scans (Mimics) for 3D printing and clinical visualization.",
    ],
    tags: ["Unity", "3D Printing", "Medical Imaging", "Mimics", "VR"],
  },
  {
    id: "bakken-research-assistant-mr",
    role: "Research Assistant",
    company: "Earl E. Bakken Medical Devices Center",
    location: "Minneapolis, MN",
    start: "Feb 2024",
    end: "Oct 2024",
    startDate: "2024-02-01",
    endDate: "2024-10-31",
    description:
      "Developed a mixed reality guidance experience to improve procedural visualization for clinicians.",
    bullets: [
      "Developed a mixed reality guided nasogastric tube placement program using Unity and OpenPose.",
      "Enabled clinicians to visualize tube positioning within the patient’s body more accurately during placement.",
    ],
    tags: ["Unity", "Mixed Reality", "OpenPose", "Computer Vision"],
  },
  {
    id: "bakken-undergrad-ra-vr-trainer",
    role: "Undergraduate Research Assistant",
    company: "Earl E. Bakken Medical Devices Center",
    location: "Minneapolis, MN",
    start: "Jun 2023",
    end: "Jan 2024",
    startDate: "2023-06-01",
    endDate: "2024-01-31",
    description:
      "Built a VR surgical training application using interactive 3D anatomy models and C# scripting.",
    bullets: [
      "Developed a VR surgical trainer for trochleoplasty that integrates 3D anatomical models in Unity.",
      "Wrote C# scripts to add interactive behaviors to in-game objects to support surgical training without entering the operating room.",
    ],
    tags: ["Unity", "C#", "VR", "Simulation"],
  },
  {
    id: "sase-labs-codirector",
    role: "Labs Co-Director",
    company: "Society of Asian Student Engineers (SASE)",
    location: "University of Minnesota – Twin Cities",
    start: "Oct 2023",
    end: "Present",
    startDate: "2023-10-01",
    endDate: null,
    description:
      "Led and mentored a student team to design and build an engineering project each year.",
    bullets: [
      "Mentored a team of students to design and engineer an annual project (e.g., drone, mechanical heart).",
    ],
    tags: ["Leadership", "Mentorship", "Project Management"],
  },
];
