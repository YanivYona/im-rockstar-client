import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetHexProofDto } from '../dtos/get-hex-proof.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RockstarService {

  constructor(private readonly http: HttpClient) {
  }

  async getHexProof(address: string): Promise<GetHexProofDto> {
    return await this.http.get<GetHexProofDto>(`https://rockstar-test.herokuapp.com/rockers/get-signature/${address}`).toPromise();
  }

}
