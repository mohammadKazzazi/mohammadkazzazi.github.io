---
layout: about
title: about
permalink: /
subtitle: M.Sc. student in Electrical Engineering at EPFL · computer vision, vision-language models, and efficient on-device AI

profile:
  align: right
  image: Profile.jpg
  image_circular: true
  more_info: >
    <p><i class="fa-solid fa-building-columns"></i> EPFL</p>
    <p><i class="fa-solid fa-location-dot"></i> Lausanne, Switzerland</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 6

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<p class="lead">
I am an M.Sc. student in Electrical Engineering at <a href="https://www.epfl.ch/">EPFL</a>. I build multimodal models that keep working after they leave the lab: compressed to fit a small device, profiled on real hardware, and evaluated on the failure cases that matter.
</p>

<div class="hero-actions">
  <a class="hero-btn primary" href="{{ '/assets/pdf/Resume.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> Curriculum vitae</a>
  <a class="hero-btn" href="https://scholar.google.com/citations?user=2p2DYSQAAAAJ" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <a class="hero-btn" href="https://github.com/mohammadKazzazi" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
  <a class="hero-btn" href="mailto:smohammadok@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
</div>

My current research at [Aalto University](https://www.aalto.fi/en) asks a practical question: how far can a large vision-language model be compressed before it stops reasoning reliably about a scene? I distilled a 7B teacher into 0.5B–3B students for fire understanding and deployed them on a commercial fire sensor, work that became my first-author submission to AAAI 2027 IAAI. Earlier, I worked on medical image analysis, closed-form localization for IoT, and FPGA and CUDA implementations, and I completed my B.Sc. in Electrical Engineering (Digital Systems) at [Sharif University of Technology](https://www.sharif.edu/).

<div class="about-highlights">
  <div class="highlight-card">
    <span class="highlight-value">14×</span>
    <span class="highlight-label">smaller VLM, 95% of teacher accuracy, running on a Raspberry Pi 5</span>
  </div>
  <div class="highlight-card">
    <span class="highlight-value">3</span>
    <span class="highlight-label">papers: AAAI 2027 IAAI (submitted), IEEE TAES (submitted), Elsevier MLWA</span>
  </div>
  <div class="highlight-card">
    <span class="highlight-value">18.53<small>/20</small></span>
    <span class="highlight-label">B.Sc. GPA at Sharif, top 3 in Digital Systems, top 0.1% in the national entrance exam</span>
  </div>
</div>

## Research interests

I like problems that sit between modern learning methods and the constraints that show up outside the lab: memory, latency, sensors, and reliability.

<ul class="research-tags">
  <li><i class="fa-solid fa-eye"></i> Computer vision</li>
  <li><i class="fa-solid fa-comment-dots"></i> Vision-language models</li>
  <li><i class="fa-solid fa-robot"></i> Vision-language-action models</li>
  <li><i class="fa-solid fa-microchip"></i> Efficient &amp; on-device AI</li>
  <li><i class="fa-solid fa-wand-magic-sparkles"></i> Generative models</li>
  <li><i class="fa-solid fa-shield-halved"></i> Trustworthy ML</li>
  <li><i class="fa-solid fa-bolt"></i> GPU &amp; FPGA acceleration</li>
</ul>

## Experience

<ol class="timeline">
  <li>
    <span class="timeline-date">2026 – present</span>
    <div class="timeline-body">
      <strong>M.Sc. in Electrical Engineering</strong>, EPFL, Lausanne
      <p>Coursework in machine learning, mathematics of data, convex optimization, and inference and learning.</p>
    </div>
  </li>
  <li>
    <span class="timeline-date">Apr 2026 – present</span>
    <div class="timeline-body">
      <strong>Research Assistant</strong>, Aalto University (remote), with <a href="https://www.aalto.fi/en/people/siavash-khajavi-haghighat">Prof. Siavash Khajavi</a>
      <p>Knowledge distillation of vision-language models for on-device fire understanding; now studying prompt optimization and reasoning for vision-language-action models.</p>
    </div>
  </li>
  <li>
    <span class="timeline-date">Aug 2024 – Jan 2025</span>
    <div class="timeline-body">
      <strong>Research Assistant</strong>, Raderon AI Laboratory (remote), with Dr. Soroush Sarabi
      <p>Medical image analysis with discrete wavelet transforms and swarm-based optimizers; co-authored a paper in <em>Machine Learning with Applications</em>.</p>
    </div>
  </li>
  <li>
    <span class="timeline-date">Jul – Sep 2024</span>
    <div class="timeline-body">
      <strong>Research Assistant</strong>, Artificial Creature Laboratory, Sharif University of Technology, with <a href="https://scholar.google.com/citations?user=nR98aV4AAAAJ&hl=en">Prof. Saeed Bagheri Shouraki</a>
      <p>Designed and built a smart IoT socket (Arduino, ESP32/ESP8266) for the lab's AI platform.</p>
    </div>
  </li>
  <li>
    <span class="timeline-date">2021 – 2025</span>
    <div class="timeline-body">
      <strong>B.Sc. in Electrical Engineering (Digital Systems)</strong>, Sharif University of Technology, Tehran
      <p>Thesis on closed-form TDOA/FDOA localization with <a href="https://scholar.google.com/citations?hl=en&user=sOUZ3cUAAAAJ">Prof. Rouhollah Amiri</a>. Teaching assistant for six courses across programming, digital systems, and signals.</p>
    </div>
  </li>
</ol>

## Selected projects

A few pieces of work that show how I like to build things. The [projects page]({{ '/projects/' | relative_url }}) has the full list, and most of the code is on [GitHub](https://github.com/mohammadKazzazi).

<div class="featured-projects">
  {% assign featured = site.projects | where: "featured", true | sort: "featured_order" %}
  {% for project in featured %}
    <a class="featured-project" href="{{ project.url | relative_url }}">
      <img src="{{ project.img | relative_url }}" alt="" loading="lazy">
      <span class="featured-project-title">{{ project.title }}</span>
      <span class="featured-project-desc">{{ project.description }}</span>
    </a>
  {% endfor %}
</div>

Outside research, I enjoy football, volleyball, travel, sitcoms, classical Persian music, and guitar.
