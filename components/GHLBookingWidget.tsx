"use client";

import { useMemo } from "react";
import Script from "next/script";

type Props = {
  id?: string; // container anchor id, not the iframe id
};

export default function GHLBookingWidget({ id = "apply" }: Props) {
  const iframeId = useMemo(
    () => `y9pXwHCu1eTOUv15CHbm_${Date.now()}`,
    []
  );

  return (
    <div id={id}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/y9pXwHCu1eTOUv15CHbm"
        style={{ width: "100%", height: "652px", border: "none", overflow: "auto", display: "block" }}
        frameBorder={0}
        scrolling="yes"
        id={iframeId}
      />
      <br />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}


