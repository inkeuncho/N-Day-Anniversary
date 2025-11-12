# N-Day - 기념일 자동 리마인더 웹앱

바쁜 3040세대를 위한 '잊지 않는' 기념일 관리 솔루션

## 📋 프로젝트 개요

N-Day는 중요한 기념일을 자동으로 알려주고, AI 맞춤 선물 추천 및 원클릭 주문을 통해 기념일 선물 구매 경험을 혁신하는 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Frontend**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: SQLite (개발) / PostgreSQL (프로덕션)
- **ORM**: Prisma
- **Auth**: NextAuth.js (예정)

## 🎯 MVP 핵심 기능 (Phase 1)

### ✅ 구현 완료
- **F-101**: 간편 기념일 등록 (날짜, 대상, 관계, 유형, 음력/양력)
- **F-301**: 기본 선물 추천 (Best 5 리스트)
- **F-302**: 원클릭 주문
- **Navigation**: 페이지 간 이동

### 🚧 진행 중
- **F-501**: 기본 계정 관리 (소셜 로그인)
- **F-201**: D-7 자동 알림 시스템

## 🛠 설치 및 실행

### 1. 의존성 설치
\`\`\`bash
npm install
\`\`\`

### 2. 환경 변수 설정
\`.env\` 파일이 이미 생성되어 있습니다. 필요한 경우 수정하세요.

### 3. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

### 4. 빌드 (프로덕션)
\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 프로젝트 구조

\`\`\`
n-day-app/
├── app/                      # Next.js App Router
│   ├── anniversaries/        # 기념일 관리
│   │   ├── new/             # 기념일 등록
│   │   └── page.tsx         # 기념일 목록
│   ├── gifts/               # 선물 추천
│   │   ├── [id]/           # 선물 상세
│   │   └── page.tsx         # 선물 목록
│   ├── orders/              # 주문 내역
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 홈페이지
├── components/              # 재사용 컴포넌트
│   ├── Navbar.tsx          # 네비게이션 바
│   └── AnniversaryForm.tsx # 기념일 등록 폼
├── lib/                     # 유틸리티
│   └── prisma.ts           # Prisma Client
└── prisma/                  # 데이터베이스 스키마
    └── schema.prisma        # Prisma 스키마
\`\`\`

## 🗄 데이터베이스 스키마

### 주요 모델
- **User**: 사용자 정보
- **Anniversary**: 기념일 정보
- **Recipient**: 기념일 수신자
- **Gift**: 선물 상품
- **Order**: 주문 내역
- **Address**: 배송지
- **PaymentMethod**: 결제 수단

## 🎨 주요 페이지

### 1. 홈페이지 (`/`)
- 서비스 소개
- 주요 기능 안내
- 시작하기 버튼

### 2. 기념일 관리 (`/anniversaries`)
- 등록된 기념일 목록
- D-Day 카운트
- 선물 보기 및 수정

### 3. 기념일 등록 (`/anniversaries/new`)
- 대상자 정보 입력
- 기념일 유형 선택
- 알림 설정

### 4. 선물 추천 (`/gifts`)
- 카테고리별 필터 (꽃, 건강식품, 식품)
- 인기도 표시
- Best 5 추천

### 5. 선물 상세 (`/gifts/[id]`)
- 상세 정보 및 이미지
- 배송 정보 확인
- 원클릭 주문

### 6. 주문 내역 (`/orders`)
- 주문 목록 및 상태
- 배송 추적
- 주문 취소

## 🔮 Phase 2 계획

- **F-102**: 구글/카카오 캘린더 연동
- **F-103**: 수신자 취향 프로파일링
- **F-303**: AI 기반 맞춤 추천
- **F-401**: 매년 자동 결제 구독
- **F-402**: 자동 결제 사전 알림

## 📝 개발 노트

이 프로젝트는 Sequential Thinking MCP와 Shrimp Task Manager를 활용하여 개발되었습니다.

### Mock 데이터 사용
현재 모든 기능은 Mock 데이터를 사용합니다. 실제 API 연동은 다음 단계에서 진행됩니다.

### 예정된 기능
- ✨ NextAuth.js를 통한 소셜 로그인
- ✨ Prisma를 통한 실제 데이터베이스 연동
- ✨ 카카오톡 알림톡 API 연동
- ✨ 결제 시스템 연동

## 🤝 기여

이 프로젝트는 MVP 단계입니다. 개선 사항이나 버그를 발견하시면 이슈를 등록해 주세요.

## 📄 라이선스

MIT License
