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
* B.S. in AI Engineering, MBZUAI — Abu Dhabi — In progress

Experience
======
* <strong>May 2024–Present: Research Intern</strong> — IIT Madras, <a href="https://www.cnde.in/" target="_blank" rel="noopener">CNDE Lab</a> (with Dr. Krishnan Balasubramanian)
  * Research on AI for non-destructive evaluation and reliability; supporting model development, data analysis, and lab collaborations.
* <strong>Jan 2025–Mar 2025: Research Intern</strong> — Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram
  * Developed deep learning models for early detection and classification of Oral Potentially Malignant Disorders (OPMDs) using clinical image data. Conducted literature review, dataset preparation, and domain-specific annotation of lesions. Implemented YOLO-based object detection and CNN classifiers in PyTorch to identify high-risk conditions like leukoplakia, erythroplakia, OLP, OSF, and PVL. Enhanced model performance through targeted augmentation and lesion-specific feature engineering. Collaborated with clinical researchers to ensure diagnostic accuracy and translational impact in oral cancer screening.
* <strong>Oct 2024–Nov 2024: AI Engineer Intern</strong> — Lumio AI
  * Developed and optimized end-to-end AI solutions for real-time client projects, applying advanced deep learning techniques and algorithm fine-tuning. Integrated Retrieval-Augmented Generation (RAG) with large language models (LLMs) to elevate context-aware responses in AI systems. Led model experimentation, feature engineering, and evaluation, ensuring high performance and reliability. Collaborated across engineering and product teams to deliver AI-driven features aligned with business goals. Demonstrated expertise in artificial intelligence, strategic communication, and problem-solving in fast-paced, innovation-driven environments.
* <strong>Feb 2020–Present: Founder & Director</strong> — <a href="https://www.globalsciencehub.com/" target="_blank" rel="noopener">GLOBAL SCIENCE</a>
  * Started GLOBAL SCIENCE at the <span class="semi-bold">age of 12</span>, later affiliated with <span class="semi-bold">Vigyan Prasar (DST, GoI)</span> as a nationally recognized science communication initiative. Led NASA-funded asteroid discovery campaigns (19 finds) and organized India Techno Fest featuring experts from ISRO, IIT, and Meta. Initiated programs like <em>Inspiring Young</em> and <em>Science at Home</em> (including virtual CERN tours), reaching over 50,000 students across India. Built a network of 150+ district coordinators and 10 mentors; earned consecutive Awards of Excellence (2020–21, 2021–22).
* <strong>Oct 2020–Nov 2021: Citizen Scientist</strong> — <a href="https://iasc.cosmosearch.org/" target="_blank" rel="noopener">International Astronomical Search Collaboration (IASC)</a>
  * Spearheaded the Saptarishi VIPNET 03 campaign as Team Leader, mentoring government school teachers across three Indian states in the discovery of 10 preliminary Main Belt asteroids. Elevated to National Mentor, leading teams of students and educators to 19 preliminary asteroid discoveries. Delivered technical training on Astrometrica and MPC reporting, empowering grassroots citizen scientists to contribute to global astronomical research.

Research & Interests
======
* Graph representation learning (healthcare, biology, knowledge graphs)
* Retrieval + agentic workflows with LLMs
* Evaluation, data quality, and efficient deployment
* Fairness and personalization in applied AI

Projects
======
* <strong>EdgeRAG</strong> (AAAI 2026 EGSAI Workshop, solo author): Packable, offline, fairness-aware RAG micro-models for low-connectivity regions; compact knowledge packs + compressed multilingual retriever; dual answering path for low-end devices.
* <strong>LLM agent workflows</strong>: Retrieval + tool-use pipelines for research productivity with evaluation loops, reliability dashboards, and data-quality checks.
* <strong>Healthcare graphs</strong>: Prototyping graph learning pipelines on patient trajectories and molecular data with fairness and data-quality audits.
* <strong>Next-Gen Hyper-Personalized AI Email Engine</strong>: IMAP→PDF parsing→LLM reply generation with review UI; cut reply time by 99%; stack: Python/Flask/OpenAI/SMTP/IMAP.
* <strong>AI Productivity Suite — AssistX</strong>: Modular multi-agent hub integrating ChatGPT/Whisper/Vision APIs with secure routing and session memory; reduced tool-switching by ~70%.

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
<details>
  <summary>View certifications</summary>
  <ul>
    <li>Build Large Language Models (LLMs) from Scratch — Vizuara AI (May 2025–Present)</li>
    <li>Introduction to Statistics — Stanford (May 2025)</li>
    <li>Reinforcement Learning From Human Feedback — DeepLearning.AI (Apr 2025)</li>
    <li>Fundamentals of AI Agents Using RAG and LangChain — IBM (Jan 2025)</li>
    <li>Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Jan 2025)</li>
    <li>Developing AI Applications with Python and Flask — IBM (Dec 2024)</li>
    <li>Python for Data Science, AI & Development — IBM (Sep 2024)</li>
  </ul>
</details>

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
