---
layout: page
title: Football Object Detection and Tracking
description: YOLOv8 detection with ByteTrack, DeepSORT, and CSRT tracking on SportsMOT football video.
importance: 2
category: Research
permalink: /projects/football-tracking/
---

I fine-tuned YOLOv8 on the SportsMOT football split (720p, 25 fps) to detect players and the ball, then built multi-object tracking on top of the detector.

On the validation set the detector reached mAP@50 of 0.947, mAP@50–95 of 0.779, precision 0.93, and recall 0.94, with 1.4 ms inference per frame on a P100 GPU.

For tracking I compared ByteTrack and DeepSORT using MOTA and IDF1, and added CSRT single-object tracking with movement heat-maps. The most useful part of the project was looking closely at occlusions and ID switches, which is where most sports trackers still fail.
