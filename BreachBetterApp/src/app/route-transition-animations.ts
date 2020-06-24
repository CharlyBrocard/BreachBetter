import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, Two => Three, One => Three, Three => Four, One => Four, Four => One, Four => Three, Two => Four, Four => Two, Five => One, One => Five, Five => Two, Two => Five, Five => Three, Three => Five, Five => Four, Four => Five, Five => Six, Six => Five, Six => One, One => Six, Six => Two, Two => Six, Six => Three, Three => Six, Six => Four, Four => Six', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.2s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.2s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Four => Three, Three => Two, Two => One, Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('0.2s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('0.2s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);

