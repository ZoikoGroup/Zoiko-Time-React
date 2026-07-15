import React from "react";

export default function AIGovernance() {

  const governancePoints = [
    {
      icon: "🔍",
      text: "Pattern detection for unusual time, activity, or attendance signals",
    },
    {
      icon: "📋",
      text: "Executive-ready summaries of workforce trends across teams and periods",
    },
    {
      icon: "🚦",
      text: "Exception prioritization routed to the right human reviewer",
    },
    {
      icon: "💡",
      text: "Explainable signals instead of opaque automated judgments",
    },
    {
      icon: "👤",
      text: "Human review required for all sensitive workforce decisions",
    },
    {
      icon: "🛡",
      text: "Transparency and governance controls for responsible deployment",
    },
  ];


  const insights = [
    {
      label:"Session pattern analysis",
      status:"Consistent",
      color:"text-teal-500"
    },
    {
      label:"Idle pattern flag",
      status:"3 signals — review",
      color:"text-amber-500"
    },
    {
      label:"Edit frequency",
      status:"Within normal range",
      color:"text-teal-500"
    },
    {
      label:"Approval gap detection",
      status:"2 gaps — escalated",
      color:"text-red-500"
    },
    {
      label:"Payroll record readiness",
      status:"94% supported",
      color:"text-teal-500"
    },
    {
      label:"Utilization signal",
      status:"Below target — 78%",
      color:"text-amber-500"
    }
  ];


  return (

<section
className="
w-full
min-h-[855px]
bg-slate-900
dark:bg-black
py-12
overflow-hidden
"
>

<div className="max-w-[1052px] mx-auto px-6">


{/* Header */}

<p
className="
text-center
text-teal-500
text-xs
font-bold
uppercase
tracking-wider
"
>
AI Governance
</p>


<h2
className="
mt-6
text-center
text-white
text-3xl
font-semibold
leading-10
"
>
AI-Assisted Intelligence. Human-Governed Decisions.
</h2>


<p
className="
mt-4
max-w-[900px]
mx-auto
text-center
text-white/60
text-base
leading-7
"
>
ZoikoTime uses AI-assisted analysis to help identify patterns,
summarize workforce trends, surface exceptions, and prioritize review.
The system is designed to support accountable human decision-making.
</p>




<div
className="
mt-16
grid
lg:grid-cols-2
gap-10
"
>


{/* Left Side */}

<div className="space-y-4">


{
governancePoints.map((item)=>(
<div
key={item.text}
className="
flex
items-center
gap-4
bg-white/5
border
border-white/10
rounded-lg
px-4
py-3
min-h-[48px]
"
>

<span
className="
text-lg
"
>
{item.icon}
</span>


<p
className="
text-white/75
text-sm
leading-5
"
>
{item.text}
</p>


</div>
))
}



<div
className="
bg-teal-500/10
border
border-teal-500/20
rounded-lg
p-5
text-teal-500/90
text-xs
leading-5
"
>

ZoikoTime should inform workforce decisions, not automatically impose
adverse outcomes. Critical decisions should remain subject to appropriate
human review, organizational policy, and applicable law.

</div>



</div>





{/* Right Insight Panel */}

<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"
>


<p
className="
text-center
text-white/40
text-xs
font-bold
uppercase
tracking-wide
mb-6
"
>
AI Insight Layer — Live View
</p>



<div className="space-y-4">


{
insights.map((item)=>(
<div
key={item.label}
className="
flex
justify-between
items-center
bg-white/5
rounded-lg
px-4
py-3
"
>

<span
className="
text-white/50
text-xs
font-semibold
"
>
{item.label}
</span>


<span
className={`
${item.color}
text-xs
font-bold
font-mono
`}
>
{item.status}
</span>


</div>
))
}



<div
className="
bg-teal-500/10
border
border-teal-500/20
rounded-lg
p-4
text-teal-500/80
text-xs
leading-5
"
>
All signals routed to human reviewer before any action is taken.
No automated adverse decisions.
</div>


</div>


</div>


</div>



<button
className="
block
mx-auto
mt-16
px-10
py-3
rounded-lg
border
border-white/20
text-white/80
text-sm
font-semibold
hover:bg-white/10
transition
"
>
Explore Enterprise Readiness →
</button>



</div>


</section>

  );
}