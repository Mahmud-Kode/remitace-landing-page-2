"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OnboardingCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState("100000")
  const [corridors, setCorridors] = useState("5")

  return (
    <Card className="w-full max-w-sm bg-white shadow-xl border-0 p-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Monthly Transfer Volume</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <Input
              type="text"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(e.target.value)}
              className="pl-8 text-lg font-semibold"
              placeholder="100,000"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Number of Corridors</label>
          <Select value={corridors} onValueChange={setCorridors}>
            <SelectTrigger className="text-lg font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Corridor</SelectItem>
              <SelectItem value="3">3 Corridors</SelectItem>
              <SelectItem value="5">5 Corridors</SelectItem>
              <SelectItem value="10">10+ Corridors</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Estimated Monthly Savings</div>
          <div className="text-2xl font-bold text-primary">$2,500</div>
          <div className="text-xs text-gray-500">vs traditional providers</div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
          Start Onboarding
        </Button>
      </div>
    </Card>
  )
}
