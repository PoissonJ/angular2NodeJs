export class User {
  // email: string; created fromm constructor
  constructor(public email: string, public password: string,
    public firstName?: string, public lastName?: string) { }
}
