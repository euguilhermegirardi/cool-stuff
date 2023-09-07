import UsersListResponse from './interfaces/usersListResponse';

export interface SignInInitialStateProps {
  users: UsersListResponse[],
  isLoading: boolean,
  notSignedIn: boolean,
};

export const initialState: SignInInitialStateProps = {
  users: [],
  isLoading: false,
  notSignedIn: false,
};
