import React, { useState } from 'react';
import { X, Calculator, Percent, Calendar } from 'lucide-react';
import { Property } from '../types';

interface MortgageModalProps {
  property: Property | null;
  onClose: () => void;
}

export const MortgageModal: React.FC<MortgageModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  const defaultPrice = property.status === 'Buy' ? property.price : 650000000;
  const [homePrice, setHomePrice] = useState<number>(defaultPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(18.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(15);

  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, homePrice - downPaymentAmount);

  // Mortgage formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPrincipalAndInterest =
    monthlyInterestRate === 0
      ? loanAmount / numberOfPayments
      : (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Estimated Legal / Facility fees & Insurance
  const monthlyServiceAndInsurance = (homePrice * 0.002) / 12;
  const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyServiceAndInsurance;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-neutral-100 text-neutral-900">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-neutral-950">Mortgage & Financing Calculator</h2>
              <p className="text-xs text-neutral-500 truncate max-w-xs">{property.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Monthly Estimate Hero Box */}
          <div className="p-5 rounded-2xl bg-neutral-950 text-white text-center">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Estimated Monthly Repayment
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#FDD835] mt-1">
              ₦{Math.round(totalMonthlyPayment).toLocaleString()}{' '}
              <span className="text-sm text-neutral-300 font-normal">/ mo</span>
            </div>
            <div className="text-xs text-neutral-400 mt-2 flex items-center justify-center gap-4">
              <span>P&I: ₦{Math.round(monthlyPrincipalAndInterest).toLocaleString()}</span>
              <span>•</span>
              <span>Loan Amount: ₦{Math.round(loanAmount).toLocaleString()}</span>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                <span>Property Price (NGN)</span>
                <span>₦{homePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={50000000}
                max={4000000000}
                step={25000000}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-neutral-950 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5">
                <span>Equity Down Payment ({downPaymentPercent}%)</span>
                <span>₦{Math.round(downPaymentAmount).toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10}
                max={60}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-neutral-950 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Mortgage Rate (%)
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="5"
                  max="35"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-sm font-semibold focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1">
                  Tenure Term
                </label>
                <select
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 text-sm font-semibold focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white"
                >
                  <option value={5}>5 Years (Developer Milestone)</option>
                  <option value={10}>10 Years Fixed</option>
                  <option value={15}>15 Years Standard Mortgage</option>
                  <option value={20}>20 Years Commercial Banking</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 text-xs text-neutral-500 leading-relaxed">
            * Financing calculations are estimates based on Nigerian primary mortgage institutions (PMIs) and commercial bank mortgage benchmarks. Actual terms, Governor’s Consent titling fees, and credit approvals may vary.
          </div>
        </div>
      </div>
    </div>
  );
};
