import { Link } from "react-router-dom";

interface Props {
  to: string;
  iconUrl: string;
  external?: boolean;
  alt?: string;
  style?: React.CSSProperties;
}

export default function IconLink({ to, iconUrl, external, alt, style }: Props) {
  const iconMarkup = <img src={iconUrl} alt={alt} className="icon" />;

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" style={style}>
        {iconMarkup}
      </a>
    );
  }

  return (
    <Link to={to} style={style}>
      {iconMarkup}
    </Link>
  );
}
