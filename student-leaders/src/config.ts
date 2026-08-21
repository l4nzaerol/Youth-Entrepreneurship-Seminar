/**
 * Update these values for your seminar.
 * Drop the official e-cert template at public/img/YOUTH ENTREP.png
 * and set `useCustomTemplate` to true. Name placement is in fractions of
 * the template width/height so it stays aligned at any download size.
 */
export const seminar = {
  title: "YOUTH ENTREPRENEUR FORUM",
  tagline: "",
  subtitle: "Certificate of Participation",
  dateLabel: "Youth Month 2026",
  organization: "CYSDO",
};

const DEFAULT_FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeO9J_sF9W3H8EiYxRxFQHG40n-gmxgBoYsPEYFtIqH_Ly65Q/viewform";

/** Spreadsheet ID and sheet GID from the responses spreadsheet URL */
const SPREADSHEET_ID = "1aBE6BeCPPXSThAZiwXXP34xzBIar1FKM2zU9kGr4wmk";
const SHEET_GID = "0";

export const lookup = {
  spreadsheetId: (import.meta.env.VITE_SPREADSHEET_ID || SPREADSHEET_ID).trim(),
  sheetGid: (import.meta.env.VITE_SHEET_GID || SHEET_GID).trim(),
  feedbackFormUrl: (import.meta.env.VITE_FEEDBACK_FORM_URL || DEFAULT_FEEDBACK_FORM_URL).trim(),
};

export const certificateLayout = {
  /** Set true after you add the official template to public/img/ */
  useCustomTemplate: true,
  templateUrl: "/img/YOUTH ENTREP.png",
  /** Landscape certificate size in CSS pixels (also PNG export size). */
  width: 2000,
  height: 1414,
  name: {
    // Centered on the blank line between "This certifies that"
    // and the underline, matching the template's design.
    x: 0.5,
    y: 0.42,
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: 100,
    color: "#000000",
    maxWidth: 0.72,
  },
};
