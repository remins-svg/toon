import { FileText, Palette, MessageSquare, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "설문 작성",
    description: "브랜드 콘셉트, 캐릭터 성격, 원하는 스타일 등을 상세히 입력해주세요.",
  },
  {
    number: "02",
    icon: Palette,
    title: "전문가 제작",
    description: "전문 운영자가 요청사항을 반영해 최고의 퀄리티로 캐릭터를 제작합니다.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "피드백 및 수정",
    description: "시안을 확인하고 원하는 대로 피드백을 주시면 반영해드립니다.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "최종 확정",
    description: "만족하시는 시안을 선택하시면 최종 캐릭터로 확정됩니다.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "콘텐츠 제작",
    description: "확정된 캐릭터로 인스타툰 콘텐츠를 쉽고 빠르게 제작하세요.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            제작 프로세스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            간단한 5단계로 완성되는 당신만의 캐릭터
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-blue-600">{step.number}</span>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gray-300 mx-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

