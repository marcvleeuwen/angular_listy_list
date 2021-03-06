import {Descriptor} from './descriptor.model';

export interface Item {
  _id?: any;
  details?: Descriptor;
  category?: string;
  status?: string;
  quantity?: string;
  _createdAt?: string;
  _updatedAt?: string;
}
