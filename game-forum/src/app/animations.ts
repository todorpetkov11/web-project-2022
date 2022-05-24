import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
  transition('*<=>*', [
    style({
      position: 'relative',
      height: '100vh',
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh'
      }),

    ], { optional: true }),
    query(':enter', [
      style({
        left: '-2%',
        opacity: 0,
        minHeight: '100vh'
      })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('0.35s ease-in-out', style({ left: '2%', opacity: 0}))], { optional: true }),
      query(':enter', [animate('0.35s ease-in-out', style({ left: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
]);
