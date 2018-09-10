import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TestComponent } from "./test.component";

describe("TestComponentSpecs", () => {
	let componentFixture: ComponentFixture<TestComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [TestComponent]
			}).compileComponents().then(() => { /* You may decide to do something here... */ });
		})
	);

	beforeEach(() => {
		componentFixture = TestBed.createComponent(TestComponent);
	});

	it("should display message", (done) => {
		const debugElement = componentFixture.debugElement.query(By.css("h3"));
		componentFixture.detectChanges();
		expect(debugElement.nativeElement.textContent).toEqual("NOW IT's WORKING");
		done();
	});
});
