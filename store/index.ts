import { ServerState } from './servers';
import { PageState } from './page';
import { SnackbarState } from './snackbar';
import { UserState } from './user';
import { UserViewsState } from './userViews';
import { HomeSection } from './homeSection';

export interface AppState {
  page: PageState;
  servers: ServerState;
  snackBar: SnackbarState;
  user: UserState;
  userViews: UserViewsState;
  homeSection: HomeSection;
}
