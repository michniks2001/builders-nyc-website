import React from "react";
import { cn } from "@/lib/utils";

const SYSTEMS = {
  SG: {
    NS: {
      name: "North South Line",
      short: "NS",
      long: "NSL",
      bg: "#e22726",
      fg: "#FFF"
    },
    EW: {
      name: "East West Line",
      short: "EW",
      long: "EWL",
      bg: "#00964e",
      fg: "#FFF"
    },
    NE: {
      name: "North East Line",
      short: "NE",
      long: "NEL",
      bg: "#8f4299",
      fg: "#FFF"
    },
    CE: {
      name: "Circle Line",
      short: "CE",
      long: "CCL",
      bg: "#f99d26",
      fg: "#000"
    },
    DT: {
      name: "Downtown Line",
      short: "DT",
      long: "DTL",
      bg: "#005ea8",
      fg: "#fff"
    },
    TE: {
      name: "Thomson-East Coast Line",
      short: "TE",
      long: "TEL",
      bg: "#9d5b26",
      fg: "#FFF"
    }
  },
  // Add more systems here in the future
  HK: {
    // Hong Kong MTR
    KT: {
      name: "Kwun Tong Line",
      short: "KT",
      long: "KTL",
      bg: "#399e48",
      fg: "#FFF"
    },
    AE: {
      name: "Airport Express Line",
      short: "AE",
      long: "AEL",
      bg: "#39858d",
      fg: "#FFF"
    },
    TO: {
      name: "Tseung Kwan O Line",
      short: "TO",
      long: "TKOL",
      bg: "#7a3d90",
      fg: "#000"
    },
    SI: {
      name: "South Island Line",
      short: "SI",
      long: "SIL",
      bg: "#c7d536",
      fg: "#FFF"
    },
    TW: {
      name: "Tsuen Wan Line",
      short: "TW",
      long: "TWL",
      bg: "#d5371f",
      fg: "#FFF"
    },
    IS: {
      name: "Island Line",
      short: "IS",
      long: "ISL",
      bg: "#3d6fbe",
      fg: "#FFF"
    },
    TC: {
      name: "Tung Chung Line",
      short: "TC",
      long: "TCL",
      bg: "#e6a03e",
      fg: "#000"
    },
    DR: {
      name: "Disneyland Resort Line",
      short: "DR",
      long: "DRL",
      bg: "#df76a4",
      fg: "#000"
    },
    ER: {
      name: "East Rail Line",
      short: "ER",
      long: "ERL",
      bg: "#78b2e5",
      fg: "#000"
    },
    TM: {
      name: "Tuen Ma Line",
      short: "TM",
      long: "TML",
      bg: "#913a0e",
      fg: "#FFF"
    }
  },
  NYC: {
    A: {
      name: "8 Avenue Express",
      short: "A",
      long: "A",
      bg: "#0039A6",
      fg: "#FFF"
    },
    C: {
      name: "8 Avenue Local",
      short: "C",
      long: "C",
      bg: "#0039A6",
      fg: "#FFF"
    },
    E: {
      name: "8 Avenue Local",
      short: "E",
      long: "E",
      bg: "#0039A6",
      fg: "#FFF"
    },
    B: {
      name: "6 Avenue Express",
      short: "B",
      long: "B",
      bg: "#FF6319",
      fg: "#FFF"
    },
    D: {
      name: "6 Avenue Express",
      short: "D",
      long: "D",
      bg: "#FF6319",
      fg: "#FFF"
    },
    F: {
      name: "6 Avenue Local",
      short: "F",
      long: "F",
      bg: "#FF6319",
      fg: "#FFF"
    },
    M: {
      name: "Queens Boulevard Local / 6 Avenue Local",
      short: "M",
      long: "M",
      bg: "#FF6319",
      fg: "#FFF"
    },
    N: {
      name: "Broadway Express",
      short: "N",
      long: "N",
      bg: "#FCCC0A",
      fg: "#000"
    },
    Q: {
      name: "Broadway Express",
      short: "Q",
      long: "Q",
      bg: "#FCCC0A",
      fg: "#000"
    },
    R: {
      name: "Broadway Local",
      short: "R",
      long: "R",
      bg: "#FCCC0A",
      fg: "#000"
    },
    W: {
      name: "Broadway Local",
      short: "W",
      long: "W",
      bg: "#FCCC0A",
      fg: "#000"
    },
    G: {
      name: "Brooklyn-Queens Crosstown",
      short: "G",
      long: "G",
      bg: "#6CBE45",
      fg: "#FFF"
    },
    J: {
      name: "Nassau Street Local",
      short: "J",
      long: "J",
      bg: "#996633",
      fg: "#FFF"
    },
    Z: {
      name: "Nassau Street Express",
      short: "Z",
      long: "Z",
      bg: "#996633",
      fg: "#FFF"
    },
    L: {
      name: "14 Street-Canarsie Local",
      short: "L",
      long: "L",
      bg: "#A7A9AC",
      fg: "#000"
    },
    T: {
      name: "42 Street Shuttle",
      short: "S",
      long: "S",
      bg: "#808183",
      fg: "#FFF"
    },
    SEV: {
      name: "Flushing Local",
      short: "7",
      long: "7",
      bg: "#B933AD",
      fg: "#FFF"
    }
  }
} as const;

type SystemKey = keyof typeof SYSTEMS;
type BadgeSize = "xs" | "sm" | "md" | "lg";
const sizeClasses: Record<BadgeSize, string> = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-sm",
  lg: "h-8 w-8 text-base"
};

interface TransportBadgeProps {
  stationCode: string | string[];
  system: SystemKey;
  className?: string;
  stationName?: string;
  showStationName?: boolean;
  size?: BadgeSize;
}
// Defined Linedata type
type LineData = {
  name: string;
  short: string;
  long: string;
  bg: string;
  fg: string;
} | null;

const getLineDataFromStationCode = (
  code: string,
  system: SystemKey
): LineData => {
  // Added return type LineData, so TS knows all lines share a common structure
  const match = code.match(/^[A-Z]+/);
  if (!match) return null;
  const prefix = match[0] as string;
  const lines = SYSTEMS[system] as Record<string, LineData>;
  if (lines && prefix in lines) {
    return lines[prefix];
  }
  return null;
};

export const TransportBadge = ({
  stationCode,
  system,
  className,
  stationName,
  showStationName = false,
  size = "md"
}: TransportBadgeProps) => {
  const codes = Array.isArray(stationCode) ? stationCode : [stationCode];
  const isMulti = codes.length > 1;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className={cn("inline-flex", isMulti ? "gap-1" : "gap-1")}>
        {codes.map((code, idx) => {
          const line = getLineDataFromStationCode(code, system);
          if (!line) {
            return (
              <span
                key={code}
                className={cn(
                  "inline-flex items-center justify-center rounded-full font-semibold bg-gray-300 text-gray-700",
                  sizeClasses[size]
                )}
              >
                Unknown
              </span>
            );
          }

          return (
            <span
              key={code}
              className={cn(
                "inline-flex items-center justify-center rounded-full font-semibold leading-none",
                sizeClasses[size]
              )}
              style={{
                backgroundColor: line.bg,
                color: line.fg
              }}
              title={line.name}
            >
              <span className="font-bold">{line.short}</span>
            </span>
          );
        })}
      </span>
      {showStationName && stationName && (
        <span
          className={cn(
            "ml-2 font-medium text-slate-700 dark:text-slate-200",
            size === "xs" && "text-[10px]",
            size === "sm" && "text-xs",
            size === "md" && "text-sm",
            size === "lg" && "text-base"
          )}
        >
          {stationName}
        </span>
      )}
    </span>
  );
};

export default TransportBadge;
