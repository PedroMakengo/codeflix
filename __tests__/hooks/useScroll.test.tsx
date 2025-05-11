import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';

describe('useScroll', () => {
  it('should response to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      // Simulate a scroll event
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      // Simulate another scroll event
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});
