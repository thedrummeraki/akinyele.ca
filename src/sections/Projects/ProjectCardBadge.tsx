interface Props {
  text: string;
  color?: string;
  border?: string;
  backgroundColor?: string;
}

export default function ProjectCardBadge({ text, ...style }: Props) {
  return (
    <span className="badge" style={{ ...style }}>
      {text}
    </span>
  );
}
