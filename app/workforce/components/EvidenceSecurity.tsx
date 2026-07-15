import React from "react";

export default function EvidenceSecurity() {

  const cards = [
    {
      icon:"📋",
      title:"Audit Trails",
      text:"Track time events, edits, approvals, exceptions, exports, and administrative actions with timestamps, actor details, and IP records."
    },
    {
      icon:"🔗",
      title:"Evidence Context",
      text:"Link workforce insights to supporting records, notes, screenshots where enabled, and approval history for every governed decision."
    },
    {
      icon:"👥",
      title:"Role-Based Access",
      text:"Control what administrators, managers, workers, finance, HR, legal, and executives can view or manage within the platform."
    },
    {
      icon:"📁",
      title:"Retention Controls",
      text:"Support configurable data retention, legal hold, and record governance requirements across all workforce data categories."
    },
    {
      icon:"🔲",
      title:"Redaction Controls",
      text:"Use screenshot and data visibility controls to support privacy-aware workforce oversight across all deployment configurations."
    },
    {
      icon:"📤",
      title:"Secure Reporting",
      text:"Generate workforce reports designed for internal review, payroll support, billing confidence, and audit readiness with a single export."
    }
  ];


  return (

<section
className="
w-full
bg-slate-100
dark:bg-slate-950
py-12
overflow-hidden
"
>


<div
className="
max-w-[1052px]
mx-auto
px-6
"
>


{/* Label */}

<p
className="
text-center
text-teal-600
dark:text-teal-400
text-xs
font-bold
uppercase
tracking-wider
"
>
Evidence and Security
</p>



{/* Heading */}

<h2
className="
mt-6
max-w-[750px]
mx-auto
text-center
text-slate-900
dark:text-white
text-3xl
lg:text-4xl
font-semibold
leading-10
"
>
Built for Trusted Records, Secure Controls, and Audit-Ready Evidence
</h2>



{/* Description */}

<p
className="
mt-6
max-w-[900px]
mx-auto
text-center
text-slate-500
dark:text-slate-300
text-base
leading-7
"
>
Workforce intelligence is most valuable when it can support real
business decisions. ZoikoTime connects insights to underlying
records, approvals, exceptions, policies, and audit history.
</p>





{/* Cards */}

<div
className="
mt-16
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-12
"
>


{
cards.map((card)=>(
<div
key={card.title}
className="
min-h-[180px]
bg-white
dark:bg-slate-900
rounded-2xl
border
border-teal-600
p-6
"
>


<div
className="
text-2xl
"
>
{card.icon}
</div>



<h3
className="
mt-5
text-slate-900
dark:text-white
text-base
font-semibold
"
>
{card.title}
</h3>



<p
className="
mt-4
text-slate-500
dark:text-slate-300
text-xs
leading-5
"
>
{card.text}
</p>



</div>
))
}


</div>





{/* Buttons */}

<div
className="
mt-16
flex
flex-col
sm:flex-row
justify-center
gap-6
"
>


<button
className="
w-full
sm:w-64
h-12
bg-teal-600
rounded-lg
text-white
text-base
font-semibold
shadow-lg
"
>
Request a Demo
</button>



<button
className="
w-full
sm:w-64
h-12
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
rounded-lg
text-slate-700
dark:text-white
text-sm
font-medium
"
>
Explore Enterprise Readiness
</button>


</div>



</div>


</section>

  );
}