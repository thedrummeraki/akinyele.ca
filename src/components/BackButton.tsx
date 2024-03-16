import { useNavigate } from "react-router-dom";
import { back } from "../icons";

interface Props {
  to?: string;
}

export default function BackButton({ to = "/" }: Props) {
  const navigate = useNavigate();

  return (
    <button
      className="button"
      style={{
        padding: "0.45rem 0.7rem",
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}
      onClick={() => navigate(to, { replace: true })}
    >
      <img src={back} height={18} width={18} alt="Back" /> <strong>Back</strong>
    </button>
  );
}
