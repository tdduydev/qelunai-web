import type { Locale } from '../types';

export default {
  code: 'vi',
  htmlLang: 'vi',
  ogLocale: 'vi_VN',
  nativeName: 'Tiếng Việt',
  order: 0,

  seo: {
    title: 'Qelunai: lịch âm, giờ hoàng đạo, Kinh Dịch, Bát tự và phong thủy',
    description:
      'Qelunai là ứng dụng lịch âm trên nền sơn mài: tờ lịch hôm nay, giờ hoàng đạo, chọn ngày tốt, gieo quẻ Kinh Dịch, Thần số học, Bát tự, la bàn Bát trạch và sổ giỗ gia đình. Có trên iPhone và Android.',
    keywords:
      'Qelunai, lịch âm, lịch vạn niên, giờ hoàng đạo, xem ngày tốt, gieo quẻ Kinh Dịch, Thần số học, Bát tự, Tứ trụ, phong thủy Bát trạch, la bàn, sổ giỗ, nhắc ngày giỗ',
    ogAlt: 'Qelunai, lịch âm và minh triết phương Đông trên nền sơn mài',
  },

  nav: {
    features: 'Tính năng',
    faq: 'Hỏi đáp',
    support: 'Hỗ trợ',
    action: 'Tải ứng dụng',
    language: 'Ngôn ngữ',
    skip: 'Bỏ qua, tới nội dung',
    home: 'Trang chủ Qelunai',
  },

  store: { appStore: 'App Store', googlePlay: 'Google Play', getOn: 'Tải trên', soon: 'Sắp có trên App Store và Google Play.' },

  hero: {
    eyebrow: 'Lịch âm · Kinh Dịch · Bát tự · Phong thủy',
    title: 'Mỗi ngày một tờ lịch,',
    accent: 'mỗi băn khoăn một quẻ.',
    sub: 'Qelunai đặt lịch âm, giờ hoàng đạo, Kinh Dịch và sổ giỗ gia đình lên một tấm sơn mài: then đen, vàng thếp, son đỏ. Mọi phép tính chạy ngay trên máy bạn.',
    shotAlt: 'Màn Hôm nay của Qelunai: tờ lịch xé ngày 29 tháng 10 năm 2026, ngày 20 tháng Chín âm lịch, và đồng hồ giờ hoàng đạo',
  },

  features: {
    eyebrow: 'Trong ứng dụng',
    heading: 'Những gì Qelunai làm cho bạn',
    sub: 'Ảnh dưới đây chụp từ ứng dụng thật.',
    items: {
      today: {
        kicker: 'Hôm nay',
        name: 'Tờ lịch xé mỗi sáng',
        summary:
          'Mở ứng dụng là thấy tờ lịch của ngày: ngày dương, ngày âm, can chi, ngày hoàng đạo hay hắc đạo, trực của ngày và tiết khí.',
        points: [
          'Giờ hoàng đạo đang chạy và còn bao nhiêu phút',
          'Tiết khí hiện tại, tiết kế tiếp và số ngày còn lại',
          'Chia sẻ tờ lịch hôm nay thành một tấm ảnh',
        ],
        shotAlt: 'Màn Hôm nay: tờ lịch ngày 29 tháng 10, ngày Bính Tý, và vòng giờ hoàng đạo',
      },
      licham: {
        kicker: 'Lịch âm',
        name: 'Lịch tháng, xem ngày, hợp tuổi',
        summary:
          'Lịch tháng có ngày âm dưới mỗi ngày dương, chấm đánh dấu ngày hoàng đạo, mùng một và rằm. Chạm vào một ngày để xem đủ 12 giờ, can chi, trực và tiết khí.',
        points: [
          'Sắp tới: mùng một, rằm, tiết khí, Tết và ngày giỗ trong 45 ngày',
          'Chọn ngày tốt cho 9 việc: cưới hỏi, khai trương, động thổ, nhập trạch, xuất hành, ký hợp đồng và hơn nữa',
          'Xem hợp tuổi hai người, trao thẻ tuổi bằng mã QR',
        ],
        shotAlt: 'Màn Lịch tháng 10 năm 2026 với ngày âm, ngày hoàng đạo và chi tiết ngày 29',
      },
      kinhdich: {
        kicker: 'Kinh Dịch',
        name: 'Tĩnh tâm, rồi gieo quẻ',
        summary:
          'Thở chậm ba nhịp, nghĩ về điều bạn muốn hỏi, rồi gieo ba đồng xu sáu lần bằng cách chạm hoặc lắc máy. Qelunai dựng quẻ chính, quẻ biến và diễn giải từng hào.',
        points: [
          'Đủ 64 quẻ, ý quẻ có sẵn trong ứng dụng',
          'Lời giải cho cả 384 hào, trong gói diễn giải tải về khi đăng nhập',
          'Sổ quẻ lưu lại các lần gieo; câu hỏi bạn gõ không được lưu',
        ],
        shotAlt: 'Màn Tĩnh tâm trước khi gieo quẻ, với đoá sen sơn mài',
      },
      phongthuy: {
        kicker: 'Phong thủy',
        name: 'Bát trạch và la bàn trên cảnh thật',
        summary:
          'Từ năm sinh và giới tính, Qelunai tính cung mệnh, cho biết bạn thuộc Đông tứ mệnh hay Tây tứ mệnh, cùng 4 hướng tốt và 4 hướng xấu.',
        points: [
          'La bàn Bát trạch phủ 8 hướng lên cảnh thật qua camera sau',
          'Không cho phép camera vẫn xem được mặt la bàn',
          'Hình ảnh chỉ hiện trên màn hình, không chụp và không lưu',
        ],
        shotAlt: 'Màn La bàn Bát Trạch: mặt la bàn 8 hướng, đang nhìn hướng Đông Nam, Sinh Khí',
      },
      giadinh: {
        kicker: 'Sổ giỗ',
        name: 'Sổ giỗ gia đình',
        summary:
          'Ghi ngày giỗ theo âm lịch một lần. Mỗi năm Qelunai tự đổi sang ngày dương và nhắc bạn trước ngày giỗ.',
        points: [
          'Nhắc vào hôm đó, hoặc trước 1, 3 hay 7 ngày',
          'Nhắc rằm và mùng một mỗi tháng',
          'Người mất vào tháng nhuận được tính giỗ vào tháng thường cùng tên',
        ],
        shotAlt: 'Màn Sổ giỗ gia đình với nút thêm ngày giỗ và nhắc rằm, mùng một',
      },
      thansohoc: {
        kicker: 'Thần số học',
        name: 'Những con số từ tên và ngày sinh',
        summary: 'Theo phương pháp Pythagoras, từ họ tên khai sinh và ngày sinh dương lịch.',
        points: ['Số chủ đạo, số biểu đạt, số linh hồn, số nhân cách', 'Giữ các số bậc thầy 11, 22 và 33', 'Mỗi con số có lời diễn giải riêng'],
      },
      batu: {
        kicker: 'Bát tự',
        name: 'Tứ trụ năm, tháng, ngày, giờ',
        summary: 'Lập bốn trụ theo tiết khí, giờ Việt Nam (UTC+7), theo phái Tử Bình.',
        points: ['Nhật chủ và số lượng ngũ hành', 'Đại vận, khi bạn nêu giới tính', 'Ghi rõ phần chưa có: nạp âm, cục, thập thần, luận tốt xấu'],
      },
    },
  },

  extras: {
    eyebrow: 'Luôn bên bạn',
    heading: 'Ngoài màn hình chính',
    items: [
      {
        title: 'Widget màn hình chính',
        body: 'Trên iPhone và Android: ngày dương, ngày âm, can chi và giờ tốt kế tiếp, không cần mở ứng dụng.',
      },
      {
        title: 'Một tài khoản, mọi thiết bị',
        body: 'Đăng nhập bằng Email, Google hoặc Apple. Hồ sơ ngày sinh, lịch sử gieo quẻ và sổ giỗ được sao lưu vào tài khoản.',
      },
      {
        title: 'Tính ngay trên máy',
        body: 'Âm lịch, can chi, giờ hoàng đạo và lá số được tính trên điện thoại, vẫn dùng được khi mất mạng.',
      },
      {
        title: 'Tiếng Việt và tiếng Anh',
        body: 'Đổi ngôn ngữ bất cứ lúc nào. Tên can chi, quẻ và tiết khí giữ nguyên gốc Việt.',
      },
    ],
  },

  principles: {
    eyebrow: 'Cách chúng tôi làm',
    heading: 'Di sản để chiêm nghiệm, không phải lời phán',
    seal: 'An',
    items: [
      {
        title: 'Tham khảo, không phán định',
        body: 'Lịch, quẻ và lá số là di sản văn hoá để suy ngẫm. Qelunai không tiên đoán và không thay lời khuyên y tế, pháp lý hay tài chính.',
      },
      {
        title: 'Mỗi đồng ý một ô',
        body: 'Mỗi việc dùng dữ liệu có một ô riêng, không ô nào đánh dấu sẵn. Bạn rút lại được bất cứ lúc nào, trong Hồ sơ.',
      },
      {
        title: 'Không bán dữ liệu',
        body: 'Quảng cáo và thống kê không nhận họ tên, ngày sinh, lịch sử gieo quẻ hay sổ giỗ của bạn.',
      },
    ],
  },

  faq: {
    eyebrow: 'Hỏi đáp',
    heading: 'Câu hỏi thường gặp',
    more: 'Xem thêm ở trang Hỗ trợ',
    items: [
      {
        q: 'Qelunai có miễn phí không?',
        a: 'Có. Lịch, giờ hoàng đạo, lá số, Kinh Dịch, hợp tuổi và thẻ tuổi dùng miễn phí. Bản miễn phí có thể có quảng cáo. Gói Qelunai Plus, khi có trên cửa hàng, bỏ quảng cáo và mở thêm: tìm ngày tốt trong 12 tháng tới, không giới hạn hồ sơ gia đình, nhắc giỗ nhiều mốc.',
      },
      {
        q: 'Có cần tài khoản không?',
        a: 'Có. Bạn đăng nhập bằng Email, Google hoặc Apple để hồ sơ ngày sinh, lịch sử gieo quẻ và sổ giỗ được sao lưu và có trên mọi thiết bị.',
      },
      {
        q: 'Lịch âm tính theo giờ nào?',
        a: 'Theo giờ Việt Nam (UTC+7). Âm lịch Việt Nam và Trung Quốc có năm lệch nhau một ngày vì khác múi giờ; Qelunai dùng lịch Việt Nam.',
      },
      {
        q: 'Dữ liệu của tôi nằm ở đâu?',
        a: 'Trên máy bạn và trong tài khoản của bạn trên Cloud Firestore (Google), khu vực Singapore. Chỉ tài khoản của bạn đọc được. Chi tiết ở trang Quyền riêng tư.',
      },
      {
        q: 'Qelunai có trên máy nào?',
        a: 'iPhone (iOS 15 trở lên, widget cần iOS 16) và điện thoại Android.',
      },
      {
        q: 'Làm sao xoá tài khoản?',
        a: 'Trong ứng dụng: Hồ sơ > Xoá tài khoản. Hoặc gửi email từ địa chỉ đã đăng ký tới support@qelunai.com. Xem trang Xoá tài khoản.',
      },
    ],
  },

  download: {
    heading: 'Mở tờ lịch đầu tiên',
    sub: 'Tải Qelunai cho iPhone hoặc Android.',
    pictureAlt: 'Đoá sen khảm vàng thếp và vỏ trứng trên nền sơn mài',
  },

  footer: {
    tagline: 'Lịch âm và minh triết phương Đông, trên nền sơn mài.',
    app: 'Ứng dụng',
    help: 'Hỗ trợ',
    legal: 'Pháp lý',
    contact: 'Liên hệ',
    disclaimer: 'Nội dung dùng để giải trí và tham khảo văn hoá, không thay tư vấn chuyên môn.',
    rights: 'Qelunai.',
  },

  pages: {
    testers: {
      title: 'Thử Qelunai trên Android',
      description: 'Tham gia thử nghiệm kín Qelunai trên Google Play: vào nhóm tester, bấm nhận lời mời, cài ứng dụng và giữ máy cài trong 14 ngày.',
      lead: 'Qelunai cần ít nhất 12 người dùng Android thử ứng dụng trong 14 ngày liền trước khi được phát hành trên Google Play. Cảm ơn bạn đã giúp!',
      blocks: [
        {
          title: 'Bốn bước tham gia',
          ordered: true,
          body: ['Dùng cùng một tài khoản Google cho cả bốn bước: tài khoản đang đăng nhập Google Play trên điện thoại.'],
          list: [
            'Vào nhóm tester và bấm **Tham gia nhóm**: https://groups.google.com/g/qelunai-testers',
            'Mở trang nhận lời mời và bấm **Trở thành người thử nghiệm**: https://play.google.com/apps/testing/com.qelunai.qelunai',
            'Bấm **Tải xuống trên Google Play** ở trang đó, rồi cài Qelunai như ứng dụng bình thường.',
            'Mở ứng dụng, đăng nhập và dùng thử. **Giữ ứng dụng trên máy ít nhất 14 ngày**; gỡ sớm thì Google không tính lượt thử.',
          ],
        },
        {
          title: 'Trong 14 ngày',
          body: [],
          list: [
            'Mở ứng dụng vài lần: xem lịch hôm nay, gieo một quẻ, thử la bàn.',
            'Gặp lỗi hay chỗ khó dùng, gửi góp ý bằng nút **Gửi phản hồi** trên trang Google Play của Qelunai, hoặc email support@qelunai.com.',
            'Bản thử có quảng cáo thật của Google AdMob. Đừng bấm vào quảng cáo chỉ để giúp ứng dụng: Google coi đó là gian lận.',
          ],
        },
        {
          title: 'Câu hỏi thường gặp',
          body: [
            '**Không mở được trang nhóm?** Mở link bằng Chrome (không mở trong Zalo hay Messenger). Một số mạng công ty chặn groups.google.com: tắt Wi-Fi, dùng 4G hoặc mạng ở nhà rồi thử lại.',
            '**Trang báo "App not available" hoặc không thấy nút Trở thành người thử nghiệm?** Bạn chưa vào nhóm ở bước 1, hoặc trình duyệt đang đăng nhập tài khoản Google khác. Kiểm tra đúng tài khoản đang dùng trên điện thoại, rồi tải lại trang.',
            '**Có tốn tiền không?** Không. Ứng dụng miễn phí, bản thử không bán gì.',
            '**Dữ liệu của tôi?** Như bản chính thức, xem trang Quyền riêng tư. Bạn có thể xoá tài khoản bất cứ lúc nào trong Hồ sơ > Xoá tài khoản.',
            '**Muốn rời chương trình thử?** Mở lại trang nhận lời mời và chọn rời chương trình; sau 14 ngày bạn vẫn giữ ứng dụng như người dùng thường.',
          ],
        },
      ],
    },
    updatedLabel: 'Cập nhật',
    backHome: 'Về trang chủ',
    privacy: {
      title: 'Chính sách quyền riêng tư',
      description: 'Qelunai thu thập dữ liệu gì, lưu ở đâu, ai đọc được và cách bạn xoá dữ liệu hay tài khoản.',
      onThisPage: 'Trong trang này',
      contact: 'Câu hỏi về quyền riêng tư: gửi email tới support@qelunai.com.',
    },
    support: {
      title: 'Hỗ trợ',
      description: 'Cách liên hệ Qelunai và câu trả lời cho các câu hỏi về đăng nhập, đồng bộ, xoá tài khoản, gói Plus và quảng cáo.',
      lead: 'Cần giúp với Qelunai? Xem câu trả lời dưới đây hoặc viết cho chúng tôi.',
      contactTitle: 'Liên hệ',
      contactBody:
        'Gửi email tới support@qelunai.com. Ghi giúp loại máy (iPhone hay Android), phiên bản ứng dụng (ở Hồ sơ) và mô tả ngắn điều bạn gặp. Đừng gửi mật khẩu.',
      contactAction: 'Viết email',
      faqTitle: 'Câu hỏi thường gặp',
      faq: [
        {
          q: 'Tôi đăng nhập bằng cách nào?',
          a: 'Chọn Email, Google hoặc Apple (Apple có trên iPhone). Trước khi đăng nhập, đánh dấu ô đồng ý sao lưu vào tài khoản; các nút đăng nhập mở khi ô này được chọn. Quên mật khẩu Email: chọn **Quên mật khẩu?** ở màn đăng nhập.',
        },
        {
          q: 'Dữ liệu có đồng bộ giữa các máy không?',
          a: 'Có. Hồ sơ ngày sinh, lịch sử gieo quẻ và sổ giỗ được lưu vào tài khoản. Đăng nhập cùng tài khoản trên máy khác là thấy lại. Thay đổi lúc mất mạng được tải lên ở lần đồng bộ sau. Đăng xuất xoá bản sao trên máy, dữ liệu vẫn nằm trong tài khoản.',
        },
        {
          q: 'Làm sao xoá tài khoản?',
          a: 'Vào **Hồ sơ > Xoá tài khoản** trong ứng dụng, hoặc gửi email từ địa chỉ đã đăng ký tới support@qelunai.com. Các bước và dữ liệu bị xoá có ở trang Xoá tài khoản.',
        },
        {
          q: 'Quảng cáo và gói Qelunai Plus',
          a: 'Bản miễn phí có thể có quảng cáo của Google AdMob, không có ở màn đăng nhập, lúc đang gieo quẻ, ở La bàn camera hay ở widget. Hiện ứng dụng chưa bán gói trả phí nào. Khi có, Qelunai Plus sẽ là gói đăng ký tháng hoặc năm qua App Store hoặc Google Play, không có quảng cáo; thanh toán, huỷ và hoàn tiền do Apple hoặc Google xử lý.',
        },
        {
          q: 'Tôi không nhận được nhắc ngày giỗ',
          a: 'Ứng dụng xin quyền thông báo khi bạn bật nhắc. Nếu đã từ chối, bật lại thông báo cho Qelunai trong Cài đặt của máy, rồi mở ngày giỗ và bật **Nhắc ngày giỗ này**.',
        },
        {
          q: 'La bàn chỉ sai hướng',
          a: 'Để xa nam châm, vỏ ốp có nam châm và đồ kim loại lớn, rồi xoay máy theo hình số 8 vài lần để hiệu chỉnh như ứng dụng hướng dẫn.',
        },
      ],
    },
    deleteAccount: {
      title: 'Xoá tài khoản',
      description: 'Cách xoá tài khoản Qelunai và toàn bộ dữ liệu: ngay trong ứng dụng, hoặc gửi email tới support@qelunai.com.',
      lead: 'Bạn có thể xoá tài khoản Qelunai và mọi dữ liệu đi kèm bất cứ lúc nào, theo một trong hai cách dưới đây.',
      mailAction: 'Gửi yêu cầu xoá qua email',
      mailSubject: 'Yêu cầu xoá tài khoản Qelunai',
      mailBody: 'Xin xoá tài khoản Qelunai đăng ký bằng địa chỉ email này và toàn bộ dữ liệu đi kèm.',
      blocks: [
        {
          title: 'Cách 1: xoá ngay trong ứng dụng',
          ordered: true,
          body: ['Cách nhanh nhất, dữ liệu bị xoá ngay lập tức.'],
          list: [
            'Mở Qelunai và đăng nhập tài khoản muốn xoá.',
            'Vào tab **Hồ sơ**.',
            'Chọn **Xoá tài khoản**.',
            'Đọc thông báo rồi chọn **Xoá vĩnh viễn**.',
            'Nếu ứng dụng yêu cầu đăng nhập lại, hãy đăng nhập rồi chọn **Xoá tài khoản** lần nữa.',
          ],
        },
        {
          title: 'Cách 2: gửi email',
          body: [
            'Không mở được ứng dụng? Gửi email **từ chính địa chỉ đã đăng ký** tới support@qelunai.com với tiêu đề “Yêu cầu xoá tài khoản Qelunai”. Nếu bạn đăng nhập bằng Apple với email ẩn danh, hãy ghi rõ điều đó trong thư.',
            'Chúng tôi xác minh yêu cầu, xoá tài khoản và dữ liệu **trong 30 ngày**, rồi trả lời để xác nhận.',
          ],
        },
        {
          title: 'Dữ liệu bị xoá',
          body: [],
          list: [
            'Mọi dữ liệu của tài khoản trên Cloud Firestore: hồ sơ ngày sinh, lịch sử gieo quẻ, sổ giỗ và dữ liệu đồng bộ kỹ thuật.',
            'Tài khoản đăng nhập Firebase Authentication: email, mã người dùng, nhà cung cấp đăng nhập, mật khẩu đã băm.',
            'Bản sao dữ liệu trên máy, và các nhắc giỗ đã đặt (khi xoá trong ứng dụng).',
          ],
        },
        {
          title: 'Dữ liệu không nằm trong tài khoản',
          body: [],
          list: [
            'Các dòng ghi đồng ý chỉ lưu trên máy; gỡ ứng dụng để xoá.',
            'Thống kê sử dụng và báo lỗi (chỉ khi bạn đã bật) không gắn với tài khoản và không chứa họ tên hay ngày sinh; Google lưu theo chính sách của Google.',
            'Lịch sử mua và gói đăng ký do Apple hoặc Google giữ. **Xoá tài khoản không huỷ gói Qelunai Plus**: hãy huỷ trong phần đăng ký của App Store hoặc Google Play.',
          ],
        },
        {
          title: 'Chỉ muốn xoá một phần?',
          body: [
            'Không cần xoá tài khoản: xoá từng hồ sơ ở tab **Lá số**, xoá lịch sử gieo quẻ, hoặc chọn **Hồ sơ > Xoá mọi hồ sơ và lịch sử**. Dữ liệu được xoá khỏi máy và khỏi tài khoản ở lần đồng bộ kế tiếp.',
          ],
        },
      ],
    },
    terms: {
      title: 'Điều khoản sử dụng',
      description: 'Điều khoản sử dụng ứng dụng Qelunai: mục đích tham khảo, tài khoản, gói Qelunai Plus, quảng cáo và giấy phép người dùng cuối.',
      updated: '29/10/2026',
      lead: 'Khi tải hoặc dùng Qelunai, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc cùng Chính sách quyền riêng tư.',
      blocks: [
        {
          title: 'Mục đích sử dụng',
          body: [
            'Qelunai trình bày lịch âm, giờ hoàng đạo, Kinh Dịch, Thần số học, Bát tự và phong thủy như **di sản văn hoá, để giải trí và tham khảo**. Nội dung không phải lời tiên đoán và **không thay cho tư vấn chuyên môn** về y tế, tâm lý, pháp lý, tài chính hay đầu tư. Bạn tự chịu trách nhiệm về quyết định của mình.',
          ],
        },
        {
          title: 'Tài khoản',
          body: [
            'Bạn cần đủ 16 tuổi và một tài khoản (Email, Google hoặc Apple) để dùng Qelunai. Hãy giữ an toàn cho cách đăng nhập của bạn. Bạn có thể xoá tài khoản bất cứ lúc nào như hướng dẫn ở trang Xoá tài khoản.',
          ],
        },
        {
          title: 'Dùng đúng mục đích',
          body: ['Bạn không được:'],
          list: [
            'Sao chép, bán lại hoặc phân phối nội dung của ứng dụng ngoài việc dùng cá nhân.',
            'Dịch ngược, can thiệp hay vượt qua các giới hạn kỹ thuật của ứng dụng, trừ khi luật cho phép.',
            'Dùng ứng dụng hay máy chủ của chúng tôi để làm việc trái pháp luật hoặc gây hại cho người khác.',
          ],
        },
        {
          title: 'Qelunai Plus và mua trong ứng dụng',
          body: [
            'Khi có trên cửa hàng, Qelunai Plus là gói đăng ký theo tháng hoặc theo năm, mua qua App Store hoặc Google Play. Việc thanh toán, tự gia hạn, dùng thử, huỷ và hoàn tiền tuân theo điều khoản của Apple hoặc Google. Gói tự gia hạn cho tới khi bạn huỷ trong phần đăng ký của cửa hàng. Giá và quyền lợi được hiện trong ứng dụng trước khi bạn mua.',
          ],
        },
        {
          title: 'Quảng cáo',
          body: [
            'Bản miễn phí có thể hiển thị quảng cáo của Google AdMob. Chúng tôi không chịu trách nhiệm về nội dung hay sản phẩm của bên quảng cáo.',
          ],
        },
        {
          title: 'Giấy phép người dùng cuối',
          body: [
            'Qelunai được cấp phép cho bạn dùng, không phải bán cho bạn. Trên thiết bị Apple, **Thoả thuận cấp phép người dùng cuối chuẩn của Apple** (Licensed Application End User License Agreement) áp dụng cùng các điều khoản này: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/. Apple không chịu trách nhiệm về ứng dụng hay nội dung của ứng dụng.',
            'Trên Android, Điều khoản dịch vụ của Google Play cũng áp dụng: https://play.google.com/about/play-terms/',
          ],
        },
        {
          title: 'Sở hữu trí tuệ',
          body: [
            'Tên, biểu trưng, giao diện, hình minh hoạ và lời diễn giải trong Qelunai thuộc về Qelunai hoặc bên cấp phép. Văn bản cổ như Kinh Dịch thuộc phạm vi công cộng; phần biên soạn và lời giải là của Qelunai.',
          ],
        },
        {
          title: 'Không bảo đảm',
          body: [
            'Ứng dụng được cung cấp “nguyên trạng”. Chúng tôi cố gắng tính đúng, nhưng không bảo đảm ứng dụng luôn không lỗi hay không gián đoạn. Trong phạm vi luật cho phép, Qelunai không chịu trách nhiệm cho thiệt hại gián tiếp phát sinh từ việc dùng ứng dụng.',
          ],
        },
        {
          title: 'Thay đổi điều khoản',
          body: [
            'Khi điều khoản thay đổi, chúng tôi cập nhật trang này và ngày cập nhật ở trên. Tiếp tục dùng ứng dụng sau đó nghĩa là bạn đồng ý với bản mới.',
          ],
        },
        {
          title: 'Liên hệ',
          body: ['Câu hỏi về điều khoản: support@qelunai.com.'],
        },
      ],
    },
  },

  notFound: {
    title: 'Không tìm thấy trang',
    body: 'Trang này không có, hoặc đã được dời đi.',
    home: 'Về trang chủ',
  },
} satisfies Locale;
