"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"

export default function MinedSharesExplorer() {
  const [expandedMiners, setExpandedMiners] = useState({
    miner1: true,
    miner2: false,
  })

  const toggleMiner = (miner: string) => {
    setExpandedMiners((prev) => ({
      ...prev,
      [miner]: !prev[miner],
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Mined Shares Explorer</h1>

      {/* Filters */}
      <div className="border border-gray-800 rounded-md p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block mb-2">Miner</label>
            <div className="relative">
              <select className="w-full bg-black border border-gray-700 rounded p-2 pr-8 appearance-none">
                <option>(All)</option>
                <option>miner1</option>
                <option>miner2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">Timestamp</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-black border border-gray-700 rounded p-2 pr-8"
                defaultValue="2021-08-01"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">Transactions</label>
            <input
              type="text"
              className="w-full bg-black border border-gray-700 rounded p-2"
              defaultValue="2021-08-31"
            />
          </div>

          <div>
            <label className="block mb-2">Search...</label>
            <input type="text" className="w-full bg-black border border-gray-700 rounded p-2" placeholder="Search..." />
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="border border-gray-800 rounded-md mb-6">
        <div className="grid grid-cols-3 p-4 border-b border-gray-800 font-medium">
          <div>Miner</div>
          <div>Timestamp</div>
          <div>Transactions</div>
        </div>

        {/* Miner 1 */}
        <div className="border-b border-gray-800">
          <div className="grid grid-cols-3 p-4 cursor-pointer hover:bg-gray-900" onClick={() => toggleMiner("miner1")}>
            <div className="flex items-center">
              {expandedMiners.miner1 ? (
                <ChevronUp className="h-4 w-4 mr-2" />
              ) : (
                <ChevronDown className="h-4 w-4 mr-2" />
              )}
              miner1
            </div>
            <div>2021-08-15 14:23</div>
            <div>5</div>
          </div>

          {expandedMiners.miner1 && (
            <div className="pl-10 pr-4 pb-2">
              <div className="text-gray-400 mb-2">Included 7 Transactions</div>

              <div className="grid grid-cols-3 py-2">
                <div className="text-gray-400">f68b21db...de3b0803</div>
                <div>2021-08-15 14:23</div>
                <div>12</div>
              </div>

              <div className="grid grid-cols-3 py-2">
                <div className="text-gray-400">964aebde...4813c0a6</div>
                <div>2021-08-15 14:33</div>
                <div>7</div>
              </div>

              <div className="grid grid-cols-3 py-2">
                <div className="text-gray-400">2c1a7f84...477aec04</div>
                <div>2021-08-30 09:17</div>
                <div>12</div>
              </div>
            </div>
          )}
        </div>

        {/* Miner 2 */}
        <div>
          <div className="grid grid-cols-3 p-4 cursor-pointer hover:bg-gray-900" onClick={() => toggleMiner("miner2")}>
            <div className="flex items-center">
              {expandedMiners.miner2 ? (
                <ChevronUp className="h-4 w-4 mr-2" />
              ) : (
                <ChevronDown className="h-4 w-4 mr-2" />
              )}
              miner2
            </div>
            <div>2021-08-30 09:17</div>
            <div>9</div>
          </div>
        </div>
      </div>

      {/* Mining Trends */}
      <h2 className="text-2xl font-bold mb-4">Mining Trends</h2>
      <div className="border border-gray-800 rounded-md p-4 h-64 relative">
        {/* SVG Line Chart */}
        <svg className="w-full h-full" viewBox="0 0 800 200">
          <path
            d="M0,100 C50,80 100,120 150,100 C200,80 250,120 300,80 C350,40 400,120 450,100 C500,80 550,40 600,80 C650,120 700,80 750,100 C800,120"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-4">
          <div>Aug 1</div>
          <div>Aug 5</div>
          <div>Aug 9</div>
          <div>Aug 13</div>
          <div>Aug 13</div>
          <div>Aug 17</div>
          <div>Aug 21</div>
          <div>Aug 25</div>
          <div>Aug 29</div>
        </div>
      </div>
    </div>
  )
}

