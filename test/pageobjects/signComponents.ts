import { $ } from "@wdio/globals";
import Page from "./page.js";

class SignComponents extends Page {
  public get navbarJobs() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_jobs"]'
    );
  }

  public get homePageSignInButton() {
    return $('button[data-id="sign-in-form__submit-btn"]');
  }

  public get homePageEmailField() {
    return $("#session_key");
  }

  public get homePagePasswordField() {
    return $("#session_password");
  }

  public get homePageForgotPasswordLink() {
    return $('a[data-id="sign-in-form__forgot-password"]');
  }

  public get homePageJoinNowButton() {
    return $(
      'a[data-tracking-control-name="homepage-basic_sign-in-form_join-cta"]'
    );
  }

  public get homePageGoogleButton() {
    return $('div[aria-labelledby="button-label"]');
  }

  public get securityCheckTitle() {
    return $("h1*=security check");
  }

  public get signInTitle() {
    return $("h1=Sign in");
  }

  public get registerAccountTitle1() {
    return $("h1*=Make the most");
  }

  public get registerAccountTitle2() {
    return $("h1*=Join LinkedIn");
  }

  public get homePageEmailHint() {
    return $("p=Please enter an email address or phone number");
  }

  public get homePagePasswordHint() {
    return $("p=Please enter a password");
  }

  //  Sometimes there is 'Forgot password' on the webpage, sometimes there is 'Forgot your password?'
  public get forgotPasswordTitle() {
    return $("h1*=Forgot");
  }
}

export default new SignComponents();
