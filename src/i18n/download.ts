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
const byCode: Record<string, Content> = { vi, en };
export function downloadFor(code: string): Content {
  return byCode[code] ?? en;
}
