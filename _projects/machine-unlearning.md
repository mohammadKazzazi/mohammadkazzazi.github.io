---
layout: page
title: Machine Unlearning and Private Training
description: SISA sharded training on CIFAR-10, then checking that forgotten samples are actually gone.
img: assets/img/projects/machine-unlearning.svg
importance: 4
category: Machine learning
github: https://github.com/mohammadKazzazi/Machine-Unlearning-and-Private-Training
permalink: /projects/machine-unlearning/
---

I implemented SISA sharded training with ResNet-18 on CIFAR-10, sweeping shard and slice counts $$S, R \in \{5, 10, 20\}$$ and three aggregation rules. The best setting reached 92% accuracy and 0.995 AUROC.

## Verifying that unlearning worked

I then unlearned 500 samples and checked whether they were actually removed:

- a 3×3-patch **backdoor attack**, comparing attack success rate before and after unlearning;
- a **membership inference attack** against the retrained ensemble.

The goal was not only to train privately, but to measure whether unlearning changes the model's behavior in the way we claim it does. The code is on [GitHub](https://github.com/mohammadKazzazi/Machine-Unlearning-and-Private-Training).
