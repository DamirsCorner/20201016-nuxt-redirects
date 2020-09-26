export function getRedirectUrl(path: string): Promise<string | undefined> {
  const pathParts = path.split('/').filter((part) => part != '')
  if (pathParts.length > 1) {
    return Promise.resolve(`/${pathParts[0]}`)
  } else {
    return Promise.resolve(undefined)
  }
}
