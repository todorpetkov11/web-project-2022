import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
  transition('loginPage<=>registerPage', [
    style({
      position: 'relative',
      height: '100vh',
      marginTop: '-0.9rem'
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),

    ], { optional: true }),
    query(':enter', [
      style({
        right: '-20%',
        opacity: 0,
      })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('0.5s ease-in-out', style({ right: '20%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('0.5s ease-in-out', style({ right: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
  transition('*<=>homePage', [
    style({
      position: 'relative',
      height: '100vh',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        marginTop: 0,
      }),

    ], { optional: true }),
    query(':enter', [
      style({
        right: '-20%',
        opacity: 0
      })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('0.5s ease-in-out', style({ right: '20%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('0.5s ease-in-out', style({ right: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
  transition('registerPage<=>*, loginPage<=>*', [
    style({
      position: 'relative',
      height: '100vh',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        marginTop: 0,
      }),

    ], { optional: true }),
    query(':enter', [
      style({
        right: '-20%',
        opacity: 0
      })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('0.5s ease-in-out', style({ right: '20%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('0.5s ease-in-out', style({ right: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ])
]);
