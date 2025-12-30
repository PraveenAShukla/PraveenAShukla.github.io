---
permalink: /
title: "Praveen Shukla"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi, I'm Praveen Shukla—an AI & Data Science undergrad at MBZUAI in Abu Dhabi. I work on graph deep learning, LLM agents, and healthcare AI, aiming to build ML systems that reason over real-world data and stay useful in production.

What I’m working on
------
- Graph representation learning for biology and healthcare data
- Retrieval + agentic workflows with LLMs
- Practical ML systems: evaluation, data quality, and fast iteration

<style>
.selected-pubs { margin: 1.5rem 0 2.5rem; }
.selected-pubs h2 { margin-bottom: 0.25rem; }
.selected-pub {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 0.75rem 1.5rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--global-border-color);
}
.selected-pub:last-child { border-bottom: none; }
.pub-meta { color: #666; font-weight: 600; line-height: 1.4; }
.pub-year { display: none; }
.pub-body { display: grid; gap: 0.35rem; }
.pub-title { font-size: 1.05rem; font-weight: 700; line-height: 1.5; }
.pub-title a { color: inherit; text-decoration: none; }
.pub-title a:hover { text-decoration: underline; }
.pub-highlight { color: #b22222; font-weight: 700; font-size: 0.95rem; margin-left: 0.35rem; }
.pub-authors { color: #444; }
.pub-links { display: inline-flex; gap: 0.5rem; align-items: center; }
.pub-badge {
  padding: 0.3rem 0.65rem;
  font-size: 0.85rem;
  border-radius: 4px;
  background: #b22222;
  color: #fff;
}
.pub-badge--secondary { background: #1f6feb; }
.pub-badge--tertiary { background: #5a5a5a; }
</style>

{% assign featured_pubs = site.publications | where: "featured", true %}
{% if featured_pubs.size > 0 %}
<section class="selected-pubs">
  <h2>Publications</h2>
  <hr />
  {% for post in featured_pubs %}
    <div class="selected-pub">
      <div class="pub-meta">
        <div class="pub-venue">{{ post.venue }}</div>
        <div class="pub-year">{{ post.date | date: "%Y" }}</div>
      </div>
      <div class="pub-body">
        <div class="pub-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.highlight %}<span class="pub-highlight">⭐ {{ post.highlight }}</span>{% endif %}
        </div>
        {% if post.authors %}<div class="pub-authors">{{ post.authors }}</div>{% endif %}
        <div class="pub-links">
          {% if post.paperurl %}<a class="pub-badge" href="{{ post.paperurl }}">PDF</a>{% endif %}
          {% if post.code or post.github %}<a class="pub-badge pub-badge--secondary" href="{{ post.code | default: post.github }}">GitHub</a>{% endif %}
          <a class="pub-badge pub-badge--tertiary" href="{{ post.url | relative_url }}">Details</a>
        </div>
      </div>
    </div>
  {% endfor %}
</section>
{% endif %}

[View all publications →](/publications/)

News & updates
------
<style>
.news-list { list-style: disc; padding-left: 1.25rem; margin: 1rem 0 2rem; }
.news-list li { margin-bottom: 0.5rem; line-height: 1.6; }
.news-date { font-weight: 700; color: #b22222; margin-right: 0.35rem; }
</style>
<ul class="news-list">
  <li><span class="news-date">Nov 2025:</span> EdgeRAG (solo author) accepted to AAAI 2026 EGSAI Workshop; preparing camera-ready and demo artifacts.</li>
  <li><span class="news-date">Sept 2025:</span> Shipped new LLM agent workflows for research productivity; rolling out eval dashboards for tool reliability.</li>
  <li><span class="news-date">July 2025:</span> Prototyped graph neural models on patient trajectory data; running ablations on data quality and fairness.</li>
  <li><span class="news-date">May 2025:</span> Presented internal talk on retrieval + agentic pipelines for healthcare use cases.</li>
  <li><span class="news-date">Mar 2025:</span> Open to collaborations on applied AI in healthcare and graph learning—reach out!</li>
</ul>

Recent highlights
------
- Built and shipped LLM agent workflows for research productivity
- Exploring graph neural networks for patient trajectories and molecular data
- Open to collaborations on applied AI in healthcare and robust evaluation

Education
------
- B.S. in AI & Data Science (undergraduate), MBZUAI — Abu Dhabi

CV
------
- Full CV: [View here](/cv/)

Find me
------
- Email: prashuiit@gmail.com
- GitHub: [PraveenAShukla](https://github.com/PraveenAShukla)
- LinkedIn: [praveen-ashukla](https://www.linkedin.com/in/praveen-ashukla)
- Bluesky: bsky.app
