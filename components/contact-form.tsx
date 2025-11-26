"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { siteConfig } from "@/config/site-config"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Full name is required",
      email: formData.email.trim() ? "" : "Email is required",
      message: formData.message.trim() ? "" : "Message is required",
    }

    setErrors(newErrors)

    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateForm()) {
      setStatus("error")
      return
    }

    setStatus("sending")
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Start a
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Conversation
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 ">
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-200 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-2">Our Location</h3>
                    <p className="text-black leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-2">Email Address</h3>
                    <p className="text-black">{siteConfig.email}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-2">Phone Number</h3>
                    <p className="text-black">{siteConfig.phoneNumber}</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="p-3 rounded-xl bg-pink-100 text-pink-600 group-hover:bg-pink-200 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold mb-2">How Can We Help?</h3>
                    <p className="text-black leading-relaxed">
                      {siteConfig?.howCanhelp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-white border border-gray-200 ">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold  mb-3">Send us a Message</h2>
                  <p className="">Fill out the form below and we&apos;ll get back to you soon.</p>
                </div>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <p className="text-primary font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-300 font-medium">Failed to send message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className=" font-medium text-sm">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-300  placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className=" font-medium text-sm">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-300  placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className=" font-medium text-sm">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300  placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 min-h-[140px] rounded-xl resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

