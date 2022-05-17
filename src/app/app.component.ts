import { Component } from '@angular/core';

// Angular templates can either use in file html or URL referencing a html file
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div class="row justify-content-center">
  <div class="card mt-sm-3 col-md-8">
    <div class="card-body">
      <h3 class="mb-0">Artist Directory</h3>
      <div class="form-group">
        <div class="form-label"></div>
        <input class="form-control mt-2" type="text">
      </div><!-- form-group -->
    </div><!-- card-body -->
  </div><!-- card -->
</div><!-- row -->
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
}
