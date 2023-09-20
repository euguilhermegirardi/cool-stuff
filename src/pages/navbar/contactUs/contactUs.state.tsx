export interface ContactUsStateProps {
  name: string,
  email: string,
  message: string,
  isLoading: boolean,
};

export const initialState: ContactUsStateProps = {
  name: '',
  email: '',
  message: '',
  isLoading: false,
};
