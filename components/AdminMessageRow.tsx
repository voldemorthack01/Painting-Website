'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Message {
    id: number
    name: string
    email: string
    phone: string
    suburb: string | null
    service: string | null
    message: string
    created_at: string
}

export default function AdminMessageRow({ msg }: { msg: Message }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const isLongMessage = msg.message.length > 50

    return (
        <tr className={`hover:bg-gray-50 transition-colors ${isExpanded ? 'bg-gray-50' : ''}`}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top" suppressHydrationWarning>
                {new Date(msg.created_at).toLocaleDateString('en-AU')} <br />
                <span className="text-xs text-gray-400">{new Date(msg.created_at).toLocaleTimeString('en-AU')}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-900 align-top">
                {msg.name}
                <div className="text-xs font-normal text-gray-500">{msg.suburb || 'No suburb'}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 align-top">
                <div className="font-medium text-navy-800">{msg.email || '-'}</div>
                <div>{msg.phone || '-'}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-navy-900 align-top">
                <span className="bg-gold-50 text-gold-700 px-2 py-1 rounded text-xs font-medium">
                    {msg.service || 'General'}
                </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600 align-top">
                <div className={`transition-all duration-300 ${isExpanded ? '' : 'line-clamp-1'}`}>
                    {msg.message}
                </div>
                {isLongMessage && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-xs text-gold-600 hover:text-gold-700 font-semibold mt-1 flex items-center gap-1 focus:outline-none"
                    >
                        {isExpanded ? (
                            <>Read Less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                            <>Read More <ChevronDown className="w-3 h-3" /></>
                        )}
                    </button>
                )}
            </td>
        </tr>
    )
}
