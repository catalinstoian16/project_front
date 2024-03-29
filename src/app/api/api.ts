const BASE_URL = "https://agile-crag-54838.herokuapp.com";
// const BASE_URL = "http://localhost:8080";

export const loginApi = () => `${BASE_URL}/auth/login`;
export const registerApi = () => `${BASE_URL}/auth/register`;


export const getUserByEmail = () => `${BASE_URL}/users`;
export const getUserById = (id: number) => `${BASE_URL}/users/${id}`;

export const announcements = () => `${BASE_URL}/announcements`;
export const userAnnouncements = () => `${BASE_URL}/announcements/user`;
export const announcementById = (id: number) => `${BASE_URL}/announcements/${id}`;

export const addBooking = () => `${BASE_URL}/bookings`;

export const getFile = (id: number | string) => `${BASE_URL}/files/${id}`
