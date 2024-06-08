import { Identifier } from '../../../shared/domain';
import { EntityClass } from '../../../shared/domain/Entity';

interface UserProps {
  id?: string;
  email: string;
  phone: `${number}-${number}-${number}`;
  username: string;
  password: string;
}

export class User extends EntityClass<UserProps> {
  constructor(props: UserProps) {
    super(props, new Identifier(props.id));
  }
}
