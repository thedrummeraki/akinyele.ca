import { useEffect, useState } from "react";
import { Project } from "../Projects/types";

const SPIN_URL = "https://spin-api.fly.dev";

export type SpinState =
  | "fetching-state"
  | "on"
  | "off"
  | "waiting"
  | "booting_up"
  | "unknown";

export default function useSpin(project: Project) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<SpinState>();
  const [url, setUrl] = useState<string>();

  const [result, setResult] = useState<any>();

  const getAppState = () => {
    setLoading(true);
    fetch(`${SPIN_URL}/health/check/${project.spin!.slug}`)
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        return res;
      })
      .finally(() => setLoading(false));
  };

  const spinUp = () => {
    setLoading(true);
    fetch(`${SPIN_URL}/projects/${project.spin!.slug}/enable`, {
      method: "POST",
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    let id = setInterval(getAppState, 3000);
    return () => clearInterval(id);
  }, [project.spin!.slug]);

  useEffect(() => {
    if (!result) return;

    setState(result.state);
    setUrl(result.app_uri);
  }, [result]);

  return { loading, state, url, spinUp };
}
