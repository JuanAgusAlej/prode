/* eslint-disable import/no-unresolved */
/* eslint-disable no-bitwise */
import { useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

function useScreen() {
  const getScreen = () => {
    if (typeof window !== 'undefined' && window.screen) {
      return window.screen;
    }

    return undefined;
  };

  const [screen, setScreen] = (useState < Screen) | (undefined > getScreen());

  function handleSize() {
    setScreen(getScreen());
  }

  useEventListener('resize', handleSize);

  // Set size at the first client-side load

  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return screen;
}

export default useScreen;
