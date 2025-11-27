"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          전문가가 만드는 고품질 캐릭터
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          오직 당신만의
          <br />
          <span className="text-blue-600">브랜드 캐릭터</span>를 만나보세요
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
          전문가의 손길로 완성된 고품질 캐릭터
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          초기 제작은 맡기고, 콘텐츠는 직접 쉽게 만드세요
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/request/new"
            className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-lg font-semibold"
          >
            캐릭터 제작 의뢰하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#features"
            className="px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 text-lg font-semibold"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            서비스 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}

