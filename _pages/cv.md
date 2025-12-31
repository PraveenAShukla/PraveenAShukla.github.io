---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Summary
======
AI Engineering undergrad at MBZUAI in Abu Dhabi. I work on graph deep learning, LLM agents, and healthcare AI—building systems that can reason over real-world, often messy data and stay deployable.

Education
======
* B.S. in AI Engineering, Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi — In progress

Experience
======
* 2024–Present: Applied AI projects (self-directed + collaborations)
  * Built LLM agent workflows for research productivity (retrieval, tool use, evaluation loops)
  * Prototyped graph learning pipelines for healthcare and biology data
  * Focus on practical evals, data quality, and deployment-friendly models

Research & Interests
======
* Graph representation learning (healthcare, biology, knowledge graphs)
* Retrieval + agentic workflows with LLMs
* Evaluation, data quality, and efficient deployment

Projects
======
* EdgeRAG: Packable, offline, fairness-aware retrieval-augmented micro-models for low-connectivity regions (AAAI 2026 EGSAI Workshop, solo author). Built compact knowledge packs and compressed multilingual retriever; dual answering path for low-end devices.
* LLM agent workflows: Retrieval + tool-use pipelines for research productivity with evaluation loops and reliability dashboards.
* Healthcare graphs: Prototyping graph learning pipelines on patient trajectories and molecular data with fairness and data-quality checks.

Skills
======
* Machine learning: graph neural networks, retrieval-augmented generation, LLM agents, evaluation and experimentation
* Systems: model compression, CPU-only/edge deployment, data quality pipelines
* Languages/tools: Python, PyTorch, JAX (basic), data tooling for experimentation

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
