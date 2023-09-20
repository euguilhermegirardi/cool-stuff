import { ContactUsStateProps } from '../contactUs.state';

export interface ContactUsRequest extends Omit<ContactUsStateProps, 'isLoading'> { };
