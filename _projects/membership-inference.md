---
layout: page
title: Membership Inference Attacks Against Diffusion Models
description: A hyperparameter-free variant of SecMI that fuses several denoising timesteps instead of picking one by hand.
img: assets/img/projects/membership-inference.svg
importance: 3
category: Machine learning
github: https://github.com/mohammadKazzazi/Membership-Inference-Attack-against-Diffusion-Models
permalink: /projects/membership-inference/
---

I re-implemented [SecMI (ICML 2023)](https://arxiv.org/abs/2302.03262) against DDPMs trained on CIFAR-100, then proposed a variant that learns to fuse several denoising timesteps instead of selecting a single timestep by hand.

## Results

| Metric       | SecMI | Multi-timestep fusion |
| :----------- | :---- | :-------------------- |
| Attack AUC   | 0.971 | 0.984                 |
| TPR @ 1% FPR | 0.519 | 0.642                 |

I also tested whether an attacker trained on CIFAR-100 still works against a CIFAR-10 victim model.

The project is a compact look at how membership leakage shows up in diffusion models, and at how brittle hand-chosen attack hyperparameters can be. The code is on [GitHub](https://github.com/mohammadKazzazi/Membership-Inference-Attack-against-Diffusion-Models).
