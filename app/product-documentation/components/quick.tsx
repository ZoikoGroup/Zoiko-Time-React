import React from 'react';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      
     

      {/* Main Documentation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 border-r-0 md:border-r border-slate-200 dark:border-slate-800 pr-0 md:pr-6">
            <nav className="space-y-6 text-sm">
              
              {/* Getting Started */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Getting Started</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Introduction</a>
                <a href="#" className="block px-2.5 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300 font-semibold rounded-md">Quickstart</a>
              </div>

              {/* Time Tracking */}
              <div className="space-y-1">
                <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">Time Tracking</h5>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Recording time</a>
                <a href="#" className="block px-2.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">Break &amp; rest configuration</a>
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
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
              <span>Documentation</span>
              <span>/</span>
              <span>Getting Started</span>
            </div>

            {/* Document Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">
                Quickstart
              </h1>
              <p className="text-base text-gray-500 dark:text-slate-400">
                Get a working ZoikoTime configuration in four steps.
              </p>
              <div className="mt-4 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-400">
                Last updated Jul 28, 2026
              </div>
            </div>

            {/* Quickstart Steps */}
            <section className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">1. Create your organization</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Set your organization&apos;s name, primary timezone, and default policy set from the Admin console. You can add sites and regions later — this just establishes your root configuration.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">2. Invite your first workers</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Add workers individually by email, or connect SSO-based provisioning for larger teams. Assign each worker a role: Worker, Reviewer, or Administrator.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">3. Configure a policy</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Set a grace window, rounding rule, and break policy for your primary site. You can preview the impact of any policy change before publishing it.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">4. Record your first shift</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                  Sign in as a test worker and record a shift using the desktop or mobile app. Confirm it appears correctly in the Verification Workspace with the expected state.
                </p>
              </div>
            </section>

            {/* Feedback Banner */}
            <div className="p-4 bg-gray-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-gray-500 dark:text-slate-400">
              Found an issue with this page? <a href="#" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline">Contact us</a> and we&apos;ll take a look.
            </div>

            {/* Pagination Navigation */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="#" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors group">
                <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">← Previous</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">Introduction</span>
              </a>
              
              <a href="#" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors text-right group">
                <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">Next →</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">Recording time</span>
              </a>
            </div>

          </main>
        </div>

        {/* Documentation Disclaimer Banner */}
        <div className="mt-12 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          This documentation describes current product capability. For task-based video walkthroughs, see <strong>Video Tutorials</strong>. For outcome-led educational content, see <strong>Guides</strong>. For legal, security, and compliance evidence, see <strong>Procurement &amp; Legal Resources</strong>.
        </div>

      </div>
    </div>
  );
}