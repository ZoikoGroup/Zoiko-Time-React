"use client";

import React, { useState } from "react";
import Link from "next/link";
import StepIndicator from "./components/StepIndicator";
import OrderSummary from "./components/OrderSummary";
import AccountStep from "./components/AccountStep";
import SeatsStep from "./components/SeatsStep";
import BillingStep from "./components/BillingStep";
import PaymentStep from "./components/PaymentStep";
import SuccessStep from "./components/SuccessStep";
import PlanLimitModal from "./components/PlanLimitModal";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // --- Step 1: Account State ---
  const [accountType, setAccountType] = useState<"new" | "existing">("new");
  const [fullName, setFullName] = useState("Alex Kim");
  const [email, setEmail] = useState("you@company.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [orgName, setOrgName] = useState("Acme Inc.");
  const [teamSize, setTeamSize] = useState("1–10");
  const [phone, setPhone] = useState("");

  // --- Step 2: Seats & Plan State ---
  const [seats, setSeats] = useState(5);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<"Governed" | "Sovereign">("Governed");
  const [isPlanLimitModalOpen, setIsPlanLimitModalOpen] = useState(false);

  // --- Step 3: Billing State ---
  const [billingName, setBillingName] = useState("Acme Inc.");
  const [country, setCountry] = useState("United States");
  const [address1, setAddress1] = useState("123 Market St");
  const [address2, setAddress2] = useState("Suite 400");
  const [city, setCity] = useState("San Francisco");
  const [stateProv, setStateProv] = useState("CA");
  const [postalCode, setPostalCode] = useState("94103");
  const [taxId, setTaxId] = useState("");
  const [billingEmail, setBillingEmail] = useState("ap@company.com");

  // --- Step 4: Payment State ---
  const [cardName, setCardName] = useState("Alex Kim");
  const [cardNumber, setCardNumber] = useState("1234 1234 1234 1234");
  const [expiry, setExpiry] = useState("MM/YY");
  const [cvc, setCvc] = useState("123");
  const [cardPostalCode, setCardPostalCode] = useState("94103");
  const [saveCard, setSaveCard] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // --- Wizard Handlers ---
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    // Scroll page back to top when moving between steps
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedPlan("Governed");
    setPassword("");
    setConfirmPassword("");
    setAgreeTerms(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"));
  };

  // Modal Handlers
  const handleReduceSeats = () => {
    setSeats(250);
    setIsPlanLimitModalOpen(false);
  };

  const handleSwitchToSovereign = () => {
    setSelectedPlan("Sovereign");
    setIsPlanLimitModalOpen(false);
    handleNext();
  };

  const handleRequestEnterprise = () => {
    // Enterprise request handler
  };

  // Determine page title
  const pageTitle = currentStep === 1 ? "Start your free trial" : "Complete your subscription";

  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium leading-5 mb-5">
          <Link href="/" className="text-teal-600 hover:text-teal-700 transition-colors">
            Home
          </Link>
          <span>→</span>
          <Link href="/pricing" className="text-teal-600 hover:text-teal-700 transition-colors">
            Pricing
          </Link>
          <span>→</span>
          <span className="text-gray-500">Checkout</span>
        </div>

        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-slate-800 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {pageTitle}
          </h1>
          <div className="flex items-center gap-2 mt-3 select-none">
            {/* Secure Icon */}
            <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-emerald-400 text-xs font-semibold leading-5">
              Secure checkout
            </span>
          </div>
        </div>

        {/* Step Timeline Indicator */}
        <StepIndicator currentStep={currentStep} />

        {/* Main Columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 items-start">
          {/* Left Column: Forms */}
          <div className="flex-1 w-full max-w-[650px]">
            {currentStep === 1 && (
              <AccountStep
                accountType={accountType}
                setAccountType={setAccountType}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                orgName={orgName}
                setOrgName={setOrgName}
                teamSize={teamSize}
                setTeamSize={setTeamSize}
                phone={phone}
                setPhone={setPhone}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <SeatsStep
                seats={seats}
                setSeats={setSeats}
                onNext={handleNext}
                onBack={handleBack}
                selectedPlan={selectedPlan}
                onOpenPlanLimitModal={() => setIsPlanLimitModalOpen(true)}
              />
            )}

            {currentStep === 3 && (
              <BillingStep
                billingName={billingName}
                setBillingName={setBillingName}
                country={country}
                setCountry={setCountry}
                address1={address1}
                setAddress1={setAddress1}
                address2={address2}
                setAddress2={setAddress2}
                city={city}
                setCity={setCity}
                stateProv={stateProv}
                setStateProv={setStateProv}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                taxId={taxId}
                setTaxId={setTaxId}
                billingEmail={billingEmail}
                setBillingEmail={setBillingEmail}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 4 && (
              <PaymentStep
                cardName={cardName}
                setCardName={setCardName}
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                expiry={expiry}
                setExpiry={setExpiry}
                cvc={cvc}
                setCvc={setCvc}
                cardPostalCode={cardPostalCode}
                setCardPostalCode={setCardPostalCode}
                saveCard={saveCard}
                setSaveCard={setSaveCard}
                agreeTerms={agreeTerms}
                setAgreeTerms={setAgreeTerms}
                seats={seats}
                billingCycle={billingCycle}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {currentStep === 5 && (
              <SuccessStep
                fullName={fullName}
                email={email}
                orgName={orgName}
                seats={seats}
                billingCycle={billingCycle}
                cardNumber={cardNumber}
                onReset={handleReset}
              />
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <OrderSummary
              seats={seats}
              billingCycle={billingCycle}
              accountType={accountType}
              selectedPlan={selectedPlan}
              onToggleBillingCycle={handleToggleBillingCycle}
            />
          </div>
        </div>
      </div>

      {/* Plan Limit Exceeded Modal */}
      <PlanLimitModal
        isOpen={isPlanLimitModalOpen}
        onClose={() => setIsPlanLimitModalOpen(false)}
        seats={seats}
        onReduceSeats={handleReduceSeats}
        onSwitchToSovereign={handleSwitchToSovereign}
        onRequestEnterprise={handleRequestEnterprise}
      />
    </div>
  );
}
