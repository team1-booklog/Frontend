export const getDisplayAuthor = (authorString: string): string => {
  const authors = authorString.split('^')
  const authorCount = authors.length

  if (authorCount === 1) {
    return authors[0]
  } else {
    return `${authors[0]} 외 ${authorCount - 1}명`
  }
}
