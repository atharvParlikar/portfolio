export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Zap-Socket",
    description: "Type-safe WebSocket library. tRPC DX with WebSocket power for real-time features without the headaches.",
    tech: ["TypeScript", "WebSocket"],
    github: "https://github.com/atharvparlikar/zap-socket",
    link: "https://zap-socket-control-center.vercel.app/",
    year: "2025"
  },
  {
    title: "Perpetra",
    description: "Blazingly fast perps exchange backend written in Rust.",
    tech: ["Rust", "Trading"],
    github: "https://github.com/atharvParlikar/perpetra",
    year: "2025"
  },
  {
    title: "Intervue",
    description: "Technical interview platform. Google Meet but with synced code editor and terminal.",
    tech: ["WebRTC", "Code Editor"],
    github: "https://github.com/atharvParlikar/intervue/",
    year: "2025"
  },
  {
    title: "Metaverse Office",
    description: "Top-down virtual office space game using Canvas API.",
    tech: ["WebRTC", "WebSocket", "Canvas"],
    github: "https://github.com/atharvParlikar/metaverse-office",
    year: "2024"
  },
];
