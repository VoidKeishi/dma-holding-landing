import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "DMA Holdings — Strategic Natural Resources Investment"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0f2030 0%, #1E3A4F 25%, #2C5F73 45%, #1E3A4F 70%, #152c3c 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#C49A2A",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          DMA Holdings
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#C49A2A",
            marginBottom: 24,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "1px",
          }}
        >
          Strategic Natural Resources Investment
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.55)",
            marginTop: 16,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Singapore &middot; Southeast Asia
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#C49A2A",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
