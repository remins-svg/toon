import Link from "next/link";

export default function RequestSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">의뢰가 성공적으로 제출되었습니다!</h1>
          <p className="text-gray-600">
            전문가가 검토한 후 연락드리겠습니다.
            <br />
            보통 1-2일 내에 연락드립니다.
          </p>
        </div>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/request/new"
            className="block w-full px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            추가 의뢰하기
          </Link>
        </div>
      </div>
    </div>
  );
}

