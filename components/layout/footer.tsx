import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">캐릭터 아틀리에</span>
            </Link>
            <p className="text-sm">
              전문가의 손길로 완성된 오직 당신만의 캐릭터를 만나보세요.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/request/new" className="hover:text-white transition-colors">
                  캐릭터 제작 의뢰
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  제작 프로세스
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">문의</h3>
            <p className="text-sm">
              서비스 관련 문의사항이 있으시면
              <br />
              언제든지 연락주세요.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2024 캐릭터 아틀리에. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

