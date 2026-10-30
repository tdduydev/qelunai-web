/** Store chooser for the /tai/ download page (QR code on the app's share card). Pure, so it runs in node --test. */
export const storeUrls={
 'app-store':'https://apps.apple.com/app/id6827871126',
 'google-play':'https://play.google.com/store/apps/details?id=com.qelunai.qelunai',
};
/** `'app-store'`, `'google-play'` or `null` (stay on the page) for a user agent.
 * iPadOS Safari reports a Mac by default; `maxTouchPoints > 1` tells it apart from a real Mac. */
export function pickStore(userAgent='',maxTouchPoints=0){
 const ua=String(userAgent||'');
 if(/iPhone|iPad|iPod/.test(ua)) return 'app-store';
 if(/Macintosh/.test(ua)&&maxTouchPoints>1) return 'app-store';
 if(/Android/.test(ua)) return 'google-play';
 return null;
}
