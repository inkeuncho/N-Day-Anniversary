"use client";

import Link from "next/link";
import { useState } from "react";

// Mock 데이터 (나중에 API로 교체)
const mockAnniversaries = [
  {
    id: "1",
    recipientName: "어머님",
    relationship: "부모님",
    anniversaryType: "생일",
    date: "2025-05-15",
    isLunar: true,
    daysUntil: 45,
  },
  {
    id: "2",
    recipientName: "아내",
    relationship: "배우자",
    anniversaryType: "결혼기념일",
    date: "2025-06-20",
    isLunar: false,
    daysUntil: 81,
  },
];

export default function AnniversariesPage() {
  const [anniversaries] = useState(mockAnniversaries);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              나의 기념일
            </h1>
            <p className="text-gray-600">
              등록된 기념일 {anniversaries.length}개
            </p>
          </div>
          <Link
            href="/anniversaries/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + 새 기념일 등록
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {anniversaries.map((anniversary) => (
            <div
              key={anniversary.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {anniversary.recipientName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {anniversary.relationship}
                  </p>
                </div>
                {anniversary.daysUntil <= 7 && (
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    D-{anniversary.daysUntil}
                  </span>
                )}
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">유형:</span>{" "}
                  {anniversary.anniversaryType}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">날짜:</span>{" "}
                  {anniversary.date}
                  {anniversary.isLunar && (
                    <span className="text-xs text-gray-500 ml-1">(음력)</span>
                  )}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">D-Day:</span>{" "}
                  {anniversary.daysUntil}일 남음
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded font-medium hover:bg-blue-100 transition">
                  선물 보기
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded font-medium hover:bg-gray-100 transition">
                  수정
                </button>
              </div>
            </div>
          ))}
        </div>

        {anniversaries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              아직 등록된 기념일이 없습니다
            </p>
            <Link
              href="/anniversaries/new"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              첫 기념일 등록하기
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
