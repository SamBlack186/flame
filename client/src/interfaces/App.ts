import { Model } from '.';

export interface App extends Model {
  name: string;
  url: string;
  icon: string;
  isPinned: boolean;
}

export interface NewApp {
  name: string;
  url: string;
  icon: string;
}