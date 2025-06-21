export function useMDXComponents(components) {
  return {
    p: props => (<p {...props} className="pb-2" />),
    pre: props => (
      <pre {...props} className="text-sm rounded-2xl border-2 border-color-primary px-2 py-2" />
    ),
    a: props => (
      <a {...props} className="styled-link-tertiary" />
    ),
    ul: props => (
      <ul {...props} className="list-disc list-inside space-y-1 pl-4" />
    ),
    li: props => (
      <li {...props} className="text-base leading-relaxed" />
    ),
    ...components,
  }
}