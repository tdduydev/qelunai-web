---
title: '보름과 초하루: 매달 두 날이 특별한 이유'
summary: 초하루는 음력 달의 첫날, 보름은 15일입니다. 두 날이 어디서 왔는지, 베트남 달력과 다른 나라 달력이 왜 가끔 하루 어긋나는지, 제사에는 보통 무엇이 들어가는지 설명합니다.
date: 2026-10-29
cover: ../../../assets/blog/ram-va-mung-mot.jpg
coverAlt: 금빛 보름달 아래 향로, 연꽃 화병, 과일 접시가 놓인 조상 제단을 그린 칠화
tags: [보름, 초하루, 음력, 기도문]
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

베트남의 많은 가정에서는 매달 다른 날보다 더 잘 기억하는 두 날이 있습니다. 초하루와 보름입니다. 그날 사람들은 향을 피우고 제단에 꽃과 과일을 올리며, 절에 가자고 서로 일러 주는 집도 있습니다. 그런데 이 두 날은 어디서 왔고, 왜 어떤 달에는 베트남 달력이 이웃 나라 달력과 하루 어긋날까요?

## 음력 달은 달이 보이지 않는 때에 시작한다

베트남 음력은 사실 **태음태양력**입니다. 달은 달(月)의 움직임을 따르고, 윤달과 달의 이름은 해의 위치(절기)에 맞춥니다.

음력 달은 **삭**이 있는 날에 시작합니다. 해, 달, 지구가 거의 일직선이 되어 달이 어두운 면을 우리 쪽으로 향하기 때문에 거의 보이지 않는 순간입니다. 삭이 든 날이 **초하루**입니다.

두 삭 사이의 평균 간격은 약 29.53일입니다. 한 달은 날 수가 정수여야 하므로 음력 달은 29일(작은달) 또는 30일(큰달)입니다. 어느 달이 작고 어느 달이 큰지는 정해진 규칙이 아니라 실제 삭의 시각에 따라 달라집니다.

## 보름은 15일

**보름**은 음력 달의 15일입니다. 보름달은 두 삭의 중간쯤에 오기 때문에, 보름밤은 대개 달이 밝고 거의 둥글습니다. 다만 보름달은 달의 실제 위치로 계산하고 보름은 날짜를 세는 방식일 뿐이어서, 보름밤과 "가장 둥근 달"이 뜨는 밤이 늘 같지는 않습니다.

한 해에는 정월 보름이나 칠월 보름처럼 따로 이름이 붙은 큰 보름이 몇 번 있습니다. 이 글은 매달의 보름과 초하루만 다룹니다.

## 왜 베트남 달력은 가끔 다른 나라와 어긋날까?

삭은 천문학적 한순간이라 지구 어디서나 같은 때에 일어납니다. 하지만 그것이 **어느 날**에 해당하는지는 시간대에 따라 다릅니다. 베트남 달력은 베트남 시간(UTC+7)으로 계산합니다. 중국 달력은 UTC+8, 한국 달력은 UTC+9를 씁니다.

삭이 자정 무렵에 오면 두 나라가 초하루를 서로 다른 양력 날짜에 둘 수 있습니다. 오픈소스 라이브러리 doxuta/amlich 문서에 실린 예가 있습니다. 2027년 설은 베트남에서 **2027년 2월 6일**, 한국의 설날은 **2027년 2월 7일**입니다. 삭이 베트남 시간 22:00–24:00 무렵에 와서, 한국 시간으로는 이미 다음 날이기 때문입니다.

그러니 베트남의 보름이나 초하루를 볼 때는 베트남 시간으로 계산한 달력을 쓰는 것이 좋습니다. 다른 시장을 위해 만든 달력이나 앱은 한 해 중 몇 달은 하루 어긋날 수 있습니다.

## 보름과 초하루 제사에는 보통 무엇이 들어갈까

풍습은 지역마다, 집마다 다릅니다. 아래는 베트남 매체 <cite lang="vi">VietNamNet</cite>, <cite lang="vi">VTC News</cite>, <cite lang="vi">Infonet</cite>, <cite lang="vi">Báo Quốc tế</cite>에 실린 기도문들의 공통점을 요약한 것입니다. 이 글들은 대부분 <cite lang="vi">Văn khấn cổ truyền Việt Nam</cite>(문화통신출판사)이라는 책을 바탕으로 했다고 적고 있습니다. 저희는 원서를 읽지 못했습니다.

기도문에 흔히 나오는 **제물**은 향, 꽃, 차, 과일입니다. 신령께 드리는 기도문에는 금은(지전)도 들어갑니다.

초하루와 보름에 흔히 쓰는 **기도문 두 가지**:

- **신령 기도문**: 황천후토, 부엌의 신, 토지와 용맥의 신, 집을 다스리는 여러 신께 절하며 가족의 평안을 빕니다.
- **조상 기도문**: 친가와 외가의 조상을 모셔 굽어살피시기를 청하고, 모두의 건강과 가정의 화목을 빕니다.

출처들에는 기억해 둘 작은 메모가 하나 있습니다. 부모님이 살아 계시면, 조상 기도문에서 "현고, 현비" 대신 "조고, 조비"라고 읽는 것이 보통입니다.

<cite lang="vi">Báo Quốc tế</cite>의 축약본은 칭호가 더 적고, <cite lang="vi">VietNamNet</cite>, <cite lang="vi">VTC News</cite>, <cite lang="vi">Infonet</cite>의 판본은 큰 흐름이 같습니다. 어느 판본도 "유일하게 옳은 판본"은 아닙니다. 조부모님께 물려받은 집안의 방식이 있다면 그대로 지키세요.

## 몇 가지 참고

- 제사에서 중요한 것은 정성이지 상차림의 크기가 아닙니다. 기도문도 향, 꽃, 차, 과일만 언급합니다.
- 초하루와 보름이 출근하는 날일 수 있습니다. 많은 집이 이른 아침이나 저녁에 향을 피웁니다.
- 집에 어린아이가 있으면 불과 향을 조심하세요.

## Qelunai에서 보름과 초하루 챙기기

Qelunai의 월간 달력은 초하루, 보름, 각 절기의 시작일을 휴대폰에서 바로 베트남 시간으로 계산해 표시합니다. 초하루나 보름인 날을 고르면 달력 화면에 초하루·보름 기도문을 바로 여는 버튼이 생깁니다.
