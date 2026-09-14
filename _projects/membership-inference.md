---
layout: page
title: Membership Inference Attacks Against Diffusion Models
description: A hyperparameter-free variant of SecMI that fuses several denoising timesteps instead of picking one by hand.
importance: 3
category: Research
permalink: /projects/membership-inference/
---

I re-implemented [SecMI (ICML 2023)](https://arxiv.org/abs/2302.03262) against DDPMs trained on CIFAR-100, then proposed a variant that learns to fuse several denoising timesteps instead of selecting a single timestep by hand.

That change raised attack AUC from 0.971 to 0.984 and TPR at 1% FPR from 0.519 to 0.642. I also tested whether an attacker trained on CIFAR-100 still works against a CIFAR-10 victim model.

The project is a compact look at how membership leakage shows up in diffusion models, and at how brittle hand-chosen attack hyperparameters can be.
