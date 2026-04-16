"use client";

import { ShieldCheck, Sparkles, Star, UserRoundCheck, type LucideIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import type { ValuePillar, ValuePillarIcon } from "@/data/valuePillars";

type Props = {
  items: ValuePillar[];
};

const iconByKey: Record<ValuePillarIcon, LucideIcon> = {
  advisor: UserRoundCheck,
  clarity: ShieldCheck,
  warmth: Sparkles,
  support: Star,
};

export default function ValuePillarsSection({ items }: Props) {
  return (
    <section className="bg-[#f7eee6] text-[#2b1623]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Tại sao chọn chúng tôi"
          title="Lý do nhiều khách hàng yêu thích cách hỗ trợ của Global Internet 5G"
          desc="Chúng tôi ưu tiên cách trình bày dễ hiểu, thái độ lịch sự và gợi ý sát nhu cầu để Quý khách yên tâm hơn khi lựa chọn."
          center
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = iconByKey[item.icon];

            return (
              <li key={item.title} className="rounded-[30px] border border-[#eed3c2] bg-white/90 p-7 shadow-[0_22px_45px_rgba(92,43,30,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0e4]">
                  <Icon className="h-5 w-5 text-[#b46f55]" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#2b1623]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#6f4f57]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
