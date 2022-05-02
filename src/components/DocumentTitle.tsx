interface DocumentTitleProps {
  title: string;
  prefix?: string;
  suffix?: string;
}

export function DocumentTitle(props: DocumentTitleProps) {
  useDocumentTitle(props);

  return null;
}

export function useDocumentTitle({
  title,
  prefix,
  suffix = "Akinyele Cafe-Febrissy",
}: DocumentTitleProps) {
  const fullTitle = [prefix, title, suffix].filter((x) => x).join(" ~ ");
  document.title = fullTitle;

  return fullTitle;
}

export function useNoDocumentTitle() {
  useDocumentTitle({ title: "" });
}
