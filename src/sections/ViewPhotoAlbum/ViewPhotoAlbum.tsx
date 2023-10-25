import { Header } from "../../components";

import "./ViewPhotoAlbum.css";

import photoLinksManifest from "./photos.json";
import { useParams } from "react-router-dom";
import ViewPhotoAlbumDetails from "./ViewPhotoAlbumDetails";

export default function ViewPhotoAlbum() {
  const { id } = useParams();
  const manifest = photoLinksManifest.find((manifest) => manifest.id === id);

  const body = manifest ? (
    <ViewPhotoAlbumDetails manifest={manifest} />
  ) : (
    <div>Photo album with ID {id} not found.</div>
  );

  return (
    <div>
      <Header />
      {body}
    </div>
  );
}
