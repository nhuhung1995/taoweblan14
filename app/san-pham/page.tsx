"use client";

import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product Hub"
        title="Danh mục sản phẩm được chia rõ ràng, dễ theo dõi"
        desc="Global Internet 5G phân tách từng nhóm sản phẩm thành những tuyến xem riêng để Quý khách dễ theo dõi, dễ so sánh và dễ liên hệ hơn."
        panelTitle="Danh mục sản phẩm"
        panelBullets={["SIM vật lý", "eSIM", "Pocket WiFi", "Home WiFi", "Hikari"]}
        icon="global"
      />
      <section className="bg-[#fff8f4]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Catalog" title="Toàn bộ nhóm dịch vụ" desc="Trang tổng hợp này giúp Quý khách nhìn nhanh toàn cảnh, sau đó đi tiếp tới từng trang chi tiết theo nhóm dịch vụ phù hợp nhất." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} title={product.title} summary={product.summary} href={product.href} icon={product.icon} bullets={product.bullets} badge={product.badge} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}