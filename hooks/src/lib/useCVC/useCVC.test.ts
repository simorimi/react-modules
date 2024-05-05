import { renderHook } from "@testing-library/react";

import React from "react";

import useCVC from "./useCVC";

describe("useCVC 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = "";

    const { result } = renderHook(() => useCVC());
    const { cvc } = result.current;

    expect(cvc).toEqual(EXPECTED_INITIAL_VALUE);
  });

  it("해당 필드에 정확히 입력되어야 한다", () => {
    const VALID_INPUT_TEST_CASE = "123";
    const EXPECTED_RESULT = "123";

    const { result } = renderHook(() => useCVC());

    React.act(() => {
      result.current.handleCVCChange({
        target: {
          value: VALID_INPUT_TEST_CASE,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cvc).toBe(EXPECTED_RESULT);
    expect(result.current.errorState).toBe(false);
  });

  const INVALID_INPUT_LENGTH_TEST_CASE = [
    ["1", "1"],
    ["12", "12"],
  ];

  it.each(INVALID_INPUT_LENGTH_TEST_CASE)(
    "필드에 입력하는 입력값이 3자리가 아닌 경우, 해당 입력 필드에 예외가 발생해야한다.",
    (invalidValue, expectedResult) => {
      const { result } = renderHook(() => useCVC());

      React.act(() => {
        result.current.handleCVCChange({
          target: {
            value: invalidValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cvc).toBe(expectedResult);
      expect(result.current.errorState).toBe(true);
    }
  );

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["1", "1a"], "1"],
    [["1", "12", "12a"], "12"],
    [["1", "12", "123", "123a"], "123"],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "필드 입력값에 숫자 이외의 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCVC());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCVCChange({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cvc).toBe(expectedResult);
      expect(result.current.errorState).toBe(true);
    }
  );
});
