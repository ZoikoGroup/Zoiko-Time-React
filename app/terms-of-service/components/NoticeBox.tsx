"use client";
import React from "react";

export default function NoticeBox() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-teal-600 dark:border-teal-500 rounded-lg p-4 sm:p-5 md:p-6 mb-10 sm:mb-12">
        <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-300 leading-6 sm:leading-7">
          ZoikoTime is a platform of Zoiko Tech Inc. By accessing or using
          ZoikoTime, you agree to these Terms. Please read them carefully—they
          form a binding legal agreement.
        </p>
      </div>
    </div>
  );
}