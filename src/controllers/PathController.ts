import {type ReactiveController, type ReactiveControllerHost} from 'lit';


export class PathController implements ReactiveController {

  private host: ReactiveControllerHost;

  path: string;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostConnected(): void {
    this.path = window.location.pathname
  }

  hostDisconnected(): void {
  }
}