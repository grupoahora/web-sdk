import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation, ElementRef, ViewChild } from "@angular/core";
import { Biometric } from 'app/modules/biometrics/biometric.module';
import { BiometricService } from 'app/modules/biometrics/biometric.service';
import { DemoService } from "../demo.service";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { FuseMediaWatcherService } from "@fuse/services/media-watcher";
import { MatDialog } from "@angular/material/dialog";
import { TranslocoService } from "@ngneat/transloco";
import { CountriesService } from "app/modules/countries/countries.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-remipay-verifik',
  templateUrl: './remipay-verifik.component.html',
  styleUrls: ['./remipay-verifik.component.scss']
})
export class RemipayVerifikComponent implements OnInit {
  phoneMode: boolean;
  currentStep: any = "start";
  baseColor: string = 'red';
  biometricsReady: Boolean;
  selectedFeature: any;
  constructor(
    private _biometric: Biometric,
    private _formBuilder: FormBuilder,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
    private translocoService: TranslocoService,
    private _countries: CountriesService,
    private _service: BiometricService,
    private _snackBar: MatSnackBar,
    private _demoService: DemoService,
    private route: ActivatedRoute,
    private _http: HttpClient

  ) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      const tokenValue = queryParams.get('token');
      console.log("Valor del parámetro 'token':", tokenValue);

      // Ahora puedes usar 'tokenValue' en tu lógica, como en la llamada HTTP
    });
  }
  /* console.log(this.selectedFeature);
  
  this.biometricsReady = false
  if (this.selectedFeature == "liveness") {
    this._biometric.startAuth('3138815097');
    return;
  } */
  startBiometric(): void {
    let responseVariable; // Variable para almacenar la respuesta

    this._biometric.startEnrollmentDocument('3138811378');

    this._biometric.onboardingScan$.subscribe(response => {
      responseVariable = response; // Almacenar la respuesta en la variable

      // Realizar la petición POST con la respuesta como datos XML
      const xmlData = `<data>${responseVariable}</data>`;
      const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });

      this._http.post('http://remipay.test/data-verify-3d-liveness', xmlData, { headers }).subscribe(
        apiResponse => {
          console.log("Respuesta de la API:", apiResponse);
        },
        error => {
          console.error("Error en la petición a la API:", error);
        }
      );
    }, error => {
      console.error("Error en el proceso de escaneo:", error);
    });
  }
}
