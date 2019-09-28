export const validateName = (name: string): boolean =>
  !name || name.length > 150

export const validateEmail = (email: string): boolean =>
  !email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)

export const validatePhone = (phone: string): boolean =>
  !phone || !/^\+{0,1}[0-9]{0,14}$/i.test(phone)
