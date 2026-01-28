'use server'

import { cookies } from 'next/headers'
import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function submitContactForm(prevState: any, formData: FormData) {
    const name = (formData.get('name') as string || '').trim()
    const email = (formData.get('email') as string || '').trim()
    const phone = (formData.get('phone') as string || '').trim()
    const suburb = (formData.get('suburb') as string || '').trim()
    const service = (formData.get('service') as string || '').trim()
    const message = (formData.get('message') as string || '').trim()

    // Input Limits Validation
    if (name.length > 100) return { success: false, message: 'Name is too long (max 100 chars).' }
    if (email.length > 100) return { success: false, message: 'Email is too long (max 100 chars).' }
    if (phone.length > 20) return { success: false, message: 'Phone number is too long (max 20 chars).' }
    if (message.length > 1000) return { success: false, message: 'Message is too long (max 1000 chars).' }

    // Strict Validation: Email OR Phone required
    if (!email && !phone) {
        return { success: false, message: 'Please provide an email or phone number so we can contact you.' }
    }

    if (!message) {
        return { success: false, message: 'Please enter a message.' }
    }

    try {
        const stmt = db.prepare('INSERT INTO messages (name, email, phone, suburb, service, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
        stmt.run(name, email, phone, suburb, service, message, new Date().toISOString())

        revalidatePath('/admin/dashboard')
        return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
        console.error('Database Error:', error)
        return { success: false, message: 'Failed to send message. Please try again.' }
    }
}

export async function loginAction(prevState: any, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    // Hardcoded credentials as requested
    if (username === 'Admin' && password === '123') {
        cookies().set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })
        return { success: true }
    } else {
        return { success: false, message: 'Invalid credentials' }
    }
}

export async function logoutAction() {
    cookies().delete('admin_session')
    redirect('/admin')
}
