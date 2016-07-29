"use strict";
var authentication_component_1 = require('./authentication.component');
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
exports.authRoutes = [
    {
        path: 'auth',
        redirectTo: 'auth/signup',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'logout', component: logout_component_1.LogoutComponent }
        ]
    },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlDQUF3Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXhDLGtCQUFVLEdBQWlCO0lBQ3RDO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixVQUFVLEVBQUUsYUFBYTtRQUN6QixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsa0RBQXVCO1FBQ2xDLFFBQVEsRUFBRTtZQUNSLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUM3QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDN0MsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1NBQzlDO0tBQ0Y7Q0FDRixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgYXV0aFJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJ2F1dGgnLFxuICAgIHJlZGlyZWN0VG86ICdhdXRoL3NpZ251cCcsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhdXRoJyxcbiAgICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7cGF0aDogJ3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50IH1cbiAgICBdXG4gIH0sXG5dXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
