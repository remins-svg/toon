# 캐릭터 아틀리에 (Character Atelier)

1인 브랜드 특화 캐릭터/인스타툰 제작 대행 서비스

## 프로젝트 개요

전문 운영자가 타겟 고객의 요청에 따라 맞춤형 브랜드 캐릭터를 직접 제작해주고, 이후 고객이 해당 캐릭터를 활용해 인스타툰 콘텐츠를 셀프 제작할 수 있는 하이브리드형 서비스입니다.

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **폼 관리**: React Hook Form + Zod
- **상태 관리**: Zustand
- **패키지 관리**: pnpm

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
pnpm run build
```

### 4. 프로덕션 실행

```bash
pnpm start
```

## 프로젝트 구조

자세한 프로젝트 구조는 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)를 참고하세요.

## 개발 우선순위

자세한 개발 우선순위와 일정은 [DEVELOPMENT_PRIORITY.md](./DEVELOPMENT_PRIORITY.md)를 참고하세요.

## 주요 기능

### ✅ 완료된 기능

- [x] 캐릭터 콘셉트 설문 시스템
  - 브랜드 정보 입력
  - 캐릭터 성격 및 설명 입력
  - 스타일 예시 이미지 업로드
  - 폼 유효성 검사
  - API 연동

### 🚧 개발 중인 기능

- [ ] 피드백 및 확정 기능
- [ ] 확정 캐릭터 기반 콘텐츠 제작 툴

## PRD 문서

프로젝트 요구사항은 [PRD.md](./PRD.md)를 참고하세요.

