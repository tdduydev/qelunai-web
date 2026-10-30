/** Copy for the `/tai/` page that the share-card QR code opens; phones are sent on to their store. */
type Content = { title: string; description: string; eyebrow: string; heading: string; lead: string; getOn: string; note: string; noscript: string };
const vi: Content = {
  title: 'Tải Qelunai · Qelunai',
  description: 'Tải ứng dụng Qelunai — lịch âm Việt, Kinh Dịch, Tứ trụ, phong thuỷ — trên App Store hoặc Google Play.',
  eyebrow: 'Tải ứng dụng',
  heading: 'Tải Qelunai',
  lead: 'Lịch âm Việt, Kinh Dịch, Tứ trụ và phong thuỷ để tham khảo, trên iPhone, iPad và Android. Trên điện thoại, trang này tự mở cửa hàng ứng dụng phù hợp; nếu không, hãy chọn một nút bên dưới.',
  getOn: 'Tải trên',
  note: 'Bạn có thể quét mã QR bằng camera điện thoại hoặc mở liên kết này trên máy cần cài.',
  noscript: 'JavaScript đang tắt nên trang không tự chuyển; hãy chọn cửa hàng ở trên.',
};
const en: Content = {
  title: 'Get Qelunai · Qelunai',
  description: 'Get the Qelunai app — Vietnamese lunar calendar, I Ching, Four Pillars and feng shui — on the App Store or Google Play.',
  eyebrow: 'Get the app',
  heading: 'Get Qelunai',
  lead: 'Vietnamese lunar calendar, I Ching, Four Pillars and feng shui for reference, on iPhone, iPad and Android. On a phone this page opens the matching store by itself; if it does not, pick a button below.',
  getOn: 'Get it on',
  note: 'Scan the QR code with your phone camera, or open this link on the device you want to install on.',
  noscript: 'JavaScript is off, so this page cannot pick a store for you; choose one above.',
};
const zh: Content = {
  title: '下载 Qelunai · Qelunai',
  description: '在 App Store 或 Google Play 下载 Qelunai 应用：越南农历、易经、八字和风水。',
  eyebrow: '下载应用',
  heading: '下载 Qelunai',
  lead: '越南农历、易经、八字和风水，仅供参考，支持 iPhone、iPad 和 Android。在手机上，本页会自动打开对应的应用商店；如果没有打开，请选择下面的按钮。',
  getOn: '下载于',
  note: '你可以用手机相机扫描二维码，或在要安装应用的设备上打开此链接。',
  noscript: 'JavaScript 已关闭，本页无法自动跳转；请在上方选择应用商店。',
};
const ko: Content = {
  title: 'Qelunai 받기 · Qelunai',
  description: 'App Store 또는 Google Play에서 Qelunai 앱을 받으세요: 베트남 음력, 주역, 팔자, 풍수.',
  eyebrow: '앱 받기',
  heading: 'Qelunai 받기',
  lead: '참고용 베트남 음력, 주역, 팔자, 풍수를 iPhone, iPad, Android에서. 휴대폰에서는 이 페이지가 알맞은 스토어를 자동으로 엽니다. 열리지 않으면 아래 버튼을 고르세요.',
  getOn: '다운로드',
  note: '휴대폰 카메라로 QR 코드를 스캔하거나, 앱을 설치할 기기에서 이 링크를 여세요.',
  noscript: 'JavaScript가 꺼져 있어 자동으로 이동할 수 없습니다. 위에서 스토어를 고르세요.',
};
const byCode: Record<string, Content> = { vi, en, zh, ko };
export function downloadFor(code: string): Content {
  return byCode[code] ?? en;
}
