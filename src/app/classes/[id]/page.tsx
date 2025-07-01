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
import { classesData } from '@/lib/data';
import { useRef } from 'react';

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
      <div className="min-h-screen bg-gradient-to-br from-sage-green-50 to-tan-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold text-sage-green-800 mb-4">Class Not Found</h1>
              <p className="text-sage-green-600">The class you're looking for doesn't exist.</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !bookingForm.name || !bookingForm.email || !bookingForm.phone) {
      toast.current?.show({
        severity: 'error',
        summary: 'Booking Error',
        detail: 'Please fill in all fields and select a date.',
        life: 3000,
      });
      return;
    }

    setShowBookingDialog(false);
    setShowSuccessDialog(true);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'yoga':
        return 'success';
      case 'reiki':
        return 'info';
      case 'seminar':
        return 'warning';
      case 'cupping':
        return 'danger';
      case 'podcast':
        return 'secondary';
      default:
        return 'info';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'danger';
      default:
        return 'info';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-green-50 to-tan-100 p-4">
      <Toast ref={toast} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-6">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Tag
                    value={classData.category}
                    severity={getCategoryColor(classData.category)}
                    className="text-sm"
                  />
                  <Tag
                    value={classData.level}
                    severity={getLevelColor(classData.level)}
                    className="text-sm"
                  />
                  <Tag value={classData.price} severity="info" className="text-sm" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-sage-green-800 mb-4">
                  {classData.name}
                </h1>
                <p className="text-lg text-sage-green-600 mb-4">with {classData.instructor}</p>
                <p className="text-sage-green-700 leading-relaxed">{classData.longDescription}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Class Details */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sage-green-800 mb-4">Class Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sage-green-700">Duration:</span>
                  <span className="text-sage-green-600">{classData.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sage-green-700">Time:</span>
                  <span className="text-sage-green-600">{classData.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sage-green-700">Max Participants:</span>
                  <span className="text-sage-green-600">{classData.maxParticipants}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sage-green-700">Price:</span>
                  <span className="text-sage-green-600 font-bold">{classData.price}</span>
                </div>
              </div>

              <Divider />

              {/* Equipment */}
              {classData.equipment && classData.equipment.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-sage-green-800 mb-3">What to Bring</h3>
                  <div className="flex flex-wrap gap-2">
                    {classData.equipment.map((item, index) => (
                      <Tag key={index} value={item} severity="info" className="text-sm" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Calendar and Booking */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sage-green-800 mb-4">Available Dates</h2>

              <div className="mb-6">
                <Calendar
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.value || null)}
                  inline
                  showWeek={false}
                  dateFormat="dd/mm/yy"
                  className="w-full"
                  minDate={new Date()}
                  disabledDates={classData.dates.map(date => new Date(date))}
                />
              </div>

              {selectedDate && (
                <div className="mb-6 p-4 bg-sage-green-50 rounded-lg">
                  <h3 className="font-semibold text-sage-green-800 mb-2">Selected Date:</h3>
                  <p className="text-sage-green-600">{formatDate(selectedDate)}</p>
                  <p className="text-sage-green-600">{classData.time}</p>
                </div>
              )}

              <Button
                label="Book Now"
                icon="pi pi-calendar-plus"
                className="w-full p-button-lg bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600"
                onClick={() => setShowBookingDialog(true)}
                disabled={!selectedDate}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog
        header="Book Your Class"
        visible={showBookingDialog}
        onHide={() => setShowBookingDialog(false)}
        className="w-full max-w-md"
        modal
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-sage-green-700 mb-2">
              Full Name *
            </label>
            <InputText
              value={bookingForm.name}
              onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
              className="w-full"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-sage-green-700 mb-2">Email *</label>
            <InputText
              value={bookingForm.email}
              onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
              className="w-full"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-sage-green-700 mb-2">
              Phone Number *
            </label>
            <InputText
              value={bookingForm.phone}
              onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
              className="w-full"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex gap-2">
            <Button
              label="Cancel"
              className="flex-1 p-button-outlined"
              onClick={() => setShowBookingDialog(false)}
            />
            <Button
              label="Book Class"
              className="flex-1 bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600"
              onClick={handleBooking}
            />
          </div>
        </div>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        header="Booking Confirmed!"
        visible={showSuccessDialog}
        onHide={() => setShowSuccessDialog(false)}
        className="w-full max-w-md"
        modal
      >
        <div className="text-center">
          <i className="pi pi-check-circle text-6xl text-green-500 mb-4"></i>
          <h3 className="text-xl font-bold text-sage-green-800 mb-2">
            Thank you, {bookingForm.name}!
          </h3>
          <p className="text-sage-green-600 mb-4">
            Your booking for <strong>{classData.name}</strong> on{' '}
            <strong>{selectedDate ? formatDate(selectedDate) : ''}</strong> has been confirmed.
          </p>
          <p className="text-sage-green-600 mb-4">We will send confirmation details to:</p>
          <p className="text-sage-green-700 font-medium">{bookingForm.email}</p>
          <p className="text-sage-green-700 font-medium">{bookingForm.phone}</p>
          <Button
            label="Close"
            className="mt-4 bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600"
            onClick={() => setShowSuccessDialog(false)}
          />
        </div>
      </Dialog>
    </div>
  );
}
