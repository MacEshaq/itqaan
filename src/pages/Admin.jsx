import React from "react";

// yo stopped here. add this admin page as navlink.

export default function AdminDashboardContent() {
  return (
    <section className="w-full bg-[#fafafa] text-[#1a1a1a] font-sans antialiased py-10 px-6 md:px-10 selection:bg-black selection:text-white">
      {/* Maximum structural bounding box */}
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Workspace Title Area */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#e5e5e5] pb-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
              Management Console
            </h1>
            <p className="text-xs md:text-sm text-[#737373] mt-1">
              Real-time status configurations and platform analytical outputs.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Systems
            </span>
          </div>
        </div>

        {/* Metric KPI Cards Layout Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#e5e5e5] p-6 rounded-lg space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
              Active Node Allocations
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">1,482</span>
              <span className="text-[11px] font-semibold text-emerald-600">
                +12%
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6 rounded-lg space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
              System Output Efficiency
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">99.94%</span>
              <span className="text-[11px] font-semibold text-neutral-400">
                Stable
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6 rounded-lg space-y-2 sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-wider text-[#737373]">
              Active Requests / Sec
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">412 req</span>
              <span className="text-[11px] font-semibold text-rose-600">
                -3%
              </span>
            </div>
          </div>
        </section>

        {/* Activity Layout Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
              Recent System Blueprints
            </h3>
            <button className="text-xs font-semibold border border-[#e5e5e5] bg-white px-3 py-1.5 rounded-md hover:bg-[#fafafa] transition-all cursor-pointer">
              Export Data
            </button>
          </div>

          {/* Micro-Minimalist Data Table */}
          <div className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#fafafa] border-b border-[#e5e5e5] text-xs font-medium uppercase tracking-wider text-[#737373]">
                    <th className="p-4 font-medium">Identifier</th>
                    <th className="p-4 font-medium">Deployment Target</th>
                    <th className="p-4 font-medium">Temporal Signature</th>
                    <th className="p-4 font-medium text-right">
                      Integrity Index
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e5e5]">
                  <tr className="hover:bg-[#fafafa]/50 transition-colors">
                    <td className="p-4 font-mono font-medium text-black">
                      BLPR-2026-X
                    </td>
                    <td className="p-4 text-[#737373]">Riyadh Main Terminal</td>
                    <td className="p-4 text-[#737373]">Oct 24, 2026</td>
                    <td className="p-4 text-right font-medium text-emerald-600">
                      Passed
                    </td>
                  </tr>
                  <tr className="hover:bg-[#fafafa]/50 transition-colors">
                    <td className="p-4 font-mono font-medium text-black">
                      BLPR-2026-Y
                    </td>
                    <td className="p-4 text-[#737373]">Dammam Eco-Tower</td>
                    <td className="p-4 text-[#737373]">Oct 22, 2026</td>
                    <td className="p-4 text-right font-medium text-emerald-600">
                      Passed
                    </td>
                  </tr>
                  <tr className="hover:bg-[#fafafa]/50 transition-colors">
                    <td className="p-4 font-mono font-medium text-black">
                      BLPR-2026-Z
                    </td>
                    <td className="p-4 text-[#737373]">
                      Jeddah Coastal Complex
                    </td>
                    <td className="p-4 text-[#737373]">Oct 19, 2026</td>
                    <td className="p-4 text-right font-medium text-amber-600">
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
