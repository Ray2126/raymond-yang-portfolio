export function useMDXComponents(components) {
  return {
    p: props => (<p {...props} className="pb-2" />),
    pre: props => (
      <pre {...props} className="text-sm rounded-2xl border-2 border-color-primary px-2 py-2" />
    ),
    ...components,
  }
}