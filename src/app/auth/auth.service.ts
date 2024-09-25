import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICredentials } from '@aws-amplify/core';
import Amplify, { Auth } from 'aws-amplify';
import * as AWS from 'aws-sdk';
import { CredentialsOptions } from 'aws-sdk/lib/credentials';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LOCAL_KEY_LOGIN_TYPE, LOGIN_TYPE } from '../constant';
import { DatasharingService } from '../datasharing/datasharing.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean>;
  credentials: ICredentials | CredentialsOptions;

  constructor(
    private router: Router,
    private datasharingService: DatasharingService  // Injection du service DataSharing
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  // Méthode pour la connexion
  public signIn(email: string, password: string, login): Observable<any> {
    if (login.type === LOGIN_TYPE.cognito) {
      // Authentification via Cognito (pas de changement ici)
      Amplify.configure({
        Auth: {
          identityPoolId: login.identityPoolId,
          region: login.region,
          userPoolId: login.userPoolId,
          userPoolWebClientId: login.userPoolWebClientId,
        },
      });

      return from(Auth.signIn(email, password)).pipe(
        tap(c => {
          console.log('Cognito login successful:', JSON.stringify(c));
          this.loggedIn.next(true);
        }),
        catchError(error => {
          console.error('Error during Cognito login:', error);
          return of(false); // Retourner false en cas d'erreur
        })
      );
    } else {
      // Authentification via AWS Access Key (secrets récupérés via DataSharingService)
      return this.datasharingService.getSecrets().pipe(
        tap(secrets => {
          if (secrets) {
            // Utilisation des credentials récupérés via le DataSharingService
            this.credentials = new AWS.Credentials({
              accessKeyId: secrets.accessKey,
              secretAccessKey: secrets.secretKey,
            });

            console.log('AWS Credentials from DataSharingService:', this.credentials);

            // Marquer l'utilisateur comme connecté
            this.loggedIn.next(true);
          } else {
            console.error('No secrets found');
            this.loggedIn.next(false);
          }
        }),
        catchError(error => {
          console.error('Error during AWS login with secrets from DataSharingService:', error);
          this.loggedIn.next(false);
          return of(false); // Retourner false en cas d'erreur
        })
      );
    }
  }

  // Vérifier si l'utilisateur est actuellement authentifié
  public isAuthenticated(): Observable<boolean> {
    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      return from(Auth.currentAuthenticatedUser()).pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
    } else {
      // Si l'utilisateur n'est pas authentifié avec Cognito, retourner l'état local
      return this.loggedIn.asObservable();
    }
  }

  public signOut() {
    this.credentials = null; // Supprimer les credentials locaux

    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      from(Auth.signOut()).subscribe(
        () => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log('Error during Cognito logout:', error)
      );
    } else {
      this.router.navigate(['/login']);
      this.loggedIn.next(false);
    }
  }

  // Méthode pour changer le mot de passe
  async changePassword(oldPassword: string, newPassword: string) {
    const user = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(user, oldPassword, newPassword);
  }

  // Obtenir les credentials AWS récupérés depuis DataSharingService
  async getCredentials(): Promise<ICredentials | CredentialsOptions> {
    if (localStorage[LOCAL_KEY_LOGIN_TYPE] === LOGIN_TYPE.cognito) {
      const c = await Auth.currentCredentials();
      return Auth.essentialCredentials(c);
    } else {
      // Pas de credentials Cognito, utiliser ceux récupérés via DataSharingService
      return this.credentials; 
    }
  }
}
