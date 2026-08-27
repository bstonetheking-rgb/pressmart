import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Percent,
  Calendar,
  Building,
  TrendingUp,
  DollarSign,
  PieChart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppWidget';

export const CalculatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mortgage' | 'yield' | 'offplan'>('mortgage');

  // Mortgage Calculator State
  const [propertyPrice, setPropertyPrice] = useState<number>(650000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(18.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(15);

  // Rental Yield State
  const [yieldPropPrice, setYieldPropPrice] = useState<number>(500000000);
  const [annualRent, setAnnualRent] = useState<number>(35000000);
  const [serviceCharge, setServiceCharge] = useState<number>(3500000);
  const [annualAppreciationRate, setAnnualAppreciationRate] = useState<number>(14);

  // Off-plan Milestone State
  const [offPlanTotal, setOffPlanTotal] = useState<number>(450000000);
  const [initialCommitment, setInitialCommitment] = useState<number>(30);
  const [milestoneDuration, setMilestoneDuration] = useState<number>(18);

  // Mortgage Math
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanPrincipal = Math.max(0, propertyPrice - downPaymentAmount);
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;
  const monthlyPaymentPI =
    monthlyRate === 0
      ? loanPrincipal / totalMonths
      : (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPaidOverLife = monthlyPaymentPI * totalMonths + downPaymentAmount;
  const totalInterestPaid = Math.max(0, totalPaidOverLife - propertyPrice);

  // Yield Math
  const grossRentalYield = (annualRent / yieldPropPrice) * 100;
  const netRentalYield = ((annualRent - serviceCharge) / yieldPropPrice) * 100;
  const estimatedFiveYearValuation = yieldPropPrice * Math.pow(1 + annualAppreciationRate / 100, 5);

  return (
    <div className="pt-24 pb-20 bg-[#F8F9FA] min-h-screen">
      {/* Top Header */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
            <Link to="/" className="hover:text-[#FDD835]">Home</Link>
            <span>/</span>
            <span className="text-[#FDD835]">Investment & Financing Calculator</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FDD835] text-neutral-950 text-xs font-extrabold uppercase tracking-wider inline-block">
              Nigerian Real Estate Financial Modeling
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Mortgage & Investment Yield Calculator
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Model loan repayments, compute net rental yields in Lagos and Abuja, and structure flexible developer milestone installment plans.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-200/80 rounded-2xl max-w-2xl">
          <button
            onClick={() => setActiveTab('mortgage')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'mortgage'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Mortgage Financing</span>
          </button>

          <button
            onClick={() => setActiveTab('yield')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'yield'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Rental Yield & ROI</span>
          </button>

          <button
            onClick={() => setActiveTab('offplan')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'offplan'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Off-Plan Milestones</span>
          </button>
        </div>

        {/* Tab 1: Mortgage Calculator */}
        {activeTab === 'mortgage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-neutral-950">Loan Parameters</h2>

              <div className="space-y-5">
                {/* Property Price */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Property Asking Price</span>
                    <span className="text-[#0B2545] font-extrabold">₦{propertyPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={100000000}
                    max={3000000000}
                    step={25000000}
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>₦100M</span>
                    <span>₦1.5B</span>
                    <span>₦3 Billion+</span>
                  </div>
                </div>

                {/* Down Payment Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Equity Down Payment ({downPaymentPercent}%)</span>
                    <span className="text-emerald-700 font-extrabold">₦{Math.round(downPaymentAmount).toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={70}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>10% (Minimum)</span>
                    <span>40%</span>
                    <span>70%</span>
                  </div>
                </div>

                {/* Interest Rate & Tenure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Annual Interest Rate (% p.a.)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="5"
                      max="35"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold"
                    />
                    <span className="text-[10px] text-neutral-500 mt-1 block">
                      Typical Nigerian Commercial Bank benchmark: 17% – 22%
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Loan Duration / Tenure
                    </label>
                    <select
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold"
                    >
                      <option value={5}>5 Years (Developer Short-Term)</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years (Primary Mortgage)</option>
                      <option value={20}>20 Years (Standard Bank)</option>
                      <option value={25}>25 Years (Extended Facility)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card (5 Cols) */}
            <div className="lg:col-span-5 bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#FDD835] tracking-wider">
                  Payment Projection
                </span>
                <h3 className="text-xl font-extrabold mt-1">Monthly Repayment</h3>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
                <div className="text-xs text-neutral-400 uppercase font-semibold">
                  Estimated Monthly Installment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FDD835] mt-1">
                  ₦{Math.round(monthlyPaymentPI).toLocaleString()}
                </div>
                <div className="text-xs text-neutral-400 mt-2">
                  Principal & Interest across {loanTermYears} years ({totalMonths} monthly cycles)
                </div>
              </div>

              <div className="space-y-3 text-xs border-t border-neutral-800 pt-4">
                <div className="flex justify-between text-neutral-300">
                  <span>Down Payment Equity:</span>
                  <span className="font-bold text-white">₦{Math.round(downPaymentAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Net Loan Principal:</span>
                  <span className="font-bold text-white">₦{Math.round(loanPrincipal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Total Cumulative Interest:</span>
                  <span className="font-bold text-white">₦{Math.round(totalInterestPaid).toLocaleString()}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/2347086429976?text=${encodeURIComponent(`Hello Pressmart, I computed a mortgage scenario for a ₦${propertyPrice.toLocaleString()} property with ₦${Math.round(monthlyPaymentPI).toLocaleString()}/mo repayment. I would like advisory on financing.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Discuss Financing with an Advisor</span>
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Rental Yield & ROI Calculator */}
        {activeTab === 'yield' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-neutral-950">Rental Yield Modeling</h2>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Acquisition Value (NGN)</span>
                    <span className="text-[#0B2545] font-extrabold">₦{yieldPropPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={100000000}
                    max={2000000000}
                    step={25000000}
                    value={yieldPropPrice}
                    onChange={(e) => setYieldPropPrice(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Expected Annual Rental Income (NGN)
                    </label>
                    <input
                      type="number"
                      step={500000}
                      value={annualRent}
                      onChange={(e) => setAnnualRent(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Annual Service & Sinking Fund (NGN)
                    </label>
                    <input
                      type="number"
                      step={250000}
                      value={serviceCharge}
                      onChange={(e) => setServiceCharge(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Projected Capital Appreciation Rate ({annualAppreciationRate}% / yr)</span>
                    <span className="text-emerald-700 font-extrabold">{annualAppreciationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={annualAppreciationRate}
                    onChange={(e) => setAnnualAppreciationRate(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">
                    Banana Island & Eko Atlantic historically appreciate at 15% - 22% per annum.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#FDD835] tracking-wider">
                  Yield Metrics
                </span>
                <h3 className="text-xl font-extrabold mt-1">Return on Investment</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Gross Yield</div>
                  <div className="text-2xl font-extrabold text-[#FDD835] mt-1">
                    {grossRentalYield.toFixed(1)}%
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Net Yield</div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                    {netRentalYield.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-1 text-center">
                <div className="text-xs text-neutral-400">Estimated 5-Year Capital Valuation</div>
                <div className="text-2xl font-extrabold text-white">
                  ₦{Math.round(estimatedFiveYearValuation).toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-400">
                  Net capital gain of ₦{Math.round(estimatedFiveYearValuation - yieldPropPrice).toLocaleString()}
                </div>
              </div>

              <a
                href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20would%20like%20to%20review%20high-yield%20rental%20properties%20in%20Lagos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Source High-Yield Properties</span>
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Off-Plan Milestones */}
        {activeTab === 'offplan' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-extrabold text-neutral-950">Off-Plan Milestone Tranches</h2>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Total Off-Plan Contract Value</span>
                    <span className="text-[#0B2545] font-extrabold">₦{offPlanTotal.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={150000000}
                    max={1500000000}
                    step={25000000}
                    value={offPlanTotal}
                    onChange={(e) => setOffPlanTotal(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                    <span>Initial Commitment / Groundbreaking ({initialCommitment}%)</span>
                    <span className="text-emerald-700 font-extrabold">
                      ₦{Math.round((offPlanTotal * initialCommitment) / 100).toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={50}
                    step={5}
                    value={initialCommitment}
                    onChange={(e) => setInitialCommitment(Number(e.target.value))}
                    className="w-full accent-neutral-950 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-4">
              <span className="text-xs uppercase font-bold text-[#FDD835] tracking-wider">
                Structured Payment Plan
              </span>
              <h3 className="text-xl font-extrabold">Developer Installment Tranches</h3>

              <div className="space-y-3 text-xs pt-2">
                <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">Tranche 1: Commitment Deposit</div>
                    <div className="text-neutral-400">At contract signing & allocation</div>
                  </div>
                  <div className="text-sm font-extrabold text-[#FDD835]">
                    ₦{Math.round((offPlanTotal * initialCommitment) / 100).toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">Tranche 2: Carcass & Roofing</div>
                    <div className="text-neutral-400">At structural completion (Month 6)</div>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    ₦{Math.round(offPlanTotal * 0.35).toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">Tranche 3: Key Handover & Deed</div>
                    <div className="text-neutral-400">At snagging & title deed execution</div>
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    ₦{Math.round(offPlanTotal * (1 - initialCommitment / 100 - 0.35)).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20would%20like%20to%20structure%20an%20off-plan%20developer%20milestone%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Request Off-Plan Developer Deals</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
