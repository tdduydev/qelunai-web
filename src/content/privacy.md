# Chính sách quyền riêng tư — Qelunai

*Cập nhật lần cuối: 29/10/2026.*

## Tóm tắt

- Qelunai cần **tài khoản**. Bạn **đăng nhập** (Email, Google hoặc Apple) và đồng ý **sao lưu**,
  rồi nhập họ tên, ngày sinh và giờ sinh của bạn.
- Hồ sơ ngày sinh, lịch sử gieo quẻ và sổ giỗ được lưu vào tài khoản để có trên mọi thiết bị bạn
  đăng nhập.
- Mỗi mục đích dùng dữ liệu có một ô đồng ý riêng, không ô nào được đánh dấu sẵn. Bạn rút lại
  được bất cứ lúc nào.
- Mọi phép tính vẫn chạy ngay trên máy bạn.
- Thống kê sử dụng và báo lỗi chỉ được gửi khi bạn bật (mặc định tắt).
- Bản miễn phí có thể có quảng cáo của Google AdMob; Qelunai Plus không có quảng cáo. Quảng cáo
  không nhận hồ sơ ngày sinh hay lịch sử gieo quẻ của bạn.
- Không bán dữ liệu của bạn.

## Đồng ý của bạn

Ứng dụng hỏi riêng từng việc, mỗi việc một ô, không ô nào đánh dấu sẵn:

- Xác nhận bạn đủ 16 tuổi (bắt buộc để dùng ứng dụng).
- Dùng ngày sinh để lập lá số (bắt buộc trước khi tạo hồ sơ ngày sinh).
- Sao lưu vào tài khoản (bắt buộc trước khi đăng nhập).
- Gửi thống kê sử dụng ẩn danh và báo lỗi (không bắt buộc).

Mỗi lần bạn đồng ý hoặc rút lại, ứng dụng ghi một dòng: mục đích, đồng ý hay rút lại, thời
điểm, và phiên bản chính sách này. Các dòng này **chỉ lưu trên máy**, không gửi lên tài khoản,
và không bị sửa hay xoá. Bạn xem và đổi lựa chọn ở **Hồ sơ > Quản lý đồng ý**.

- Rút lại đồng ý dùng ngày sinh: mọi hồ sơ ngày sinh bị xoá khỏi máy và khỏi tài khoản (nếu
  có). Lịch sử gieo quẻ vẫn giữ.
- Tắt sao lưu: tức là xoá tài khoản (xem **Xoá tài khoản** bên dưới).

## Tài khoản

Ứng dụng dùng **Firebase Authentication** (Google LLC) để đăng nhập. Dữ liệu được lưu:

- Địa chỉ email (với Apple, có thể là email ẩn danh do Apple cung cấp).
- Mã định danh người dùng do Firebase tạo, nhà cung cấp đăng nhập, thời điểm tạo và đăng
  nhập gần nhất.
- Mật khẩu (nếu dùng Email) được Firebase lưu dưới dạng băm; chúng tôi không đọc được.

## Dữ liệu lưu trong tài khoản

Khi bạn đăng nhập và đồng ý sao lưu, ứng dụng lưu các mục sau vào **Cloud Firestore** (Google
LLC), đặt tại khu vực Singapore (asia-southeast1):

- **Hồ sơ ngày sinh** bạn tạo ở tab Lá số: họ tên, ngày sinh dương lịch, giờ sinh (nếu có),
  giới tính, thời điểm tạo và sửa.
- **Lịch sử gieo quẻ Kinh Dịch**: thời điểm gieo và sáu hào.
- **Sổ giỗ**: tên người đã mất, quan hệ trong gia đình, ngày mất âm lịch (và năm nếu bạn nhập),
  ghi chú, cài đặt nhắc giỗ, thời điểm tạo và sửa.
- Thông tin kỹ thuật để đồng bộ: mã của từng mục, phiên bản dữ liệu, thời điểm cập nhật, và
  dấu "đã xoá" cho mục bạn xoá (dấu này không chứa họ tên, ngày sinh hay nội dung quẻ).

Chỉ tài khoản của bạn đọc và ghi được dữ liệu này. Dữ liệu chỉ dùng để hiển thị lại cho bạn
trên các thiết bị bạn đăng nhập. Chính sách quyền riêng tư của Google:
https://policies.google.com/privacy

## Dữ liệu trên thiết bị

- Cài đặt ứng dụng: ngôn ngữ, chế độ sáng/tối, trạng thái đã xem phần giới thiệu.
- Các dòng ghi đồng ý (xem **Đồng ý của bạn**).
- Một bản sao hồ sơ ngày sinh và lịch sử gieo quẻ của tài khoản, để ứng dụng
  dùng được khi không có mạng. Thay đổi khi mất mạng được tải lên ở lần đồng bộ sau.
- Gói nội dung diễn giải (lời giải từng hào Kinh Dịch và từng con số Thần số học), tải từ
  Cloud Firestore khi có bản mới. Gói này giống nhau cho mọi người, không chứa dữ liệu của bạn;
  khi tải, ứng dụng chỉ gửi kèm phiên đăng nhập, không gửi hồ sơ hay lịch sử. Gói được giữ lại
  sau khi đăng xuất.

Khi bạn **đăng xuất**, bản sao này bị xoá khỏi máy; dữ liệu vẫn nằm trong tài khoản và trở lại
khi bạn đăng nhập lại. Gỡ ứng dụng (hoặc xoá dữ liệu trang web trong trình duyệt) cũng xoá bản
sao này.

## Xoá dữ liệu

- Xoá một hồ sơ: mở hồ sơ ở tab **Lá số** > **Xoá hồ sơ**.
- Xoá một lần gieo: mở lần gieo trong lịch sử > **Xoá lần gieo này**; hoặc **Xoá toàn bộ lịch
  sử** ở tab Lá số.
- Xoá tất cả: **Hồ sơ > Xoá mọi hồ sơ và lịch sử**.

Các thao tác này xoá dữ liệu khỏi máy, và khỏi tài khoản (trên mọi thiết bị) ở lần đồng bộ kế
tiếp nếu bạn đã đăng nhập.

## Xoá tài khoản

Vào **Hồ sơ > Xoá tài khoản** trong ứng dụng. Ứng dụng xoá theo thứ tự: toàn bộ dữ liệu của tài
khoản trên Cloud Firestore, rồi bản sao trên máy, rồi tài khoản đăng nhập. Nếu không xoá được
dữ liệu trên máy chủ (ví dụ mất mạng), không có gì bị xoá và ứng dụng báo để bạn thử lại. Nếu
Firebase yêu cầu xác thực lại, dữ liệu đã được xoá; ứng dụng đưa bạn về màn hình đăng nhập để
đăng nhập lại và xoá tài khoản lần nữa.

## Mua trong ứng dụng (Qelunai Plus)

Khi bản có gói Qelunai Plus, việc mua và thanh toán do Apple (App Store) hoặc Google (Google
Play) xử lý hoàn toàn. Qelunai không thấy và không lưu số thẻ hay thông tin thanh toán của bạn.
Ứng dụng chỉ nhận từ cửa hàng kết quả "đã đăng ký hay chưa" và loại gói (tháng hoặc năm), rồi lưu
kết quả đó trên thiết bị để bật tính năng Plus. Qelunai không gửi thông tin giao dịch tới máy chủ
của mình. Việc huỷ, hoàn tiền và dùng thử do cửa hàng quản lý theo chính sách của họ.

## Thống kê sử dụng và báo lỗi

Chỉ khi bạn bật **Gửi thống kê sử dụng ẩn danh và báo lỗi** (ở **Hồ sơ > Quản lý đồng ý**, mặc
định tắt), ứng dụng gửi tới Google (Firebase):

- **Google Analytics for Firebase**: màn hình đã mở, thời lượng dùng, loại thiết bị, hệ điều
  hành, phiên bản ứng dụng, quốc gia ước lượng, và một mã cài đặt ứng dụng.
- **Firebase Crashlytics**: báo cáo khi ứng dụng gặp lỗi (vị trí lỗi trong mã, thiết bị, hệ
  điều hành, phiên bản ứng dụng).
- **Firebase Performance Monitoring**: thời gian mở ứng dụng, tốc độ hiển thị màn hình và thời
  gian các lệnh gọi mạng.

Các dữ liệu này không chứa họ tên, ngày sinh, giờ sinh, nội dung quẻ hay sổ giỗ, và không dùng để
quảng cáo. Khi tắt, ứng dụng ngừng gửi ngay; báo lỗi còn trên máy lúc đó không được gửi.

## Quảng cáo

Bản miễn phí có thể hiện quảng cáo của **Google AdMob** (Google LLC): một dải quảng cáo ở cuối
trang kết quả, và đôi khi một quảng cáo toàn màn hình khi bạn chọn gieo quẻ khác (không quá một
lần trong 5 phút). Không có quảng cáo ở màn đăng nhập, khi đang gieo quẻ, ở La bàn camera hay ở
widget. Người dùng **Qelunai Plus** không thấy quảng cáo.

- Để hiển thị và đo quảng cáo, Google nhận mã quảng cáo của thiết bị (IDFA trên iPhone, Advertising
  ID trên Android), địa chỉ IP, loại thiết bị và thông tin tương tác với quảng cáo. Ứng dụng
  không gửi cho Google họ tên, ngày sinh, hồ sơ hay lịch sử gieo quẻ của bạn.
- Trên iPhone, Apple hỏi bạn có cho phép theo dõi hay không. Nếu bạn từ chối, quảng cáo vẫn hiện
  nhưng không được cá nhân hoá theo mã quảng cáo.
- Ở những nơi luật yêu cầu (ví dụ Liên minh châu Âu, Vương quốc Anh), ứng dụng hiện biểu mẫu đồng
  ý của Google trước khi tải quảng cáo; bạn đổi lựa chọn ở **Hồ sơ > Quản lý đồng ý > Tùy chọn quyền
  riêng tư cho quảng cáo**.
- Trên Android, bạn đặt lại hoặc xoá mã quảng cáo trong Cài đặt của máy.

Cách Google dùng dữ liệu từ ứng dụng: https://policies.google.com/technologies/partner-sites

## Những gì Qelunai KHÔNG làm

- Không bán dữ liệu của bạn.
- Không gửi hồ sơ ngày sinh, lịch sử gieo quẻ hay sổ giỗ cho Google Analytics hay cho quảng cáo.
- Không gọi máy chủ AI bên ngoài.

## Quyền truy cập thiết bị

- **Camera**: chỉ khi bạn mở La bàn trên cảnh thật hoặc quét mã QR thẻ tuổi. Hình ảnh chỉ hiện
  trên màn hình, không được chụp, lưu hay gửi đi.
- **Theo dõi (iPhone)**: chỉ hỏi ở bản có quảng cáo, như mục **Quảng cáo** ở trên.

Ứng dụng không yêu cầu quyền vị trí, danh bạ, micro hay quyền nhạy cảm nào khác.

## Thay đổi trong tương lai

Nếu Qelunai thêm tính năng gửi thêm dữ liệu đi (ví dụ Cố vấn AI qua máy chủ), chính sách này sẽ
được cập nhật **trước** khi tính năng đó được bật, nêu rõ dữ liệu nào được gửi, gửi tới đâu, và
bạn có thể từ chối ra sao.

---

# Privacy Policy — Qelunai

*Last updated: 2026-10-29.*

## Summary

- Qelunai needs an **account**. You **sign in** (Email, Google or Apple) and agree to
  **backup**, then enter your name, birth date and birth time.
- Your birth profiles, Kinh Dịch cast history and memorial days are saved to your account so
  they appear on every device you sign in on.
- Each use of your data has its own consent box, none ticked in advance. You can withdraw at
  any time.
- All calculations still run on your device.
- Usage statistics and crash reports are sent only if you turn them on (off by default).
- The free version may show ads from Google AdMob; Qelunai Plus has no ads. Ads never receive
  your birth profiles or cast history.
- We do not sell your data.

## Your consent

The app asks for each use separately, one box each, none ticked in advance:

- Confirming you are 16 or older (required to use the app).
- Using birth dates to build charts (required before you create a birth profile).
- Backing up to your account (required before you sign in).
- Sending anonymous usage statistics and crash reports (optional).

Each time you agree or withdraw, the app writes one record: the purpose, agreed or withdrawn,
the time, and the version of this policy. These records are **stored only on the device**, are
never sent to your account, and are never edited or removed. You can see and change your
choices in **Profile > Manage consent**.

- Withdrawing consent to use birth dates deletes every birth profile from the device and from
  your account (if any). The cast history stays.
- Turning off backup means deleting your account (see **Deleting your account** below).

## Account

The app uses **Firebase Authentication** (Google LLC) for sign-in. Stored data:

- Your email address (with Apple, possibly a private relay address provided by Apple).
- A user identifier created by Firebase, the sign-in provider, and the creation and last
  sign-in times.
- Your password (Email sign-in only), stored hashed by Firebase; we cannot read it.

## Data stored in your account

When you sign in and agree to backup, the app stores the following in **Cloud Firestore**
(Google LLC), located in the Singapore region (asia-southeast1):

- **Birth profiles** you create in the Charts tab: name, solar birth date, birth time (if
  given), gender, and when the profile was created and changed.
- **Kinh Dịch cast history**: when each cast happened and its six lines.
- **Memorial days (Sổ giỗ)**: the name of the person who passed away, their family relation,
  the lunar date of death (and the year if you enter it), notes, reminder settings, and when
  each entry was created and changed.
- Technical sync data: each item's id, data version, update time, and a "deleted" marker for
  items you delete (the marker holds no name, birth data or cast).

Only your account can read or write this data. It is used only to show it back to you on the
devices you sign in on. Google's privacy policy: https://policies.google.com/privacy

## Data stored on your device

- App settings: language, light/dark mode, whether the introduction has been completed.
- The consent records (see **Your consent**).
- A copy of the account's birth profiles and cast history, so the app works
  offline. Changes made offline are uploaded at the next sync.
- The readings pack (the note for each I Ching line and each numerology number), downloaded
  from Cloud Firestore when a new version is out. The pack is the same for everyone and holds
  none of your data; the download sends only your sign-in session, not your profiles or history.
  It stays on the device after you sign out.

When you **sign out**, this copy is removed from the device; the data stays in your account and
comes back when you sign in again. Uninstalling the app (or clearing the site's data in your
browser) also removes the copy.

## Deleting data

- One profile: open it in the **Charts** tab > **Delete profile**.
- One cast: open it in the history > **Delete this cast**; or **Clear all history** in the
  Charts tab.
- Everything: **Profile > Delete all profiles and history**.

These delete the data from the device, and from your account (on every device) at the next
sync if you are signed in.

## Deleting your account

Go to **Profile > Delete account** in the app. The app deletes, in this order: all of the
account's data in Cloud Firestore, then the copy on the device, then the sign-in account. If
the server data cannot be deleted (for example, offline), nothing is deleted and the app asks
you to try again. If Firebase requires a recent sign-in, the data is already deleted; the app
takes you to the sign-in screen so you can sign in again and delete the account once more.

## In-app purchases (Qelunai Plus)

When a build offers Qelunai Plus, the purchase and the payment are handled entirely by Apple (App
Store) or Google (Google Play). Qelunai does not see or store your card number or payment
details. The app only receives from the store whether you are subscribed and which plan (monthly
or yearly), and keeps that result on your device to turn the Plus features on. Qelunai does not
send transaction information to its own servers. Cancellation, refunds and free trials are
managed by the store under its own policies.

## Usage statistics and crash reports

Only if you turn on **Send anonymous usage statistics and crash reports** (in **Profile > Manage
consent**, off by default), the app sends to Google (Firebase):

- **Google Analytics for Firebase**: screens opened, time in the app, device type, operating
  system, app version, approximate country, and an app installation id.
- **Firebase Crashlytics**: a report when the app fails (where in the code, device, operating
  system, app version).
- **Firebase Performance Monitoring**: app start time, screen rendering speed, and the duration of
  network calls.

This data holds no name, birth date, birth time, cast or memorial day, and is not used for ads.
When you turn it off, sending stops at once; crash reports still on the device are not sent.

## Ads

The free version may show ads from **Google AdMob** (Google LLC): a banner at the end of result
pages, and sometimes a full-screen ad when you choose to cast again (at most once every 5
minutes). There are no ads on the sign-in screen, while casting, in the camera compass, or in
widgets. **Qelunai Plus** subscribers see no ads.

- To show and measure ads, Google receives the device's advertising id (IDFA on iPhone,
  Advertising ID on Android), the IP address, the device type and how you interact with ads. The
  app does not send Google your name, birth date, profiles or cast history.
- On iPhone, Apple asks whether you allow tracking. If you decline, ads still show but are not
  personalised by the advertising id.
- Where the law requires it (for example the European Union and the United Kingdom), the app
  shows Google's consent form before loading ads; you can change your choice in **Profile >
  Manage consent > Ad privacy options**.
- On Android, you can reset or delete the advertising id in the device Settings.

How Google uses data from apps: https://policies.google.com/technologies/partner-sites

## What Qelunai does NOT do

- We do not sell your data.
- No birth profiles, cast history or memorial days are sent to Google Analytics or to ads.
- No external AI server calls.

## Device permissions

- **Camera**: only when you open the compass over the live view or scan a zodiac-card QR code.
  The picture is only shown on screen; it is never taken, saved or sent.
- **Tracking (iPhone)**: asked only in versions with ads, as in **Ads** above.

The app does not request location, contacts, microphone, or any other sensitive permission.

## Future changes

If Qelunai adds a feature that sends more data off the device (e.g. an AI Advisor through a
server), this policy will be updated **before** that feature is enabled, stating exactly what
data is sent, where, and how you can opt out.
