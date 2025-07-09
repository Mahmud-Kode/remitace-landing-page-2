"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OnboardingCalculator() {
  const [sendAmount, setSendAmount] = useState("1000")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")

  // Mock exchange rate calculation
  const exchangeRate = 0.85
  const receiveAmount = (Number.parseFloat(sendAmount) * exchangeRate).toFixed(2)

  return (
    <Card className="w-full max-w-sm bg-white shadow-xl border-0 p-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">You send</label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="text-lg font-semibold pr-16"
                placeholder="1000"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                {fromCurrency}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Recipient gets</label>
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Input type="text" value={receiveAmount} readOnly className="text-lg font-semibold pr-16 bg-gray-50" />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                {toCurrency}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="CAD">CAD</SelectItem>
            </SelectContent>
          </Select>

          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="PHP">PHP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Exchange Rate</div>
          <div className="text-lg font-bold text-primary">
            1 {fromCurrency} = {exchangeRate} {toCurrency}
          </div>
          <div className="text-xs text-gray-500">Live rates for IMTOs</div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">Get IMTO Rates</Button>
      </div>
    </Card>
  )
}
