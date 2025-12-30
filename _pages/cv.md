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
* B.S. in AI Engineering (undergraduate), Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi — In progress

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
