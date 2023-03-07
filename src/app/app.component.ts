import {Component, OnInit} from '@angular/core';
import {RockstarService} from "./services/rockstar.service";
import {ContractService} from "./services/contract.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'imrockstar';

  constructor(
    private readonly contractService: ContractService,
    private readonly rockStarService: RockstarService) {
  }

  ngOnInit(): void {
    this.contractService.connectAccount();

    this.contractService.accountStatus$.subscribe(data => {
      const wallet = data[0];

      this.contractService.mint(wallet, 1);
    });
  }
}
