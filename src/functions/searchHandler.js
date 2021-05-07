export const searchHandler = (item, searchString) => {
  const { title, author } = item;

  const lowerCaseSearchString = searchString.toLowerCase();
  const lowerCaseTitleString = title.toLowerCase();
  const lowerCaseAuthorString = author.toLowerCase();

  const matchTitle = lowerCaseTitleString.search(lowerCaseSearchString);
  const matchAuthor = lowerCaseAuthorString.search(lowerCaseSearchString);

  console.log({ lowerCaseSearchString });
  console.log({ lowerCaseTitleString });
  console.log({ lowerCaseAuthorString });

  console.log({ matchTitle });
  console.log({ matchAuthor });

  if (matchTitle !== -1 || matchAuthor !== -1) {
    return true;
  }

  return false;
};
