import TradingPlatform from "../Trading.platform";
import Login from "./Login";
import SignUp from "./SignUp"

const expectTradingPlatform = async (page: any) => {
  const tradingPlatform = new TradingPlatform(page)
  await tradingPlatform.verifyTradingPlatform();
}

const expectSignUpFormIsOpened = async (page: any) => { 
  const signUp = new SignUp(page) ;
  await signUp.verifySignUpForm();
}
const expectLoginFormIsOpened = async (page: any) => { 
  const login = new Login(page) ;
  await login.verifyLoginForm();
}

export { expectTradingPlatform , expectSignUpFormIsOpened, expectLoginFormIsOpened };




