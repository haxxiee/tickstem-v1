export interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

export interface CurrentSession {
  user: User;
  expires: Date;
}

export interface SessionObject {
  currentSession: CurrentSession;
}

interface Session {
  session: SessionObject[];
}
