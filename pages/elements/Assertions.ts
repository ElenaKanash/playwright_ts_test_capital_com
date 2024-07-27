import TradingPlatform from "../Trading.platform";
import Login from "./Login";
import SignUp from "./SignUp"

const expectSignUpFormIsOpened = async (page: any) => { 
  const signUp = new SignUp(page) ;
  await signUp.verifySignUpForm();
}
const expectLoginFormIsOpened = async (page: any) => { 
  const login = new Login(page) ;
  await login.verifyLoginForm();
}

const expectTradingPlatform = async (page: any) => {
  const tradingPlatform = new TradingPlatform(page)
  await tradingPlatform.verifyTradingPlatform();
}

const expectTradingPlatformDemoMode = async (page: any) => {
  const tradingPlatform = new TradingPlatform(page)
  await tradingPlatform.verifyTradingPlatformDemoMode() 
}

export { expectSignUpFormIsOpened, expectLoginFormIsOpened, expectTradingPlatform , expectTradingPlatformDemoMode };




