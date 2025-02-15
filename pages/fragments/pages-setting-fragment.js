class PagesSettingFragment {

    constructor(page) {
        this.page = page;
        this.root = page.locator('[class=tm-popup-base__body]');
        this.submitSettingBtn = page.locator('[class*=tm-page-settings-form__submit]');

    }

    async changeLangTo(lang) {
        await this.page.locator(`//label[contains(text(),"${lang}")]`).click()
        await this.submitSettingBtn.click();
    }

}
module.exports = PagesSettingFragment
