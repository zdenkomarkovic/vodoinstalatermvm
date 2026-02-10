"use client";

type GtagFn = (...args: unknown[]) => void;

interface PhoneLinkProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ href, className, target, rel, children }: PhoneLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const navigate = () => {
      if (target === "_blank") {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    };
    const win = window as unknown as Record<string, unknown>;
    if (typeof win.gtag === "function") {
      (win.gtag as GtagFn)("event", "conversion", {
        send_to: "AW-17931599606/pu0YCPWasfYbEPb9ueZC",
        value: 1.0,
        currency: "RSD",
        event_callback: navigate,
      });
    } else {
      navigate();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}
