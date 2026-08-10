import React from 'react';

export default function BreakAndRestConfigPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      
      

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 border-r-0 md:border-r border-slate-200 dark:border-slate-800 pr-0 md:pr-6">
            <nav className="space-y-6 text-sm">
              
              {/* Getting Started */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Getting Started</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Introduction</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Quickstart</a>
              </div>

              {/* Time Tracking */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Time Tracking</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Recording time</a>
                <a href="#" className="block px-2.5 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300 font-semibold rounded-md">
                  Break &amp; rest<br />configuration
                </a>
              </div>

              {/* Deterministic Classification */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Deterministic Classification</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">How classification works</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Policy versioning</a>
              </div>

              {/* Shift Integrity */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Shift Integrity</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Exception states</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Correction workflow</a>
              </div>

              {/* Integrations */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Integrations</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Integrations overview</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Payroll export</a>
              </div>

              {/* API Reference */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">API Reference</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Authentication</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Endpoints overview</a>
              </div>

              {/* Security & Access */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Security &amp; Access</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Data handling</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Roles &amp; permissions</a>
              </div>

            </nav>
          </aside>

          {/* Main Article Content */}
          <main className="flex-1 max-w-4xl space-y-8">
            
            {/* Breadcrumb Trail */}
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
              <span>Documentation</span>
              <span>/</span>
              <span>Time Tracking</span>
            </div>

            {/* Title & Metadata Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">
                Break &amp; rest configuration
              </h1>
              <p className="text-base text-gray-500 dark:text-slate-400">
                Configuring meal and rest categories, scoped by site or region.
              </p>
              <div className="mt-4 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-400">
                Last updated Jul 22, 2026
              </div>
            </div>

            {/* Article Sections */}
            <section className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Meal vs. rest categories</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Meal and rest periods are separate, customer-facing categories. Configure required duration, completeness rules, and review behavior independently for each.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Scoping by site</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Break policy should be scoped per site or region rather than set as one organization-wide default, since requirements frequently vary by jurisdiction.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Legal boundary</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  ZoikoTime configures and evidences break policy workflows; it does not determine legal sufficiency of a given break pattern. Confirm jurisdiction-specific rules with your own legal counsel.
                </p>
              </div>
            </section>

            {/* Page Feedback Callout */}
            <div className="p-4 bg-gray-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-gray-500 dark:text-slate-400">
              Found an issue with this page? <a href="#" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline">Contact us</a> and we&apos;ll take a look.
            </div>

            {/* Pagination / Prev & Next Controls */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors group">
                <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">← Previous</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">Recording time</span>
              </a>
              
              <a href="#" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors text-right group">
                <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">Next →</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">How classification works</span>
              </a>
            </div>

          </main>
        </div>

        {/* Legal Disclaimer Footer Banner */}
        <div className="mt-12 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          This documentation describes current product capability. For task-based video walkthroughs, see <strong>Video Tutorials</strong>. For outcome-led educational content, see <strong>Guides</strong>. For legal, security, and compliance evidence, see <strong>Procurement &amp; Legal Resources</strong>.
        </div>

      </div>
    </div>
  );
}