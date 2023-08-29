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
  externalUser: string = ''; // Declarar la variable

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

      // Dividir el token por el caracter '.'
      const tokenParts = tokenValue.split('.');

      if (tokenParts.length === 3) {
        const header = tokenParts[0];
        const payload = tokenParts[1];
        const signature = tokenParts[2];

        console.log("Header:", header);
        console.log("Payload:", payload);
        console.log("Signature:", signature);

        // Decodificar el payload Base64 para obtener los claims en formato JSON
        const decodedPayload = atob(payload);
        const claims = JSON.parse(decodedPayload);
        this.externalUser = claims['user']['email'];
        // Aquí puedes acceder a los claims y usarlos según tus necesidades
      } else {
        console.error("Token JWT inválido");
      }
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

    // Generar un número aleatorio entre 0 y 999999999
    const randomExternalUser = Math.floor(Math.random() * 1000000000);

    // Concatenar el número aleatorio con la variable externalUser
    const concatenatedUser = this.externalUser + randomExternalUser;

    // Llamar a la función startEnrollmentDocument con el valor concatenado como argumento
    this._biometric.startEnrollmentDocument(concatenatedUser).then(
      _ => {
        console.log(_);

      }
    );
    
    console.log(concatenatedUser);


  }
}
