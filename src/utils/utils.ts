export const copyText = (event: React.MouseEvent<HTMLElement>) => {
  const text = event.currentTarget.previousSibling?.textContent;
  if (text) {
    navigator.clipboard.writeText(text);
  }
};
