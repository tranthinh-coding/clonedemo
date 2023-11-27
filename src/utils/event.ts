export const DispatchEvent = (event: string, payload: any) => {
  document.dispatchEvent(new CustomEvent(event, payload))
}

export const ListenEvent = (
  event: string,
  handler: any,
  context = document
) => {
  context.addEventListener(event, handler)

  return () => context.removeEventListener(event, handler)
}
