"use client";

import { useEffect, useRef, useState } from "react";

type SwatchProps = {
  name: string;
  bgClass: string;
  textClass: string;
  cssVar: string;
};

const ColorSwatch = ({ name, bgClass, textClass, cssVar }: SwatchProps) => {
  const [oklchValue, setOklchValue] = useState("...");
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        const computedValue = getComputedStyle(document.documentElement)
          .getPropertyValue(cssVar)
          .trim();
        setOklchValue(computedValue);
      } catch (error) {
        console.error(`Error reading CSS var ${cssVar}:`, error);
        setOklchValue("Error");
      }
    }
  }, [cssVar]);

  const handleCopy = () => {
    if (oklchValue && oklchValue !== "...") {
      const copyText = `oklch(${oklchValue})`;
      navigator.clipboard.writeText(copyText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <div className="flex flex-col rounded-lg bg-base-100 shadow transition-all hover:shadow-lg">
      <div
        ref={ref}
        className={`flex h-24 w-full items-center justify-center rounded-t-lg ${bgClass} ${textClass} xl:h-32`}
      >
        <span className="text-lg font-bold xl:text-xl">{name}</span>
      </div>
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          onClick={handleCopy}
          className="font-mono text-sm text-base-content/60 transition-colors hover:text-base-content"
          title={`Click to copy oklch(${oklchValue})`}
          data-testid={`oklch-copy-button-${name.toLowerCase()}`}
        >
          {copied ? "Copied!" : `oklch(${oklchValue})`}
        </button>
        <span className="badge badge-ghost font-mono text-xs">{bgClass}</span>
      </div>
    </div>
  );
};

const BaseSwatch = ({ name, bgClass, textClass, cssVar }: SwatchProps) => {
  const [oklchValue, setOklchValue] = useState("...");
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        const computedValue = getComputedStyle(document.documentElement)
          .getPropertyValue(cssVar)
          .trim();
        setOklchValue(computedValue);
      } catch (error) {
        console.error(`Error reading CSS var ${cssVar}:`, error);
        setOklchValue("Error");
      }
    }
  }, [cssVar]);

  const handleCopy = () => {
    if (oklchValue && oklchValue !== "...") {
      const copyText = `oklch(${oklchValue})`;
      navigator.clipboard.writeText(copyText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-transparent p-4">
      <div
        ref={ref}
        className={`flex h-24 w-full items-center justify-center rounded border border-base-content/10 ${bgClass} ${textClass} shadow-inner xl:h-32`}
      >
        <span className="text-lg font-bold xl:text-xl">{name}</span>
      </div>
      <div className="flex items-center justify-between pt-2 text-sm">
        <button
          type="button"
          onClick={handleCopy}
          className="font-mono text-base-content/60 transition-colors hover:text-base-content"
          title={`Click to copy oklch(${oklchValue})`}
          data-testid={`oklch-copy-button-${name.toLowerCase()}`}
        >
          {copied ? "Copied!" : `oklch(${oklchValue})`}
        </button>
        <span className="badge badge-ghost font-mono text-xs">{bgClass}</span>
      </div>
    </div>
  );
};

function ColorThemeShowcase() {
  return (
    <section className="w-full rounded-box bg-base-200 py-16 px-4 md:px-8 xl:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center xl:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">
            Theme Color Palette
          </h2>
          <p className="mt-2 text-base text-base-content/80 sm:text-lg xl:text-xl xl:mt-4">
            Live oklch values detected from CSS variables.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ColorSwatch
            name="Primary"
            bgClass="bg-primary"
            textClass="text-primary-content"
            cssVar="--p"
          />
          <ColorSwatch
            name="Secondary"
            bgClass="bg-secondary"
            textClass="text-secondary-content"
            cssVar="--s"
          />
          <ColorSwatch
            name="Accent"
            bgClass="bg-accent"
            textClass="text-accent-content"
            cssVar="--a"
          />
          <ColorSwatch
            name="Neutral"
            bgClass="bg-neutral"
            textClass="text-neutral-content"
            cssVar="--n"
          />
        </div>

        <h3 className="mt-16 mb-8 text-center text-xl font-bold sm:text-2xl xl:text-3xl">
          Contextual Colors
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ColorSwatch
            name="Info"
            bgClass="bg-info"
            textClass="text-info-content"
            cssVar="--in"
          />
          <ColorSwatch
            name="Success"
            bgClass="bg-success"
            textClass="text-success-content"
            cssVar="--su"
          />
          <ColorSwatch
            name="Warning"
            bgClass="bg-warning"
            textClass="text-warning-content"
            cssVar="--wa"
          />
          <ColorSwatch
            name="Error"
            bgClass="bg-error"
            textClass="text-error-content"
            cssVar="--er"
          />
        </div>

        <h3 className="mt-16 mb-8 text-center text-xl font-bold sm:text-2xl xl:text-3xl">
          Base Colors
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <BaseSwatch
            name="Base 100"
            bgClass="bg-base-100"
            textClass="text-base-content"
            cssVar="--b1"
          />
          <BaseSwatch
            name="Base 200"
            bgClass="bg-base-200"
            textClass="text-base-content"
            cssVar="--b2"
          />
          <BaseSwatch
            name="Base 300"
            bgClass="bg-base-300"
            textClass="text-base-content"
            cssVar="--b3"
          />
        </div>
      </div>
    </section>
  );
}

const NotificationButton = () => {
  const handleNotify = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("PWA Showcase", {
        body: "Notifications are working!",
        icon: "/favicon.ico",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("PWA Showcase", {
            body: "Notifications are working!",
            icon: "/favicon.ico",
          });
        }
      });
    } else {
      alert("Notification permission has been denied.");
    }
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleNotify}
      data-testid="notify-button"
    >
      Test Notification
    </button>
  );
};

const ShareButton = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ("share" in navigator) {
      setIsSupported(true);
    }
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "PWA Showcase",
        text: "Check out this PWA Web Share feature!",
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (!isSupported) {
    return (
      <button
        type="button"
        className="btn btn-secondary"
        disabled
        data-testid="share-button"
      >
        Share API Not Supported
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={handleShare}
      data-testid="share-button"
    >
      Test Share
    </button>
  );
};

const VibrateButton = () => {
  const [isSupported, setIsSupported] = useState(false); // <-- FIX 1: Removed 'new'

  useEffect(() => {
    if ("vibrate" in navigator) {
      setIsSupported(true);
    }
  }, [setIsSupported]); // <-- FIX 2: Added dependency

  const handleVibrate = () => {
    navigator.vibrate([200, 100, 200]);
  };

  if (!isSupported) {
    return (
      <button
        type="button"
        className="btn btn-accent"
        disabled
        data-testid="vibrate-button"
      >
        Vibration API Not Supported
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-accent"
      onClick={handleVibrate}
      data-testid="vibrate-button"
    >
      Test Vibrate
    </button>
  );
};

export default function Home() {
  const showcaseRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    showcaseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex h-dvh bg-base-200">
      <div className="hidden md:flex flex-none border-r p-4 m-4 mt-0 w-16"></div>
      <div className="flex-1 m-2 md:m-8 xl:m-12 2x-l:m-16 overflow-y-auto">
        <header className="">
          <div className="hero bg-base-200 min-h-screen relative">
            <div className="hero-content text-center">
              <div className="max-w-md md:max-w-lg xl:max-w-xl">
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
                  Hello there
                </h1>
                <p className="py-6 xl:text-lg">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <NotificationButton />
                  <ShareButton />
                  <VibrateButton />
                </div>
                <button
                  type="button"
                  onClick={handleScroll}
                  className="btn btn-ghost btn-circle btn-lg mt-8 animate-bounce"
                  aria-label="Scroll to palette"
                  data-testid="scroll-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 xl:w-8 xl:h-8"
                  >
                    <title>Scroll to palette</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <section
          ref={showcaseRef}
          className="scroll-mt-16"
          data-testid="showcase-section"
        >
          <ColorThemeShowcase />
        </section>
      </div>
      <div className="hidden md:flex flex-none border-l p-4 m-4 mt-0 w-16"></div>
    </main>
  );
}
