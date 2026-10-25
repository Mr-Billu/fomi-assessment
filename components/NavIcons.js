"use client";
import IconButton from "@/components/IconButton";
const p = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};
const items = [
  [
    "Home",
    <svg key="home" {...p}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v10h13V10" />
    </svg>,
  ],
  [
    "Image",
    <svg key="image" {...p}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="m21 16-5-5-9 9" />
    </svg>,
  ],
  [
    "Video",
    <svg key="video" {...p}>
      <rect x="3" y="6" width="13" height="12" rx="3" />
      <path d="m16 10.5 5-3v9l-5-3" />
    </svg>,
  ],
  [
    "Edit",
    <svg key="edit" {...p}>
      <path d="M4 20h4L19 9l-4-4L4 16v4z" />
      <path d="m13.5 6.5 4 4" />
    </svg>,
  ],
  [
    "Folder",
    <svg key="folder" {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>,
  ],
];
export default function NavIcons({ mobile = false, loading = false }) {
  return (
    <nav
      aria-label="Main navigation"
      className={mobile ? "mobile-nav" : "nav-center"}
    >
      {!mobile && (
        <span className="progress" data-loading={loading} aria-hidden="true" />
      )}
      {items.map(([label, icon], i) => (
        <IconButton
          key={label}
          label={label}
          className={!mobile && i === 1 ? "active" : ""}
        >
          {icon}
        </IconButton>
      ))}
    </nav>
  );
}
