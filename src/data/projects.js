export const projects = [
  {
    slug: "mediaq",
    title: "MediaQ",
    short:
      "A media tracker to track media consumption and find new media to consume.",
    description:
      "MediaQ is designed to track media consumption and find new media to consume, including movies, TV shows, and books.",
    images: [
      "/projects/mediaq-1.png",
      "/projects/mediaq-2.png",
      "/projects/mediaq-3.png",
    ],
    links: { live: "https://project-2-wtp.web.app/" },
    tags: ["Vue", "Firebase", "UI/UX"],
    bullets: [
      "Implemented authentication and protected routes.",
      "Designed responsive UI with categorized views.",
      "Integrated Firestore for user-specific collections.",
    ],
  },
  {
    slug: "print-tracker",
    title: "3D Print Tracker",
    short: "A 3D print manager to track material usage and prints at job.",
    description:
      "Created a 3D print manager to track material usage and prints at job. It is a React app using Supabase for the backend.",
    images: [
      "/projects/print-tracker-1.png",
      "/projects/print-tracker-2.png",
      "/projects/print-tracker-3.png",
      "/projects/print-tracker-4.png",
      "/projects/print-tracker-5.png",
    ],
    tags: ["React", "Supabase", "UI/UX"],
    bullets: [],
  },
  {
    slug: "afib-sim",
    title: "Afib Sim",
    short: "A website to help inspire empathy for those with afib.",
    description:
      "Created a website to help inspire empathy for those with atrial fibrillation (afib). Made for the Medtronic Innovation Relay.",
    images: [
      "/projects/afib-1.png",
      "/projects/afib-2.png",
      "/projects/afib-3.png",
    ],
    links: { live: "https://afib-sim.vercel.app/" },
    tags: ["Vite", "React", "Health Tech"],
    bullets: [],
  },
  {
    slug: "oromodel",
    title: "Oropharyngeal Tumor Model",
    short:
      "A trainer for students to learn how to search for oropharyngeal tumors.",
    description:
      "Created an Oropharyngeal Tumor Model trainer so that students can learn how to search for oropharyngeal tumors. Used the Stratasys J850 to 3D print the models and a Unity program to visualize the model in VR.",
    images: [
      "/projects/oromodel-1.png",
      "/projects/oromodel-2.png",
      "/projects/oromodel-3.png",
    ],
    tags: ["Unity", "VR", "Stratasys J850", "Medical VR"],
    bullets: [
      "Engineered an interactive VR environment in Unity to visualize STL files providing an immersive tool for anatomical study.",
      "Fabricated high-fidelity, multi-material physical models using a Stratasys J850 3D printer to provide students with accurate tactile feedback.",
      "Bridged physical and digital learning modalities by combining hands-on 3D printed tools with VR simulations to improve tumor-detection accuracy."
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    short: "Personal portfolio built with Vite + React.",
    description:
      "My portfolio website.",
    images: ["/projects/portfolio.jpg"],
    tags: ["React", "Vite", "Bulma"],
    bullets: [
      "Built a multi-page portfolio for GitHub Pages.",
      "Added a projects gallery with detail pages per project.",
      "Deployed via gh-pages to a user site.",
    ],
  },
];
