const ILLEGAL_HANDLES = ["p", "direct", "explore", "accounts"]
const MAX_LENGTH = 30

// Strip http protocol & www. if present:
function humanUrl(url) {
  const split = url.split("://")
  const domain = split[split.length - 1]
  return domain.indexOf("www.") === 0 ? domain.substring(4) : domain
}

const instagramHandle = (url) => {
  if (!url) return null

  const clean = humanUrl(url)
  if (clean.indexOf("instagram.com/") !== 0) {
    return null
  }
  const handle = clean.split("/")[1]

  if (ILLEGAL_HANDLES.indexOf(handle) > -1) {
    return null
  }

  if (handle.length === 0 || handle.length > MAX_LENGTH) {
    return null
  }

  // Todo: regex check that it contains the right kind of characters

  return handle
}

module.exports = instagramHandle
