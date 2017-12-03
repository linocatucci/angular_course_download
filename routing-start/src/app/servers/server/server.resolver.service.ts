import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";

interface Server {
  //let op niet assign maar define dus een ; !
  id: number;
  name: string;
  status: string;
}

// when you use a service in a service use @Injectable()
@Injectable()
export class ServerResolverService implements Resolve<Server> {
  constructor(private serverService: ServersService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    // resolver
    return this.serverService.getServer(+route.params['id']);
  }
}
