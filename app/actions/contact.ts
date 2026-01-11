'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().regex(/^[0-9+\-\s()]*$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    address: formData.get('address'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
      success: false
    }
  }

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Here you would typically save to a database or send an email
  console.log('Contact Form Submission:', validatedFields.data)

  return {
    message: "Thank you! Your message has been sent successfully.",
    success: true
  }
}
