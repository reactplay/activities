import { useEffect, useState } from "react";

export const LinkLabel = ({ value, cclass, lclass }) => {
  const [htmlValue, setHtmlValue] = useState("");
  useEffect(() => {
    if (value) {
      const html = value
        .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3 tag
        .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2 tag
        .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1 tag
        .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold text
        .replace(/\*(.*)\*/gim, "<i>$1</i>") // italic text
        .replace(/\r\n|\r|\n/gim, "<br>") // linebreaks
        .replace(
          /\[([^\[]+)\](\(([^)]*))\)/gim,
          `<a class='${lclass}' tarrget="_blank" href="$3"><span className='${lclass}'>$1</span></a>`
        ); // anchor tags
      setHtmlValue(html);
    }
  }, [value]);

  return <div dangerouslySetInnerHTML={{ __html: htmlValue }} />;
};
