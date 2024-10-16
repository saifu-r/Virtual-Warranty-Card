import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // localStorage.setItem('authItem', '12345')
  const token= localStorage.getItem("authItem")


  if(token){
    return true;
  }else{
    const router= new Router();
    router.navigate(['/login-page']);
    return false;
  }
};
