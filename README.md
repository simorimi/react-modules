# react-modules

## 재사용 가능한 모달 컴포넌트 모듈

### 🎯 기능 요구 사항

- [ ] 피그마 시안 예시처럼 모바일에서 사용 가능한 모달 컴포넌트를 만들어야 한다.

※ 리액트 페이먼츠 미션 모바일 레이아웃을 참고한다.

- [ ] 모달 위치 및 내용 구성 옵션을 prop으로 전달받아 유연하게 모달을 구성할 수 있어야 한다.

  - [ ] 모달 위치: 중앙, 하단 등
  - [ ] 모달 내용: 제목, 버튼 등
  - [ ] 모달 열기, 닫기, 확인 등의 동작에 대한 이벤트 핸들러

- [ ] 모달 컴포넌트를 npm으로 배포하고 사용할 수 있어야 한다.

**예시**

```jsx
<Modal
  position="center"
  title="알림"
  content="이것은 모달 내용입니다."
  onConfirm={handleConfirm}
  onClose={handleClose}
/>
```
