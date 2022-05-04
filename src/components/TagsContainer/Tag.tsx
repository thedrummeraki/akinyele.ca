import { TagStyle } from "./types";

interface Props {
  name: string;
  style?: TagStyle;
  onClick?: () => void;
}

export function Tag({ name, style, onClick }: Props) {
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
