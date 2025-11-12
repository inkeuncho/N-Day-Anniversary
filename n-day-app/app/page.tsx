import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            N-Day
          </h1>
          <p className="text-xl text-gray-600">
            바쁜 일상 속, 중요한 기념일을 절대 잊지 마세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-lg font-semibold mb-2">간편 등록</h3>
            <p className="text-gray-600">
              기념일을 빠르게 등록하고 캘린더와 연동하세요
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🔔</div>
            <h3 className="text-lg font-semibold mb-2">D-7 알림</h3>
            <p className="text-gray-600">
              기념일 7일 전 자동으로 알려드립니다
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🎁</div>
            <h3 className="text-lg font-semibold mb-2">원클릭 선물</h3>
            <p className="text-gray-600">
              AI 추천 선물을 클릭 한 번으로 주문하세요
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/anniversaries"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            시작하기
          </Link>
        </div>
      </div>
    </main>
  );
}
