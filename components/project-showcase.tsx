import Image from "next/image";
import { projects } from "@/data/portfolio.fr";
import type { Project } from "@/types/portfolio";
import { PipelineDiagram } from "./pipeline-diagram";
import { Reveal } from "./reveal";

function ProjectLinks({ project }: Readonly<{ project: Project }>) {
  return (
    <div className="project-links">
      <a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel}<span aria-hidden="true">↗</span></a>
      {project.repositoryHref ? <a className="text-link text-link--secondary" href={project.repositoryHref} target="_blank" rel="noreferrer">{project.repositoryLabel ?? "Code source"}<span aria-hidden="true">↗</span></a> : null}
    </div>
  );
}

function ProjectVisual({ project }: Readonly<{ project: Project }>) {
  if (project.featured) return <PipelineDiagram />;
  if (project.image) return (
    <a className="project-media" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} — ouvrir la démo`}>
      <Image src={project.image.src} alt={project.image.alt} width={1440} height={1000} sizes="(max-width: 680px) 100vw, (max-width: 980px) 80vw, 44vw" />
      <span aria-hidden="true">Vue réelle · ↗</span>
    </a>
  );
  return <div className="project-signal" aria-hidden="true"><span>{project.name.slice(0, 2).toUpperCase()}</span><i /><i /><i /></div>;
}

export function ProjectShowcase() {
  const primaryProjects = projects.filter((project) => !project.secondary);
  const secondaryProjects = projects.filter((project) => project.secondary);
  return (
    <div className="projects-list">
      {primaryProjects.map((project, index) => (
        <Reveal key={project.id} delay={Math.min(index * .05, .2)}>
          <article id={project.id} className={`project ${project.featured ? "project--featured" : ""}`}>
            <div className="project-index"><span>0{index + 1}</span><i /></div>
            <div className="project-copy">
              <p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p>{project.description}</p>
              <strong className="project-impact">{project.impact}</strong>
              <ul className="tag-list" aria-label={`Technologies de ${project.name}`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <ProjectLinks project={project} />
            </div>
            <ProjectVisual project={project} />
          </article>
        </Reveal>
      ))}
      <section className="secondary-projects" aria-labelledby="secondary-projects-title">
        <Reveal><header className="secondary-projects-head"><div><span>02.1 · Sélection complémentaire</span><h3 id="secondary-projects-title">Autres expéditions</h3></div><p>Trois systèmes complémentaires autour de l’architecture distribuée, du pilotage CI/CD et de l’observabilité.</p></header></Reveal>
        <div className="secondary-projects-grid">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * .06}>
              <article id={project.id} className="secondary-project">
                <span className="secondary-project-index">0{primaryProjects.length + index + 1}</span><p className="eyebrow">{project.eyebrow}</p><h4>{project.name}</h4><p>{project.description}</p>
                <strong className="project-impact">{project.impact}</strong>
                <ul className="tag-list" aria-label={`Technologies de ${project.name}`}>{project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
                <ProjectLinks project={project} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
