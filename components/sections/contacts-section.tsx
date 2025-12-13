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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

            if (!res.ok) throw new Error("Failed to send")

            toast.success("Message sent successfully! We'll get back to you soon.")
            setForm({ name: "", email: "", phone: "", message: "" })
        } catch (err) {
            toast.error("Failed to send message. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
                            Tomorrow's risks demand today's insight
                        </h2>
                        <p className="text-xl text-muted-foreground uppercase tracking-wider font-semibold">
                            Book An Audit Appointment
                        </p>
                    </div>

                    <Card className="border-2 border-border shadow-2xl rounded-sm bg-white">
                        <CardContent className="p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    name="name"
                                    placeholder="Your Name*"
                                    className="h-14 text-base rounded-sm border-border"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email ID*"
                                    className="h-14 text-base rounded-sm border-border"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number*"
                                    className="h-14 text-base rounded-sm border-border"
                                    required
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="min-h-40 text-base rounded-sm border-border"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                />
                                <Button
                                    size="lg"
                                    className="w-full text-base bg-[#071A44] text-white py-7 uppercase tracking-wider font-semibold rounded-sm"
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
