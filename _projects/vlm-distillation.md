---
layout: page
title: Distilling VLMs for On-Device Fire Understanding
description: Compressing 7B vision-language models so they can reason about fire scenes on embedded sensors.
importance: 1
category: Research
permalink: /projects/vlm-distillation/
---

This is my current research at Aalto University with Prof. Siavash Khajavi. Large vision-language models can look at a scene and decide whether a fire is actually happening, which helps cut down on false alarms. They are also far too big for a fire sensor.

I built a teacher–student distillation setup that trains compact 0.5B–3B students from a 7B Qwen2.5 teacher using KL-divergence and cross-entropy. On the DetectiumFire benchmark, a 0.5B student kept 95.2% of the teacher's burning-object accuracy with 14× fewer parameters and reached 99.5% fire/non-fire accuracy after deployment.

We then ran the distilled models on a Raspberry Pi 5, CPU only. Peak memory was about 1.9 GB, end-to-end latency about 4 seconds, and the system produced 2 false alarms on 1,452 test images.

The first-author paper is on [arXiv](https://arxiv.org/abs/2609.05782) and submitted to AAAI 2027 Innovative Applications of AI (IAAI). I am now looking at prompt optimization and reasoning for Vision-Language-Action models.
