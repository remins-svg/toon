import { Shield, Clock, DollarSign, Palette, Smartphone, Download } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "퀄리티 보장",
    description: "전문가가 직접 제작하는 고품질 캐릭터로 브랜드 이미지를 높이세요.",
  },
  {
    icon: Clock,
    title: "시간 절약",
    description: "빌더 학습 시간 없이 핵심 비즈니스와 콘텐츠 기획에만 집중하세요.",
  },
  {
    icon: DollarSign,
    title: "합리적인 비용",
    description: "기존 외주 대비 저렴한 제작 대행료로 고품질 캐릭터를 확보하세요.",
  },
  {
    icon: Palette,
    title: "맞춤형 디자인",
    description: "브랜드 콘셉트에 완벽히 맞는 오직 당신만의 캐릭터를 제작합니다.",
  },
  {
    icon: Smartphone,
    title: "쉬운 콘텐츠 제작",
    description: "확정된 캐릭터로 인스타툰 콘텐츠를 쉽고 빠르게 만들 수 있습니다.",
  },
  {
    icon: Download,
    title: "고해상도 다운로드",
    description: "워터마크 없는 고해상도 이미지로 SNS에 바로 업로드하세요.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            왜 캐릭터 아틀리에인가요?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            1인 사업자를 위한 전문적인 캐릭터 제작 서비스
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

