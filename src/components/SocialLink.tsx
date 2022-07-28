import { Link } from "react-router-dom";

export default function SocialLink({
  internal,
  alt,
  url,
  icon,
}: {
  internal?: boolean;
  alt: string;
  url: string;
  icon: string;
}) {
  const iconMarkup = <img src={icon} className="icon" alt={alt} />;

  if (internal) {
    return <Link to={url}>{iconMarkup}</Link>;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {iconMarkup}
    </a>
  );
}
