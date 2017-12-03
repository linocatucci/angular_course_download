import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
import {preserveWhitespacesDefault} from "@angular/compiler";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    // commented out because now we will use the resolver for this code:
    // de + converteert de string naar een number!
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // // to listen to changes after the click:
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    // console.log(this.server);
    // console.log('Server Id: ' + id);
    // console.log('query_params: ' + this.route.snapshot.params['id']);
  }

  onEdit() {
    //http://localhost:4200/servers/1/edit?allowEdit=1#loading
    // this.router.navigate(['/servers', id], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    // this.router.navigate(['/servers', +server_id, 'edit'], {queryParams: {allowEdit: +server_id}});
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
