export const projects = [
  {
    slug: "icu-readmission",
    title: "Identifying 30-Day Readmission for High-Risk ICU Patients",
    short:
      "Compared clinical machine-learning models to identify high-risk ICU patients likely to be readmitted within 30 days.",
    description:
      "Built a patient-level readmission prediction workflow using MIMIC-III data, combining admission context, physiologic aggregates, and the first 24 hours of ICU vital signs to identify 30-day non-elective readmissions.",
    images: ["/projects/icu-readmission-workflow.png"],
    tags: ["MIMIC-III", "Machine Learning", "XGBoost", "GRU"],
    bullets: [
      "Constructed an adult ICU cohort with patient-level splitting, 30-day readmission labels, and leakage-safe evaluation.",
      "Benchmarked Logistic Regression, Linear SVM, Random Forest, and XGBoost models on static and aggregate clinical features.",
      "Trained a GRU sequence model on hourly vital signs from each patient's first 24 ICU hours.",
      "Evaluated discrimination, calibration, precision-recall tradeoffs, and clinical utility through Number Needed to Evaluate.",
    ],
  },
  {
    slug: "seed-free-playlist-replication",
    title: "Replication of Towards Seed-Free Music Playlist Generation",
    short:
      "Replicated and extended seed-free playlist continuation models using a reduced Spotify Million Playlist Dataset.",
    description:
      "Replicated the comparison of Weighted Regularized Matrix Factorization (WRMF), Recurrent Neural Collaborative Filtering (RNCF), and Hybrid Recurrent Neural Collaborative Filtering (HRNCF) for automatic playlist continuation with few or no seed tracks.",
    previewIcon: "fa-brands fa-spotify",
    tags: ["Python", "Recommender Systems", "Spotify MPD", "Deep Learning"],
    bullets: [
      "Reproduced the original performance pattern on a reduced Spotify Million Playlist Dataset under Colab-scale compute constraints.",
      "Found WRMF strongest when seed tracks were available, RNCF stronger for no-seed playlists, and HRNCF able to combine both advantages.",
      "Extended the models with playlist text, seed-order scoring, and seed-count-based weighting.",
      "Observed that playlist text most improved prediction, while seed order was most useful for reducing recommended-song clicks.",
    ],
  },
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
    images: [],
    tags: ["React", "Vite", "Bulma"],
    bullets: [
      "Built a multi-page portfolio for GitHub Pages.",
      "Added a projects gallery with detail pages per project.",
      "Deployed via gh-pages to a user site.",
    ],
  },
];
