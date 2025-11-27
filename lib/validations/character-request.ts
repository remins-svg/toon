import { z } from "zod";

/**
 * 캐릭터 제작 의뢰 폼 유효성 검사 스키마
 */
export const characterRequestSchema = z.object({
  brandName: z
    .string()
    .min(1, "브랜드명을 입력해주세요")
    .max(50, "브랜드명은 50자 이하로 입력해주세요"),
  
  brandConcept: z
    .string()
    .min(10, "브랜드 콘셉트를 10자 이상 입력해주세요")
    .max(500, "브랜드 콘셉트는 500자 이하로 입력해주세요"),
  
  targetAudience: z
    .string()
    .min(10, "타겟 고객을 10자 이상 입력해주세요")
    .max(300, "타겟 고객 설명은 300자 이하로 입력해주세요"),
  
  characterPersonality: z
    .string()
    .min(10, "캐릭터 성격을 10자 이상 입력해주세요")
    .max(300, "캐릭터 성격 설명은 300자 이하로 입력해주세요"),
  
  characterDescription: z
    .string()
    .min(10, "캐릭터 설명을 10자 이상 입력해주세요")
    .max(500, "캐릭터 설명은 500자 이하로 입력해주세요"),
  
  preferredStyle: z
    .string()
    .min(10, "원하는 스타일을 10자 이상 입력해주세요")
    .max(300, "스타일 설명은 300자 이하로 입력해주세요"),
  
  styleImages: z
    .array(z.instanceof(File))
    .min(1, "최소 1개 이상의 스타일 예시 이미지를 업로드해주세요")
    .max(5, "최대 5개까지 업로드 가능합니다")
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      "각 이미지 파일 크기는 5MB 이하여야 합니다"
    )
    .refine(
      (files) => files.every((file) => file.type.startsWith("image/")),
      "이미지 파일만 업로드 가능합니다"
    ),
  
  additionalNotes: z
    .string()
    .max(1000, "추가 요청사항은 1000자 이하로 입력해주세요")
    .optional(),
});

export type CharacterRequestFormData = z.infer<typeof characterRequestSchema>;

