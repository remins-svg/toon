import CharacterRequestForm from "@/components/forms/character-request-form";

export default function NewRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto">
        <CharacterRequestForm />
      </div>
    </div>
  );
}

