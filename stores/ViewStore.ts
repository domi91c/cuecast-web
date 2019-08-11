import { action, computed, observable } from 'mobx';

export interface IViewStore {
  name: string;
  greeting: string;

  setName(name: string): void;
}

export default class ViewStore implements IViewStore {
  @observable name = "World";

  @computed
  public get greeting(): string {
    return `Hello ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }
}

