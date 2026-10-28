// Chip labels for the "Stack I use" section (rendered by src/components/stack.jsx).
//
// Plain strings on purpose. The previous shape carried `porcentage` and `value`
// fields that nothing ever read, and the UI already renders tags, not progress
// bars. Those numbers were invented and they actively undersold the profile:
// C# sat at 70% while AngularJS sat at 90%.
//
// Groups and wording mirror CV_Marcos_Casor_2026.md "Core skills".

export const skillsFrontend = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "AngularJS",
  "HTML5",
  "CSS3",
  "SCSS",
];

export const skillsBackend = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Web APIs",
  "Entity Framework",
  "Node.js",
  "NestJS",
];

export const skillsMobile = ["Flutter (BLoC)", "Xamarin", "MAUI"];

export const skillsData = [
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Firestore",
  "Redis",
  "Cosmos DB",
  "MongoDB",
  "SQLite",
];

export const skillsCloud = [
  "Azure Functions",
  "Azure DevOps",
  "GitHub Actions",
  "TeamCity",
  "Octopus",
  "GitLab",
  "BitBucket",
  "Firebase",
  "CodeMagic",
];

// "Currently exploring" in the CV — stated as such rather than dressed up as expertise.
export const skillsExploring = ["Python", "RAG", "Agent orchestration"];
