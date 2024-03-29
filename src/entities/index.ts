import { User } from './user.entity';
import { Facility } from './facility.entity';
import { Goals } from './goals.entity';
import { Location } from './location.entity';
import { Order } from './order.entity';
import { UserLogin } from './user-login.entity';
import { Visit } from './visit.entity';

export const entities = {
  users: User,
  facilities: Facility,
  goals: Goals,
  locations: Location,
  orders: Order,
  'user-logins': UserLogin,
  visits: Visit,
};
