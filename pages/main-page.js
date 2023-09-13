const Header = require("./fragments/header");
const BasePage = require("./base-page");

class MainPage extends BasePage{

    constructor(page) {
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._firstArticle = page.locator('[class=tm-articles-list__item] [class*=tm-title_h2]').first();
    }

    async open() {
        await this.page.goto('/')
    }

    async clickOnFirstArticle() {
        await this._firstArticle.click()
    }

}

module.exports = MainPage;
