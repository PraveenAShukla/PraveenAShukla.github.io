---
layout: archive
permalink: /blog/
title: "Blog"
author_profile: true
---

A running log of research notes, experiments, build write-ups, and lessons from shipping AI systems.

{% assign blog_posts = site.posts %}
{% if blog_posts.size > 0 %}
  {% for post in blog_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
  <p>First posts coming soon.</p>
{% endif %}
