export type ValuePillarIcon = "advisor" | "clarity" | "warmth" | "support";

export type ValuePillar = {
  icon: ValuePillarIcon;
  title: string;
  text: string;
};

export const valuePillars: ValuePillar[] = [
  {
    icon: "advisor",
    title: "Tư vấn sát với nhu cầu",
    text: "Chúng tôi lắng nghe thiết bị đang dùng, thời gian sử dụng, khu vực sinh sống và thói quen kết nối để đưa ra gợi ý phù hợp hơn.",
  },
  {
    icon: "clarity",
    title: "Thông tin rõ ràng, dễ theo dõi",
    text: "Mỗi nhóm dịch vụ được viết ngắn gọn, lịch sự và mạch lạc để Quý khách dễ so sánh trước khi liên hệ.",
  },
  {
    icon: "warmth",
    title: "Trải nghiệm xem web ấm áp",
    text: "Giao diện ưu tiên cảm giác gần gũi, sang trọng và dễ đọc để khách hàng muốn ở lại lâu hơn và tìm hiểu thêm.",
  },
  {
    icon: "support",
    title: "Hỗ trợ quyết định nhẹ nhàng hơn",
    text: "Từ tham khảo sản phẩm, xem mức giá đến gửi yêu cầu liên hệ, toàn bộ hành trình đều hướng đến sự thuận tiện và dễ hiểu.",
  },
];
