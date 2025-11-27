/**
 * 캐릭터 제작 의뢰 관련 타입 정의
 */

export interface CharacterRequest {
  id?: string;
  // 브랜드 정보
  brandName: string;
  brandConcept: string;
  targetAudience: string;
  
  // 캐릭터 정보
  characterPersonality: string;
  characterDescription: string;
  
  // 스타일 정보
  preferredStyle: string;
  styleImages?: string[]; // 업로드된 이미지 URL 배열
  
  // 추가 정보
  additionalNotes?: string;
  
  // 상태
  status: "pending" | "in-progress" | "review" | "completed";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CharacterRequestFormData {
  brandName: string;
  brandConcept: string;
  targetAudience: string;
  characterPersonality: string;
  characterDescription: string;
  preferredStyle: string;
  styleImages: File[];
  additionalNotes?: string;
}

