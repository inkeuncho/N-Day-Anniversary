"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Mock 데이터 (나중에 API로 교체)
const mockGifts: Record<string, any> = {
  "1": {
    id: "1",
    name: "프리미엄 카네이션 꽃바구니",
    description: "어버이날 베스트셀러, 고급 카네이션과 장미 혼합",
    fullDescription:
      "최고급 카네이션과 장미를 사용한 프리미엄 꽃바구니입니다. 어버이날, 스승의 날, 생신 등 특별한 날을 더욱 빛내드립니다. 신선도를 최우선으로 생각하여 주문 당일 제작하여 배송합니다.",
    price: 59000,
    imageUrl: "https://via.placeholder.com/600x400?text=Flower+Basket",
    category: "flower",
    tags: ["어버이날", "생일", "감사"],
    popularity: 95,
  },
  "2": {
    id: "2",
    name: "6년근 홍삼 정 스틱",
    description: "면역력 증진에 좋은 고급 홍삼 제품",
    fullDescription:
      "6년근 고려 홍삼을 사용한 프리미엄 건강 식품입니다. 면역력 강화와 피로 회복에 도움을 줍니다. 휴대가 간편한 스틱 형태로 언제 어디서나 섭취 가능합니다.",
    price: 89000,
    imageUrl: "https://via.placeholder.com/600x400?text=Ginseng",
    category: "health",
    tags: ["건강", "어버이날", "생신"],
    popularity: 92,
  },
};

export default function GiftDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [gift, setGift] = useState<any>(null);
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    const giftId = params.id as string;
    const foundGift = mockGifts[giftId];
    if (foundGift) {
      setGift(foundGift);
    }
  }, [params.id]);

  const handleOneClickOrder = () => {
    setIsOrdering(true);
    // TODO: 실제 주문 API 호출
    setTimeout(() => {
      setIsOrdering(false);
      alert("주문이 완료되었습니다! 🎉");
      router.push("/orders");
    }, 1500);
  };

  if (!gift) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">선물을 찾을 수 없습니다.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/gifts"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          ← 선물 목록으로
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 이미지 */}
            <div>
              <img
                src={gift.imageUrl}
                alt={gift.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 상세 정보 */}
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                  인기 {gift.popularity}%
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {gift.name}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {gift.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {gift.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-600">가격</span>
                  <span className="text-3xl font-bold text-blue-600">
                    {gift.price.toLocaleString()}원
                  </span>
                </div>
              </div>

              {/* 배송 정보 (Mock) */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  📦 배송 정보
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 배송지: 서울시 강남구 (기본 주소)</p>
                  <p>• 배송 예정일: 주문일 기준 1-2일</p>
                  <p>• 결제 방법: 신한카드 ****-1234</p>
                </div>
              </div>

              {/* 주문 버튼 */}
              <button
                onClick={handleOneClickOrder}
                disabled={isOrdering}
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isOrdering ? "주문 처리 중..." : "🎁 원클릭 주문하기"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                * 사전 등록된 배송지와 결제 수단으로 즉시 주문됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
