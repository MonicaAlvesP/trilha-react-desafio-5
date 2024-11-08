import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nktmppaocortsqtpfoxf.supabase.co/rest/v1',
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdG1wcGFvY29ydHNxdHBmb3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMjA4NzUsImV4cCI6MjA0NjU5Njg3NX0.fmsp0ka9R5iEjHdYFKHav94kGBFzoMAFugeNNyk_EmQ",
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdG1wcGFvY29ydHNxdHBmb3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMjA4NzUsImV4cCI6MjA0NjU5Njg3NX0.fmsp0ka9R5iEjHdYFKHav94kGBFzoMAFugeNNyk_EmQ"
  }
});