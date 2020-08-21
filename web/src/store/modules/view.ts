import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";

export interface ViewState {
  drawer: boolean;
  windowWidth: number;
  windowHeight: number;
}

@Module({
  store,
  name: "view",
  dynamic: true,
  namespaced: true,
  stateFactory: true,
})
class View extends VuexModule implements ViewState {
  public drawer: boolean = false;
  public windowWidth: number = window.innerWidth;
  public windowHeight: number = window.innerHeight;

  get mobile() {
    return this.windowWidth < 768;
  }

  get tablet() {
    return !this.mobile && this.windowWidth < 1024;
  }

  @Mutation
  private SET_DRAWER(value: boolean): void {
    this.drawer = value;
  }

  @Mutation
  public UPDATE_WINDOW_SIZE(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  @Action
  public async setDrawer(value: boolean) {
    if (this.drawer !== value) {
      this.SET_DRAWER(value);
    }
  }

  @Action
  public async toggleDrawer() {
    this.SET_DRAWER(!this.drawer);
  }
}

export const ViewModule = getModule(View);
