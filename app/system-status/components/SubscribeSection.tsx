'use client'
import React, { useState } from 'react';

export default function SubscribeSection() {
  const [topics, setTopics] = useState<string[]>(['Incidents']);
  const [channel, setChannel] = useState<string>('Email');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [marketingAgreed, setMarketingAgreed] = useState(false);

  const toggleTopic = (topic: string) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <section id="subscribe" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Subscribe to Updates
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Operational Notifications, Not Marketing
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            No organization, job title, or procurement-stage fields. Marketing consent is separate, optional, and never preselected.
          </p>
        </header>

        {/* Subscription Form Card */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10 flex flex-col gap-8">
          
          {/* STEP 1: What do you want to hear about? */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 1
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                What do you want to hear about?
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'Incidents', label: 'Incidents' },
                { id: 'Maintenance', label: 'Planned maintenance' },
                { id: 'AllStatus', label: 'All public status changes' },
              ].map((item) => {
                const checked = topics.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleTopic(item.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      checked
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}} // Handled by button onClick
                      className="w-3.5 h-3.5 rounded border-slate-300 dark:border-slate-600 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Scope */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 2
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Scope
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Components
                </label>
                <select className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option>All components</option>
                  <option>Core API</option>
                  <option>Authentication</option>
                  <option>Web Dashboard</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Region
                </label>
                <select className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option>All public regions</option>
                  <option>US East</option>
                  <option>EU West</option>
                  <option>APAC</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 3: Channel and delivery */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 3
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Channel and delivery
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['Email', 'RSS', 'Webhook'].map((ch) => {
                const selected = channel === ch;
                return (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setChannel(ch)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      selected
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryChannel"
                      checked={selected}
                      onChange={() => {}} // Handled by button onClick
                      className="w-3.5 h-3.5 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{ch}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Channels that are not currently supported do not appear here as options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="userEmail" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Email address
                </label>
                <input
                  id="userEmail"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Timezone
                </label>
                <select className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                  <option>UTC</option>
                  <option>America/New_York (EST)</option>
                  <option>Europe/London (GMT)</option>
                  <option>Asia/Tokyo (JST)</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 4: Confirm */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 4
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Confirm
              </h3>
            </div>

            {/* Privacy Checkbox */}
            <label className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                I have read the{' '}
                <a href="#privacy" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                  privacy notice
                </a>{' '}
                explaining what is collected for status notifications and how long it is kept.
              </span>
            </label>

            {/* Optional Marketing Checkbox */}
            <label className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={marketingAgreed}
                onChange={(e) => setMarketingAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="font-bold text-slate-900 dark:text-white mr-1">
                  Optional and unrelated:
                </strong>
                send me ZoikoTime product news. This is not required to receive status updates, and leaving it unchecked changes nothing about your subscription.
              </span>
            </label>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg shadow-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50 font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Manage an existing subscription
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              You will receive a verification step before any notification is sent. Unsubscribe is one action from every message, and your selections never appear in URLs or analytics.
            </p>
          </div>

        </div>

        {/* Subscription Management Cards Sub-Section */}
        <div className="w-full flex flex-col gap-4 pt-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Subscription management
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* View Card */}
            <div className="p-6 bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">View</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Your selected components, regions, event types, channel, and locale.
              </p>
            </div>

            {/* Pause Card */}
            <div className="p-6 bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Pause</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Temporarily stop delivery without losing your selections.
              </p>
            </div>

            {/* Modify Card */}
            <div className="p-6 bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Modify</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Change scope or channel, with the effective state confirmed back to you.
              </p>
            </div>

            {/* Unsubscribe Card */}
            <div className="p-6 bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Unsubscribe</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                One clear action. No dark pattern, no hidden link, no retention flow.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
