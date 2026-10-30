---
title: 十五与初一：为什么每月这两天特别
summary: 初一是农历每月的第一天，十五是第十五天。本文说明这两天从何而来，为什么越南农历有时与别国差一天，以及祭拜通常包括哪些内容。
date: 2026-10-29
cover: ../../../assets/blog/ram-va-mung-mot.jpg
coverAlt: 漆画：金色满月下的祖先供桌，上有香炉、荷花瓶和果盘
tags: [十五, 初一, 农历, 祭拜祝文]
appRoute: /calendar
notify: false
sources:
  - title: doxuta/amlich, DESIGN.md (cách tính điểm Sóc, ví dụ Tết 2027 ở Việt Nam và Hàn Quốc)
    url: https://github.com/doxuta/amlich
  - title: Jean Meeus, Astronomical Algorithms, ấn bản 2, Willmann-Bell, 1998
  - title: Hồ Ngọc Đức, "Vietnamese Calendar"
    url: https://honguyenviet.com/amlich/vncal_en.html
  - title: VietNamNet, "Văn khấn ngày Rằm hằng tháng chuẩn theo truyền thống"
    url: https://vietnamnet.vn/van-khan-ngay-ram-hang-thang-chuan-theo-truyen-thong-2379865.html
  - title: VietNamNet, "Văn khấn mùng 1 hằng tháng chuẩn theo truyền thống"
    url: https://vietnamnet.vn/van-khan-mung-1-hang-thang-chuan-theo-truyen-thong-2375374.html
  - title: VTC News, "Văn khấn mùng 1 hàng tháng cúng gia tiên và thần linh"
    url: https://vtcnews.vn/van-khan-mung-1-hang-thang-cung-gia-tien-va-than-linh-ar1013485.html
  - title: Infonet, "Bài văn khấn cúng thổ công và gia tiên mùng 1 hàng tháng chuẩn theo truyền thống"
    url: https://infonet.vietnamnet.vn/bai-van-khan-cung-tho-cong-va-gia-tien-mung-1-hang-thang-chuan-theo-truyen-thong-3546.html
  - title: Báo Quốc tế, "Văn khấn mùng 1, ngày rằm hàng tháng năm Nhâm Dần ngắn gọn, dễ nhớ chuẩn nhất"
    url: https://baoquocte.vn/van-khan-mung-1-ngay-ram-hang-thang-nam-nham-dan-ngan-gon-de-nho-chuan-nhat-175475.html
---

在许多越南家庭里，每个月有两天比其他日子记得更牢：初一和十五。这一天人们烧香，在供桌上摆放鲜花水果，有的人家还会相约去寺庙。可这两天从何而来？为什么有些月份越南农历会和邻国的农历差一天？

## 农历月从看不见月亮的那一刻开始

越南的农历其实是一种**阴阳历**。月份跟随月亮，而闰月和月份名称则以太阳的位置（节气）为准。

每个农历月从含有**朔**的那一天开始。朔是太阳、月亮和地球几乎排成一线的时刻，月亮把暗面朝向我们，所以几乎看不见。含有朔的那一天就是**初一**。

两次朔之间平均约 29.53 天。由于一个月必须是整数天，农历月有 29 天（小月）或 30 天（大月）。哪个月大、哪个月小没有固定规律，取决于真实的朔时刻。

![漆画：左边金色的太阳向右放出光线；右边是蓝色的地球，周围有一条细细的轨道。月亮在轨道上画了两次：在太阳和地球之间时是暗的，只有朝太阳的一侧有一道亮边；在地球另一侧时是明亮的圆盘](../../../assets/blog/ram-va-mung-mot/soc-va-vong.webp "初一（朔）：月亮位于太阳和地球之间，暗面朝向我们。十五：月亮在地球另一侧，朝向我们的一面几乎全被照亮。图未按比例。")

## 十五是第十五天

**十五**是农历月的第十五天。满月出现在两次朔之间的中段，所以十五夜通常月亮明亮、接近圆满。不过，满月按月亮的真实位置计算，而十五只是数日子的方式，所以十五夜和“月亮最圆”的那一夜并不总是同一天。

一年中有几个大的十五有专门的名字，比如正月十五和七月十五。本文只谈每月的初一和十五。

![漆画：黑底上一排九个金色的月亮。从左到右依次是只剩轮廓的暗月、右侧亮的蛾眉月、右半边亮的月、接近圆的月、正中的满月，然后亮的部分逐渐缩到左侧，直到最后的暗月](../../../assets/blog/ram-va-mung-mot/tuan-trang.webp "在越南看到的一个农历月，从左到右：初一（看不见月亮），月亮从右侧渐亮，十五前后的满月在正中，月亮渐亏、亮在左侧，直到下个月的初一。")

## 为什么越南农历有时与别国不同？

朔是一个天文时刻，在全球同时发生。但它落在**哪一天**，则取决于时区。越南农历按越南时间（UTC+7）计算，中国农历用 UTC+8，韩国农历用 UTC+9。

如果朔落在午夜附近，两国就可能把初一定在不同的公历日期。开源库 doxuta/amlich 的文档中记载了一个例子：2027 年越南的春节是 **2027年2月6日**，而韩国的春节（Seollal）是 **2027年2月7日**。原因是那次朔落在越南时间 22:00–24:00 之间，按韩国时间已经是第二天。

因此，查看十五或初一时，最好使用按越南时间计算的日历。为其他市场制作的印刷日历或应用，在一年中的某几个月可能相差一天。

## 初一、十五的祭拜通常包括什么

各地、各家的习俗不尽相同。下面概括了越南媒体 VietNamNet、VTC News、Infonet 和《国际报》所刊祭文的共同点。这些文章大多写明依据文化通讯出版社的《越南传统祭文》一书。我们尚未读到原书。

**供品**在祝文中通常提到：香、花、茶、果。祭拜神灵的祝文还会提到金银纸（纸钱）。

初一和十五常用的**两篇祝文**：

- **祭神灵祝文**：敬拜皇天后土、东厨神君、土地龙脉以及管理家宅的诸位神灵，祈求全家平安。
- **祭祖先祝文**：恭请父系、母系的祖先降临鉴察，祈求家人健康、家庭和睦。

这些来源都有一个值得记住的小提示：如果父母仍健在，诵读祭祖先祝文时通常念“祖考、祖妣”，而不是“显考、显妣”。

《国际报》的简短版本称号较少，而 VietNamNet、VTC News 和 Infonet 的版本主体内容相同。没有哪一个版本是“唯一正确”的。如果你家有祖辈传下来的念法，照着做就好。

![漆画：红漆供桌，左边一瓶粉色荷花，中间铜香炉插着三支点燃的香，前面一把茶壶和两只小杯，右边高脚果盘里有香蕉、柚子和橘子](../../../assets/blog/ram-va-mung-mot/huong-hoa-tra-qua.webp "各篇祝文都提到的四样：香、花、茶、果。")

## 几点提醒

- 祭拜贵在诚心，不在供品多少。祝文里只提到香、花、茶、果。
- 初一和十五可能落在工作日。许多人家会在清晨或晚上上香。
- 家中有小孩时，请注意火和香的安全。

## 在 Qelunai 中留意初一和十五

Qelunai 的月历会标出初一、十五以及每个节气的开始日，直接在手机上按越南时间计算。当你选中初一或十五时，日历页面会多出一个按钮，可直接打开初一、十五的祭拜祝文阅读。
