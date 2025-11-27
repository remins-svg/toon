"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characterRequestSchema, type CharacterRequestFormData } from "@/lib/validations/character-request";
import { Upload, X, Loader2 } from "lucide-react";

export default function CharacterRequestForm() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CharacterRequestFormData>({
    resolver: zodResolver(characterRequestSchema),
    defaultValues: {
      styleImages: [],
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = [...uploadedImages, ...files].slice(0, 5); // 최대 5개
    setUploadedImages(newImages);
    setValue("styleImages", newImages, { shouldValidate: true });
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    setValue("styleImages", newImages, { shouldValidate: true });
  };

  const onSubmit = async (data: CharacterRequestFormData) => {
    setIsSubmitting(true);
    try {
      // 이미지 업로드 처리 및 API 호출
      const formData = new FormData();
      
      // 텍스트 데이터 추가
      formData.append("brandName", data.brandName);
      formData.append("brandConcept", data.brandConcept);
      formData.append("targetAudience", data.targetAudience);
      formData.append("characterPersonality", data.characterPersonality);
      formData.append("characterDescription", data.characterDescription);
      formData.append("preferredStyle", data.preferredStyle);
      if (data.additionalNotes) {
        formData.append("additionalNotes", data.additionalNotes);
      }
      
      // 이미지 파일 추가
      data.styleImages.forEach((file) => {
        formData.append("images", file);
      });

      // API 호출
      const response = await fetch("/api/requests", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "제출 중 오류가 발생했습니다.");
      }

      // 성공 시 성공 페이지로 이동
      window.location.href = "/request/success";
    } catch (error) {
      console.error("제출 오류:", error);
      alert(error instanceof Error ? error.message : "제출 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">캐릭터 제작 의뢰서</h2>
        <p className="text-gray-600">브랜드에 맞는 캐릭터를 제작하기 위해 필요한 정보를 입력해주세요.</p>
      </div>

      {/* 브랜드명 */}
      <div>
        <label htmlFor="brandName" className="block text-sm font-medium mb-2">
          브랜드명 <span className="text-red-500">*</span>
        </label>
        <input
          id="brandName"
          type="text"
          {...register("brandName")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="예: 달콤한 디저트 카페"
        />
        {errors.brandName && (
          <p className="mt-1 text-sm text-red-500">{errors.brandName.message}</p>
        )}
      </div>

      {/* 브랜드 콘셉트 */}
      <div>
        <label htmlFor="brandConcept" className="block text-sm font-medium mb-2">
          브랜드 콘셉트 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="brandConcept"
          {...register("brandConcept")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="브랜드의 핵심 가치, 메시지, 컬러 등을 설명해주세요."
        />
        {errors.brandConcept && (
          <p className="mt-1 text-sm text-red-500">{errors.brandConcept.message}</p>
        )}
      </div>

      {/* 타겟 고객 */}
      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium mb-2">
          타겟 고객 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="targetAudience"
          {...register("targetAudience")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="예: 20-30대 여성, 디저트를 좋아하는 사람들, SNS 활동이 활발한 사람들"
        />
        {errors.targetAudience && (
          <p className="mt-1 text-sm text-red-500">{errors.targetAudience.message}</p>
        )}
      </div>

      {/* 캐릭터 성격 */}
      <div>
        <label htmlFor="characterPersonality" className="block text-sm font-medium mb-2">
          캐릭터 성격 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="characterPersonality"
          {...register("characterPersonality")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="예: 밝고 친근하며, 따뜻한 느낌의 캐릭터"
        />
        {errors.characterPersonality && (
          <p className="mt-1 text-sm text-red-500">{errors.characterPersonality.message}</p>
        )}
      </div>

      {/* 캐릭터 설명 */}
      <div>
        <label htmlFor="characterDescription" className="block text-sm font-medium mb-2">
          캐릭터 설명 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="characterDescription"
          {...register("characterDescription")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="캐릭터의 외형, 특징, 역할 등을 자세히 설명해주세요."
        />
        {errors.characterDescription && (
          <p className="mt-1 text-sm text-red-500">{errors.characterDescription.message}</p>
        )}
      </div>

      {/* 원하는 스타일 */}
      <div>
        <label htmlFor="preferredStyle" className="block text-sm font-medium mb-2">
          원하는 스타일 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="preferredStyle"
          {...register("preferredStyle")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="예: 깔끔하고 미니멀한 라인, 파스텔 톤의 색감, 귀여운 느낌"
        />
        {errors.preferredStyle && (
          <p className="mt-1 text-sm text-red-500">{errors.preferredStyle.message}</p>
        )}
      </div>

      {/* 스타일 예시 이미지 업로드 */}
      <div>
        <label className="block text-sm font-medium mb-2">
          스타일 예시 이미지 <span className="text-red-500">*</span>
          <span className="text-gray-500 text-xs ml-2">(최대 5개, 각 5MB 이하)</span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <input
            type="file"
            id="styleImages"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            disabled={uploadedImages.length >= 5}
          />
          <label
            htmlFor="styleImages"
            className={`flex flex-col items-center justify-center cursor-pointer ${
              uploadedImages.length >= 5 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">
              {uploadedImages.length >= 5
                ? "최대 5개까지 업로드 가능합니다"
                : "클릭하여 이미지를 업로드하세요"}
            </span>
          </label>
        </div>
        
        {/* 업로드된 이미지 미리보기 */}
        {uploadedImages.length > 0 && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`스타일 예시 ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="mt-1 text-xs text-gray-500 truncate">{file.name}</p>
              </div>
            ))}
          </div>
        )}
        
        {errors.styleImages && (
          <p className="mt-1 text-sm text-red-500">{errors.styleImages.message}</p>
        )}
      </div>

      {/* 추가 요청사항 */}
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium mb-2">
          추가 요청사항
        </label>
        <textarea
          id="additionalNotes"
          {...register("additionalNotes")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="기타 요청사항이 있으시면 입력해주세요."
        />
        {errors.additionalNotes && (
          <p className="mt-1 text-sm text-red-500">{errors.additionalNotes.message}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          취소
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              제출 중...
            </>
          ) : (
            "의뢰 제출하기"
          )}
        </button>
      </div>
    </form>
  );
}

