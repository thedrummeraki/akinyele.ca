import { TagStyle } from "./types";

interface Props {
  name: string;
  url?: string;
  style?: TagStyle;
  onClick?: () => void;
}

export function Tag({ name, url, style, onClick }: Props) {
  if (url) {
    const defaultStyle = { textDecoration: "none" };
    return (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`tag${onClick ? " clickable" : ""}`}
        style={{ ...defaultStyle, ...style }}
      >
        {name}
      </a>
    );
  }
  return (
    <span
      key={name}
      className={`tag${onClick ? " clickable" : ""}`}
      style={style}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
