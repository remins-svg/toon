import { NextRequest, NextResponse } from "next/server";

/**
 * 캐릭터 제작 의뢰 API 엔드포인트
 * POST /api/requests
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // 폼 데이터 추출
    const requestData = {
      brandName: formData.get("brandName"),
      brandConcept: formData.get("brandConcept"),
      targetAudience: formData.get("targetAudience"),
      characterPersonality: formData.get("characterPersonality"),
      characterDescription: formData.get("characterDescription"),
      preferredStyle: formData.get("preferredStyle"),
      additionalNotes: formData.get("additionalNotes"),
    };

    // 이미지 파일 처리
    const images: File[] = [];
    formData.getAll("images").forEach((file) => {
      if (file instanceof File) {
        images.push(file);
      }
    });

    // TODO: 실제 데이터베이스 저장 로직 구현
    // 현재는 임시로 콘솔에 출력
    console.log("의뢰 데이터:", requestData);
    console.log("이미지 개수:", images.length);

    // TODO: 이미지 파일을 스토리지에 업로드하고 URL 저장

    return NextResponse.json(
      {
        success: true,
        message: "의뢰가 성공적으로 제출되었습니다.",
        requestId: `req_${Date.now()}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("의뢰 제출 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "의뢰 제출 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}

/**
 * 캐릭터 제작 의뢰 목록 조회
 * GET /api/requests
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: 실제 데이터베이스에서 의뢰 목록 조회
    return NextResponse.json({
      success: true,
      data: [],
    });
  } catch (error) {
    console.error("의뢰 목록 조회 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "의뢰 목록 조회 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}

