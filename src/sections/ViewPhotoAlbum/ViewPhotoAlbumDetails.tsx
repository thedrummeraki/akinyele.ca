import { useRef } from "react";
import { Tag } from "../Projects/Projects";
import { usePhotoLinks } from "./hooks/usePhotoLinks";
import { PhotoInfo, PhotoLinksManifest } from "./types";

interface Props {
  manifest: PhotoLinksManifest;
}

export default function ViewPhotoAlbumDetails({ manifest }: Props) {
  const { links, hasNext, hasPrevious, nextPage, previousPage } = usePhotoLinks(
    manifest.files,
    60
  );

  return (
    <section className="photos container">
      <h2 className="title">Trip to Japan (2023)</h2>
      {/* <div className="tags-container">
        <Tag selected name="Food" onClick={() => {}} />
        <Tag name="Landscape" onClick={() => {}} />
        <Tag name="Anime" onClick={() => {}} />
        <Tag name="Historical sites" onClick={() => {}} />
      </div> */}
      <div className="pagination">
        <Tag name="Previous" onClick={previousPage} hidden={!hasPrevious} />
        <Tag name="Next" onClick={nextPage} hidden={!hasNext} />
      </div>
      <div className="photos-container">
        {links.map((photoLink) => (
          <div key={photoLink.filename} className="wrapper">
            <div>
              <PhotoImage photoLink={photoLink} manifest={manifest} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="notes">{photoLink.notes}</span>
                <span className="location">{photoLink.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Tag name="Previous" onClick={previousPage} hidden={!hasPrevious} />
        <Tag name="Next" onClick={nextPage} hidden={!hasNext} />
      </div>
    </section>
  );
}

function PhotoImage({
  photoLink,
  manifest,
}: {
  photoLink: PhotoInfo;
  manifest: PhotoLinksManifest;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  const compressedPhotoSrc = (photoInfo: PhotoInfo) => {
    const { domain, path } = manifest.hosts.compressed;
    return `${domain}${path}${photoInfo.filename}`;
  };

  const fullPhotoSrc = (photoInfo: PhotoInfo) => {
    const { domain, path } = manifest.hosts.full;
    return `${domain}${path}${photoInfo.filename}`;
  };

  return (
    <a
      href="#"
      onClick={() => {
        window.open(fullPhotoSrc(photoLink), "_blank");
      }}
    >
      <img
        ref={imgRef}
        src={compressedPhotoSrc(photoLink)}
        alt={photoLink.filename}
        className="photo"
        onLoad={() => {
          if (imgRef.current) {
            imgRef.current.style.opacity = "1";
          }
          console.log("loaded", photoLink.filename);
        }}
      />
    </a>
  );
}
