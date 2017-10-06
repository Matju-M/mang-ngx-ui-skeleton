import { CoreModule } from "../module";
import {
	async,
	ComponentFixture,
	TestBed
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TestComponent } from "./test.component";

describe("TestComponentSpecs", () => {
	let componentFixture: ComponentFixture<TestComponent>;
	let componentInstance: TestComponent;

	// Asynchronous beforeEach.
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [CoreModule]
			}).compileComponents().then(() => { /* Don"t do anything */ });
		})
	);

	// Synchronous BeforeEach.
	beforeEach(() => {
		componentFixture = TestBed.createComponent(TestComponent);
		componentInstance = componentFixture.componentInstance;
	});

	it("should display message", (done) => {
		const debugElement = componentFixture.debugElement.query(By.css("h3"));
		componentFixture.detectChanges();
		expect(debugElement.nativeElement.textContent).toEqual("NOW IT's WORKING");
		done();
	});
});
