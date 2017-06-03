import { browser, element, by } from "../../node_modules/protractor/built/index";
describe('App', () => {
    it('should show a table', () => {
        browser.get('http://localhost:9000/');
        // element(by.css('#greatInput')).sendKeys("user1");
        // element(by.css('#greatButton')).click();
        expect(element(by.css('.mynoteclass')).isPresent()).toBeTruthy();
    });
});
