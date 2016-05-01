---
layout: post
title: "在Chrome 中实现图像捕捉的体感游戏"
date: 2012-07-22
author: mrxx
sitemap: false
keywords: "Chrome motion game"
description: "浏览器中的体感游戏"
---

![img]({{ site.baseurl }}/images/motion_game.png)

## 浏览器中的体感游戏

* 需要Chrome最新版本，以及启动MediaStream功能
* 利用html5所提供的video标签获取视频
* 将视频进行帧差值进行计算，得到运动区域
* 根据捕获的运动时间来与游戏交互
* [源码](https://github.com/mrxx/js_motion_game)

[DEMO](/demo/motion_game)
