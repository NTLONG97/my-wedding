// =============================================================
//  CẤU HÌNH THIỆP CƯỚI  —  Chỉnh mọi thông tin tại đây
//  Phong cách điện ảnh theo chương (tham khảo cinelove template 3)
// =============================================================

const config = {
  // ---------- Cô dâu & Chú rể ----------
  groom: {
    name: "Nguyễn Thanh Long",
    displayName: "Thanh Long", // tên hiển thị ở mục cô dâu chú rể
    short: "Long",
    role: "Chú Rể",
    photo: "/images/MN_05435.jpg",
    photoZoom: "165%", // phóng to ảnh trong khung (cao hơn = to hơn)
    photoPosition: "50% 14%", // vị trí khung ngắm (đưa lên để thấy rõ mặt)
    family: {
      father: "Ông Nguyễn Văn Trung",
      mother: "Bà Trần Thị Ngọc Bình",
      place: "Tây Ninh",
    },
  },
  bride: {
    name: "Nguyễn Thị Thùy Trang",
    displayName: "Thùy Trang", // tên hiển thị ở mục cô dâu chú rể
    short: "Trang",
    role: "Cô Dâu",
    photo: "/images/MN_05629.jpg",
    photoZoom: "142%", // phóng gần cho cân với ảnh chú rể
    photoPosition: "50% 16%",
    family: {
      father: "Ông Nguyễn Chua",
      mother: "Bà Phạm Thị Hiền",
      place: "Quảng Ngãi",
    },
  },
  nameOrder: "groomFirst", // "groomFirst" hoặc "brideFirst"

  // ---------- Ngày cưới ----------
  wedding: {
    dateTime: "2026-12-20T09:00:00+07:00", // dùng cho đếm ngược & lịch
    solar: "20 . 12 . 2026",
    lunar: "12 . 11 . 2026 (Âm lịch)",
    weekday: "Chủ Nhật",
    day: 20,
    month: 12,
    year: 2026,
    hashtag: "Long & Trang",
    invitation:
      "Trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc của chúng mình",
  },

  // ---------- Địa điểm ----------
  venue: {
    title: "Tư Gia Nhà Trai",
    address: "255/8, ấp Thanh Tân, Xã Thuận Mỹ, Tỉnh Tây Ninh",
    note: "Gần trường mẫu giáo Thanh Phú Long",
    mapEmbedUrl:
      "https://www.google.com/maps?q=" +
      encodeURIComponent("255/8, ấp Thanh Tân, Xã Thuận Mỹ, Tỉnh Tây Ninh") +
      "&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("255/8, ấp Thanh Tân, Xã Thuận Mỹ, Tỉnh Tây Ninh"),
  },

  // ---------- Nhạc nền ----------
  music: {
    src: "/music/wedding.mp3", // bỏ file nhạc vào public/music/
    autoPlayAfterOpen: true,
  },

  // ---------- Tự cuộn trình chiếu ----------
  autoScroll: {
    enabled: true,
    durationMs: 95000, // chạy hết trang trong ~95 giây. Tăng = chậm hơn.
    startDelayMs: 1300,
    loop: false,
  },

  // ---------- Mục "Welcome" (minh hoạ + câu tiếng Anh + 2 ảnh tròn) ----------
  welcomeIntro: {
    illustration: "", // (tuỳ chọn) đường dẫn ảnh minh hoạ riêng, vd "/images/welcome.png". Để trống = dùng hình vẽ sẵn.
    line1: "I want to spend the rest of my life",
    line2: "with you",
  },

  // ---------- Ảnh nền các khu vực ----------
  heroImage: "/images/MN_05573.jpg", // ảnh nửa dưới màn bìa
  heroImagePosition: "center 30%", // vị trí ngắm ảnh bìa (đưa lên/xuống)
  countdownImage: "/images/MN_05604.jpg",

  // ---------- Các chương điện ảnh (ảnh full + câu nói) ----------
  // Câu nói lấy từ file mô tả. Đổi ảnh/câu tuỳ ý.
  chapters: [
    {
      images: ["/images/MN_05170.jpg", "/images/MN_05543.jpg"],
      align: "center", // căn lề chữ: "left" | "center" | "right"
      layout: "stack", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter One",
      accent: "Our Story",
      lines: [
        "Tình yêu khẽ đến mà chẳng biết từ đâu,",
        "Nhưng mỗi ngày một đậm sâu, mà chẳng có điểm dừng.",
      ],
    },
    {
      images: ["/images/MN_05558.jpg", "/images/MN_05153.jpg"],
      align: "left",
      layout: "collage", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter Two",
      accent: "No one but you",
      lines: ["Giữa thế gian huyên náo,", "em là điều duy nhất đáng giá."],
    },
    {
      images: ["/images/MN_05369.jpg", "/images/MN_05932.jpg"],
      align: "right",
      layout: "stack", // "collage" (ghép chồng) hoặc "stack" (xếp dọc)
      chapter: "Chapter Three",
      accent: "Forever & Always",
      lines: [
        "Hạnh phúc lớn nhất chính là có thể đặt tay mình vào tay em,",
        "cùng em đi hết cuộc đời lãng mạn này.",
      ],
    },
  ],

  // ---------- Lời mời (Welcome) + ảnh nền ----------
  welcome: {
    image: "/images/MN_05904.jpg",
    imagePosition: "center 22%",
    accent: "Welcome to our wedding",
    lines: [
      "Hãy chuẩn bị một tâm trạng thật vui vẻ và một chiếc bụng thật đói, rồi đến chung vui cùng chúng tớ nha!",
      "Chỉ cần có bạn ở đây, ngày vui của chúng tớ sẽ càng thêm trọn vẹn.",
      "Hẹn gặp bạn trong ngày cưới nha ❤️",
    ],
    thanks: "Thank you!",
  },

  // ---------- Album (lưới ảnh cuối) ----------
  gallery: [
    "/images/MN_05153.jpg",
    "/images/MN_05604.jpg",
    "/images/MN_05170.jpg",
    "/images/MN_05543.jpg",
    "/images/MN_05558.jpg",
    "/images/MN_05369.jpg",
    "/images/MN_05573.jpg",
    "/images/MN_05629.jpg",
    "/images/MN_05435.jpg",
    "/images/MN_05904.jpg",
    "/images/MN_05932.jpg",
  ],

  // ---------- Form xác nhận tham dự (RSVP) ----------
  // Gửi qua Formspree (miễn phí): tạo form tại https://formspree.io,
  // đặt email nhận longnguyen19971997@gmail.com, dán endpoint vào đây.
  rsvp: {
    formspreeEndpoint: "https://formspree.io/f/your_form_id",
    receiveEmail: "longnguyen19971997@gmail.com",
  },
};

export default config;
