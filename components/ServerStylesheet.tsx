'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText, globalCss } from '@sfgov/react'

export function ServerStylesheet() {
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return <GlobalStylesheet />
    }
  })

  globalCss()
  return <GlobalStylesheet />
}

function GlobalStylesheet () {
  return <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
}