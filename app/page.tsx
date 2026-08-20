import { Chapter } from "@/components/chapter";
import { JourneyTimeline } from "@/components/journey-timeline";
import { PortfolioShell } from "@/components/portfolio-shell";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { articles, identity, skills } from "@/data/portfolio.fr";

const socials = [
  ["GH", "GitHub", identity.github],
  ["IN", "LinkedIn", identity.linkedin],
  ["M", "Medium", identity.medium],
  ["@", "Email", `mailto:${identity.email}`],
] as const;

export default function Home() {
  return (
    <PortfolioShell>
      <main id="main-content">
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="hero-content">
            <Reveal>
              <div className="availability"><i /><span>Disponible pour de nouvelles missions</span><em>Dakar · GMT</em></div>
              <p className="hero-kicker"><span>~/virtual-voyager</span><b>→</b> infrastructure fiable, impact réel</p>
              <h1 id="hero-title">Seydina Limamou<br /><span>Laye Yade.</span></h1>
              <div className="hero-role"><strong>Cloud &amp; DevOps Engineer</strong><p>Je transforme des idées en systèmes qui voyagent sereinement de la première ligne de code jusqu’à la production.</p></div>
            </Reveal>
            <Reveal delay={.12} className="hero-actions">
              <a className="button button--primary" href="#escales">Explorer mes escales <span aria-hidden="true">↓</span></a>
              <a className="button button--ghost" href="#contact">Construisons la suite <span aria-hidden="true">↗</span></a>
            </Reveal>
            <Reveal delay={.2} className="hero-footer">
              <a className="cert-badge" href={identity.credly} target="_blank" rel="noreferrer" aria-label="Vérifier la certification AWS Certified Cloud Practitioner sur Credly">
                <span className="cert-mark" aria-hidden="true">AWS</span><div><small>Certification vérifiée</small><strong>Cloud Practitioner · CLF-C02</strong></div><b aria-hidden="true">↗</b>
              </a>
              <ul className="social-list" aria-label="Réseaux sociaux">
                {socials.map(([short, label, href]) => <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span>{short}</span>{label}</a></li>)}
              </ul>
            </Reveal>
          </div>
          <div className="hero-chapter" aria-hidden="true"><span>00</span><i /><b>Prologue</b></div>
        </section>

        <Chapter id="voyage" number="01" label="Le voyage" next="02 · Escales" tone="raised">
          <Reveal><header className="section-heading"><p className="eyebrow">À propos · trajectoire</p><h2 id="voyage-title">Changer de couche<br />sans perdre le <em>pourquoi.</em></h2></header></Reveal>
          <div className="story-grid">
            <Reveal className="story-lead">
              <p className="drop-cap">J’ai commencé par construire ce que l’utilisateur voit : des applications PHP/Laravel, des interfaces, des produits. Puis une question a déplacé mon regard : <strong>que se passe-t-il après le merge ?</strong></p>
              <p>C’est là que le voyage a changé d’altitude. Du code applicatif aux pipelines, des serveurs configurés à la main à l’infrastructure décrite, testée et reproductible.</p>
            </Reveal>
            <Reveal delay={.1} className="story-route">
              <div className="route-line" aria-hidden="true"><i /><i /><i /></div>
              <article><time>ORIGINE</time><h3>Développeur full stack</h3><p>PHP, Laravel et la culture du produit m’ont appris à partir du besoin, pas de l’outil.</p></article>
              <article><time>2024</time><h3>Architecture logicielle</h3><p>EDACY / Talent 4 Startups : apprendre à faire des choix qui restent lisibles quand le système grandit.</p></article>
              <article><time>FÉV. → JUIL. 2026</time><h3>Cloud &amp; DevOps</h3><p>Orange Digital Center Sénégal : AWS, IaC, conteneurs et livraison continue comme nouvelle carte du territoire.</p></article>
            </Reveal>
          </div>
          <Reveal className="manifesto"><span>01.1</span><blockquote>« Le cloud n’est pas une destination. C’est la capacité à livrer, observer et améliorer sans perdre le cap. »</blockquote></Reveal>
        </Chapter>
        <Chapter id="escales" number="02" label="Escales" next="03 · Carnets de route" tone="deep">
          <Reveal><header className="section-heading section-heading--split"><div><p className="eyebrow">Projets · systèmes en mouvement</p><h2 id="escales-title">Les escales qui<br />ont laissé une trace.</h2></div><p>Des produits utiles, mais surtout les chemins reproductibles qui permettent de les livrer avec confiance.</p></header></Reveal>
          <ProjectShowcase />
        </Chapter>

        <Chapter id="carnets" number="03" label="Carnets de route" next="04 · Étapes marquantes" tone="base">
          <Reveal><header className="section-heading section-heading--split"><div><p className="eyebrow">Écriture · notes de terrain</p><h2 id="carnets-title">Documenter le chemin,<br />pas seulement l’arrivée.</h2></div><p>J’écris pour transformer les incidents, décisions et apprentissages en cartes réutilisables.</p></header></Reveal>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <Reveal key={article.href} delay={index * .08}>
                <article className="article-card">
                  <div className="article-meta"><time dateTime={article.date.split(".").reverse().join("-")}>{article.date}</time><span>{article.language}</span></div>
                  <span className="article-number" aria-hidden="true">0{index + 1}</span>
                  <h3>{article.title}</h3><p>{article.excerpt}</p>
                  <a href={article.href} target="_blank" rel="noreferrer" className="text-link">Lire l’article complet <span aria-hidden="true">↗</span></a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal><a className="medium-link" href={identity.medium} target="_blank" rel="noreferrer"><span>Suivre les prochains carnets sur Medium</span><b aria-hidden="true">M →</b></a></Reveal>
        </Chapter>
        <Chapter id="etapes" number="04" label="Étapes marquantes" next="05 · Compétences" tone="raised">
          <Reveal><header className="section-heading section-heading--split"><div><p className="eyebrow">Changelog · parcours</p><h2 id="etapes-title">Une progression<br />version après version.</h2></div><p>Les jalons récents d’un parcours toujours en livraison continue.</p></header></Reveal>
          <Reveal delay={.08}><JourneyTimeline /></Reveal>
        </Chapter>

        <Chapter id="competences" number="05" label="Compétences" next="06 · Contact" tone="deep">
          <Reveal><header className="section-heading section-heading--split"><div><p className="eyebrow">Toolchain · capacités</p><h2 id="competences-title">Des outils regroupés<br />par responsabilité.</h2></div><p>La technologie reste un moyen. Chaque domaine répond à une étape précise du voyage vers la production.</p></header></Reveal>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <Reveal key={group.domain} delay={index * .06}>
                <article className="skill-group"><div className="skill-head"><span>{group.index}</span><h3>{group.domain}</h3></div><ul>{group.items.map((skill) => <li key={skill}><i aria-hidden="true" />{skill}</li>)}</ul></article>
              </Reveal>
            ))}
          </div>
          <Reveal className="principle-line"><code>while (system.isRunning) &#123;</code><span>automatiser · mesurer · apprendre</span><code>&#125;</code></Reveal>
        </Chapter>
        <Chapter id="contact" number="06" label="Contact" tone="base">
          <div className="contact-grid">
            <Reveal><header className="section-heading"><p className="eyebrow">Prochaine destination</p><h2 id="contact-title">Un système à fiabiliser ?<br /><em>Parlons-en.</em></h2><p className="contact-intro">Mission cloud, pipeline à industrialiser ou produit open source à faire grandir : racontez-moi le prochain chapitre.</p></header></Reveal>
            <Reveal delay={.12} className="contact-panel">
              <div className="contact-status"><i /><span>Canal ouvert</span><time>Réponse sous 48 h</time></div>
              <a className="contact-email" href={`mailto:${identity.email}?subject=Prochain%20voyage%20cloud%20%2F%20DevOps`}><small>Email</small><strong>{identity.email}</strong><span aria-hidden="true">↗</span></a>
              <div className="contact-secondary"><a href={`tel:${identity.phone.replaceAll(" ", "")}`}><small>Téléphone</small><strong>{identity.phone}</strong></a><a href={identity.github} target="_blank" rel="noreferrer"><small>GitHub</small><strong>@seydinalimamoulayeyade</strong></a></div>
            </Reveal>
          </div>
          <footer className="site-footer"><div className="brand-mark"><span>VV</span><b>Virtual Voyager</b></div><p>Conçu et déployé depuis Dakar · Sénégal</p><a href="#hero">Retour au départ <span aria-hidden="true">↑</span></a></footer>
        </Chapter>
      </main>
    </PortfolioShell>
  );
}
