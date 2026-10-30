# Hợp đồng chung: bài viết trên web ↔ app ↔ thông báo (chốt 2026-10-30)

Hai agent làm song song (web và app) phải bám đúng file này. Đổi gì thì ghi vào docs của mình và báo người điều phối.

## 1. Feed JSON (web sinh lúc build, app đọc)
- URL: `https://qelunai.com/feeds/blog-{lang}.json`, `lang` ∈ `vi`, `en`, `zh`, `ko`. Không có bài nào vẫn trả feed hợp lệ với `items: []`.
- Định dạng JSON Feed 1.1 (https://www.jsonfeed.org/version/1.1/):

```json
{ "version": "https://jsonfeed.org/version/1.1", "title": "Qelunai – Bài viết", "home_page_url": "https://qelunai.com/blog/", "feed_url": "https://qelunai.com/feeds/blog-vi.json", "language": "vi", "items": [ { "id": "gio-hoang-dao-la-gi", "url": "https://qelunai.com/blog/gio-hoang-dao-la-gi/", "title": "…", "summary": "… (≤ 200 ký tự, dùng làm nội dung thông báo)", "content_html": "<p>…</p>", "image": "https://qelunai.com/…/cover.jpg", "date_published": "2026-10-31T07:00:00+07:00", "date_modified": "2026-10-31T07:00:00+07:00", "tags": ["giờ hoàng đạo"], "_qelunai": { "readingMinutes": 4, "appRoute": "/gio-hoang-dao" } } ] }
```

- `id` = slug, GIỐNG NHAU giữa các ngôn ngữ của cùng một bài (app dùng để nhớ đã đọc và mở đúng bài từ thông báo).
- Mới nhất trước, tối đa 50 bài. Bỏ bài `draft: true` và bài có ngày đăng ở tương lai (so với lúc build).
- `content_html` chỉ dùng các thẻ: `p h2 h3 ul ol li strong em a blockquote figure figcaption img hr br`. Không script/style/iframe, không thuộc tính `style`/`class`/`on*`. `img src` và `a href` là URL tuyệt đối https. Web có test khoá điều này.
- `image`: URL tuyệt đối, ảnh bìa tỉ lệ khoảng 1.91:1 (≈1200×630), JPEG/WebP ≤ 200 KB.
- `_qelunai.appRoute` (tuỳ chọn): route trong app (go_router) của tính năng liên quan, để app hiện nút "Mở tính năng"; app bỏ qua route không biết.
- Header: GitHub Pages tự đặt cache; app dùng ETag/If-None-Match nếu có, nếu không thì so `date_modified`.

## 2. Thông báo bài mới (FCM)
- App: thêm `PushTopic.blog` (tên topic FCM `blog`) theo cơ chế sẵn có trong `lib/state/push.dart`; app đã tự đăng ký topic ngôn ngữ `lang_{vi|en|zh|ko}`.
- Máy chủ gửi qua FCM HTTP v1 với **condition** `'blog' in topics && 'lang_vi' in topics` (mỗi ngôn ngữ có bài thì gửi một lần, ngôn ngữ chưa có bản dịch thì không gửi).
- Payload:
  - `notification`: `title` = tiêu đề bài, `body` = `summary`.
  - `data`: `{"type": "blog", "id": "<slug>", "lang": "vi", "url": "<url bài>"}` (tất cả là chuỗi).
  - `android.notification.channel_id`: kênh push hiện có của app (agent app ghi tên kênh vào docs; agent web đọc từ `qelunai-app` docs `docs/FIREBASE_SETUP.md`, nếu không chắc thì bỏ trống để FCM dùng kênh mặc định).
  - `apns.payload.aps.thread-id`: `blog`.
- Bấm thông báo → app mở màn đọc bài `id` (tải feed nếu chưa có trong cache; không có mạng thì mở `url` trong trình duyệt trong app).

## 3. Nhắc "Hôm nay" mỗi ngày
- Làm hoàn toàn trên máy (thông báo cục bộ lên lịch trước), không cần máy chủ, không tốn phí.
