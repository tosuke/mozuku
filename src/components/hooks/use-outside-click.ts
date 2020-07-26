import * as React from 'react'

export const useOutsideClick = <T>(
  ref: React.RefObject<T>,
  handler: () => void
) => {
  React.useEffect(() => {
    if (!ref.current) return
    const outsideClickHandler = (e: MouseEvent) => {
      if (e.currentTarget === null) return
      if (ref.current.contains(e.currentTarget as Node)) return
      handler()
    }
    window.addEventListener('click', outsideClickHandler)
    return () => {
      window.removeEventListener('click', outsideClickHandler)
    }
  }, [ref.current])
}
