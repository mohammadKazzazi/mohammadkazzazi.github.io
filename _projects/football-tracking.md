---
layout: page
title: Football Object Detection and Tracking
description: YOLOv8 detection with ByteTrack, DeepSORT, and CSRT tracking on SportsMOT football video.
img: assets/img/projects/football-tracking.svg
importance: 2
category: Machine learning
github: https://github.com/mohammadKazzazi/Object_Detection_Deep_Learning
permalink: /projects/football-tracking/
---

I fine-tuned YOLOv8 on the SportsMOT football split (720p, 25 fps) to detect players and the ball, then built multi-object tracking on top of the detector.

## Detection

| Metric              | Value                |
| :------------------ | :------------------- |
| mAP@50              | 0.947                |
| mAP@50–95           | 0.779                |
| Precision / recall  | 0.93 / 0.94          |
| Inference per frame | 1.4 ms on a P100 GPU |

## Tracking

For tracking I compared ByteTrack and DeepSORT using MOTA and IDF1, and added CSRT single-object tracking with movement heat-maps. The most useful part of the project was looking closely at occlusions and ID switches, which is where most sports trackers still fail.

The code is on [GitHub](https://github.com/mohammadKazzazi/Object_Detection_Deep_Learning).
