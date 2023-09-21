import { auth } from '@auth/firebaseApp';

import { IUseSignupForm } from '@hooks/form/useSignupForm';
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { setAuthHeader } from '@service/customAxios';
// import { createUser } from '@service/user';
import { IUseLoginForm } from '../hooks/form/useLoginForm';
import { IUseRestorePasswordForm } from '../hooks/form/useRestorePasswordForm';

export const signupSubmit = async ({
	firstName,
	lastName,
	email,
	password,
}: IUseSignupForm) => {
	await createUserWithEmailAndPassword(auth, email, password);
	setAuthHeader(auth.currentUser.uid);
	// await createUser(createName(firstName, lastName), email, user.uid);
	await sendEmailVerification(auth.currentUser);
};

export const loginSubmit = async ({ email, password }: IUseLoginForm) => {
	await signInWithEmailAndPassword(auth, email, password);
};

export const restorePassword = async ({ email }: IUseRestorePasswordForm) => {
	await sendPasswordResetEmail(auth, email);
};

const createName = (firstname: string, lastname: string) => {
	`${firstname} ${lastname}`;
};
