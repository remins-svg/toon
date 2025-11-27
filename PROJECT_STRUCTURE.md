# 프로젝트 구조 제안

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui (선택사항)
- **폼 관리**: React Hook Form + Zod
- **상태 관리**: Zustand 또는 React Context
- **이미지 처리**: Canvas API 또는 Fabric.js
- **AI 배경 생성**: (추후 통합 예정)

## 폴더 구조

```
toon/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # 인증 관련 라우트 그룹
│   │   ├── login/
│   │   └── register/
│   ├── (customer)/               # 고객용 라우트 그룹
│   │   ├── request/              # 캐릭터 제작 의뢰
│   │   │   ├── new/              # 새 의뢰 작성
│   │   │   └── [id]/             # 의뢰 상세/피드백
│   │   ├── content/              # 콘텐츠 제작 툴
│   │   │   ├── editor/           # 에디터 페이지
│   │   │   └── templates/        # 템플릿 라이브러리
│   │   └── my-characters/        # 내 캐릭터 목록
│   ├── (admin)/                  # 운영자용 라우트 그룹
│   │   ├── dashboard/            # 대시보드
│   │   ├── requests/             # 의뢰 관리
│   │   ├── builder/              # 캐릭터 빌더
│   │   └── characters/           # 캐릭터 관리
│   ├── api/                      # API 라우트
│   │   ├── requests/             # 의뢰 관련 API
│   │   ├── characters/           # 캐릭터 관련 API
│   │   ├── content/              # 콘텐츠 관련 API
│   │   └── ai/                   # AI 배경 생성 API
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 홈페이지
├── components/                   # 재사용 가능한 컴포넌트
│   ├── ui/                       # 기본 UI 컴포넌트
│   ├── forms/                    # 폼 관련 컴포넌트
│   ├── character/                # 캐릭터 관련 컴포넌트
│   ├── editor/                   # 에디터 관련 컴포넌트
│   └── layout/                   # 레이아웃 컴포넌트
├── lib/                          # 유틸리티 및 라이브러리
│   ├── utils/                    # 유틸리티 함수
│   ├── hooks/                    # 커스텀 훅
│   ├── stores/                   # 상태 관리 스토어
│   ├── validations/              # Zod 스키마
│   └── constants/                # 상수 정의
├── types/                        # TypeScript 타입 정의
│   ├── character.ts
│   ├── request.ts
│   ├── content.ts
│   └── user.ts
├── public/                       # 정적 파일
│   ├── images/
│   └── templates/
├── styles/                       # 전역 스타일
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 필요한 라이브러리 목록

### 필수 라이브러리

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### 폼 관리

```json
{
  "react-hook-form": "^7.49.0",
  "zod": "^3.22.0",
  "@hookform/resolvers": "^3.3.0"
}
```

### UI 컴포넌트 (선택사항)

```json
{
  "@radix-ui/react-dialog": "^1.0.0",
  "@radix-ui/react-dropdown-menu": "^2.0.0",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-tabs": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.2.0"
}
```

### 이미지/캔버스 처리

```json
{
  "fabric": "^5.3.0",
  "@types/fabric": "^5.3.0"
}
```

### 상태 관리

```json
{
  "zustand": "^4.4.0"
}
```

### 파일 업로드/다운로드

```json
{
  "file-saver": "^2.0.5",
  "@types/file-saver": "^2.0.5"
}
```

### 날짜/시간 처리

```json
{
  "date-fns": "^3.0.0"
}
```

### 아이콘

```json
{
  "lucide-react": "^0.300.0"
}
```

## 주요 기능별 폴더 설명

### 1. 캐릭터 제작 의뢰 시스템
- `app/(customer)/request/`: 고객이 의뢰를 작성하고 피드백하는 페이지
- `app/(admin)/requests/`: 운영자가 의뢰를 관리하는 페이지
- `components/forms/character-request-form.tsx`: 설문 폼 컴포넌트

### 2. 콘텐츠 제작 툴
- `app/(customer)/content/editor/`: 메인 에디터 페이지
- `components/editor/`: 에디터 관련 컴포넌트들
- `lib/utils/canvas.ts`: 캔버스 유틸리티 함수

### 3. 운영자 캐릭터 빌더
- `app/(admin)/builder/`: 운영자 전용 빌더 페이지
- `components/character/builder/`: 빌더 관련 컴포넌트

