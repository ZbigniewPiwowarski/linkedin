import { $ } from "@wdio/globals";
import Page from "./page.js";

class NavbarArticles extends Page {
  public get navbarArticles() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_articles"]'
    );
  }

  public get navbarPeople() {
    return $(
      'a[data-tracking-control-name="guest_homepage-basic_guest_nav_menu_people"]'
    );
  }

  public get articlesPageTitle() {
    return $("h2=Explore collaborative articles");
  }

  public get marketingPageTitle() {
    return $("h2=Marketing");
  }

  public get engineeringPageTitle() {
    return $("h2=Engineering");
  }

  public get marketingBox() {
    return $('a[data-tracking-control-name="content-hub-home-page-Marketing"]');
  }

  public get engineeringBox() {
    return $(
      'a[data-tracking-control-name="content-hub-home-page-Engineering"]'
    );
  }

  public clickNavbarArticles() {
    return this.navbarArticles.click();
  }

  public clickNavbarPeople() {
    return this.navbarPeople.click();
  }
}

export default new NavbarArticles();
