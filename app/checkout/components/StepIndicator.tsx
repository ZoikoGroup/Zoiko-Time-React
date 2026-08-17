"use client";

import React from "react";

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: 1, label: "Account" },
    { id: 2, label: "Seats" },
    { id: 3, label: "Billing" },
    { id: 4, label: "Payment" },
  ];

  return (
    <div className="w-full flex items-center justify-between lg:justify-start gap-3 md:gap-4 select-none mb-8 py-2 overflow-x-auto scrollbar-none">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;
        
        return (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-2 shrink-0">
              {/* Circle indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                  isCompleted || isActive
                    ? "bg-emerald-400 text-white"
                    : "bg-slate-200 text-white"
                }`}
              >
                {isCompleted ? (
                  <span className="font-sans leading-none text-[10px] md:text-xs">✓</span>
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              
              {/* Text label */}
              <span
                className={`text-xs md:text-sm font-semibold   leading-5 transition-colors duration-200 ${
                  isActive ? "text-slate-800" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div
                className={`h-px w-8 md:w-16 lg:w-20 shrink-0 transition-colors duration-200 ${
                  currentStep > step.id ? "bg-emerald-400" : "bg-slate-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
