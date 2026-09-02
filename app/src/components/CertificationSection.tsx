import { useState } from "react";
import { Award, Search } from "lucide-react";
import { certificateUrl, certifications } from "../data/portfolio";

export function CertificationSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(certifications.map((item) => item.category))).sort()];
  const filtered = certifications.filter((certificate) => {
    const normalized = query.trim().toLowerCase();
    return (category === "All" || certificate.category === category) &&
      (!normalized || [certificate.name, certificate.issuer, certificate.category, ...certificate.skills].join(" ").toLowerCase().includes(normalized));
  });
  return (
    <section className="content-section" id="certifications">
      <div className="section-heading"><p className="eyebrow">Certifications</p><h2>Data engineering, dbt, SQL, Python, Docker, Linux, Spark, and governance credentials.</h2><p className="section-copy">All certificate PDFs from the repository are connected to view and download actions. Credential IDs and verification URLs can be added later where providers expose them.</p></div>
      <div className="filter-bar">
        <label><Search className="h-4 w-4" aria-hidden="true" /><input aria-label="Search certifications" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificates by skill, issuer, or topic..." /></label>
        <div className="category-filter certificate-filter" aria-label="Certification category filter">{categories.map((item) => <button key={item} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </div>
      <div className="cert-grid">{filtered.map((certificate) => {
        const url = certificateUrl(certificate.file);
        return <article key={certificate.file} className="cert-card reveal-card"><div className="cert-icon"><Award className="h-5 w-5" /></div><div><span>{certificate.category}</span><h3>{certificate.name}</h3><p>{certificate.issuer}</p><small>Issued {certificate.issueDate}</small></div><div className="tech-list">{certificate.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="cert-actions"><a href={url} target="_blank" rel="noreferrer">View PDF</a><a href={url} download>Download</a></div></article>;
      })}</div>
      {!filtered.length ? <p className="empty-state" role="status">No certifications match this search. Try a broader skill or category.</p> : null}
    </section>
  );
}
