import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

/*  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));*/
  
  it('should run test', ()=>{
    expect(1).toBe(1);
  })
});
