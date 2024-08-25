import { useEffect } from "react";
import { useState } from "react";
import { TopSongTrack } from "../../types";
import SpotifyResourceList from "../SpotifyResourceList";

import "./Insights.css";

const URL =
  "https://raw.githubusercontent.com/akinyele-spin/spotify-insights/main/insights.json";

interface Report {
  updated_at: number;
  data: ReportData;
}

type Timeframe = "today" | "yesterday";

type ReportData = {
  [key in Timeframe]: DateBoundReportData;
};

interface DateBoundReportData {
  top_songs: TopSong[];
  top_albums: any[];
  top_artists: any[];
  total_listen_time: any[];
}

export interface TopSong {
  _id: string;
  count: number;
  details: TopSongTrack;
}

export default function Insights() {
  const { report, loading, error } = useReport();

  if (loading) {
    return (
      <div className="resource-list-container">
        <h2 className="title">Loading insights...</h2>
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (!isReportNotEmpty(report)) {
    return (
      <div className="resource-list-container">
        <h2 className="title">My Spotify corner</h2>
        <div className="resource-list artist">
          <em>
            <small>
              Hmm, I didn't listen to any music since yesterday. Come back for
              some more insights later!
            </small>
          </em>
        </div>
      </div>
    );
  }

  return (
    <div className="resource-list-container">
      <h2 className="title">My Spotify corner</h2>
      <div className="resource-list">
        <InsightsDetails report={report} />
      </div>
    </div>
  );
}

function InsightsDetails({ report }: { report: Report }) {
  return (
    <div className="insight-container">
      <InsightsPerTimeframe
        title="Today's top songs"
        report={report}
        timeframe="today"
      />
      <InsightsPerTimeframe
        title="Yesterday's top songs"
        report={report}
        timeframe="yesterday"
      />
    </div>
  );
}

function InsightsPerTimeframe({
  title,
  report,
  timeframe,
}: {
  title: string;
  report: Report;
  timeframe: Timeframe;
}) {
  const details = report.data[timeframe];

  const totalListenTime = details.total_listen_time.length
    ? details.total_listen_time[0]
    : null;
  const totalListenTimeMarkup = totalListenTime ? (
    <div className="insight">
      <div className="section">
        <span>
          <b>Total listening time</b>:{" "}
          {humanReadableDuration(totalListenTime.listened_ms)}
        </span>
      </div>
    </div>
  ) : null;

  return (
    <SpotifyResourceList
      hideIfEmpty
      title={<h3>{title}</h3>}
      header={totalListenTimeMarkup}
      data={details.top_songs}
      top={5}
      loading={false}
    />
  );
}

function useReport() {
  const [report, setReport] = useState<Report>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (loading || report) {
      return;
    }

    setLoading(true);
    fetch(URL, { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Report | undefined) => {
        if (data) {
          setReport(data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [loading, report]);

  return { report, loading, error };
}

function humanReadableDuration(durationMs: number): string {
  if (durationMs < 1000) {
    return lessOrMoreThan(durationMs, "ms");
  }

  const durationSecs = durationMs / 1000;
  if (durationSecs < 60) {
    return lessOrMoreThan(durationSecs, "second", "seconds");
  }

  const durationMins = durationSecs / 60;
  if (durationMins < 60) {
    return lessOrMoreThan(durationMins, "minute", "minutes");
  }

  const durationHours = durationMins / 60;
  return lessOrMoreThan(durationHours, "hour", "hours");
}

function lessOrMoreThan(duration: number, unit: string, plural?: string) {
  const rounded = Math.round(duration);
  const unitRepr = rounded === 1 ? unit : plural || unit;

  if (rounded < duration) {
    return `Over ${rounded} ${unitRepr}`;
  } else if (rounded > duration) {
    return `Less than ${rounded} ${unitRepr}`;
  } else {
    return `${rounded} ${unitRepr}`;
  }
}

function isReportNotEmpty(report: Report | undefined): report is Report {
  if (!report) {
    return false;
  }

  const {
    data: { today, yesterday },
  } = report;
  return today.top_songs.length > 0 || yesterday.top_songs.length > 0;
}
