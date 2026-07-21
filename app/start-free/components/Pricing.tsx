"use client";

import React, { useState } from "react";


const plans = [
  {
    name: "Verified",
    monthly: "$10",
    annual: "$8",
    description:
      "Small teams needing verified time records and basic accountability.",
    features: [
      "Core time records",
      "Basic AI confidence scoring",
      "Optional screenshots",
      "90-day retention",
      "Basic reporting",
    ],
    disabled: [
      "Policy engine",
      "Evidence packages",
    ],
  },


  {
    name: "Governed",
    monthly: "$20",
    annual: "$16",
    popular: true,
    description:
      "Growing teams needing policy governance, stronger evidence, and admin controls.",
    features: [
      "Everything in Verified",
      "Full policy engine",
      "Anomaly detection",
      "Configurable screenshots + redaction",
      "Evidence packages",
      "Advanced reports",
      "2-year retention",
    ],
  },


  {
    name: "Sovereign",
    monthly: "$35",
    annual: "$28",
    description:
      "High-accountability, multi-jurisdiction, legal, compliance, or audit-sensitive teams.",
    features: [
      "Everything in Governed",
      "Jurisdiction-aware policies",
      "Legal hold + chain of custody",
      "SSO / SAML + advanced RBAC",
      "Full API & webhooks",
      "Security/compliance support path",
    ],
  },


  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    enterprise: true,
    description:
      "Large, regulated, complex, or procurement-led deployments requiring custom contracts.",
    features: [
      "Everything in Sovereign",
      "Custom MSA / DPA",
      "Data residency options",
      "Private cloud / on-prem",
      "Dedicated implementation",
      "Custom SLA & support model",
    ],
  },

];



export default function Pricing() {


  const [billing,setBilling] =
  useState<"monthly"|"annual">("annual");



  return (

<section
className="
w-full
bg-white
dark:bg-slate-950
py-20
transition-colors
"
>


{/* HEADER */}

<div
className="
mx-auto
max-w-5xl
text-center
px-5
"
>


<p
className="
text-xs
uppercase
tracking-widest
font-bold
text-teal-900
dark:text-teal-400
"
>
Pricing
</p>



<h1
className="
mt-5
text-3xl
sm:text-4xl
lg:text-5xl
font-black
text-gray-900
dark:text-white
"
>
Start free. Upgrade when ready.
</h1>




<p
className="
mt-5
text-sm
sm:text-base
text-gray-500
dark:text-gray-400
"
>
All plans start with a 30-day free trial.
Your trial workspace becomes your paid
workspace — no restart, no data loss.
</p>




{/* BILLING TOGGLE */}

<div
className="
mt-10
flex
justify-center
items-center
gap-5
"
>


<span
className={`
text-sm
transition

${
billing==="monthly"
?
"text-teal-900 dark:text-teal-400 font-bold"
:
"text-gray-500"
}

`}
>
Monthly
</span>




<button

onClick={()=>


setBilling(
billing==="monthly"
?
"annual"
:
"monthly"
)


}

className="
relative
w-10
h-6
rounded-full
bg-teal-900
"

>


<span

className={`
absolute
top-1
w-4
h-4
bg-white
rounded-full
transition-all
duration-300


${
billing==="annual"
?
"left-5"
:
"left-1"
}

`}

/>


</button>





<span

className={`
text-sm
transition

${
billing==="annual"
?
"text-teal-900 dark:text-teal-400 font-bold"
:
"text-gray-500"
}

`}

>

Annual

</span>




<span

className="
px-3
py-1
rounded-full
bg-emerald-100
dark:bg-emerald-900/40
text-emerald-700
dark:text-emerald-300
text-xs
font-bold
"

>

Save ~20%

</span>



</div>



</div>

{/* PRICING CARDS */}

<div
className="
mx-auto
mt-16
max-w-6xl
px-5
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
plans.map((plan)=>(


<div
key={plan.name}

className={`
relative
rounded-2xl
p-6
transition-all


${
plan.popular

?

`
bg-white
dark:bg-slate-900
border
border-teal-900
dark:border-teal-500
shadow-[0_0_0_4px_rgba(10,79,74,0.06)]
`

:

`
bg-slate-100
dark:bg-slate-900
border
border-zinc-200
dark:border-slate-700
`
}


`}

>



{/* POPULAR BADGE */}

{

plan.popular &&

<div
className="
absolute
-top-1
left-1/2
-translate-x-1/2
bg-teal-900
text-white
text-[10px]
font-bold
px-4
py-1
rounded-b-lg
"
>

Most popular

</div>

}




{/* PLAN NAME */}


<p
className="
text-xs
uppercase
tracking-wide
font-bold
text-gray-400
"
>

{plan.name}

</p>





{/* PRICE */}


<div
className="
mt-4
flex
items-end
gap-2
"
>


<h2
className="
text-4xl
font-black
text-gray-900
dark:text-white
"
>

{
plan[billing]
}

</h2>



{

!plan.enterprise &&

<span
className="
mb-1
text-sm
text-gray-500
dark:text-gray-400
"
>
/ worker
</span>

}


</div>





{/* BILLING TEXT */}


<p
className="
mt-2
text-xs
text-gray-400
"
>

{

plan.enterprise

?

"talk to sales · pilot-led"

:

billing==="annual"

?

"per month · billed annually"

:

"per month · billed monthly"

}

</p>






{/* DESCRIPTION */}


<div
className="
mt-6
pb-6
border-b
border-zinc-200
dark:border-slate-700
"
>


<p
className="
text-xs
leading-5
text-gray-500
dark:text-gray-400
"
>

{plan.description}

</p>


</div>





{/* FEATURES */}


<ul
className="
mt-6
space-y-4
"
>


{

plan.features.map((feature)=>(


<li

key={feature}

className="
flex
gap-3
items-start
text-xs
text-gray-700
dark:text-gray-300
"

>


<span
className="
text-emerald-700
dark:text-emerald-400
"
>

✓

</span>


<span>

{feature}

</span>


</li>


))

}





{

plan.disabled?.map((feature)=>(


<li

key={feature}

className="
flex
gap-3
items-start
text-xs
text-gray-400
dark:text-gray-600
"

>


<span>

✕

</span>


<span>

{feature}

</span>


</li>


))

}



</ul>

{/* BUTTON */}


<button

className={`
mt-8
w-full
h-10
rounded-lg
text-xs
font-black
transition-all


${
plan.popular

?

`
bg-teal-900
hover:bg-teal-800
text-white
shadow-[0px_2px_8px_rgba(10,79,74,0.20)]
`

:

plan.enterprise

?

`
bg-white
dark:bg-slate-900
border
border-teal-500
text-teal-500
hover:bg-teal-50
dark:hover:bg-slate-800
`

:

`
bg-white
dark:bg-slate-800
border
border-teal-900
dark:border-teal-500
text-teal-900
dark:text-teal-400
hover:bg-gray-50
dark:hover:bg-slate-700
`

}

`}

>


{

plan.enterprise

?

"Get a Demo"

:

"Start Free"

}


</button>





</div>


))


}


</div>





</section>


  );

}