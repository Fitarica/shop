export interface EstateItem {
  id: string;
  propertyName: string;
  location: string;
  img: string;
  description: string;
  contact: {
    email: string;
    tel: string;
  };
}