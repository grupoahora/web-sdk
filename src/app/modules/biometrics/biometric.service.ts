import {
    Injectable
} from '@angular/core';
import {
    Observable,
} from 'rxjs';

import {
    environment
} from 'environments/environment';

import {
    HttpClient
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BiometricService {
    baseUrl: String = environment.biometricUrl;
    
    constructor(private _http: HttpClient) {}

    sendRequest(method: string, url: string, params: any = {}, options: any = {}) {
        const authToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjY0ZGJmODM2NmNkMzc5YzJhYmI4NTliNiIsInYiOjEsInJvbGUiOiJjbGllbnQiLCJKV1RQaHJhc2UiOiI2NGRiZjgzNDJjYjk4ZGMyY2E2ZTUzNTgiLCJleHBpcmVzQXQiOiIyMDIzLTA5LTI3IDIxOjU3OjQ5IiwiaWF0IjoxNjkzMjU5ODY5fQ.bQSulzU9vVN89Q6gSrB1eG8WUHd8KvMUyWfEwT_dHfc';
        method = method.toLocaleLowerCase();

        let headers = {
            ...options.headers,
            timeout: 20
        };

        if (authToken) {
            headers['Authorization'] = `Bearer ${authToken}`;
        }

        delete options.headers

        switch (method) {
            case 'get':
                return this._http.get(url, {
                    params,
                    ...options,
                    headers,

                });
            case 'post':
                return this._http.post(url, params, {
                    headers,
                    ...options
                });
            case 'put':
                return this._http.put(url, params, {
                    headers,
                    ...options
                });
            case 'delete':
                return this._http.delete(url, {
                    headers,
                    ...options
                });
            default:
                throw "method not provided";
        }
    }

    getConfig(): Observable < any > {
        return this.sendRequest('get', `${this.baseUrl}v2/biometrics/config`, {}, {})
    }
    getProjectConfig(): Observable < any > {
        return this.sendRequest('get', `${this.baseUrl}v2/projects/biometrics`, {}, {})
    }

    getProjectSession(agent): Observable < any > {
        return this.sendRequest('get', `${this.baseUrl}v2/projects/biometrics/session`, {}, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }
    
    demoLiveness(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/demo/liveness`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    demoScan(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/demo/only-scan`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    getSession(agent): Observable < any > {
        return this.sendRequest('get', `${this.baseUrl}v2/biometrics/session`, {}, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    enrollment(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/enrollment-3d`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    photoIDMatch(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/match-3d-2d-idscan`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })

    }

    authenticate(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/match-3d-3d`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    idScan(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/idscan-only`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })

    }

    liveness(agent: string, body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/liveness-3d`, body, {
            headers: {
                'X-User-Agent': agent
            }
        })
    }

    match3d2d(body: any, service): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/${service}`, body, {})
    }

    match2d2d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/match-2d-2d`, body, {})
    }

    liveness2d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/liveness-2d`, body, {})
    }

    estimatedAge2d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/estimate-age-2d`, body, {})
    }

    checkAge2d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/check-age-2d`, body, {})
    }

    estimatedAge3d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/estimate-age-3d`, body, {})
    }

    checkAge3d(body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/biometrics/check-age-3d`, body, {})
    }

    matchDemo(agent: string,body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/leads/match-3d-3d`, body, { headers: {
            'X-User-Agent': agent
        }})
    }

    idscanDemo(agent: string,body: any): Observable < any > {
        return this.sendRequest('post', `${this.baseUrl}v2/leads/idscan`, body, { headers: {
            'X-User-Agent': agent
        }})
    }
}