# Chrome Extensions Hub

Doh Kim의 Chrome Extension 프로젝트 페이지와 개인정보 처리방침을 한 곳에서 관리하는 정적 Next.js 사이트입니다.

확장 프로그램 정보는 [`data/extensions.json`](./data/extensions.json)에 등록하고, 홈 화면 카드, 상세 페이지, 개인정보 처리방침 페이지는 이 JSON 데이터를 기반으로 생성됩니다.

## 현재 프로젝트 개요

- 프레임워크: Next.js App Router
- 언어: TypeScript
- 스타일링: Tailwind CSS
- 배포 방식: Static Export
- 콘텐츠 관리: 단일 JSON 파일 기반
- 테마: 라이트/다크 모드 지원, `localStorage`에 사용자 선택 저장
- 분석: Vercel Analytics 적용

## 주요 페이지

- `/`: 등록된 확장 프로그램을 카드 형태로 보여주는 Extension Gallery
- `/extensions/[slug]/`: 확장 프로그램 상세 페이지
- `/extensions/[slug]/privacy/`: 확장 프로그램별 개인정보 처리방침 페이지

`next.config.ts`에서 `output: "export"`와 `trailingSlash: true`를 사용하므로 정적 사이트로 빌드됩니다.

## 등록된 프로젝트

### Custom Cursor Extension

- 상태: Published
- 플랫폼: Chrome Extension
- 버전: 1.0.0
- 카테고리: Customization Tool
- 언어: English
- 설명: 사용자가 커서를 이미지나 이모지로 변경할 수 있는 간단한 데모 확장 프로그램입니다.
- 상세 페이지: `/extensions/custom-cursor-extension/`
- 개인정보 처리방침: `/extensions/custom-cursor-extension/privacy/`
- GitHub: <https://github.com/jmeno1011/custom-cursor-extension>
- Chrome Web Store: <https://chromewebstore.google.com/detail/custom-cursor-extension/klcadbnhcdfoodniepjbbndfoinpoemn>
- 개인정보 요약: 개인 정보, 사용량 분석, 기술 정보 등을 수집하거나 외부로 전송하지 않습니다. 모든 기능은 브라우저 안에서 로컬로 동작합니다.

### YouTube ArrowDown Blocker

- 상태: Published
- 플랫폼: Chrome Extension
- 버전: 1.0.0
- 카테고리: YouTube Tool
- 언어: English
- 설명: YouTube에서 ArrowDown 키 입력으로 타임라인이 의도치 않게 되감기는 문제를 방지하는 확장 프로그램입니다.
- 상세 페이지: `/extensions/youtube-arrowdown-blocker/`
- 개인정보 처리방침: `/extensions/youtube-arrowdown-blocker/privacy/`
- GitHub: <https://github.com/jmeno1011/YAB-extensions>
- Chrome Web Store: <https://chromewebstore.google.com/detail/youtube-arrowdown-blocker/mjnkchfgapbgnfjmanmlglffaedcepof>
- 개인정보 요약: 개인 정보, 브라우징 기록, 기술 식별자, 사용량 분석 데이터를 수집하거나 공유하지 않습니다. YouTube watch 페이지에서 Arrow Down 키 이벤트를 차단하는 로컬 content script로 동작합니다.

### KeyVid

- 상태: Published
- 플랫폼: Chrome Extension
- 버전: 1.0.0
- 카테고리: Accessibility
- 언어: English
- 설명: 사용자가 등록한 웹사이트에서 HTML5 비디오 재생을 키보드 단축키로 제어할 수 있게 해주는 확장 프로그램입니다.
- 상세 페이지: `/extensions/keyvid/`
- 개인정보 처리방침: `/extensions/keyvid/privacy/`
- GitHub: <https://github.com/jmeno1011/Keyvid>
- Chrome Web Store: <https://chromewebstore.google.com/detail/keyvid/gmlicfoafekibamhnmdkcpcbicopjagf>
- 개인정보 요약: 개인 정보나 기술 데이터를 수집하지 않습니다. 사용자가 등록한 웹사이트 목록만 브라우저 로컬 스토리지에 저장하며 외부 서버로 전송하지 않습니다.

## 프로젝트 구조

```text
app/
  page.tsx                         # 홈 페이지
  layout.tsx                       # 공통 레이아웃, 테마 초기화, Analytics
  extensions/[slug]/page.tsx       # 확장 프로그램 상세 페이지
  extensions/[slug]/privacy/page.tsx
components/
  ExtensionCard.tsx                # 홈 화면 프로젝트 카드
  hero-component.tsx               # 상단 히어로 영역
  layout-header.tsx                # 헤더 및 내비게이션
  layout-footer.tsx                # 푸터 및 연락처
  privacy-policy.tsx               # 개인정보 처리방침 렌더링
  ThemeToggle.tsx                  # 라이트/다크 모드 토글
data/
  extensions.json                  # 확장 프로그램 데이터 원본
lib/
  extensions.ts                    # JSON 데이터 조회 유틸리티
```

## 콘텐츠 수정 방법

새 확장 프로그램을 추가하거나 기존 내용을 수정하려면 [`data/extensions.json`](./data/extensions.json)의 배열에 항목을 추가하거나 편집합니다.

각 항목은 다음 화면을 동시에 구성합니다.

- 홈 화면 프로젝트 카드
- 확장 프로그램 상세 페이지
- Chrome Web Store / GitHub / 개인정보 처리방침 링크
- 개인정보 처리방침 본문과 데이터 처리 요약 표

필수 필드:

- `id`, `name`, `slug`
- `category`, `status`, `platform`, `version`, `language`
- `description`, `longDescription`
- `github`, `chromeStore`, `privacyPath`
- `privacyPolicy`

## 개발

```bash
npm install
npm run dev
```

개발 서버 실행 후 브라우저에서 표시되는 로컬 주소로 접속합니다.

## 타입 체크

```bash
npm run typecheck
```

## 빌드

```bash
npm run build
```

정적 빌드 결과물은 `out/` 디렉터리에 생성됩니다.
