import ReactHtmlParser from "react-html-parser";
import { stripHtml } from "string-strip-html";

export function cleanHTMLInput(htmlInput) {
  // Remove HTML tags and special characters
  const strippedString = stripHtml(htmlInput).result;

  // Convert HTML entities to plain text
  const plainText = ReactHtmlParser(strippedString).join("");

  // Remove newlines and extra spaces
  const cleanedString = plainText
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .replace(/"/g, "'")
    .trim();
  console.log(cleanedString);

  return cleanedString;
}
