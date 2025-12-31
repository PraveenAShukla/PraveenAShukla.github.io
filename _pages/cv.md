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
Freshman AI Engineering undergrad at MBZUAI (Abu Dhabi), focused on research-minded building of reasoning-centric AI systems. Exploring graph deep learning, LLM agents, healthcare AI, fairness, and personalization with rigorous experimentation and reproducible prototypes—working toward AI co-scientists that collaborate with humans to accelerate reliable discovery and impact.

Education
======
* B.S. in AI Engineering, Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi — In progress

Experience
======
* May 2024–Present: Research Intern — IIT Madras, CNDE Lab (with Dr. Krishnan Balasubramanian)
  * Research on AI for non-destructive evaluation and reliability; supporting model development and data analysis.
* Jan 2025–Mar 2025: Research Intern — IIITDM Kancheepuram, LEAP Lab (with Dr. Uttam Mrinal Pal)
  * Built deep learning models for early detection/classification of Oral Potentially Malignant Disorders (OPMDs) using clinical images; YOLO-based detection and CNN classifiers; partnered with clinicians on screening impact.
* Oct 2024–Nov 2024: AI Engineer Intern — Lumio AI
  * Delivered RAG-enhanced LLM solutions for real-time client use cases; led experimentation, feature engineering, and evals to improve reliability and context-aware responses.
* Feb 2020–Present: Founder & Director — GLOBAL SCIENCE
  * NASA-funded asteroid discovery campaigns (19 finds); organized India Techno Fest; grew a 150+ coordinator network delivering STEM outreach to 50K+ students; consecutive Awards of Excellence.
* Oct 2020–Nov 2021: Citizen Scientist — International Astronomical Search Collaboration (IASC)
  * Mentored teachers/students to 19 preliminary Main Belt asteroid discoveries; provided training on Astrometrica and MPC reporting.

Research & Interests
======
* Graph representation learning (healthcare, biology, knowledge graphs)
* Retrieval + agentic workflows with LLMs
* Evaluation, data quality, and efficient deployment
* Fairness and personalization in applied AI

Projects
======
* EdgeRAG (AAAI 2026 EGSAI Workshop, solo author): Packable, offline, fairness-aware RAG micro-models for low-connectivity regions; compact knowledge packs + compressed multilingual retriever; dual answering path for low-end devices.
* LLM agent workflows: Retrieval + tool-use pipelines for research productivity with evaluation loops, reliability dashboards, and data-quality checks.
* Healthcare graphs: Prototyping graph learning pipelines on patient trajectories and molecular data with fairness and data-quality audits.
* Next-Gen Hyper-Personalized AI Email Engine: IMAP→PDF parsing→LLM reply generation with review UI; cut reply time by 99%; stack: Python/Flask/OpenAI/SMTP/IMAP.
* AI Productivity Suite — AssistX: Modular multi-agent hub integrating ChatGPT/Whisper/Vision APIs with secure routing and session memory; reduced tool-switching by ~70%.

Skills
======
* Machine learning: graph neural networks, retrieval-augmented generation, LLM agents, evaluation and experimentation
* Systems: model compression, CPU-only/edge deployment, data quality pipelines
* Languages/tools: Python, PyTorch, JAX (basic), data tooling for experimentation

Achievements
======
* Finalist, Pulse @ Techfest IIT Bombay — GenAI Buildathon (2024)
* Co-discoverer of Main Belt Asteroid 2020UJ37 (IAU MPC) — 2020
* Merck India Scholar (Merck India Charitable Trust) — 2022–2028
* Top 20, AI Quiz on National Science Day (NSD-2022), BARC Mumbai — 2022
* State topper in Mathematics (MSBSHSE) — 2021
* 1st Position, Youth Invention (₹5,000 prize) — 2020
* National Top Performer, MyGov Quiz by MeitY — 2018

Certifications
======
* Build Large Language Models (LLMs) from Scratch — Vizuara AI (May 2025–Present)
* Introduction to Statistics — Stanford (May 2025)
* Reinforcement Learning From Human Feedback — DeepLearning.AI (Apr 2025)
* Fundamentals of AI Agents Using RAG and LangChain — IBM (Jan 2025)
* Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Jan 2025)
* Developing AI Applications with Python and Flask — IBM (Dec 2024)
* Python for Data Science, AI & Development — IBM (Sep 2024)

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
