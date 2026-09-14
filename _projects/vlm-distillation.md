---
layout: page
title: Distilling VLMs for On-Device Fire Understanding
description: Compressing a 7B vision-language model 14× so it can reason about fire scenes on an embedded sensor.
img: assets/img/projects/vlm-distillation.svg
importance: 1
category: Machine learning
permalink: /projects/vlm-distillation/
related_publications: true
---

This is my current research at Aalto University with Prof. Siavash Khajavi. Large vision-language models can look at a scene and decide whether a fire is actually happening, which cuts down on false alarms. They are also far too big for a fire sensor.

## Approach

I built a teacher–student distillation setup that trains compact 0.5B–3B students from a 7B Qwen2.5 teacher using a combination of KL-divergence and cross-entropy supervision. The students are evaluated on the DetectiumFire benchmark and then on a commercial Detectium sensor.

## Results

| Metric                                    | Value            |
| :---------------------------------------- | :--------------- |
| Parameter reduction (teacher → student)   | 14×              |
| Burning-object accuracy retained          | 95.2% of teacher |
| Fire / non-fire accuracy after deployment | 99.5%            |
| Peak memory on Raspberry Pi 5 (CPU only)  | 1.9 GB           |
| End-to-end latency                        | ≈ 4 s            |
| False alarms on 1,452 test images         | 2                |

## Paper and next steps

The paper is on [arXiv](https://arxiv.org/abs/2609.05782) {% cite kazzazi2026distill %}. I am now looking at prompt optimization and reasoning strategies for vision-language-action models.
