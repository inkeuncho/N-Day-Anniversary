"use client";

import { useState } from "react";
import Link from "next/link";

// Mock 주문 데이터
const mockOrders = [
  {
    id: "1",
    giftName: "프리미엄 카네이션 꽃바구니",
    anniversaryName: "어머님 생신",
    amount: 59000,
    status: "delivered",
    orderDate: "2025-04-01",
    deliveryDate: "2025-04-03",
    recipientName: "어머님",
    address: "서울시 강남구 테헤란로 123",
  },
  {
    id: "2",
    giftName: "6년근 홍삼 정 스틱",
    anniversaryName: "아버님 생신",
    amount: 89000,
    status: "pending",
    orderDate: "2025-05-10",
    deliveryDate: null,
    recipientName: "아버님",
    address: "서울시 강남구 테헤란로 123",
  },
];

const statusText: Record<string, { label: string; color: string }> = {
  pending: { label: "결제 대기", color: "bg-yellow-100 text-yellow-800" },
  paid: { label: "결제 완료", color: "bg-blue-100 text-blue-800" },
  delivered: { label: "배송 완료", color: "bg-green-100 text-green-800" },
  cancelled: { label: "취소됨", color: "bg-red-100 text-red-800" },
};

export default function OrdersPage() {
  const [orders] = useState(mockOrders);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            주문 내역
          </h1>
          <p className="text-gray-600">
            총 {orders.length}건의 주문이 있습니다
          </p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {order.giftName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    주문번호: {order.id} | {order.orderDate}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    statusText[order.status].color
                  }`}
                >
                  {statusText[order.status].label}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">기념일</p>
                  <p className="text-gray-900">{order.anniversaryName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">받는 분</p>
                  <p className="text-gray-900">{order.recipientName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">배송지</p>
                  <p className="text-gray-900">{order.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">배송 예정일</p>
                  <p className="text-gray-900">
                    {order.deliveryDate || "준비 중"}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  {order.amount.toLocaleString()}원
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                    상세 보기
                  </button>
                  {order.status === "pending" && (
                    <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition">
                      취소하기
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">아직 주문 내역이 없습니다</p>
            <Link
              href="/gifts"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              선물 둘러보기
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
