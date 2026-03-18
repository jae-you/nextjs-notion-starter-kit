import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 1. Root Page ID 수정 (v= 이후의 파라미터는 삭제하고 깔끔한 ID만 남기는 게 안전합니다)
  rootNotionPageId: 'e20e2285ad1883f5b7c801cba35de1dc',

  name: 'Brew AI Lab',
  domain: 'brew.ai.kr', // www는 빼고 메인 도메인만 적는 것이 일반적입니다.
  author: 'Jae You',

  // 2. 검색 엔진 및 공유 시 나타날 설명 (아까 정한 슬로건 반영!)
  description: 'Under Pressure, AI Performs Better. 비즈니스 가치를 짜내는 AI 컨설팅 by Brew AI Lab',

  // 3. 소셜 링크 (필요 없으면 null 혹은 주석 처리)
  twitter: null,
  github: null,
  linkedin: 'null', // 본인 링크가 있다면 활성화

  // 4. 미리보기 이미지 지원 (성능을 위해 유지)
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  // 5. 네비게이션 스타일
  // 만약 노션 상단의 '표(Database)' 느낌을 없애고 싶다면 
  // 노션 원본 페이지에서 '데이터베이스' 대신 '텍스트'와 '페이지' 위주로 구성하는 것이 가장 빠릅니다.
  navigationStyle: 'default' 
})
