// import type Stripe from "stripe";

export interface BaseRecord {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface Keyed<T = any[]> {
  [key: number]: T;
}

export interface QueryBase<T extends unknown> {
  values: T;
  accessToken?: string;
}

export interface ProfileRecord extends BaseRecord {
  user_id: string;
  email: string;
  full_name?: string;
  avatar?: string;
  stripe_id: string;
}
