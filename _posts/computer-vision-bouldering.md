---
date: '2026-01-12T00:00:00.000Z'
title: Can Computer Vision Make Indoor Bouldering Fairer?
tagline: >-
  Using Pose Estimation and Hold Detection to Understand Why Grades Feel
  Different
preview: >-
  Computer vision can help understand why the same climb feels so different
  across different bodies.
image: /images/rock-climbing-wall.jpg
---

(Image source: [Mark Parisi](https://www.offthemark.com/))

## Inconsistent Grading

If you have ever tried the same bouldering problem as a friend and felt completely shut down while they cruised it, you have run into one of the main headaches of indoor climbing! A route gets assigned a grade, but unlike a 100-meter sprint, that grade is not based on an objecttive and measurable quantity. What feels like a straightforward sequence for one person can feel like a full puzzle for someone else. That mismatch is frustrating, especially when you are new climber.

It raises a bigger question: can we use data to better explain why the same climb feels so different across people?

Computer vision offers a promising way to approach this problem. Rather than relying only on subjective impressions, vision based methods allow us to analyze how climbers actually move on the wall. By turning video into structured data, these methods can reveal patterns in movement, identify common cruxes, and highlight how different bodies solve the same problem in different ways.

## Why grading boulders is hard

Indoor bouldering problems are typically set and graded by experienced route setters. While setters are highly skilled, grading still relies on human judgment. Setters may test climbs themselves or watch others attempt them, but it is impossible to fully account for the wide range of climber body types and movement strategies. 

Several factors contribute to this subjectivity. Height and reach can determine whether a climber can skip a hold entirely or must use a more complex sequence. Flexibility and joint mobility affect how easily someone can keep their center of mass close to the wall. Strength and coordination influence whether a dynamic move feels reasonable or desperate. As a result, climbers often experience different cruxes on the same route, even though the problem has only one official grade.

Personally, I enjoy crimps and slow, static movements. My 6'2 friend on the otherhand, is far better at pumpy, dynamic movements.

## What computer vision actually does in this context

At a high level, computer vision is about teaching computers to extract meaningful information from images and videos. Instead of treating a climbing video as a sequence of pixels, a vision system can be trained to recognize climbing holds, track a climber's body joints, and follow how those joints move over time.

Importantly, this does not require specialized hardware. Recent work shows that a single standard smartphone camera is often sufficient. The key idea is that video contains rich spatial and temporal information that wearable sensors alone cannot capture, such as precise body positioning relative to specific holds.

For climbing, two computer vision tasks are especially important: hold detection and pose estimation. Hold detection identifies and localizes the colored holds on the wall, while pose estimation tracks the climber's joints, such as hips, shoulders, elbows, and knees. When these two streams of information are combined, it becomes possible to analyze not just where a climber moved, but how they moved relative to the route.

![](/images/bouldervision.png)

(Image source: [BoulderVision](https://github.com/reiffd7/BoulderVision?ref=blog.roboflow.com))

## Why indoor bouldering is a good fit

Indoor bouldering gyms provide an unusually controlled environment for computer vision. Lighting is consistent, holds are color coded, and the entire problem can usually be captured in a single camera frame. Unlike roped climbing, there are no harnesses or ropes obscuring the climber's body. Routes are also fixed for weeks at a time, allowing many climbers to be recorded on the exact same problem.

These properties significantly reduce preprocessing complexity. For example, colored holds can often be segmented using color based techniques or clustering methods before applying more advanced models. This makes indoor bouldering an ideal testbed for vision based movement analysis.

## From video to climbing metrics

One concrete example of this approach comes from a UCSD project that developed a vision based "rock climbing coach." Their system analyzes video footage of a climber and produces post climb reports without relying on wearable sensors. Using object detection models to identify holds and keypoint detection to track the climber's body, the system can compute metrics such as the percentage of the route completed, number of moves taken, and total distance traveled.

To do this, the authors first define what constitutes a move and a position, acknowledging that even these concepts are debated in climbing. In their framework, a position corresponds to a specific configuration of holds being used, and a move is a transition between positions. This explicit definition allows subjective climbing concepts to be translated into measurable quantities.

The result is a structured representation of a climb that captures information sensors alone cannot provide. For example, two climbers might complete the same number of moves, but with very different movement efficiency or body positioning. Vision based data makes these differences visible.

## Understanding beta and cruxes through patterns

Once climbing videos are converted into structured data, machine learning methods can be applied to look for patterns. Clustering techniques can group similar movement strategies together, revealing different types of beta used on the same problem. For instance, one cluster might represent climbers who rely on intermediate footholds, while another cluster represents climbers who make a longer reach or dynamic move.

Cruxes can also be identified more objectively. Instead of relying on a single climber's experience, a crux can be defined as a region where many climbers slow down, pause, or fail. This aligns more closely with how difficulty is experienced across a population rather than by an individual.

Recent practitioner projects go even further by visualizing movement trajectories, center of mass paths, or joint velocities over time. Overlaying pose estimation skeletons on video makes it easier to see how momentum, coordination, and balance contribute to success or failure, especially in complex coordination moves.

![](/images/vehicle-classification.png)

(Image source: [Automated Approach for Computer Vision-Based Vehicle Movement Classification at Traffic Intersections](https://www.mdpi.com/2673-7590/3/2/41))

## Beyond grading: training and feedback

The potential applications of computer vision in climbing extend beyond grading. Several recent projects explore how vision based analysis could support training and skill development. For example, pose estimation combined with biomechanical modeling can estimate joint angles or even approximate muscle forces from video alone. This opens the door to understanding not just whether a climber failed, but why they failed in physical terms.

Other ideas include comparing failed attempts to successful ones to highlight key adjustments, or using center of mass analysis to explore balance and posture. In the long term, some researchers envision virtual simulations where climbers can experiment with movement ideas digitally before trying them on the wall. While these ideas are still exploratory, they illustrate how vision based tools could support learning rather than prescribing a single "correct" beta.

## Limitations and ethical concerns

Despite its promise, this approach has important limitations. Recording video in climbing gyms raises privacy concerns, especially if systems are deployed at scale. Any practical application must prioritize consent, transparency, and data protection.

There is also a risk of bias. Models trained on data from a narrow set of climbers may reinforce existing norms rather than challenge them. Over standardization is another concern. Climbing is inherently creative, and reducing it to optimized movement patterns could diminish what makes the sport enjoyable.

For these reasons, most researchers emphasize that computer vision should support human judgment, not replace it. The goal is to provide additional insight, not to dictate how people should climb.

## Looking forward

Indoor bouldering highlights a broader challenge in sports analytics: how to measure performance when success depends on diverse bodies interacting with fixed environments. Computer vision offers a powerful way to bridge this gap by turning movement into data without stripping away context.

By analyzing how different climbers move through the same problem, we can better understand why grades feel inconsistent and how instruction might become more inclusive. Used thoughtfully, these tools could help beginners make sense of their struggles, assist setters in evaluating difficulty, and preserve the creativity that makes climbing compelling in the first place.

## References

- [50 Most Important (and Common) Climbing Terms](https://web.archive.org/web/20171019085103/https://aceraft.com/2017/04/04/50-most-important-and-common-climbing-terms/)
- [Using Data to Understand How Difficult Gym Climbs Actually Are (Dogpatch Boulders)](https://www.reddit.com/r/bouldering/comments/117qt1j/using_data_to_understand_how_difficult_gym_climbs/?utm_source=embedv2&utm_medium=post_embed&utm_content=whitespace&embed_host_url=https://embed.notion.co/api/iframe)
- [Bouldering and Computer Vision](https://blog.tjtl.io/bouldering-and-computer-vision/)
- [Computer Vision Based Indoor Rock Climbing Analysis](https://kastner.ucsd.edu/ryan/wp-content/uploads/sites/5/2022/06/admin/rock-climbing-coach.pdf?ref=blog.tjtl.io)
