import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { SSRStyle, SSRStyleProps } from '@sfgov/react'

export function ServerStylesheet(props: SSRStyleProps) {
  useServerInsertedHTML(() => {
    if (typeof window === 'undefined') {
      return <SSRStyle {...props} />
    }
  })
  return <SSRStyle {...props} />
}
