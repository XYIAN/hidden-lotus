'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';
import { classesData } from '@/constants/classes';
import { useRef } from 'react';
import Link from 'next/link';
import '@/styles/animations.css';

export default function ClassDetailPage() {
  const params = useParams();
  const classId = params.id as string;
  const classData = classesData.find(c => c.id === classId);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const toast = useRef<Toast>(null);

  if (!classData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
        <div className="max-w-4xl mx-auto">
          <Card className="yoga-card p-8">
            <div className="text-center py-8">
              <div className="text-6xl mb-4">😔</div>
              <h1 className="text-3xl font-bold text-primary-green mb-4">Uh oh! Class Not Found</h1>
              <p className="text-earth-brown text-lg mb-6">
                We couldn't find the class you're looking for. Please try again later or pick a
                different class.
              </p>
              <div className="flex flex-column md:flex-row gap-4 justify-content-center">
                <Link href="/classes">
                  <Button
                    label="Back to Classes"
                    icon="pi pi-arrow-left"
                    className="bg-sage-green-600 border-sage-green-600"
                  />
                </Link>
                <Link href="/contact">
                  <Button
                    label="Contact Support"
                    icon="pi pi-envelope"
                    className="bg-pastel-pink border-pastel-pink text-secondary-brown"
                  />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate) {
      toast.current?.show({
        severity: 'warn',
        summary: 'Date Required',
        detail: 'Please select a date for your booking.',
        life: 3000,
      });
      return;
    }

    if (!bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      toast.current?.show({
        severity: 'warn',
        summary: 'Information Required',
        detail: 'Please fill in all required fields.',
        life: 3000,
      });
      return;
    }

    setShowBookingDialog(false);
    setShowSuccessDialog(true);
    setBookingForm({ name: '', email: '', phone: '' });
    setSelectedDate(null);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      yoga: 'bg-sage-green-600',
      reiki: 'bg-pastel-pink',
      seminar: 'bg-yellow-gold',
      cupping: 'bg-brown',
      podcast: 'bg-sage-green-400',
      meditation: 'bg-olive-green',
      fitness: 'bg-sage-green-600',
      healing: 'bg-pastel-pink',
      'weight-training': 'bg-brown',
      pilates: 'bg-sage-green-400',
      breathwork: 'bg-olive-green',
      'sound-healing': 'bg-pastel-pink',
    };
    return colors[category] || 'bg-sage-green-600';
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      beginner: 'bg-green-500',
      intermediate: 'bg-yellow-500',
      advanced: 'bg-red-500',
    };
    return colors[level] || 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-tan to-sage-green-50 p-4 page-transition">
      <Toast ref={toast} />
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/classes">
            <Button
              label="Back to Classes"
              icon="pi pi-arrow-left"
              className="bg-sage-green-600 border-sage-green-600"
            />
          </Link>
        </div>

        {/* Class Details */}
        <Card className="yoga-card p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-column gap-4">
              <div>
                <h1 className="text-3xl font-bold text-primary-green mb-3">{classData.name}</h1>
                <p className="text-earth-brown text-lg mb-4">{classData.longDescription}</p>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-primary-green mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {classData.categories.map((category, index) => (
                    <Tag
                      key={index}
                      value={category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      className={`${getCategoryColor(category)} border-0`}
                    />
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <h3 className="text-lg font-semibold text-primary-green mb-2">Level</h3>
                <Tag
                  value={classData.level.charAt(0).toUpperCase() + classData.level.slice(1)}
                  className={`${getLevelColor(classData.level)} border-0`}
                />
              </div>

              {/* Equipment */}
              {classData.equipment && classData.equipment.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-green mb-2">
                    Equipment Needed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {classData.equipment.map((item, index) => (
                      <Tag
                        key={index}
                        value={item}
                        className="bg-light-tan border-sage-green-200 text-earth-brown"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-column gap-4">
              {/* Class Info */}
              <Card
                className="bg-light-tan/50 p-4"
                style={{ border: '1px solid var(--sage-green-200)' }}
              >
                <h3 className="text-lg font-semibold text-primary-green mb-3">Class Information</h3>
                <div className="flex flex-column gap-3">
                  <div className="flex align-items-center gap-3">
                    <i className="pi pi-user text-sage-green-600 text-xl"></i>
                    <div>
                      <span className="text-sm text-earth-brown">Instructor</span>
                      <p className="font-semibold text-primary-green m-0">{classData.instructor}</p>
                    </div>
                  </div>
                  <div className="flex align-items-center gap-3">
                    <i className="pi pi-clock text-sage-green-600 text-xl"></i>
                    <div>
                      <span className="text-sm text-earth-brown">Time</span>
                      <p className="font-semibold text-primary-green m-0">{classData.time}</p>
                    </div>
                  </div>
                  <div className="flex align-items-center gap-3">
                    <i className="pi pi-calendar text-sage-green-600 text-xl"></i>
                    <div>
                      <span className="text-sm text-earth-brown">Duration</span>
                      <p className="font-semibold text-primary-green m-0">{classData.duration}</p>
                    </div>
                  </div>
                  <div className="flex align-items-center gap-3">
                    <i className="pi pi-dollar text-sage-green-600 text-xl"></i>
                    <div>
                      <span className="text-sm text-earth-brown">Price</span>
                      <p className="font-semibold text-primary-green m-0">{classData.price}</p>
                    </div>
                  </div>
                  <div className="flex align-items-center gap-3">
                    <i className="pi pi-users text-sage-green-600 text-xl"></i>
                    <div>
                      <span className="text-sm text-earth-brown">Max Participants</span>
                      <p className="font-semibold text-primary-green m-0">
                        {classData.maxParticipants}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Available Dates */}
              <Card
                className="bg-light-tan/50 p-4"
                style={{ border: '1px solid var(--sage-green-200)' }}
              >
                <h3 className="text-lg font-semibold text-primary-green mb-3">Available Dates</h3>
                <div className="flex flex-wrap gap-2">
                  {classData.dates.map((date, index) => (
                    <Tag
                      key={index}
                      value={new Date(date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                      className="bg-white border-sage-green-200 text-earth-brown"
                    />
                  ))}
                </div>
              </Card>

              {/* Book Now Button */}
              <div className="flex justify-content-center">
                <Button
                  label="Book This Class"
                  icon="pi pi-calendar-plus"
                  onClick={() => setShowBookingDialog(true)}
                  className="bg-pastel-pink border-pastel-pink text-secondary-brown button-pulse p-button-lg"
                  style={{ minWidth: '200px' }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Booking Dialog */}
      <Dialog
        header="Book Your Class"
        visible={showBookingDialog}
        onHide={() => setShowBookingDialog(false)}
        className="w-11 md:w-6 lg:w-4"
        modal
      >
        <div className="flex flex-column gap-4">
          <div className="flex flex-column gap-2">
            <label htmlFor="date" className="text-sm font-semibold text-primary-green">
              Select Date
            </label>
            <Calendar
              id="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.value as Date)}
              minDate={new Date()}
              className="w-full"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-primary-green">
              Full Name *
            </label>
            <InputText
              id="name"
              value={bookingForm.name}
              onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-primary-green">
              Email *
            </label>
            <InputText
              id="email"
              type="email"
              value={bookingForm.email}
              onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-primary-green">
              Phone Number *
            </label>
            <InputText
              id="phone"
              value={bookingForm.phone}
              onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="flex gap-3 justify-content-end">
            <Button
              label="Cancel"
              onClick={() => setShowBookingDialog(false)}
              className="p-button-text"
            />
            <Button
              label="Confirm Booking"
              onClick={handleBooking}
              className="bg-sage-green-600 border-sage-green-600"
            />
          </div>
        </div>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        header="Booking Confirmed!"
        visible={showSuccessDialog}
        onHide={() => setShowSuccessDialog(false)}
        className="w-11 md:w-6 lg:w-4"
        modal
      >
        <div className="text-center py-4">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold text-primary-green mb-2">Booking Successful!</h3>
          <p className="text-earth-brown mb-4">
            Your class has been booked successfully. You will receive a confirmation email shortly.
          </p>
          <div className="flex gap-3 justify-content-center">
            <Button
              label="Book Another Class"
              onClick={() => {
                setShowSuccessDialog(false);
                window.location.href = '/classes';
              }}
              className="bg-sage-green-600 border-sage-green-600"
            />
            <Button
              label="Close"
              onClick={() => setShowSuccessDialog(false)}
              className="p-button-text"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
