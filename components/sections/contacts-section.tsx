"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"

export default function ContactsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Failed")

      toast.success("Message sent successfully! We'll get back to you soon.")
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contactus"
      className="py-20 sm:py-24 lg:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#071A44] tracking-tight">
              Book An Audit Appointment
            </h2>
          </div>

          {/* Card */}
          <Card className="border border-border shadow-xl rounded-sm bg-white">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <Input
                  name="name"
                  placeholder="Your Name*"
                  className="h-12 sm:h-14 text-sm sm:text-base rounded-sm"
                  required
                  value={form.name}
                  onChange={handleChange}
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email ID*"
                  className="h-12 sm:h-14 text-sm sm:text-base rounded-sm"
                  required
                  value={form.email}
                  onChange={handleChange}
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number*"
                  className="h-12 sm:h-14 text-sm sm:text-base rounded-sm"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder="Message*"
                  className="min-h-32 sm:min-h-40 text-sm sm:text-base rounded-sm"
                  required
                  value={form.message}
                  onChange={handleChange}
                />

                <Button
                  size="lg"
                  className="w-full bg-[#071A44] text-white py-6 sm:py-7 text-sm sm:text-base uppercase tracking-wider font-semibold rounded-sm"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
