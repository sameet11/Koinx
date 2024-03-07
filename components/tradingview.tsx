// TradingViewWidget.jsx
"use client";
import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "BINANCE:BTCUSD",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "2",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "withdateranges": true,
      "range": "1M",
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    }`;

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      // Remove the script when the component unmounts to prevent multiple chart instances
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={container}></div>;
}

export default memo(TradingViewWidget);
