import { useEffect, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/contact-onimpact/prise-de-contact?background_color=2f6dff&text_color=ffffff&primary_color=2f6dff";

export function CalendlyEmbed() {
  const [height, setHeight] = useState(1100);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_domain", window.location.host);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("hide_gdpr_banner", "1");
    setSrc(url.toString());

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const data = event.data as { event?: string; payload?: { height?: string } };
      if (data?.event !== "calendly.page_height" || !data.payload?.height) return;
      const px = Number.parseInt(data.payload.height, 10);
      if (px > 0) setHeight(px);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!src) return <div className="min-h-[740px] w-full" />;

  return (
    <iframe
      title="Prendre rendez-vous"
      src={src}
      scrolling="no"
      className="block w-full overflow-hidden border-0 bg-transparent"
      style={{ height }}
    />
  );
}
