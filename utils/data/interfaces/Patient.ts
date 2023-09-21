export type SubscriptionTier = 'home' | 'clinical' | 'researcher' | 'multisite';

export interface IPatient {
	uuid: string;
	avatar: string;
	birthday: Date;
	email: string;
	firstName: string;
	lastName: string;
	sex: string;
	subscriptionTier: SubscriptionTier;
}
