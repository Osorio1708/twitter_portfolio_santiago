import { StringMapKey } from "aws-sdk/clients/finspacedata";

export class Portfolio {
  id: string;
  name: string;
  names: string;
  phone: string;
  zip_code: string;
  description: string;
  image_url: string;
  twitter_user_name: string;
  tittle: string;
  address: string;
  email: string;
  experience_01: string;
  experience_02: string;
  experience_03: string;
  profile: string;
  twits: Twit[];
}

export class Twit {
  id: string;
  user: string;
  user_id: string;
  body: string;
  url_image?: string;
}
