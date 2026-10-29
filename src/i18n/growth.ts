/** New SEO tools and explanatory guides. User-facing copy is localized here. */
export type GrowthPageId = 'calendar' | 'hours' | 'iching';
type Content = {title:string;description:string;eyebrow:string;intro:string;toolHeading?:string;guide:{heading:string;paragraphs:string[]}[];faq:{q:string;a:string}[];short:string;cta:string;method:string;dateLabel:string;submit:string;result:string;dayLabel:string;monthLabel:string;yearLabel:string;leap:string;canChi:string;goodHours:string;error:string;today:string;ctaNote:string};
const vi:Record<GrowthPageId,Content>={
 calendar:{
  title:'Lịch âm hôm nay và đổi ngày dương sang âm | Qelunai',
  description:'Tra lịch âm Việt Nam theo UTC+7 miễn phí. Xem ngày âm, tháng nhuận, Can Chi và giờ hoàng đạo, không cần đăng nhập.',
  eyebrow:'Công cụ miễn phí · Lịch Việt',short:'Lịch âm',intro:'Tra ngày âm theo múi giờ Việt Nam (UTC+7), hiển thị Can Chi và tháng nhuận. Phép tính thực hiện ngay trên trình duyệt, không gửi ngày bạn chọn lên máy chủ.',
  toolHeading:'Đổi ngày dương sang âm',guide:[
   {heading:'Âm lịch Việt Nam là gì?',paragraphs:['Đây là lịch âm dương: tháng được xác định theo chu kỳ Mặt Trăng, còn tháng nhuận dựa trên vị trí Mặt Trời. Khác biệt múi giờ UTC+7 có thể tạo chênh lệch với lịch Trung Quốc ở một số ngày.','Công cụ sử dụng công thức thiên văn xấp xỉ, kiểm tra các mốc Tết 2023–2027 và 29/10/2026. Với ngày sát thời điểm Sóc quanh nửa đêm, nên đối chiếu thêm lịch thiên văn chính thức.']},
   {heading:'Vì sao nên tải Qelunai?',paragraphs:['Ứng dụng có lịch tháng, lịch âm theo ngày, nhắc mùng một/rằm, Sổ giỗ gia đình và widget; các phép tính cốt lõi chạy trên thiết bị. Bản thử nghiệm hiện dành cho người được mời.']}
  ],faq:[{q:'Ngày âm được tính theo múi giờ nào?',a:'Giờ Việt Nam UTC+7, không lấy lịch Trung Quốc UTC+8.'},{q:'Công cụ có cần đăng nhập không?',a:'Không. Kết quả tính trong trình duyệt và không lưu ngày đã nhập trên máy chủ.'}],
  cta:'Đăng ký trải nghiệm app',method:'Phương pháp: xấp xỉ Meeus và quy tắc tháng 11/nhuận. Chỉ hỗ trợ năm 1900–2100; cần đối chiếu với lịch chính thức trong trường hợp biên.',dateLabel:'Ngày dương lịch',submit:'Tra ngày',result:'Kết quả',dayLabel:'Ngày âm',monthLabel:'Tháng âm',yearLabel:'Năm âm',leap:'Tháng nhuận',canChi:'Can Chi ngày',goodHours:'Giờ hoàng đạo',error:'Ngày không hợp lệ hoặc ngoài khoảng 1900–2100.',today:'Hôm nay (giờ Việt Nam)',ctaNote:'Ứng dụng đang trong giai đoạn thử nghiệm; yêu cầu tham gia được gửi qua email.'
 },
 hours:{
  title:'Giờ hoàng đạo hôm nay theo lịch Việt | Qelunai',
  description:'Tra 12 giờ theo địa chi, sáu giờ hoàng đạo theo ngày. Bảng quy tắc truyền thống, miễn phí và không cần tài khoản.',
  eyebrow:'Công cụ miễn phí · Giờ trong ngày',short:'Giờ hoàng đạo',intro:'Xem 12 khung giờ (mỗi khung khoảng hai giờ) theo địa chi và hệ trực thần truyền thống. Đây là cách phân loại mang tính văn hóa, không dự báo kết quả thực tế.',
  toolHeading:'Tra giờ hoàng đạo theo ngày',guide:[
   {heading:'Giờ Tý bắt đầu lúc mấy giờ?',paragraphs:['Theo hệ giờ địa chi thông dụng, giờ Tý là 23:00–01:00, Sửu là 01:00–03:00, ... Hợi là 21:00–23:00. Có trường phái khác nhau về cách chuyển ngày sau 23:00.']},
   {heading:'Dùng kết quả này thế nào?',paragraphs:['Các nhãn hoàng đạo/hắc đạo là quy ước lịch truyền thống, không có bằng chứng khoa học rằng chúng quyết định thành bại. Hãy ưu tiên điều kiện an toàn, sức khỏe, pháp lý và thực tế khi chọn thời điểm.']}
  ],faq:[{q:'Một ngày có mấy giờ hoàng đạo?',a:'Theo bảng trực thần áp dụng, mỗi ngày có sáu khung giờ được gọi là hoàng đạo.'},{q:'Giờ hoàng đạo có bảo đảm may mắn không?',a:'Không. Đây là hệ thống diễn giải văn hóa truyền thống để tham khảo.'}],
  cta:'Thử Qelunai trên điện thoại',method:'Phân loại dựa trên 12 trực thần Thanh Long → Câu Trận, chuyển theo địa chi của ngày. Không phải dự báo khoa học.',dateLabel:'Ngày dương lịch',submit:'Tra giờ',result:'Các khung giờ',dayLabel:'Ngày âm',monthLabel:'Tháng âm',yearLabel:'Năm âm',leap:'Tháng nhuận',canChi:'Can Chi ngày',goodHours:'Giờ hoàng đạo',error:'Ngày không hợp lệ hoặc ngoài khoảng 1900–2100.',today:'Hôm nay (giờ Việt Nam)',ctaNote:'Đăng ký beta qua email, không yêu cầu dữ liệu sinh cá nhân.'
 },
 iching:{
  title:'Kinh Dịch là gì? 64 quẻ và cách gieo quẻ | Qelunai',
  description:'Tìm hiểu Bát quái, 64 quẻ Kinh Dịch, hào âm dương và cách gieo ba đồng xu. Phương pháp, nguồn và giới hạn.',
  eyebrow:'Thư viện tri thức · Kinh Dịch',short:'Kinh Dịch',intro:'Tìm hiểu cấu trúc 64 quẻ, sáu hào và một phương pháp gieo quẻ thông dụng. Qelunai trình bày Kinh Dịch như một truyền thống tư tưởng để chiêm nghiệm, không phải lời tiên tri.',
  guide:[
   {heading:'Từ Bát quái đến 64 quẻ',paragraphs:['Một quái có ba hào âm hoặc dương; hai quái chồng nhau tạo thành sáu hào, tức 64 tổ hợp. Hào được đếm từ dưới lên trên.','Mỗi quẻ có văn bản và truyền thống diễn giải phong phú. Những bản dịch hiện đại có thể còn bản quyền, vì vậy Qelunai dùng nội dung tự biên soạn và tài liệu được phép tham khảo.']},
   {heading:'Gieo quẻ bằng ba đồng xu',paragraphs:['Người dùng gieo ba đồng xu sáu lần và ghi kết quả từ hào dưới lên. Tổng điểm hoặc mặt đồng xu được ánh xạ sang hào âm/dương, tĩnh/động theo hệ đã chọn. Hào động có thể tạo quẻ biến.','Ứng dụng Qelunai đã có module gieo quẻ, lịch sử quẻ và lời giải thích tham khảo. Website này chỉ giới thiệu phương pháp, không giả lập kết quả gieo quẻ.']},
   {heading:'Tự suy ngẫm, không phán quyết',paragraphs:['Kinh Dịch có giá trị văn hóa, triết học và lịch sử. Không nên dùng quẻ thay thế chẩn đoán y tế, tư vấn tài chính, pháp lý hay quyết định quan trọng khác.']}
  ],faq:[{q:'Kinh Dịch có bao nhiêu quẻ?',a:'64 quẻ, mỗi quẻ gồm sáu hào.'},{q:'Tại sao gieo sáu lần?',a:'Mỗi lần tạo một hào; sáu hào ghép thành một quẻ, đếm từ dưới lên.'}],
  cta:'Trải nghiệm gieo quẻ trong Qelunai',method:'Thông tin diễn giải mang tính giáo dục và tham khảo văn hóa.',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'Module gieo quẻ nằm trong ứng dụng; hiện đang thử nghiệm nội bộ.'
 }
};
const en:Record<GrowthPageId,Content>={
 calendar:{
  title:'Vietnamese lunar calendar today and solar-to-lunar conversion | Qelunai',description:'Free Vietnamese lunar date converter using UTC+7. View lunar months, leap months, Can Chi and auspicious hours without signing in.',eyebrow:'Free tool · Vietnamese lunar calendar',short:'Lunar calendar',intro:'Convert a Gregorian date to the Vietnamese lunisolar calendar (UTC+7). Results are calculated in your browser without sending the selected date to a server.',toolHeading:'Convert a Gregorian date',guide:[
   {heading:'How does the Vietnamese lunar calendar work?',paragraphs:['The start of each lunar month follows the new moon. Leap months follow solar longitude rules. Different civil time zones can sometimes cause Vietnamese and Chinese lunar dates to differ.','This tool uses an astronomical approximation with several checked dates from 2023–2027. Dates near a new moon close to midnight should be confirmed with authoritative astronomical calendars.']},
   {heading:'What does the mobile app add?',paragraphs:['Qelunai provides a month calendar, new/full moon reminders, family memorial dates and home-screen widgets. The app is currently available to invited testers.']}
 ],faq:[{q:'Which time zone is used?',a:'Vietnam civil time, UTC+7, rather than the Chinese UTC+8 calendar.'},{q:'Is sign-in required?',a:'No. Your selected date stays in the browser.'}],
 cta:'Request beta access',method:'Method: approximate Meeus astronomy and lunar-month/leap-month rules. Years 1900–2100; verify edge dates independently.',dateLabel:'Gregorian date',submit:'Convert',result:'Result',dayLabel:'Lunar day',monthLabel:'Lunar month',yearLabel:'Lunar year',leap:'Leap month',canChi:'Day Can Chi',goodHours:'Auspicious hours',error:'Invalid date or year outside 1900–2100.',today:'Today (Vietnam time)',ctaNote:'Qelunai is in private testing. Beta requests are sent by email.'
 },
 hours:{
 title:'Vietnamese auspicious hours today | Qelunai',description:'See the twelve traditional two-hour periods and six auspicious periods for a selected date. Free and no account.',eyebrow:'Free tool · Traditional hours',short:'Auspicious hours',intro:'Explore the twelve two-hour Earthly Branch periods and traditional labels. These cultural classifications are not scientifically established predictions.',toolHeading:'Find traditional auspicious hours',guide:[
 {heading:'When does the Tý hour start?',paragraphs:['The Tý period runs from 23:00 to 01:00, Sửu from 01:00 to 03:00, and so on. Schools differ on how a day changes at 23:00.']},
 {heading:'How should these results be used?',paragraphs:['Auspicious hours are part of cultural calendar traditions, not a guarantee of successful outcomes. Prioritize practical safety and evidence-based decisions.']}
 ],faq:[{q:'How many auspicious periods are there?',a:'Six of the twelve periods in the traditional scheme used here.'},{q:'Are these predictions?',a:'No. They are descriptions of traditional calendar conventions.'}],
 cta:'Try Qelunai on mobile',method:'Rule: twelve traditional spirits ordered from Thanh Long to Câu Trận, indexed by the date branch. Not a scientific forecast.',dateLabel:'Gregorian date',submit:'Show hours',result:'Hour periods',dayLabel:'Lunar day',monthLabel:'Lunar month',yearLabel:'Lunar year',leap:'Leap month',canChi:'Day Can Chi',goodHours:'Auspicious hours',error:'Invalid date or year outside 1900–2100.',today:'Today (Vietnam time)',ctaNote:'Request beta access by email. No birth data is required.'
 },
 iching:{
 title:'What is the I Ching? 64 hexagrams and coin casting | Qelunai',description:'An accessible guide to the I Ching: eight trigrams, 64 hexagrams, yin/yang lines and three-coin casting.',eyebrow:'Learning library · I Ching',short:'I Ching',intro:'Learn how the 64 hexagrams are formed and how a common coin-casting method works. Qelunai treats the I Ching as a cultural and philosophical tradition, not prophecy.',guide:[
 {heading:'Eight trigrams, 64 hexagrams',paragraphs:['A trigram has three yin or yang lines. Combining two trigrams makes a hexagram with six lines, yielding 64 possibilities. Lines are counted from the bottom.','Modern translations and interpretations may still be copyrighted. Qelunai uses original explanations and licensed references.']},
 {heading:'The three-coin method',paragraphs:['Cast three coins six times and record each resulting line, starting from the bottom. Depending on the convention, changing lines yield a transformed hexagram.','The Qelunai app provides casting, history and explanations. This website introduces the method without fabricating reading results.']},
 {heading:'Reflection, not a verdict',paragraphs:['The I Ching is valuable as cultural and philosophical heritage. It does not replace professional medical, financial or legal advice.']}
 ],faq:[{q:'How many hexagrams are there?',a:'64, each consisting of six lines.'},{q:'Why are coins cast six times?',a:'Each cast forms one of the six lines of a hexagram, bottom to top.'}],
 cta:'Explore I Ching in Qelunai',method:'Educational cultural reference only.',dateLabel:'',submit:'',result:'',dayLabel:'',monthLabel:'',yearLabel:'',leap:'',canChi:'',goodHours:'',error:'',today:'',ctaNote:'The app is currently in private testing.'
 }
};
export function growthFor(code:string,id:GrowthPageId):Content { return (code==='en'?en:vi)[id]; }
export const growthIds:GrowthPageId[]=['calendar','hours','iching'];
