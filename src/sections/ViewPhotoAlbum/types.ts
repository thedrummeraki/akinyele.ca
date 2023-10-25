export interface PhotoLinksManifest {
  hosts: StorageHostsInfo;
  files: Array<PhotoInfo>;
}

export interface StorageHostsInfo {
  compressed: StorageHostInfo;
  full: StorageHostInfo;
}

export interface StorageHostInfo {
  domain: string;
  path: string;
}

export interface PhotoInfo {
  filename: string;
  location: string;
  notes: string;
}
