import type { Locale } from '../types';

export default {
  code: 'vi',
  htmlLang: 'vi',
  ogLocale: 'vi_VN',
  nativeName: 'Tiếng Việt',
  order: 1,
  script: 'latin',

  seo: {
    title: 'Qelunai: Trí tuệ phương Đông & AI, Tử vi, Bát tự, Kinh Dịch, Lịch âm',
    description:
      'Qelunai là ứng dụng điềm tĩnh cho Tử vi, Bát tự, Lịch âm, Kinh Dịch, Phong thủy và Thần số học, giải thích rõ ràng như công cụ để chiêm nghiệm. Đang phát triển.',
    keywords: 'Qelunai, tử vi, lá số tử vi, bát tự, tứ trụ, kinh dịch, lịch âm, phong thủy, thần số học, ứng dụng tử vi',
  },

  nav: { modules: 'Phân hệ', principles: 'Nguyên tắc', faq: 'Câu hỏi', action: 'Nhận thông báo', language: 'Ngôn ngữ', skip: 'Đến nội dung chính' },

  hero: {
    line1: 'Trí tuệ',
    line2: 'phương Đông',
    sub: 'Qelunai là ứng dụng điềm tĩnh cho Tử vi, Bát tự, Lịch âm và Kinh Dịch, kể lại rõ ràng như công cụ để chiêm nghiệm.',
    pictureAlt: 'Bầu trời đêm với chiếc la bàn thiên văn vàng trên núi sương và mặt hồ tĩnh lặng',
  },

  intro: {
    lines: ['Mười hai cung,', 'bốn trụ,', 'sáu mươi tư quẻ,', 'một năm âm lịch,', 'đọc chậm rãi.'],
    note: 'Di sản để chiêm nghiệm, không phải phán quyết về đời bạn.',
    pictureAlts: ['Vòng mười hai điểm vàng trên nền trời sao', 'Các pha trăng vắt ngang mặt biển lặng'],
  },

  features: {
    heading: 'Ứng dụng làm gì, nói bằng câu đơn giản',
    on: 'Bật',
    off: 'Tắt',
    items: [
      { text: 'Xem lá số theo mười hai cung', detail: 'Mười hai cung an từ cung Mệnh, mỗi cung có sao và lời giải thích dễ hiểu. Đang phát triển.', on: true },
      { text: 'Theo dõi năm âm lịch từng ngày', detail: 'Hai mươi bốn tiết khí, tháng nhuận và can chi từng ngày, tính theo UTC+7. Đang phát triển.' },
      { text: 'Gieo một quẻ khi thấy bế tắc', detail: 'Sáu mươi tư quẻ, mỗi quẻ sáu hào, kèm lời kinh và cách đọc hiện đại. Đang phát triển.' },
      { text: 'Hỏi trợ lý AI, chỉ khi bạn đồng ý', detail: 'Trợ lý tắt sẵn. Không dữ liệu nào rời điện thoại cho tới khi bạn đồng ý.', on: true },
      { text: 'Dùng ở chế độ sáng hoặc tối', detail: 'Ngà ban ngày, xanh đêm ban đêm, cùng một sắc vàng điềm tĩnh.' },
    ],
  },

  modules: {
    heading: 'Sáu bộ môn, một ứng dụng',
    status: 'Đang phát triển',
    items: {
      tuvi: { name: 'Tử vi', summary: 'Lá số Tử vi đẩu số: mười hai cung và hơn trăm vì sao.', fact: '12 cung' },
      batu: { name: 'Bát tự', summary: 'Tứ trụ: năm, tháng, ngày, giờ sinh viết bằng thiên can và địa chi.', fact: '4 trụ, 8 chữ' },
      phongthuy: { name: 'Phong thủy', summary: 'Hướng nhà, Bát trạch và ngũ hành quanh nơi bạn sống.', fact: '8 hướng' },
      kinhdich: { name: 'Kinh Dịch', summary: 'Gieo quẻ, đọc thoán từ và các hào động.', fact: '64 quẻ' },
      licham: { name: 'Lịch âm', summary: 'Lịch âm dương: ngày âm, tiết khí, ngày tốt và ngày xấu.', fact: '24 tiết khí' },
      thansohoc: { name: 'Thần số học', summary: 'Số chủ đạo và các chỉ số cốt lõi từ tên và ngày sinh.', fact: '9 số cốt lõi' },
    },
  },

  about: {
    line1: 'Di sản,',
    line2: 'không phải tiên tri.',
    blocks: [
      { title: 'Phương pháp nói rõ', body: 'Mỗi lá số ghi rõ theo trường phái và quy tắc nào, để bạn tự kiểm tra cách tính thay vì tin một chiếc hộp đen.' },
      { title: 'Dữ liệu là của bạn', body: 'Thông tin ngày sinh lưu trên điện thoại. Không cần tài khoản, và trợ lý AI là thứ bạn tự bật, không phải thứ theo dõi bạn.' },
    ],
    action: 'Nhận thông báo khi ra mắt',
    pictureAlt: 'Những hòn đá xếp chồng bên hồ dưới vầng trăng tròn nhạt',
  },

  faq: {
    heading: 'Những câu hay được hỏi',
    items: [
      { q: 'Qelunai có phải là bói toán không?', a: 'Không. Ứng dụng giới thiệu các hệ thống phương Đông như một di sản văn hóa và gợi ý để chiêm nghiệm. Nó không đoán tương lai hay quyết định thay bạn.' },
      { q: 'Tôi dùng được ngay chưa?', a: 'Chưa. Qelunai đang phát triển cho Android và iOS. Để lại email bên dưới, chúng tôi sẽ viết một lần duy nhất khi ra mắt.' },
      { q: 'Ứng dụng hỗ trợ ngôn ngữ nào?', a: 'Tiếng Việt và tiếng Anh khi ra mắt, sau đó là tiếng Trung và tiếng Hàn. Trang này đã có cả bốn thứ tiếng.' },
      { q: 'AI có đọc dữ liệu của tôi không?', a: 'Chỉ khi bạn bật trợ lý và đồng ý chia sẻ một lá số cụ thể. Mặc định là tắt, và bạn có thể tắt lại bất cứ lúc nào.' },
      { q: 'Phương pháp lấy từ đâu?', a: 'Từ các sách cổ và những trường phái Tử vi, Bát tự, Phong thủy, Kinh Dịch được dùng rộng rãi. Mỗi tính năng đều ghi nguồn ngay trong ứng dụng.' },
    ],
  },

  cta: {
    line1: 'Bắt đầu',
    line2: 'thật khẽ.',
    sub: 'Một email khi ra mắt. Không gì khác.',
    dialogTitle: 'Báo tôi khi Qelunai sẵn sàng',
    emailLabel: 'Email của bạn',
    emailPlaceholder: 'ban@vidu.com',
    platformLabel: 'Điện thoại của bạn',
    button: 'Gửi yêu cầu',
    mailSubject: 'Báo tôi khi Qelunai ra mắt',
    mailBody: 'Vui lòng báo tôi khi Qelunai ra mắt.\n\nEmail: {email}\nNền tảng: {platform}',
  },

  footer: {
    notes: ['Qelunai đang phát triển. Không tiên đoán, không xem bói trả phí.', 'Sắp có trên Android và iOS.'],
    top: 'Lên đầu trang',
    contactLabel: 'Viết cho chúng tôi',
    credits: 'Tranh minh họa vẽ riêng cho Qelunai',
    rights: 'Bảo lưu mọi quyền.',
  },

  notFound: { title: 'Trang này đã lạc đường', body: 'Trang bạn tìm không tồn tại.', home: 'Về Qelunai' },
} satisfies Locale;
