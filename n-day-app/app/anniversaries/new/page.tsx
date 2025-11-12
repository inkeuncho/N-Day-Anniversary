import AnniversaryForm from "@/components/AnniversaryForm";

export default function NewAnniversaryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            기념일 등록
          </h1>
          <p className="text-gray-600">
            소중한 기념일을 등록하고 알림을 받아보세요
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <AnniversaryForm />
        </div>
      </div>
    </main>
  );
}
