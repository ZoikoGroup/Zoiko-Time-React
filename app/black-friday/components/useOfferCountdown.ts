"use client";

import { useEffect, useState } from "react";

/** End of Cyber Monday, 30 November 2026 (23:59:59 UTC). */
export const OFFER_END = Date.UTC(2026, 10, 30, 23, 59, 59);

export type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(now: number): Remaining | null {
  const diff = OFFER_END - now;
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * Time left until the offer ends.
 * `undefined` before mount (so static HTML matches the first client render),
 * `null` once the offer has ended.
 */
export function useOfferCountdown(): Remaining | null | undefined {
  const [remaining, setRemaining] = useState<Remaining | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return remaining;
}
