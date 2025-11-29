export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LocationItem {
  city: string;
  neighborhoods?: string[];
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}