"use client";

import Link from "next/link";
import { ArrowRight, Newspaper, Quote, ShieldCheck, Sparkles, Star, UserRoundCheck } from "lucide-react";
import CosmicHeroBackground from "@/components/CosmicHeroBackground";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";
import { products } from "@/data/products";
import { supportFaqs } from "@/data/support";

const newsItems = [
  {
    title: "Cập nhật ưu đãi và thông tin mới",
    text: "Theo dõi những thay đổi quan trọng về SIM, WiFi và internet tại Nhật để lựa chọn đúng dịch vụ vào đúng thời điểm.",
  },
  {
    title: "Mẹo chọn dịch vụ dễ hiểu",
    text: "Những bài viết ngắn gọn giúp Quý khách phân biệt nhanh SIM vật lý, eSIM, Pocket WiFi, Home WiFi và Hikari.",
  },
  {
    title: "Gợi ý theo nhu cầu thực tế",
    text: "Từ người mới sang Nhật đến gia đình cần internet ổn định lâu dài, mỗi nội dung đều hướng tới quyết định rõ ràng hơn.",
  },
];

const whyUs = [
  {
    icon: UserRoundCheck,
    title: "Tư vấn sát với nhu cầu",
    text: "Chúng tôi lắng nghe thiết bị đang dùng, thời gian sử dụng, khu vực sinh sống và thói quen kết nối để đưa ra gợi ý phù hợp hơn.",
  },
  {
    icon: ShieldCheck,
    title: "Thông tin rõ ràng, dễ theo dõi",
    text: "Mỗi nhóm dịch vụ được viết ngắn gọn, lịch sự và mạch lạc để Quý khách dễ so sánh trước khi liên hệ.",
  },
  {
    icon: Sparkles,
    title: "Trải nghiệm xem web ấm áp",
    text: "Giao diện ưu tiên cảm giác gần gũi, sang trọng và dễ đọc để khách hàng muốn ở lại lâu hơn và tìm hiểu thêm.",
  },
  {
    icon: Star,
    title: "Hỗ trợ quyết định nhẹ nhàng hơn",
    text: "Từ tham khảo sản phẩm, xem mức giá đến gửi yêu cầu liên hệ, toàn bộ hành trình đều hướng đến sự thuận tiện và dễ hiểu.",
  },
];

const purchaseFlow = [
  {
    step: "01",
    title: "Chia sẻ nhu cầu sử dụng",
    text: "Quý khách cho biết thiết bị đang dùng, thời gian dự kiến sử dụng, khu vực sinh sống và ưu tiên về tốc độ hoặc độ ổn định.",
  },
  {
    step: "02",
    title: "Nhận gợi ý phù hợp",
    text: "Đội ngũ đối chiếu giữa SIM vật lý, eSIM, Pocket WiFi, Home WiFi và Hikari để chọn ra hướng nên cân nhắc trước tiên.",
  },
  {
    step: "03",
    title: "So sánh và làm rõ lựa chọn",
    text: "Quý khách được giải thích rõ sự khác nhau, lợi ích và nhóm nhu cầu phù hợp của từng phương án.",
  },
  {
    step: "04",
    title: "Liên hệ và hoàn tất tư vấn",
    text: "Khi đã có hướng rõ ràng, việc trao đổi tiếp theo sẽ nhanh gọn, tự tin và nhẹ nhàng hơn.",
  },
];

const testimonials = [
  {
    name: "Yuki Tanaka",
    role: "Khách hàng tại Tokyo",
    quote:
      "Tôi cần internet tại nhà trong thời gian ngắn. Cách giải thích giữa Home WiFi và Hikari rất dễ hiểu nên tôi quyết định nhanh hơn nhiều.",
  },
  {
    name: "Mai Lan",
    role: "Khách hàng tại Osaka",
    quote:
      "Tôi xem xong là biết eSIM phù hợp hơn với thiết bị của mình. Mọi thông tin đều được trình bày rõ ràng và không bị rối.",
  },
  {
    name: "Huy Nguyễn",
    role: "Khách hàng tại Saitama",
    quote:
      "Tôi thích nhất là cảm giác đáng tin và cách viết dễ hiểu. Gia đình tôi yên tâm hơn nhiều khi chọn dịch vụ internet tại Nhật.",
  },
];

const ctaFaqs = [supportFaqs[0], supportFaqs[1], supportFaqs[4]];

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden text-white min-h-[760px] lg:min-h-[820px]">
        <CosmicHeroBackground />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col items-center justify-center px-4 pb-24 pt-24 text-center md:px-8 lg:min-h-[820px] lg:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm text-[#ffe0cc] shadow-[0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Global Internet 5G · Kết nối viễn thông tại Nhật
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[1.03] md:text-7xl lg:text-[5.4rem]">
            Kết nối internet tại Nhật theo cách
            <span className="bg-[linear-gradient(135deg,#ffd39f,#ffb369,#fff0da)] bg-clip-text text-transparent"> ấm áp, rõ ràng </span>
            và hiện đại hơn.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/84 md:text-xl">
            Global Internet 5G mang đến giải pháp SIM vật lý, eSIM, Pocket WiFi, Home WiFi và Hikari với cách tư vấn lịch sự, dễ hiểu và phù hợp cho từng nhu cầu sử dụng thực tế tại Nhật.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f28b58)] px-7 py-4 font-semibold text-[#2b1623] shadow-[0_14px_40px_rgba(255,138,77,0.35)] transition hover:-translate-y-0.5"
            >
              Nhận tư vấn ngay
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/16"
            >
              Xem sản phẩm
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-4xl gap-4 md:grid-cols-3">
            {[
              "Tư vấn theo nhu cầu sử dụng thực tế",
              "Nhiều lựa chọn SIM, WiFi và internet tại nhà",
              "Giới thiệu dễ hiểu, lịch sự và rõ ràng",
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-white/12 bg-white/8 px-5 py-4 text-sm font-medium text-[#fff1e5] shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#170914] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,162,92,0.08),transparent_18%),radial-gradient(circle_at_84%_20%,rgba(255,96,76,0.08),transparent_18%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="NEWS"
            title="Tin tức và cập nhật mới"
            desc="Những nội dung ngắn gọn giúp Quý khách theo dõi thay đổi, ưu đãi và kinh nghiệm chọn internet tại Nhật dễ dàng hơn."
            dark
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_20px_60px_rgba(24,8,18,0.28)] backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14 text-[#ffd7c0]">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#fff2e8]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1b0d1a] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,174,100,0.12),transparent_18%),radial-gradient(circle_at_84%_10%,rgba(205,81,119,0.14),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Sản phẩm"
            title="Danh mục sản phẩm chính"
            desc="Mỗi nhóm dịch vụ được giới thiệu ngắn gọn để Quý khách nắm nhanh lựa chọn nào nên xem trước."
            dark
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.05))] p-5 shadow-[0_18px_40px_rgba(22,8,17,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/35"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd5be]">{product.badge}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[#fff2e8]">{product.title}</h3>
                <p className="mt-3 line-clamp-4 leading-7 text-white/72">{product.summary}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ffcfab] transition group-hover:translate-x-1">
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee6] text-[#2b1623]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Tại sao chọn chúng tôi"
            title="Lý do nhiều khách hàng yêu thích cách hỗ trợ của Global Internet 5G"
            desc="Chúng tôi ưu tiên cách trình bày dễ hiểu, thái độ lịch sự và gợi ý sát nhu cầu để Quý khách yên tâm hơn khi lựa chọn."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[30px] border border-[#eed3c2] bg-white/90 p-7 shadow-[0_22px_45px_rgba(92,43,30,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e4]">
                    <Icon className="h-5 w-5 text-[#b46f55]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#2b1623]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#6f4f57]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#180b17] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%),radial-gradient(circle_at_30%_0%,rgba(255,155,88,0.12),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(191,74,124,0.12),transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Flow mua hàng"
            title="Quy trình tư vấn và lựa chọn dịch vụ"
            desc="Từ lúc bắt đầu tìm hiểu đến khi gửi yêu cầu liên hệ, mọi bước được giữ ngắn gọn để Quý khách dễ theo dõi và dễ quyết định hơn."
            dark
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {purchaseFlow.map((item) => (
              <div key={item.step} className="rounded-[30px] border border-white/10 bg-white/[0.07] p-7 shadow-[0_22px_50px_rgba(22,8,17,0.26)] backdrop-blur-xl">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd5be]">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[#fff2e8]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#120913] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%),radial-gradient(circle_at_78%_78%,rgba(255,166,105,0.12),transparent_20%),radial-gradient(circle_at_18%_12%,rgba(215,91,128,0.10),transparent_18%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Đánh giá khách hàng"
            title="Những chia sẻ thực tế sau khi được tư vấn"
            desc="Mỗi phản hồi là một ví dụ về việc lựa chọn đúng giải pháp internet giúp quá trình bắt đầu cuộc sống tại Nhật trở nên nhẹ nhàng hơn."
            dark
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:col-span-1">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-[30px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_55px_rgba(21,7,16,0.28)] backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] text-[#2b1623] font-semibold">
                      {item.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[#fff2e8]">{item.name}</div>
                      <div className="text-sm text-white/58">{item.role}</div>
                    </div>
                  </div>
                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#ffd7c0]">
                    <Quote className="h-4 w-4" />
                  </div>
                  <p className="mt-4 leading-7 text-white/74">“{item.quote}”</p>
                </article>
              ))}
            </div>
            <div className="min-h-[420px] rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,228,211,0.05))] p-5 shadow-[0_24px_70px_rgba(24,8,18,0.35)] backdrop-blur-2xl">
              <div className="h-full rounded-[28px] border border-white/10 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(180deg,rgba(24,8,18,0.18),rgba(24,8,18,0.50)), url('/cosmic-panel-v7.png')" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee6] text-[#2b1623]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Câu hỏi thường gặp"
            title="Những điều Quý khách thường muốn biết trước khi liên hệ"
            desc="Một vài câu hỏi phổ biến dưới đây sẽ giúp Quý khách hình dung nhanh hơn trước khi gửi yêu cầu tư vấn."
            center
          />
          <div className="mt-10">
            <FaqList items={ctaFaqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#140914] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,164,92,0.12),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(210,82,121,0.12),transparent_18%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <div className="rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,228,211,0.05))] px-8 py-10 shadow-[0_28px_80px_rgba(22,8,16,0.32)] backdrop-blur-2xl md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-[#ffd7c0]">Liên hệ tư vấn</div>
                <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl text-[#fff2e8]">
                  Quý khách cần một gợi ý phù hợp, rõ ràng và dễ bắt đầu tại Nhật?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
                  Hãy chia sẻ nhu cầu sử dụng để Global Internet 5G hỗ trợ lựa chọn dịch vụ phù hợp hơn, từ cá nhân mới sang Nhật đến gia đình cần internet ổn định lâu dài.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f28b58)] px-7 py-4 font-semibold text-[#2b1623] shadow-[0_14px_40px_rgba(255,138,77,0.35)] transition hover:-translate-y-0.5"
                >
                  Nhận tư vấn ngay
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/san-pham"
                  className="rounded-full border border-white/20 bg-white/8 px-7 py-4 font-semibold text-white transition hover:bg-white/14"
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
