import { useEffect, useState } from "react";
import { Header } from "../../components";

import "./ViewPhotoAlbum.css";

import photoLinksManifest from "./photos.json";
import { Tag } from "../Projects/Projects";

interface PhotoLinksManifest {
  hosts: StorageHostsInfo;
  files: Array<PhotoInfo>;
}

interface StorageHostsInfo {
  compressed: StorageHostInfo;
  full: StorageHostInfo;
}

interface StorageHostInfo {
  domain: string;
  path: string;
}

interface PhotoInfo {
  filename: string;
  location: string;
  notes: string;
}

function usePhotoLinks<T>(links: Array<T>, perPage: number = 20) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Array<T>>([]);

  const nextPage = () => {
    setPage((current) => current + 1);
  };

  const previousPage = () => {
    setPage((current) => current - 1);
  };

  const hasPrevious = page > 1;
  const totalPages = links.length / perPage;
  const hasNext = page < totalPages;

  useEffect(() => {
    const offset = (page - 1) * perPage;
    const items = links.slice(offset, offset + perPage);
    setItems(items);
  }, [page, perPage, links]);

  return {
    links: items,
    setItems,
    nextPage,
    previousPage,
    totalPages,
    hasPrevious,
    hasNext,
  };
}

export default function ViewPhotoAlbum() {
  const { links, hasNext, hasPrevious, nextPage, previousPage } = usePhotoLinks(
    photoLinksManifest.files,
    20
  );

  const compressedPhotoSrc = (photoInfo: PhotoInfo) => {
    const { domain, path } = photoLinksManifest.hosts.compressed;
    return `${domain}${path}${photoInfo.filename}`;
  };

  const fullPhotoSrc = (photoInfo: PhotoInfo) => {
    const { domain, path } = photoLinksManifest.hosts.full;
    return `${domain}${path}${photoInfo.filename}`;
  };

  return (
    <>
      <Header />
      <section className="photos container">
        <h2 className="title">Trip to Japan (2023)</h2>
        {/* <div className="tags-container">
          <Tag selected name="Food" onClick={() => {}} />
          <Tag name="Landscape" onClick={() => {}} />
          <Tag name="Anime" onClick={() => {}} />
          <Tag name="Historical sites" onClick={() => {}} />
        </div> */}
        <div className="photos-container">
          {links.map((photoLink) => (
            <div key={photoLink.filename} className="wrapper">
              <div>
                <img
                  src={compressedPhotoSrc(photoLink)}
                  alt={photoLink.filename}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{photoLink.notes}</span>
                  <small>{photoLink.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {hasPrevious && <Tag name="Previous" onClick={previousPage} />}
          {hasNext && <Tag name="Next" onClick={nextPage} />}
        </div>
      </section>
    </>
  );
}
