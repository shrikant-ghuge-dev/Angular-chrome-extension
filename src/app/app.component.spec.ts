import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component = new AppComponent;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents();
    })
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have title Angular unit test app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('chrome-extension');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('chrome-extension');
    });

    it('should return hello', () => {
        expect(component.showMsg("Hello")).toBe("Hello"); //tobe for primitive datatyes and toEqual for non primitive
    });

    const doClick = async () => {
        const fixture = TestBed.createComponent(AppComponent);
        const btn = fixture.debugElement.query(By.css('.btn'));
        btn.triggerEventHandler('click', null);
        await fixture.detectChanges();
    }

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('chrome-extension');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const htmlEl = fixture.nativeElement as HTMLElement;
        expect(htmlEl.querySelector('.btn')?.textContent).toContain('Save');
    });

    it('should have btn with save text', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const htmlEl = fixture.nativeElement as HTMLElement;
        expect(htmlEl.querySelector('.btn')?.textContent).toContain('Save');
    });
});

//toBe --> ===
//toBeTrue() --> check true or false
//toBeTruthy() --> undefined will take as false
//toMatch --> regex
//toBeCloseTo -->

//toBeDefined() --> check for obj defined