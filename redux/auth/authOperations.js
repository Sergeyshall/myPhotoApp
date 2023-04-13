import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

import app from '../../firebase/config';
import { authSlice } from './authReducer';

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    console.log('user=======', email, password);
    try {
      const auth = getAuth(app);

      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });
      const updateUserSuccess = await user.auth.currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: updateUserSuccess.uid,
          login: updateUserSuccess.displayName,
        })
      );
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log('user=======', email, password);
    try {
      console.log('email=', email, 'password=', password);

      const user = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};

////////
export const authStateChanged = () => async (dispatch, getState) => {
  const auth = getAuth(app);

  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        login: user.displayName,
        userId: user.uid,
      };

      dispatch(
        authSlice.actions.updateUserProfile(userUpdateProfile)
      );

      dispatch(
        authSlice.actions.authStateChange({ stateChange: true })
      );
    }
  });
};
