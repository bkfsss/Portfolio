/* global React */
const { SectionLabel, ProjectCard } = window.BahaSatgunPortfolioDesignSystem_d181b5;

const PROJECTS = [
  { index: '01', title: 'Personal Website',
    blurb: 'Personal portfolio website to showcase my projects, experience and street photo gallery. You are looking at it right now!',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'], href: 'https://BahaSatgun.github.io' },
 { index: '02', title: 'Terrarium Roblox Game', blurb: 'Architected 19 server-side game systems in Luau including economy, data persistence, events, and monetization, integrated a local AI coding assistant (Qwen3-Coder 30B) into the development of an automated loop workflow to accelerate implementation, using MCP Servers and RAG',  tags: ['Luau', 'Roblox', 'RAG', 'MCP', 'Obsidian', 'Claude Code', 'LM Studio'], href: 'https://www.roblox.com/games/123456789/Terrarium' }
];

// ProjectsSection — fills the source's empty "projects" scaffold.
function ProjectsSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <SectionLabel>projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {PROJECTS.map((p) => <ProjectCard key={p.index} {...p} />)}
      </div>
    </section>
  );
}

window.ProjectsSection = ProjectsSection;
