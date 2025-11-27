import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          지금 시작하세요
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          전문가가 만드는 고품질 캐릭터로 브랜드 이미지를 한 단계 업그레이드하세요.
          <br />
          간단한 설문만 작성하면 시작할 수 있습니다.
        </p>
        <Link
          href="/request/new"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
        >
          캐릭터 제작 의뢰하기
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

