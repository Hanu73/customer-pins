export class IModalPopup {
  type: 'customer' | 'pin';
  title?: string;
  value?: boolean;
  message?: string;
}

export class IResult {
  status: string;
  statusCode: number;
  version: string;
  access: string;
  data: any;
}

export class ICustomerInfo {
  title: string;
  image: File
  email: string;
  region: string;
  country: string;
}

export class IPinsInfo {
  title: string;
  image: File
  collaborators: string;
  privacy: string;
}
