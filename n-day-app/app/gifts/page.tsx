"use client";

import { useState } from "react";
import Link from "next/link";

// Mock 선물 데이터
const mockGifts = [
  {
    id: "1",
    name: "프리미엄 카네이션 꽃바구니",
    description: "어버이날 베스트셀러, 고급 카네이션과 장미 혼합",
    price: 59000,
    imageUrl: "https://via.placeholder.com/300x300?text=Flower+Basket",
    category: "flower",
    tags: ["어버이날", "생일", "감사"],
    popularity: 95,
  },
  {
    id: "2",
    name: "6년근 홍삼 정 스틱",
    description: "면역력 증진에 좋은 고급 홍삼 제품",
    price: 89000,
    imageUrl: "https://via.placeholder.com/300x300?text=Ginseng",
    category: "health",
    tags: ["건강", "어버이날", "생신"],
    popularity: 92,
  },
  {
    id: "3",
    name: "핑크톤 계절 꽃다발",
    description: "여성 어르신들이 좋아하는 핑크 컬러 꽃다발",
    price: 75000,
    imageUrl: "https://via.placeholder.com/300x300?text=Pink+Bouquet",
    category: "flower",
    tags: ["생일", "어머니", "우아함"],
    popularity: 88,
  },
  {
    id: "4",
    name: "프리미엄 견과류 선물세트",
    description: "영양가 높은 견과류 모음, 건강한 간식",
    price: 65000,
    imageUrl: "https://via.placeholder.com/300x300?text=Nuts+Set",
    category: "food",
    tags: ["건강", "간식", "실용적"],
    popularity: 85,
  },
  {
    id: "5",
    name: "명품 수제 케이크",
    description: "생일 축하용 맞춤 케이크, 당일 제작",
    price: 55000,
    imageUrl: "https://via.placeholder.com/300x300?text=Cake",
    category: "food",
    tags: ["생일", "축하", "달콤함"],
    popularity: 90,
  },
];

export default function GiftsPage() {
  const [gifts] = useState(mockGifts);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGifts =
    selectedCategory === "all"
      ? gifts
      : gifts.filter((gift) => gift.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            추천 선물
          </h1>
          <p className="text-gray-600">
            가장 인기 있는 선물을 확인해보세요
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setSelectedCategory("flower")}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              selectedCategory === "flower"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🌸 꽃/화환
          </button>
          <button
            onClick={() => setSelectedCategory("health")}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              selectedCategory === "health"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            💊 건강식품
          </button>
          <button
            onClick={() => setSelectedCategory("food")}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              selectedCategory === "food"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🍰 식품
          </button>
        </div>

        {/* 선물 그리드 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={gift.imageUrl}
                alt={gift.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {gift.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    인기 {gift.popularity}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {gift.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {gift.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {gift.price.toLocaleString()}원
                  </span>
                  <Link
                    href={`/gifts/${gift.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    주문하기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
