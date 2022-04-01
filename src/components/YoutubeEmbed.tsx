import { useState } from "react";
import ReactModal from "react-modal";
import { youtube } from "../icons";

interface Props {
  embedUrl: string;
  title: string;
}

export default function YoutubeEmbed({ embedUrl, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="/#"
        rel="noreferrer"
        title={embedUrl}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        <img src={youtube} className="icon" alt="open embed youtube link" />
      </a>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: { backgroundColor: "#000000d0" },
          content: {
            backgroundColor: "#000",
          },
        }}
        contentLabel={title}
      >
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </ReactModal>
    </>
  );
}
