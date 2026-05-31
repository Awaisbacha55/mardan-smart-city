import api from './authService'

export const complaintService = {
  // Citizen
  createComplaint: (formData) => api.post('/complaints', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getUserComplaints: (params) => api.get('/complaints/my', { params }),
  getStats: () => api.get('/complaints/stats'),

  // Public
  trackComplaint: (trackingId) => api.get(`/complaints/track/${trackingId}`),

  // Admin
  getAllComplaints: (params) => api.get('/complaints', { params }),
  updateStatus: (id, data) => api.patch(`/complaints/${id}`, data),
}
