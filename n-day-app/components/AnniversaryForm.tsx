"use client";

import { useState } from "react";

export default function AnniversaryForm() {
  const [formData, setFormData] = useState({
    recipientName: "",
    relationship: "",
    anniversaryType: "",
    date: "",
    isLunar: false,
    notifyDays: 7,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출
    console.log("Form submitted:", formData);
    alert("기념일이 등록되었습니다!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          대상자 이름
        </label>
        <input
          type="text"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          required
          placeholder="예: 어머님, 아버님"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          관계
        </label>
        <select
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">선택하세요</option>
          <option value="parent">부모님</option>
          <option value="parent-in-law">시부모님/장인장모님</option>
          <option value="spouse">배우자</option>
          <option value="child">자녀</option>
          <option value="teacher">스승</option>
          <option value="other">기타</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          기념일 유형
        </label>
        <select
          name="anniversaryType"
          value={formData.anniversaryType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">선택하세요</option>
          <option value="birthday">생일</option>
          <option value="wedding">결혼기념일</option>
          <option value="memorial">제사/추모일</option>
          <option value="teachers-day">스승의 날</option>
          <option value="parents-day">어버이날</option>
          <option value="custom">기타</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          날짜
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="isLunar"
          checked={formData.isLunar}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="ml-2 text-sm text-gray-700">
          음력 날짜입니다
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          알림 시점
        </label>
        <select
          name="notifyDays"
          value={formData.notifyDays}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1">D-1 (하루 전)</option>
          <option value="3">D-3 (3일 전)</option>
          <option value="7">D-7 (일주일 전)</option>
          <option value="14">D-14 (2주 전)</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          등록하기
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          취소
        </button>
      </div>
    </form>
  );
}
